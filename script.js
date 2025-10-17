const discountInput = document.getElementById('discount');
const applyButton = document.getElementById('apply-discount');
const priceElement = document.getElementsByClassName('price')[0];
const card = document.getElementsByClassName('card-main')[0];
const quantityInput = document.getElementById('qty');
const totalElement = document.getElementById('total');
const addToCartButton = document.getElementById('add-to-cart-btn');

//Product's original state
const originalPriceText = priceElement.innerText;
const listPrice = parseFloat(originalPriceText.replace('$', ''));

//'let' to store the current price, as it changes
let currentPrice = listPrice;

//Calculate and display the total cost function
function updateTotal() {
    const quantity = parseInt(quantityInput.value);

    // Make sure quantity is a valid number
    if (!isNaN(quantity) && quantity > 0) {
        const total = currentPrice * quantity;
        totalElement.innerText = `Total: $${total.toFixed(2)}`;
    } else {
        totalElement.innerText = ''; // Clear if quantity is invalid
    }
}

//Listeners

//"Apply Discount" button listener
applyButton.addEventListener('click', function() {
    const discount = parseFloat(discountInput.value);

    if (!isNaN(discount) && discount >= 0 && discount <= 100) {
        // Calculate sale price and update the current price
        const salePrice = listPrice - (listPrice * discount / 100);
        currentPrice = salePrice; // Update the current price
        priceElement.innerText = `$${salePrice.toFixed(2)}`;

        // Simplified bg change logic
        card.style.backgroundColor = (discount >= 50) ? "lightyellow" : "white";

    } else {
        alert('Please enter a valid discount percentage (0-100).');
        // Reset to original price
        currentPrice = listPrice; // Reset the current price
        priceElement.innerText = originalPriceText;
        card.style.backgroundColor = "white";
    }

    //Update the total whenever the price changes
    updateTotal();
});

//Quantity input field listener
quantityInput.addEventListener('input', updateTotal);

//"Add to Cart" button feedback listener
addToCartButton.addEventListener('click', function() {
    // Store the original text to revert back to
    const originalText = addToCartButton.innerText;

    // Change text and background color for feedback
    addToCartButton.innerText = 'Added!';
    addToCartButton.style.backgroundColor = 'gray';

    // Set a timer to revert changes after 1.5 seconds
    setTimeout(() => {
        addToCartButton.innerText = originalText;
        addToCartButton.style.backgroundColor = ''; // Reverts to default style
    }, 1500);
});

//Calculate the initial total when the page first loads
updateTotal();