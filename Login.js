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