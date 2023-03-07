
// sign up function 
function signup(){
// e.preventDefault();

var email=document.getElementById('email').value;
var username=document.getElementById('username').value;
var pass=document.getElementById('pass').value;


var user ={
    email:email,
    username:username,
    pass:pass
}

var json =JSON.stringify(user);
localStorage.setItem(username,json )
console.log("user add")

}

function login(){
    var email1=document.getElementsByClassName('email').value;
    var pass1 =document.getElementsByClassName('pass').value;
    
    var email=localStorage.getItem("email");
    var pass=localStorage.getItem("pass");
    console.log(email,pass)


    if(email1===email &&  pass1 ===pass){
        // return "welcome back " + this.Account 
       alert("welcome to campy")  
        window.location.href="home.html"
   
    }

    else {
       
    alert("your email or password is incorrect")
    }



    // var userExists = false;
    // for (var i = 0; i < localStorage.length; i++) {
    //   var key = localStorage.key(i);
    // //   var   = JSON.parse(localStorage.getItem(key));
    //   if (email === email1 && pass === pass1) {
    //     userExists = true;
    //     window.location.href="home.html"
    //     break;
    //   }
    // }
}




















console.log('nam');
function login(){
    var email1=document.getElementsByClassName('email').value;
    var pass1 =document.getElementsByClassName('pass').value;

    var email=localStorage.getItem("email");
    var pass=localStorage.getItem("pass");
    console.log(email,pass)


    if(email1===email &&  pass1 ===pass){
        // return "welcome back " + this.Account 
       alert("welcome to campy")
        window.location.href="home.html"

    }

    else {

    alert("your email or password is incorrect")
    }
}