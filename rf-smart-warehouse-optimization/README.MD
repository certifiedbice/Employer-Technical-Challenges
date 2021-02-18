# WAREHOUSE OPTIMIZATION

#### *Please do not post your solution to this problem online publically (Git, etc.) Please just keep the solution here on Dropbox.*

## Problem
-----
At ACME warehouse the warehouse manager has observed orders taking a long time to pick and
 believes that moving more popular items to easier to access locations may help.

- Workers pick an order by placing items on a pallet at the dock door.
- Products are stored (inefficiently) in a single aisle with 12 shelves.
- As the shelf number increases, it is located further down the aisle and
  further away from the dock door.
- On average it takes 5*X seconds for a warehouse worker to retrieve an item
  from shelf X and place it on the pallet.
- A warehouse worker can only carry a single item at a time.
- A shelf can only hold one type of item.

*Which items should be on which shelves to optimize picking speed based on
 yesterday's orders?*

## Input
-----
The order repository contains information about yesterdays orders.
Please complete your solution in the **main.js** file provided.

```javascript
function main() {

    var orderRepo = new OrderRepository();
    
    // Your code here

	// Objective:
	
	// Sort items shelving based on the total amount ordered in the previous day.

	// This can be accomplished through a Bubble sort:

	// The space complexity for the algorithm is O(1) and the average time complexity is O(n²).

	function bubbleSort(arr) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j + 1] < arr[j]) {
					// ES6 way of swapping array elements
					[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				}
			}
		}
		return arr;
	}

	// Slightly optimised solution for a nearly sorted array, by reducing the number of passes needed
	function bubbleSort(arr) {
		let noSwaps;
		for (let i = arr.length; i > 0; i--) {
			noSwaps = true;
			for (let j = 0; j < i - 1; j++) {
				if (arr[j + 1] < arr[j]) {
					// Swap
					[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
					// Make 'noSwaps' false
					noSwaps = false;
				}
			}
			// End the iterations if there were no swaps made in one full pass
			if (noSwaps) {
				break;
			}
		}
		return arr;
	}

	// Or this can be accomplished through an Insertion sort:

	// This has a time complexity of O(n²) is Insertion Sort, it also has a space complexity of O(1).

	function insertionSort(arr) {
		for (let i = 1; i < arr.length; i++) {
		
			// Start comparing current element with every element before it
			for (let j = i - 1; j > -1; j--) {
			
				// Swap elements as required
				if (arr[j + 1] < arr[j]) {
					[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				}
			}
		}
		return arr;
	}

	// Or this can be accomplished through a Selection sort:

	// The space complexity is the same as the previous two techniques i.e, O(1).

	function selectionSort(arr) {
		let min;
		for (let i = 0; i < arr.length; i++) {
			// Assume a minimum value        
			min = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
			}
		
			// Swap if new minimun value found
			if (min !== i) {
			[arr[i], arr[min]] = [arr[min], arr[i]];
			}
		}
		return arr;
	}

	// There are better performing recursive solutions;

	// space complexity for this algorithm is O(n).

	// Merging two sorted subarrays properly
	function merge(arr1, arr2) {
		// Make a new array, and 2 pointers to keep track of elements of arr1 and arr2     
		let res = [],
			i = 0,
			j = 0;
		
		// Loop until either arr1 or arr2 becomes empty
		while (i < arr1.length && j < arr2.length) {
			// If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i         
			if (arr1[i] < arr2[j]) {
				res.push(arr1[i]);
				i++;
			} else {
				res.push(arr2[j]);
				j++;
			}
		}

		// Add the rest of the remining subarray, to our new array
		while (i < arr1.length) {
			res.push(arr1[i]);
			i++;
		}
		while (j < arr2.length) {
			res.push(arr2[j]);
			j++;
		}
		return res;
		}

		// Recursive merge sort
		function mergeSort(arr) {
			// Base case
			if (arr.length <= 1) return arr;
		
			// Splitting into two halves
			let mid = Math.floor(arr.length / 2);
			let left = mergeSort(arr.slice(0, mid));
			let right = mergeSort(arr.slice(mid));
		
			// merging the two sorted halves
			return merge(left, right);
		}

	// Or a quick sort.

	// space complexity is O(log n).

	function partition(arr, start = 0, end = arr.length - 1) {
		// Let's choose the pivot to be the arr[start] element
		let pivot = arr[start];
		let swapIdx = start;

		for (let i = start + 1; i <= end; i++) {
			if (arr[i] < pivot) {
				swapIdx++;
				// Swap current element with the element at the new pivot index
				[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
			}
		}
	
		// Swap the pivot element with the element at the pivotIndex index
		[arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
	
		// Return the index of the pivot element after swapping
		return swapIdx;
	}

	function quickSort(arr, left = 0, right = arr.length - 1) {
		// Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
		if (left < right) {
			let pivotIndex = partition(arr, left, right);
		
			// For left subarray, which is everything to the left of the pivot element
			quickSort(arr, left, pivotIndex - 1);
		
			// For the right sub array, which is everything to the right of the pivot element
			quickSort(arr, pivotIndex + 1, right);
		}
		// Return the array, when it's of length 1 i.e, left === right
		return arr;
	}
}
```

## Output
-----

Display the shelf and item pairings by calling the following function:

```javascript
displayShelfItemPair(shelfName, itemName);
```

Execute your program my opening **main.html** in your web browser to see the results.

Example table contents:

| Shelves  | Items   |
| -------- | ------- |
| Shelf 1  | Item 12 |
| Shelf 2  | Item 11 |
| Shelf 3  | Item 10 |
| Shelf 4  | Item 09 |
| Shelf 5  | Item 08 |
| Shelf 6  | Item 07 |
| Shelf 7  | Item 06 |
| Shelf 8  | Item 05 |
| Shelf 9  | Item 04 |
| Shelf 10 | Item 03 |
| Shelf 11 | Item 02 |
| Shelf 12 | Item 01 |

## Tips
-----
- Don’t rush through the exercise.
- Show off your development skills!
- Please return the completed exercise in a timely fashion.

