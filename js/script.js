/*
Author: Dipta Saha
Email: diptasaha.lpu.cse@gmail.com
Description: This is Programming Hero 5th Assignment
Date: 16th Feb 2022 
*/
function getInputValue(id) {
    const getNumberInput = Number(document.getElementById(id).value);
    return getNumberInput;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}
// check validity by using keyup listener
function checkNumberValidate(id) {
    let numberValue = getInputValue(id);
    if (isNaN(numberValue)) {
        alert('Please input number value..!');
        setValue(id, '');
    } else if (numberValue < 0) {
        alert('Please input positive number value..!');
        setValue(id, '');
    }
}
// Calculate Button Listener
document.getElementById('calculate-button').addEventListener('click', function() {
    // Get Income
    const getIncome = getInputValue('income-input-field');
    // Get All Expense
    const getFoodCost = getInputValue('food-input-field');
    const getRentCost = getInputValue('rent-input-field');
    const getClothesCost = getInputValue('clothes-input-field');
    // Total Expenses Calculate
    let totalExpense = getFoodCost + getRentCost + getClothesCost;
    // Calculate Balance
    let balance = getIncome - totalExpense;

    // Check if Total Expense is less than Balance or Not
    if (totalExpense > balance) {
        alert('Total Expense should not greater than Balance');
        setValue('food-input-field', '');
        setValue('rent-input-field', '');
        setValue('clothes-input-field', '');
    } else {
        // set total Expense
        setInnerText('total-expense', totalExpense);
        // Set Balance
        setInnerText('balance', balance);
    }
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
    // Check saving amount is greater than remaining balance or not
    if (savingAmount > remainingBalance) {
        alert('Total Expense should not greater than Balance');
        setValue('saving-input-field', '');

    } else {
        // set Saving Amount
        setInnerText('saving-amount', savingAmount);
        // set Remaining Balance
        setInnerText('remaining-balance', remainingBalance);

    }

});