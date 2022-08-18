document.getElementById('deposit-btn').addEventListener('click', function () {
    const prevValue = inputFieldEelment('deposit-input');
    const newValue = textFieldElement('deposit-amount');
    const totalDeposite = prevValue + newValue;
    getElementValue('deposit-amount', totalDeposite)


    const totalBalanceField = textFieldElement('overl-total');
    const totalBalance = totalBalanceField + prevValue;
    getElementValue('overl-total', totalBalance)


})