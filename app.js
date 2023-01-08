var btnTranslate = document.querySelector("#btn-translate");
var translateInput = document.querySelector("#translate-input")
var translateOutput = document.querySelector("#translate-output");
var minionApiServerUrl = "https://api.funtranslations.com/translate/minion.json";


/* input-output processing Example
function clickTranslateHandler() {
    translateOutput.innerText = "input : "+translateInput.value;
};*/

function getTranslationUrl(text) {
    var translateUrl = minionApiServerUrl + "?" + "text=" + text;
    return translateUrl;

};

function errorHandler(error){
    alert("error occured!! on serverside. please try again later");

};

function clickTranslateHandler() {
    var inputText = translateInput.value; // taking input

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        translateOutput.innerText = translatedText;
    })
    .catch(errorHandler) // we don't have to pass error argument in errorHandler(), it catches the error that occured and pass it.

};

btnTranslate.addEventListener("click", clickTranslateHandler)

