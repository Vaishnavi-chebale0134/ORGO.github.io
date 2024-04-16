// product-page.js

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.product-card').forEach((productCard, index) => {
      const addToCartBtn = productCard.querySelector('.btn7');
  
      addToCartBtn.addEventListener('click', function () {
        const productName = productCard.querySelector('.fruitsname').textContent;
        const productPriceText = productCard.querySelector('.price h2').textContent;
        const productPrice = parseFloat(productPriceText.replace('₹', '').replace(/[^0-9.]/g, ''));
        const productImage = productCard.querySelector('.img-card img').src;
  
        addToCart(productName, productPrice, productImage);
      });
    });
  });
  