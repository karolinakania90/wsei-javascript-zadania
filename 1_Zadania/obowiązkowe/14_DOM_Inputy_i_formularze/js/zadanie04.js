const cardNumber = document.querySelector("#name");
const type = document.querySelector("#type");

cardNumber.addEventListener("input", function () {
    if (this.value.startsWith("4")) {
        type.innerHTML = "Visa";

        if (this.value.length >= 13 && this.value.length <= 16) {
            this.style.border = "2px solid green";
        } else {
            this.style.border = "none";
        }

    } else if (this.value.startsWith("5")) {
        type.innerHTML = "Mastercard";

        if (this.value.length === 16) {
            this.style.border = "2px solid green";
        } else {
            this.style.border = "none";
        }

    } else if (this.value.startsWith("34") || this.value.startsWith("37")) {
        type.innerHTML = "American Express";

        if (this.value.length === 15) {
            this.style.border = "2px solid green";
        } else {
            this.style.border = "none";
        }
        
    } else {
        type.innerHTML = "";
    }
});