// defer-example.js
// Defines a function that references an HTML element, then calls it.
function updateP1() {
    const el = document.getElementById('p1');
    if (!el) {
        console.warn('Element #p1 not found');
        return;
    }
    el.textContent = 'Updated by defer-example.js';
}

// Because this script is loaded with `defer`, the DOM will be parsed
// before this runs, so the element with id 'p1' will be available.
updateP1();

// Export the function to window in case other scripts want to call it.
window.updateP1 = updateP1;
