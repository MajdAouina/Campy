
function comment(){
var comment=document.getElementsByClassName("inp")

var comments={
    comment:comment
}
var json =JSON.stringify(comments);
localStorage.setItem(comment,json )

}