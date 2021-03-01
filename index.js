
var searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", getValue);


// Enter Pressed
var inputSearch=document.getElementById("searchZone");
inputSearch.addEventListener("keyup",function(e){
    var value =inputSearch.value;
    if(e.which===13){
        apiRequeste(value);

    }
});


function getValue() {

    var value = document.getElementById("searchZone").value;
    apiRequeste(value);
    
   
}

function setValue(value) {

    var gifContainer = document.querySelector(".gifs-container");
    gifContainer.innerHTML +=  "<img src= \""+ value +"\" class =\"imgs img-fluid\">";
    
}

function apiRequeste(value){
    var api ="https://api.giphy.com/v1/gifs/search?api_key=4BN9R3iY1sCGQhJOfG2BYolZweR1K9ff&q="+value+"&limit=25"

    
    var ajaxCall= new XMLHttpRequest();
    ajaxCall.open("GET",api);
    ajaxCall.send();
    ajaxCall.addEventListener("load",function(e){
        
        var data =e.explicitOriginalTarget.response;
        // parsedata
 
        var response =JSON.parse(data);
        var array =response.data
        array.forEach(element => {
            
         var imgSrc=element.images.fixed_height.url
         setValue(imgSrc);
        });
 
       
      //  setValue(imagUrl);
 
    });
}

