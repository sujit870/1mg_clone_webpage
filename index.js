
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }

    let img = document.getElementById('sujeet')
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

  //signUp

  let myForm = document.getElementById('form-signup');
  let signUpCont = document.getElementById('suc')
  let signUpData =JSON.parse(localStorage.getItem('signup')) || [];
  myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let obj = {
      email : myForm.email.value,
      pass: myForm.pass.value,
      passR: myForm.passR.value
    }
      signUpData.push(obj);
      localStorage.setItem('signup', JSON.stringify(signUpData));
      signupbtn.addEventListener('click', (e)=>{
      e.preventDefault();
      // alert('Sign Up Successful!, Login now')
      let s = document.createElement('div');
      s.innerText = 'Sign Up Successful!';
      s.style.color = 'mat';
      s.style.fontSize = 'xx-large';
      let loginafterSignup = document.createElement('a');
      loginafterSignup.innerText = 'click here to login'
      loginafterSignup.setAttribute('href', 'index.html')
      loginafterSignup.style.padding = '0px 5px 0px 550px'
      signUpCont.append(s,loginafterSignup);
      loginafterSignup.style.fontSize = 'large'
      // signUpCont.style.display = 'flex'
      // signupbtn.innerText = signUpCont
  
  })
  })
  let signupbtn = document.getElementById('signupbtn');
  let loginbutton = document.getElementById('loginbutton');
  
  // console.log(signUpData[0].email, signUpData[0].pass)
  
    //logIn
    let loginEmail = document.getElementById('logEmail');
    let loginPass = document.getElementById('logPass');
  
  let logincont =  document.getElementById('contlogin')
  
  let change = document.getElementById('change')
  let user = document.getElementById('user')
  
    let logIn = document.getElementById('form');
    logIn.addEventListener('submit', (e)=>{
      e.preventDefault();
      signUpData.forEach(element => {
          if(loginEmail.value!==element.email || loginPass.value !==element.pass){
              // logincont.innerText = 'Wrong Credential!', 'tryAgain';
              // logincont.style.color = '#ff6f61';
              // logincont.style.fontSize = 'x-large'
          }
          else{
              logincont.innerText = 'Login Successful!';
              logincont.style.color = '#ff6f61';
              logincont.style.fontSize = 'xx-large';
              user.innerText = loginEmail.value;
              // let gotoCart = document.createElement('a');
              // gotoCart.setAttribute('href', 'cart.html');
              // logincont.append(gotoCart)
  
  
          }
      });
    })
  