const invoice = document.querySelector('#invoice');
const invoiceData = document.querySelector('#invoiceData');

invoiceData.style.display = 'none';

invoice.addEventListener("change", function () {
    if (invoice.checked) {
        invoiceData.style.display = 'block';
    } else {
        invoiceData.style.display = 'none';
    }
})