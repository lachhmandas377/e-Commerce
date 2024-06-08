document.addEventListener('DOMContentLoaded', () => {
    const removeItemLinks = document.querySelectorAll('.remove-item');
    removeItemLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const row = event.target.closest('tr');
            row.remove();
            updateCartTotal();
        });
    });

    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            const row = event.target.closest('tr');
            const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
            const quantity = parseInt(event.target.value);
            const totalCell = row.querySelector('.total');
            totalCell.textContent = `$${(price * quantity).toFixed(2)}`;
            updateCartTotal();
        });
    });

    function updateCartTotal() {
        let cartTotal = 0;
        const totalCells = document.querySelectorAll('.total');
        totalCells.forEach(cell => {
            cartTotal += parseFloat(cell.textContent.replace('$', ''));
        });
        console.log('Cart Total: $' + cartTotal.toFixed(2));
    }
});

function storeProductData(element) {
    const productData = {
        imgSrc: element.querySelector('img').src,
        title: element.querySelector('.des h5').innerText,
        price: element.querySelector('.des h4').innerText,
    };

    localStorage.setItem('productData', JSON.stringify(productData));
    window.location.href = 'sproduct.html';
}