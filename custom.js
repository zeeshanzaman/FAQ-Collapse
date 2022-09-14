const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

// SUMMERY
// Bring in toggle buttons (querySelectorAll)
// loop through nodelist (foeEach)
// Add click event (addEventListener)
// Toggle the active class on the parent node (.
// parrentNode & classList.toggle())