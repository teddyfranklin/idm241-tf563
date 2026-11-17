// Toggle the demo button between its passive and active states
const demoButton = document.querySelector('.demoButton');

demoButton.addEventListener('click', () => {
    const isActive = demoButton.classList.toggle('isActive');
    demoButton.setAttribute('aria-pressed', isActive);
});
