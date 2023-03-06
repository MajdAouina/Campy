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


