var btnTranslate = document.querySelector("#btn-translate");
var translateInput = document.querySelector("#translate-input")
var translateOutput = document.querySelector("#translate-output");


function clickTranslateHandler() {
    translateOutput.innerText = "input : "+translateInput.value;
};

btnTranslate.addEventListener("click", clickTranslateHandler)

