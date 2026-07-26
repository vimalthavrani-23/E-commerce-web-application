let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Add to Cart
function addToCart(name, price){

    let product = {
        name:name,
        price:price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    alert(name + " added to cart");
}


// Display Cart
function displayCart(){

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");
    let count = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach((item,index)=>{

        let li = document.createElement("li");

        li.innerHTML = 
        `${item.name} - ₹${item.price} 
        <button onclick="removeCart(${index})">Remove</button>`;

        cartItems.appendChild(li);

        sum += item.price;
    });


    total.innerHTML = sum;

    count.innerHTML = cart.length;
}


// Remove Product
function removeCart(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}


// Checkout
function checkout(){

    if(cart.length === 0){

        alert("Your cart is empty");

    }
    else{

        alert("Order placed successfully!");

        cart=[];

        localStorage.removeItem("cart");

        displayCart();
    }
}


// Search Product
document.getElementById("search").addEventListener("keyup",function(){

    let value = this.value.toLowerCase();

    let products = document.querySelectorAll(".product");


    products.forEach(product=>{

        let name = product.querySelector("h3").innerText.toLowerCase();


        if(name.includes(value)){
            product.style.display="block";
        }
        else{
            product.style.display="none";
        }

    });

});


// Load Cart when page opens
displayCart();
