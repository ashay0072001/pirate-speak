var btnResponse = document.querySelector("#buttonClick")
var textReader = document.querySelector("#textBox")
console.log("text",textReader.value)
var outputReader = document.querySelector("#outPut")


var serverURL = "https://api.funtranslations.com/translate/pirate.json"
function getTranslationURL(text) {
    console.log(typeof(text))
    
    return `${serverURL}?text=${text}`
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong try after sometime")
}

function clickEventHandler() {
    
    
    var inputText = textReader.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        
        .then(json => {
            var translatedText = json.contents.translated;
            outputReader.innerText = translatedText;
        })
           
        
        .catch(errorHandler)
};

buttonClick.addEventListener("click", clickEventHandler)