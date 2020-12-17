var buttonTranslate=document.querySelector("#btn");
var textInput=document.querySelector("#txt-input");
var outputArea=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/groot.json"


// console.log(textInput)

function getUrl(text){
    return url+"?text="+text
}

function errorHandler(error){
    alert("ERROR")
}

function clickHandler(){
    fetch(getUrl(textInput.value))
    .then(response=>response.json())
    .then(json=>outputArea.innerText=json.contents.translated)
    .catch(errorHandler)
}

buttonTranslate.addEventListener("click", clickHandler)

