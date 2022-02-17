/*
Author: Dipta Saha
Email: diptasaha.lpu.cse@gmail.com
Description: This is Programming Hero 5th Assignment
Date: 16th Feb 2022 
*/
function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInnerText(id) {
    return document.getElementById(id).innerText;
}
// Set Inner Text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// Set Input Value
function setValue(id, value) {
    document.getElementById(id).value = value;
}
// check validity by using keyup listener
function checkNumberValidate(id) {
    let numberValue = Number(getInputValue(id));
    if (isNaN(numberValue)) {
        alert('Please input number value..!');
        setValue(id, '');
    } else if (numberValue < 0) {
        alert('Please input positive number value..!');
        setValue(id, '');
    }
}
// checkEmpty or not
function checkEmpty(id) {
    if (getInputValue(id) == '') {
        setValue(id, 0);
    }

}
// Calculate Button Listener
document.getElementById('calculate-button').addEventListener('click', function() {
    // Get Income
    const getIncome = Number(getInputValue('income-input-field'));
    // Get All Expense
    const getFoodCost = Number(getInputValue('food-input-field'));
    const getRentCost = Number(getInputValue('rent-input-field'));
    const getClothesCost = Number(getInputValue('clothes-input-field'));
    // Total Expenses Calculate
    let totalExpense = getFoodCost + getRentCost + getClothesCost;
    // Calculate Balance
    let balance = getIncome - totalExpense;

    // Check if Total Expense is less than Balance or Not
    if (getIncome == 0) {
        alert('Income Field is 0 or empty');

    } else if (totalExpense > getIncome) {
        alert('Total Expense should not greater than Balance');
        setValue('food-input-field', '');
        setValue('rent-input-field', '');
        setValue('clothes-input-field', '');
    } else {
        checkEmpty('food-input-field');
        checkEmpty('rent-input-field');
        checkEmpty('clothes-input-field');
        // set total Expense
        setInnerText('total-expense', totalExpense);
        // Set Balance
        setInnerText('balance', balance);
    }
});
//Saving Button Listener
document.getElementById('saving-button').addEventListener('click', function() {
    // Get Income
    const getIncome = Number(getInputValue('income-input-field'));
    // Get Saving Percent
    const getSavingPercent = Number(getInputValue('saving-input-field'));
    // Calculate Saving Amount
    let savingAmount = (getIncome * getSavingPercent) / 100;
    let currentBalance = Number(getInnerText('balance'));
    let remainingBalance = currentBalance - savingAmount;
    // Check saving amount is greater than remaining balance or not
    if (getIncome == 0) {
        alert('Income Field is 0 or empty');

    } else if (savingAmount > currentBalance) {
        alert("You don't have enough Money to save..!");
        setValue('saving-input-field', '');

    } else {
        checkEmpty('saving-input-field');
        // set Saving Amount
        setInnerText('saving-amount', savingAmount);
        // set Remaining Balance
        setInnerText('remaining-balance', remainingBalance);
    }
});