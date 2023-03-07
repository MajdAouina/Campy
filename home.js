var camps=[ 
    {image:"https://plurielle.tn/pro/wp-content/uploads/2022/06/photo-47652.jpeg",nameplace:"beni mtir",government:"jandouba",location:"36.74458370437628, 8.733744559669065"}, 
    {image:"https://tunisie.co/uploads/images/content/oued-zitoun-150218-2.jpg",nameplace:"oued zitoun",government:"jandouba",location:"37.04619159572007, 9.382753247333035"},
    {image:"https://cdn7.allevents.in/banners/907dc280-0086-11ea-b0da-d9424fdcdd2e-rimg-w520-h315-gmir.jpg?v=1573038854 "  , nameplace:"ain damous", government:"benzart" , location:"37.328193615845635, 9.790318496868748" },
    {image:"https://www.marhba.com/images/cap/001.jpg "  , nameplace:"Ras angela", government:"benzart" , location:"37.34054197363287, 9.745708742978692" },
    {image:"https://cdn-az.allevents.in/events10/banners/6b21ef9391a7281c87df2c84e9f1f6606141fda14a25c48deaab7f1259942c31-rimg-w512-h600-gmir.jpg?v=1598012472 " , nameplace:"Cap hmem", government:"benzart" , location:"37.33797107099124, 9.690249931874197" },
    {image:" https://tunisie.co/uploads/images/content/rtiba-tunisie-%C3%A9t%C3%A9-270718-7.jpg" , nameplace:"rtiba ", government:"nabeul" , location:"36.88262400639143, 10.74064261198368" },
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/03/7e/fe/les-grottes-du-haouaria.jpg?w=500&h=-1&s=1 " , nameplace:"haouaria", government:"nabeul" , location:"37.063891368543445, 10.996675603066162" },
    // {imgurl:" " , imgurl2:"" , nameplace:"", government:"" , location:"" },
    // {imgurl:" " , imgurl2:"" , nameplace:"", government:"" , location:"" },
    // {imgurl:" " , imgurl2:"" , nameplace:"", government:"" , location:"" },

];
 
//  just i want to adding card but we didn't solve this function 





// const camp = docement.querySelector(".campholder");
// function creatCard([img,nameplace,government,location ]){
// var code = 
// " <div class="card">
//   <img src=""  >
//     <div class="cardText">
//         <p class="categoryText">${government}</p>
//         <h2 class="brandText">${nameplace}</h2>
//         <p class="categoryText">${location} </p>
//  </div>
//  </div>";


// }





// the same think with creat card , i didn't creat in html cuz repeat in html and more line





// for (var i=0 ; i<arr.length;i++){
// // creat card 
// var card =docement.createElement("div");


// var imgContainer = docement.createElement("div");
// imgContainer.classList.add("image-container");

// var image=docement.createElement("img");
// image.setAttribute("src",i.image);
// imgContainer.appendChild(image);
// card.appendChild(imgContainer);

// var container=docement.createElement("div");
// container.classList.add("container")

// var nameplace=docement.createElement("h2")
// nameplace.classList.add("camp-name");
// nameplace.innerText=i.productName.toUpperCase();
// container.appendChild(nameplace);

// var government=docement.createElement("h4")
// government.classList.add("camp-government");
// government.innerText=i.productName.toUpperCase();
// container.appendChild(government);

// var location=docement.createElement("h6")
// location.classList.add("camp-loc");
// location.innerText=i.productName.toUpperCase();
// container.appendChild(location);

// card.appendChild(container);
// document.getElementById("camp").appendChild(card);
// }



// in search bar filter the array by government
$('#search').click(
    function (){
        for(var i=0;i<camps.length;i++){
        if($("#search").val()===camps[i].name){
             window.location.assign(camps[i].government)
        }
        else{
            swal("Sorry we don't have this government")
        }
     }
    })

