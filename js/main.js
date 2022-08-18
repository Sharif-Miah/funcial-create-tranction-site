

function inputFieldEelment(inputId) {
    const inputField = document.getElementById(inputId);
    const inputTextValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputTextValue;
}

function textFieldElement(textId) {
    const textField = document.getElementById(textId);
    const textValue = parseFloat(textField.innerText);
    return textValue;
}

function getElementValue(element, mainValue) {
    const current = document.getElementById(element);
    const indigo = current.innerText = mainValue;
    return indigo;
}