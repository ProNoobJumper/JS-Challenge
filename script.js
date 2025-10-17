document.getElementById('apply-discount').addEventListener('click', function() {
    const discountInput = document.getElementById('discount');
    const discount = parseFloat(discountInput.value);
    const listPrice = 150.00;
    const priceElement = document.getElementsByClassName('price')[0];
    if (!isNaN(discount) && discount >= 0 && discount <= 100) {
        const salePrice = listPrice - (listPrice * discount / 100);
        priceElement.innerText = salePrice;
    } else {
        alert('Please enter a valid discount.');
    }
});