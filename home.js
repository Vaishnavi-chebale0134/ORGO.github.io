




document.addEventListener("DOMContentLoaded", function() {
  var fadeText = document.getElementById("fade-text");

  document.querySelector("#carouselExampleInterval").addEventListener("slide.bs.carousel", function () {
    fadeText.style.opacity = 0;
  });

  document.querySelector("#carouselExampleInterval").addEventListener("slid.bs.carousel", function () {
    fadeText.style.opacity = 1;
  });
});



  $(document).ready(function() {

    $(function(){
      $('#navbar-container').load('');
    });
    
    $(document).ready(function() {
        $(".search_btn").click(function() {
          $(".search_btn").hide();
          $(".search_container").html('<input type="text" class="form-control me-2 searchbox" placeholder="Search" aria-label="Search"><button class="btn btn-outline-danger cross_btn btncros">✖</button>');
        });
      
        $(document).on('click', '.cross_btn', function() {
          $(".search_btn").show();
          $(".search_container").html('');
        });
      });
    
   
});

  
  
  // // text fading javascript
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   // Get the elements
  //   var fadeText = document.getElementById("fade-text");
  //   var courseContent = document.getElementById("course-content");
  
  //   // Set a timeout to fade the text and reveal the course content after 2000 milliseconds (2 seconds)
  //   setTimeout(function() {
  //     fadeText.style.opacity = 0;
  //     courseContent.style.opacity = 1;
  //   }, 2000);
  // });
  


// Add to Cart functionality
// document.querySelectorAll('.product-card').forEach((productCard, index) => {
//   const addToCartBtn = productCard.querySelector('.btn7');

//   addToCartBtn.addEventListener('click', function () {
//       const productName = productCard.querySelector('.fruitsname').textContent;
//       const productPriceText = productCard.querySelector('.price h2').textContent;
//       const productPrice = parseFloat(productPriceText.replace('â‚¹', '').replace(/[^0-9.]/g, ''));
//       const productImage = productCard.querySelector('.img-card img').src;

//       addToCart(productName, productPrice, productImage);
//   });
// });

// var cart = [];

// function addToCart(productName, productPrice, productImage) {
//   cart.push({ name: productName, price: productPrice, image: productImage });
//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   const cartItemsElement = document.getElementById("cart-items");
//   const totalPriceElement = document.getElementById("total-price");

//   cartItemsElement.innerHTML = '';

//   cart.forEach(item => {
//       const cartItem = document.createElement("li");
//       cartItem.innerHTML = `
//           <div>
//               <img src="${item.image}" alt="${item.name}">
//               <div>${item.name} - '₹'${item.price.toFixed(2)}</div>
//           </div>
//       `;
//       cartItemsElement.appendChild(cartItem);
//   });

//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

//   totalPriceElement.innerHTML = `Total Price: '₹'${totalPrice.toFixed(2)}/-`;
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const wishlistButton = document.getElementById('wishlist-button');
//   const modalContainer = document.getElementById('modal-container');

//   wishlistButton.addEventListener('click', function () {
//       modalContainer.classList.toggle('show');
//   });

//   modalContainer.addEventListener('click', function () {
//       modalContainer.classList.remove('show');
//   });
// });




    
   

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







  document.addEventListener('DOMContentLoaded', function () {


  
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
    
    document.addEventListener('DOMContentLoaded', function () {
      const wishlistButton = document.getElementById('wishlist-button');
      const modalContainer = document.getElementById('modal-container');
    
      wishlistButton.addEventListener('click', function () {
          modalContainer.classList.toggle('show');
      });
    
      modalContainer.addEventListener('click', function () {
          modalContainer.classList.remove('show');
      });
    });
    
    console.log(typeof updateCartDisplay); // Log the type of updateCartDisplay
    









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
      
      document.addEventListener('DOMContentLoaded', function () {
        const wishlistButton = document.getElementById('wishlist-button');
        const modalContainer = document.getElementById('modal-container');
      
        wishlistButton.addEventListener('click', function () {
            modalContainer.classList.toggle('show');
        });
      
        modalContainer.addEventListener('click', function () {
            modalContainer.classList.remove('show');
        });
      });

      console.log(typeof updateCartDisplay); // Log the type of updateCartDisplay


      
      document.addEventListener('DOMContentLoaded', function () {
        const wishlistButtons = document.querySelectorAll('.wishlist-button');
        const modalContainers = document.querySelectorAll('.modal-container');
      
        wishlistButtons.forEach(function (wishlistButton, index) {
          wishlistButton.addEventListener('click', function () {
            modalContainers[index].classList.toggle('show');
          });
        });
      });




});




const savelead = async() =>
{
   let response = await fetch('')
   console.log(response);
}



ScrollReveal({

  distance: '280px',
  duration: 2000,
  delay: 200,

})

// ScrollReveal().reveal('.home-content, heading ', { origin: 'top' });

// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'button' });
ScrollReveal().reveal('.homeheading h1', { origin: 'left' });

ScrollReveal().reveal('.homeheading h2', { origin: 'right' });