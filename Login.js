console.log('nam')
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