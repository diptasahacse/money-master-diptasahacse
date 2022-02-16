function getInputValue() {


}
//Calculate Button Listener
document.getElementById('calculate-button').addEventListener('click', function() {
    // Get Income
    const getIncome = Number(document.getElementById('income-input-field').value);
    // Get All Expense
    const getFoodCost = Number(document.getElementById('food-input-field').value);
    const getRentCost = Number(document.getElementById('rent-input-field').value);
    const getClothesCost = Number(document.getElementById('clothes-input-field').value);
    // console.log(getIncome, getFoodCost, getRentCost, getClothesCost);
    // Total Expenses Calculate
    let totalExpense = getFoodCost + getRentCost + getClothesCost;
    // set total Expense
    document.getElementById('total-expense').innerText = totalExpense;
    // Calculate Balance
    let balance = getIncome - totalExpense;
    // Set Balance
    document.getElementById('balance').innerText = balance;

});
//Saving Button Listener
document.getElementById('saving-button').addEventListener('click', function() {
    // Get Income
    const getIncome = Number(document.getElementById('income-input-field').value);
    // Get Saving Percent
    const getSavingPercent = Number(document.getElementById('saving-input-field').value);
    // Calculate Saving Amount
    let savingAmount = (getIncome * getSavingPercent) / 100;
    let remainingBalance = getIncome - savingAmount;
    // set Saving Amount
    document.getElementById('saving-amount').innerText = savingAmount;
    // set Remaining Balance
    document.getElementById('remaining-balance').innerText = remainingBalance;

});