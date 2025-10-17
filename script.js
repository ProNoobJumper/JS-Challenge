const discountInput = document.getElementById('discount');
const applyButton = document.getElementById('apply-discount');
const priceElement = document.getElementsByClassName('price')[0];
const card = document.getElementsByClassName('card-main')[0];
const originalPriceText = priceElement.innerText;
const listPrice = parseFloat(originalPriceText.replace('$', ''));

//"Apply Discount" button to be clicked
applyButton.addEventListener('click', function() {
    const discount = parseFloat(discountInput.value);
    // Validate the input
    if (!isNaN(discount) && discount >= 0 && discount <= 100) {
        // Calculates price
        const salePrice = listPrice - (listPrice * discount / 100);
        priceElement.innerText = `$${salePrice.toFixed(2)}`;
        //Change background based on discount amount
        if (discount >= 50) {
            // If discount greater or equal to 50%, change bg to lightgreen.
            card.style.backgroundColor = "lightyellow";
        } else {
            // Else, bg is white
            card.style.backgroundColor = "white";
        }

    } else {
        alert('Please enter a valid discount percentage (0-100).');
        // Reset price and bg if input is invalid
        priceElement.innerText = originalPriceText;
        card.style.backgroundColor = "white";
    }
});