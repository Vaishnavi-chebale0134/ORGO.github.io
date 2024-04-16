

//   document.addEventListener('DOMContentLoaded', function () {


  
//     var cart = [];
      
//     function addToCart(productName, productPrice, productImage) {
//       cart.push({ name: productName, price: productPrice, image: productImage });
//       updateCartDisplay();
//     }
    
//     function updateCartDisplay() {
//       const cartItemsElement = document.getElementById("cart-items");
//       const totalPriceElement = document.getElementById("total-price");
    
//       cartItemsElement.innerHTML = '';
    
//       cart.forEach(item => {
//           const cartItem = document.createElement("li");
//           cartItem.innerHTML = `
//               <div>
//                   <img src="${item.image}" alt="${item.name}">
//                   <div>${item.name} - '₹'${item.price.toFixed(2)}</div>
//               </div>
//           `;
//           cartItemsElement.appendChild(cartItem);
//       });
    
//       const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    
//       totalPriceElement.innerHTML = `Total Price: '₹'${totalPrice.toFixed(2)}/-`;
//     }
    
//     document.addEventListener('DOMContentLoaded', function () {
//       const wishlistButton = document.getElementById('wishlist-button');
//       const modalContainer = document.getElementById('modal-container');
    
//       wishlistButton.addEventListener('click', function () {
//           modalContainer.classList.toggle('show');
//       });
    
//       modalContainer.addEventListener('click', function () {
//           modalContainer.classList.remove('show');
//       });
//     });
    
//     console.log(typeof updateCartDisplay); // Log the type of updateCartDisplay
    









//     document.querySelectorAll('.product-card').forEach((productCard, index) => {
//         const addToCartBtn = productCard.querySelector('.btn7');
      
//         addToCartBtn.addEventListener('click', function () {
//             const productName = productCard.querySelector('.fruitsname').textContent;
//             const productPriceText = productCard.querySelector('.price h2').textContent;
//             const productPrice = parseFloat(productPriceText.replace('â‚¹', '').replace(/[^0-9.]/g, ''));
//             const productImage = productCard.querySelector('.img-card img').src;
      
//             addToCart(productName, productPrice, productImage);
//         });
//       });

      
      
//       var cart = [];
      
//       function addToCart(productName, productPrice, productImage) {
//         cart.push({ name: productName, price: productPrice, image: productImage });
//         updateCartDisplay();
//       }
      
//       function updateCartDisplay() {
//         const cartItemsElement = document.getElementById("cart-items");
//         const totalPriceElement = document.getElementById("total-price");
      
//         cartItemsElement.innerHTML = '';
      
//         cart.forEach(item => {
//             const cartItem = document.createElement("li");
//             cartItem.innerHTML = `
//                 <div>
//                     <img src="${item.image}" alt="${item.name}">
//                     <div>${item.name} - '₹'${item.price.toFixed(2)}</div>
//                 </div>
//             `;
//             cartItemsElement.appendChild(cartItem);
//         });
      
//         const totalPrice = cart.reduce((total, item) => total + item.price, 0);
      
//         totalPriceElement.innerHTML = `Total Price: '₹'${totalPrice.toFixed(2)}/-`;
//       }
      
//       document.addEventListener('DOMContentLoaded', function () {
//         const wishlistButton = document.getElementById('wishlist-button');
//         const modalContainer = document.getElementById('modal-container');
      
//         wishlistButton.addEventListener('click', function () {
//             modalContainer.classList.toggle('show');
//         });
      
//         modalContainer.addEventListener('click', function () {
//             modalContainer.classList.remove('show');
//         });
//       });

//       console.log(typeof updateCartDisplay); // Log the type of updateCartDisplay


      
//       document.addEventListener('DOMContentLoaded', function () {
//         const wishlistButtons = document.querySelectorAll('.wishlist-button');
//         const modalContainers = document.querySelectorAll('.modal-container');
      
//         wishlistButtons.forEach(function (wishlistButton, index) {
//           wishlistButton.addEventListener('click', function () {
//             modalContainers[index].classList.toggle('show');
//           });
//         });
//       });




// });




// // wishlist.js




  

document.addEventListener('DOMContentLoaded', function () {
  

    document.querySelectorAll('.product-card').forEach((productCard, index) => {
        const addToCartBtn = productCard.querySelector('.btn7');
  
        addToCartBtn.addEventListener('click', function () {
            const productName = productCard.querySelector('.fruitsname').textContent;
            const productPriceText = productCard.querySelector('.price h2').textContent;
            const productPrice = parseFloat(productPriceText.replace('â‚¹', '').replace(/[^0-9.]/g, ''));
            const productImage = productCard.querySelector('.img-card img').src;
  
            addToCart(productName, productPrice, productImage);
        });
    });
  
    var cart = [];
  
    function addToCart(productName, productPrice, productImage) {
        cart.push({ name: productName, price: productPrice, image: productImage });
        updateCartDisplay();
    }
  
    function updateCartDisplay() {
        const cartItemsElement = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
  
        cartItemsElement.innerHTML = '';
  
        cart.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                <div>
                    <img src="${item.image}" alt="${item.name}">
                    <div>${item.name} - '₹'${item.price.toFixed(2)}</div>
                </div>
            `;
            cartItemsElement.appendChild(cartItem);
        });
  
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  
        totalPriceElement.innerHTML = `Total Price: '₹'${totalPrice.toFixed(2)}/-`;
    }
  
    const wishlistButton = document.getElementById('wishlist-button');
    const modalContainer = document.getElementById('modal-container');
  
    wishlistButton.addEventListener('click', function () {
        modalContainer.classList.toggle('show');
    });
  
    modalContainer.addEventListener('click', function () {
        modalContainer.classList.remove('show');
    });
  
   
  
  
  
 
  
  
  
  });
  