const toggleBtn = document.getElementById('toggle-button');
const widgetContainer = document.getElementById('widget-container');
const classes = widgetContainer.classList;
// H2 DOM element array
let widgetH2Elements = [];

// Push h2 DOM nodes into the widgetH2Elements array
for (const [key, value] of Object.entries(widgetContainer.children)) {
	if (value.classList.contains('widget-option-h2')) widgetH2Elements.push(value);
}

// Widget option content array
let widgetContentElements = [];

// Push div content DOM nodes into the widgetContentElements array
for (const [key, value] of Object.entries(widgetContainer.children)) {
	if (value.classList.contains('widget-option-content')) widgetContentElements.push(value);
}

let widgetType = 'accordion';

toggleBtn.addEventListener('click', function() {
	widgetType = widgetType === 'accordion' ? 'tabs' : 'accordion';
	classes.toggle('tabs');
	classes.toggle('accordion');
	// Set the initial h2 as active for tabs
	if (widgetType === 'tabs') {
		widgetH2Elements.forEach(el => {
			if (el.classList.contains('active-h2')) {
				el.classList.toggle('active-h2');
			}
		});
		widgetH2Elements[0].classList.toggle('active-h2');
		widgetContentElements.forEach(el => {
			if (el.classList.contains('accordion-active-content')) {
				el.classList.toggle('accordion-active-content');
			}
		});
		widgetContentElements[0].classList.toggle('tabs-active-content');
	}
	// Reset the initial h2 & content for accordion
	if (widgetType === 'accordion') {
		widgetH2Elements.forEach(el => {
			if (el.classList.contains('active-h2')) {
				el.classList.toggle('active-h2');
			}
		});
		widgetContentElements.forEach(el => {
			if (el.classList.contains('tabs-active-content')) {
				el.classList.toggle('tabs-active-content');
			}
			if (el.classList.contains('accordion-active-content')) {
				el.classList.toggle('accordion-active-content');
			}
			el.style.maxHeight = null;
		});
	}
});

function toggleContent (element) {
	if (widgetType === 'tabs') {
		widgetContentElements.forEach(el => {
			if (el.id === element.id && !el.classList.contains('tabs-active-content')) {
				// el.classList.toggle('active-h2');
				el.classList.toggle('tabs-active-content');
			} else if (el.id !== element.id && el.classList.contains('tabs-active-content')) {
				// el.classList.toggle('active-h2');
				el.classList.toggle('tabs-active-content');
			}
		});
	}

	if (widgetType === 'accordion') {
		widgetContentElements.forEach(el => {
			if (el.id === element.id && !el.classList.contains('accordion-active-content')) {
				el.classList.toggle('accordion-active-content');
				if (el.style.maxHeight) {
					el.style.maxHeight = null;
				} else {
					el.style.maxHeight = (el.scrollHeight + 100) + "px";
				}
			} else if (el.id !== element.id && el.classList.contains('accordion-active-content')) {
				el.classList.toggle('accordion-active-content');
				if (el.style.maxHeight) {
					el.style.maxHeight = null;
				} else {
					el.style.maxHeight = el.scrollHeight + "px";
				}
			} else if (el.id === element.id && el.classList.contains('accordion-active-content')) {
				el.classList.toggle('accordion-active-content');
				if (el.style.maxHeight) {
					el.style.maxHeight = null;
				} else {
					el.style.maxHeight = el.scrollHeight + "px";
				}
			}
		});
	}
}

function toggleH2 (element) {
	widgetH2Elements.forEach(el => {
		if (el.id === element.id && !el.classList.contains('active-h2')) {
			el.classList.toggle('active-h2');
		} else if (el.id !== element.id && el.classList.contains('active-h2')) {
			el.classList.toggle('active-h2');
		}
	});
}

widgetH2Elements.forEach(element => {
	element.addEventListener('click', function() {
		// Toggle h2
		toggleH2(element)
		// Content toggle
		toggleContent(element.nextSibling.nextSibling);
	});
});

