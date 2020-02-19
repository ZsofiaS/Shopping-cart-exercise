let addToCart = document.getElementsByClassName("cart");
let viewItem = document.getElementsByClassName("view");
let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let modalCard = document.querySelector(".modal__card2");
let cartItems = document.querySelector("#cartItems");
let shoppingCart = document.querySelector(".shopping-cart");
let counter = 0;
let cart = []; 
let total = 0;
modal.style.display = "none";
modal2.style.display = "none";

for (let i =0; i<addToCart.length; i++) {
  addToCart[i].addEventListener("click", function (e) {
    e.stopPropagation();
    counter ++;
    cartItems.innerText = counter;
    let product = this.parentElement.parentElement.children[1].innerText;
    let price = this.parentElement.parentElement.children[3].innerText;
    price = Number(price.slice(1, price.length));
    cart.push(product);
    total = total + price;
  })
}

for (let i = 0; i < viewItem.length; i++) {
  viewItem[i].addEventListener("click", function (e) {
    let picURL = e.target.parentNode.parentNode.children[0].src;
    modal.style.display = "block";
    modal.children[0].children[0].src = picURL;
  })
}

modal.addEventListener("click", function(e) {
  e.stopPropagation();
  this.style.display = "none";
})
modal2.addEventListener("click", function(e) {
  e.stopPropagation();
  this.style.display = "none";
  while (this.children[0].hasChildNodes()) {
    this.children[0].removeChild(this.children[0].firstChild);
  }
})

shoppingCart.addEventListener("click", function(e) {
  if (modal2.style.display === "none" && modal.style.display === "none") {

  e.stopPropagation();
  modal2.style.display = "block";
  
  let title = document.createElement("h1");
  let titleText = document.createTextNode("Your cart:");
  title.appendChild(titleText);
  modal2.children[0].appendChild(title);

  for (let i = 0; i < cart.length; i ++) {
    let product = document.createElement("p");
    let productText = document.createTextNode(cart[i]);
    product.appendChild(productText);
    modal2.children[0].appendChild(product);
  }
  let price = document.createElement("h2");
  let priceText = document.createTextNode("Total price: £" + total);
  price.appendChild(priceText);
  modal2.children[0].appendChild(price);
  let button = document.createElement("a");
  let buttonText = document.createTextNode("Checkout");
  button.appendChild(buttonText);
  button.style.width = "10rem";
  button.style.margin = "2rem auto";
  modal2.children[0].appendChild(button);
  }
})