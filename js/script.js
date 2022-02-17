function getInputValue(id) {
    const getNumberInput = Number(document.getElementById(id).value);
    return getNumberInput;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// check validity by using keyup listener
function checkValidity(id) {
    console.log('change');
}
document.getElementById('calculate-button').addEventListener('click', function() {
    // Get Income
    const getIncome = getInputValue('income-input-field');
    // Get All Expense
    const getFoodCost = getInputValue('food-input-field');
    const getRentCost = getInputValue('rent-input-field');
    const getClothesCost = getInputValue('clothes-input-field');
    // Total Expenses Calculate
    let totalExpense = getFoodCost + getRentCost + getClothesCost;
    // set total Expense
    setInnerText('total-expense', totalExpense);
    // Calculate Balance
    let balance = getIncome - totalExpense;
    // Set Balance
    setInnerText('balance', balance);

});
//Saving Button Listener
document.getElementById('saving-button').addEventListener('click', function() {
    // Get Income
    const getIncome = getInputValue('income-input-field');
    // Get Saving Percent
    const getSavingPercent = getInputValue('saving-input-field');
    // Calculate Saving Amount
    let savingAmount = (getIncome * getSavingPercent) / 100;
    let remainingBalance = getIncome - savingAmount;
    // set Saving Amount
    setInnerText('saving-amount', savingAmount);
    // set Remaining Balance
    setInnerText('remaining-balance', remainingBalance);


});