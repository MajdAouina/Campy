<<<<<<< HEAD
//objects of array that takes users and passwords 
//function that checks the input of the of the password with the arrays

function checkData(){

}
function checkData(){
    var enterEmail = document.getElementById('email').value
var enterPwd  = document.getElementById('pwd').value

    var enterEmail=localStorage.getItem('userEmail')
    var enterEmail=localStorage.getItem('userPwd')
    if(enterEmail == getEmail){
        if(enterPwd == getPwd){
            alert("login successful")
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("Invalid datails")
    }

}
=======
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


>>>>>>> ea14b16143e7e5e122c0f102e2b7180d3d4f5128
