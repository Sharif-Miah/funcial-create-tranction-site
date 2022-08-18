document.getElementById('withdraw-btn').addEventListener('click', function () {
    const prevWithdrawMoney = inputFieldEelment('withdraw-input');
    const withdrawText = textFieldElement('withdraw-amount');
    const totalWithdraw = prevWithdrawMoney + withdrawText;
    getElementValue('withdraw-amount', totalWithdraw);

    const totalBalanceField2 = textFieldElement('overl-total');
    const totalBalanceAfterdrec = totalBalanceField2 - prevWithdrawMoney;
    getElementValue('overl-total', totalBalanceAfterdrec)
})