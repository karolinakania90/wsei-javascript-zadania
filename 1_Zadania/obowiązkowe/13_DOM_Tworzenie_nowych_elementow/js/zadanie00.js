const deleteButton = document.querySelectorAll('.deleteBtn');

deleteButton.forEach(button => {
    button.addEventListener("click", function () {
        let parent = this.parentElement.parentElement;
        let table = parent.parentElement;

        table.removeChild(parent);
    })
});