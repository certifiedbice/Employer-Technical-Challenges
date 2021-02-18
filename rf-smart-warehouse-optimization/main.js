/*
* WAREHOUSE OPTIMIZATION
*
* Please do not post your solution to this problem online (Git, etc.) Please keep the solution
* in Dropbox folder we shared with you.
*
* At ACME warehouse the warehouse manager has observed orders taking a long time to pick and
*  believes that moving more popular items to easier to access locations may help.
*
* - Workers pick an order by placing items on a pallet at the dock door.
* - Products are stored (inefficiently) in a single aisle with multiple shelves.
* - As the shelf number increases, it is located further down the aisle and
*   further away from the dock door.
* - On average it takes 5*X seconds for a warehouse worker to retrieve an item
*   from shelf X and place it on the pallet.
* - A warehouse worker can only carry a single item at a time.
* - A shelf can only hold one type of item.
*
* Which items should be on which shelves to optimize picking speed based on
*  yesterday's orders?
* 
* Example table contents:
*
*   Shelf 1:      Item 12
*   Shelf 2:      Item 11
*   Shelf 3:      Item 10
*   Shelf 4:      Item 09
*   Shelf 5:      Item 08
*   Shelf 6:      Item 07
*   Shelf 7:      Item 06
*   Shelf 8:      Item 05
*   Shelf 9:      Item 04
*   Shelf 10:     Item 03
*   Shelf 11:     Item 02
*   Shelf 12:     Item 01
*
* Display the shelf and item pairings by calling the following function:
*   displayShelfItemPair(shelfName, itemName);
* 
*/

function main() {

    const orderRepo = new OrderRepository();
    
    // Your code here
	const yesterdaysOrders = orderRepo.getYesterdaysOrders();
		
	// Object for tracking largest quanitiy.
	let yesterdaysOrdersLargestQuantities = {};
	
	yesterdaysOrders.forEach( number => {
		number.orderLines.forEach( item => {
			if (!(item.itemName in yesterdaysOrdersLargestQuantities)) {
				yesterdaysOrdersLargestQuantities[item.itemName] = item.quantity;
			}
			else if (yesterdaysOrdersLargestQuantities[item.itemName] < item.quantity) {
				yesterdaysOrdersLargestQuantities[item.itemName] = item.quantity;
			}
		});
	});
    
	let arr = new Array;
	
	Object.keys(yesterdaysOrdersLargestQuantities).forEach( item => {
		arr.push({ itemName: item, quantity: yesterdaysOrdersLargestQuantities[item] });
	});
	
	function partition(arr, start = 0, end = arr.length - 1) {
		// Let's choose the pivot to be the arr[start] element
		let pivot = arr[start];
		let swapIdx = start;

		for ( let i = start + 1; i <= end; i++ ) {
			if (arr[i].quantity > pivot.quantity) {
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
	
	let sortedList = quickSort(arr);
	
	sortedList.forEach( ( item, idx )=> {
		displayShelfItemPair( idx, item.itemName );
	});
		
	console.log( quickSort(arr) );
}

console.log(main());