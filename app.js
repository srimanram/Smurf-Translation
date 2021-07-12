var input = document.querySelector(".input")
var processing = document.querySelector(".processing")
var output = document.querySelector(".output")
var apiUrl = "https://api.funtranslations.com/translate/pirate.json"

function getTrans(input){
    return apiUrl + "?" + "text=" + input
}

function errorHandeler(error){
    console.log("error occur",error);
    alert("there is something wrong! try after sometime")
};

function click(){
    var inputText = input.value;//taking input
   fetch(getTrans(inputText))
   .then(response => response.json()) 
   .then(json =>{
       var translatedtext =json.contents.translated;
       output.innerText = translatedtext; //outputing
   })
        .catch(errorhandler)
};
processing.addEventListener("click", click)
