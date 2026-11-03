// Category dropdown: opens instantly, chevron rotates, picking an option sets the filter and closes
const categorySelect = document.querySelector('.categorySelect');
const categoryButton = categorySelect.querySelector('.categoryButton');
const categoryLabel = categorySelect.querySelector('.categoryLabel');

function setOpen(isOpen) {
    categorySelect.classList.toggle('isOpen', isOpen);
    categoryButton.setAttribute('aria-expanded', isOpen);
}

categoryButton.addEventListener('click', () => {
    setOpen(!categorySelect.classList.contains('isOpen'));
});

categorySelect.querySelectorAll('.categoryOption').forEach((option) => {
    option.addEventListener('click', () => {
        categoryLabel.textContent = option.textContent;
        setOpen(false);
    });
});

document.addEventListener('click', (event) => {
    if (!categorySelect.contains(event.target)) {
        setOpen(false);
    }
});
