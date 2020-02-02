const allLists = document.querySelectorAll('.list');

for (let counter = 0; counter < allLists.length; counter++) {
    allLists[counter].addEventListener("mouseover", function () {
        for (let internalCounter = 0; internalCounter < this.children.length; internalCounter++) {
            this.children[internalCounter].style.backgroundColor = "green";
        }
        this.firstElementChild.style.backgroundColor = "red";
        this.lastElementChild.style.backgroundColor = "blue";
    });
}