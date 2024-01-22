var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.maxHeight){
   content.style.maxHeight = null;
}
else {
    content.style.maxHeight = content.scrollHeight + "px";
    } 
});
}

let img = document.getElementById('alif')
let arr = [
"https://onemg.gumlet.io/ca163b43-ce33-4440-b5c8-cb4d7ff58e43_1664853845.jpg?w=877&h=200&format=auto",
"https://onemg.gumlet.io/f671116e-a826-47c5-bdf6-8fbae8ea379f_1670219125.jpg?w=960&h=200&format=auto",
"https://onemg.gumlet.io/531b5819-7aec-4ee4-a2f9-d15d3a066d1c_1666072358.jpg?w=960&h=200&format=auto",
"https://onemg.gumlet.io/c0aa6172-44cf-470a-a75e-e0c6fc4cf362_1670405053.png?w=960&h=200&format=auto",
"https://onemg.gumlet.io/f671116e-a826-47c5-bdf6-8fbae8ea379f_1670219125.jpg?w=960&h=200&format=auto",
"https://onemg.gumlet.io/d940d202-87f1-484c-a00b-bb5f4d95706c_1669962593.jpg?w=960&h=200&format=auto",
"https://onemg.gumlet.io/346f28fa-1c58-480f-af5b-9568ba2d0dae_1670317321.jpg?w=960&h=200&format=auto",
"https://onemg.gumlet.io/f4588afb-3c1e-4924-ab9f-a1764044a714_1670244640.jpg?w=960&h=200&format=auto"
];
let j=0;
setInterval(function(){
img.src = arr[j];
    j++;
if(j==arr.length){
    j=0
}
},3000) 
//container

let cont = document.getElementById('container');
let data = fetch('https://63984a9afe03352a94cb6c9e.mockapi.io/drug').then((res) => {
return res.json()
}).then((data4use) => {
createDOM(data4use);
}).catch((error) => {
console.log('error')
})

//createDOM function;
function createDOM(data){
cont.innerHTML = null;
data.forEach(element => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.style.height = '400px'
    card.style.padding = '10px'

    let img = document.createElement('img');
    img.setAttribute('src', element.image);
    let title = document.createElement('h4');
    title.innerText = element.title;
    let description = document.createElement('p');
    description.innerText = element.description;
    description.style.fontSize = 'small';

    let rand = document.createElement('p');
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
    rand.innerText =getRandomInt(90000) + ' Ratings & ' + getRandomInt(400) + '  Reviews';
    rand.style.fontSize = 'small';
    rand.style.color = 'green'

    let rating = document.createElement('p');
    rating.innerText = '★★★☆☆';
    rating.style.color = 'orange'
    let price = document.createElement('p');
    price.innerText = '₹ '+element.price;
    // price.style.j

    //add to cart button
    let button = document.createElement('button');
    button.setAttribute('src', 'cart.html');
    button.setAttribute('class', 'buton-cart')
    button.innerText = 'Add to cart';
    button.addEventListener('click', (e)=>{
      e.preventDefault();
      let cartData = JSON.parse(localStorage.getItem('cart'))||[];
      let isAlreadyInCart = false;
      for(let i=0; i<cartData.length; i++){
        if(element.id===cartData[i].id){
          isAlreadyInCart = true;
          break;
        }
      }

      if(isAlreadyInCart==true){
        alert('Product Already in Cart')
      }
      else{
        cartData.push({...element, quantity:1});
        localStorage.setItem('cart', JSON.stringify(cartData))
        alert('Product Added To Cart')
      }
      
    })
    button.style.fontSize = 'small';
    //buy now button
    let button1 = document.createElement('button');
    button1.setAttribute('class', 'buton-cart')
    button1.innerText = 'Buy Now';
    // button1.style.fontSize = 'large'
    // button1.style.padding = '5px'
    // button.style.fontSize = 
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'add-cart')
    // div1.style.paddingLeft = '10px';
    // div1.style.paddingRight = '10px';
    div1.append(price, button);
    
    // div2.style.padding
card.append(img, title, description, rating, rand, div1)
cont.append(card)        
});

}

/////////////////////////////////////////////////