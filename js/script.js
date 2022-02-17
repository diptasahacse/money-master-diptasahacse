/*
Author: Dipta Saha
Email: diptasaha.lpu.cse@gmail.com
Description: This is Programming Hero 5th Assignment
Date: 16th Feb 2022 
*/
function getInputValue(id) {
    return document.getElementById(id).value;
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
        alert('You can not enter anything except Number, please input a number value..!');
        setValue(id, '');
    } else if (numberValue < 0) {
        alert('Please input positive number value..!');
        setValue(id, '');
    }
}
// Make Expense Field Empty
function makeExpenseEmpty() {
    setValue('food-input-field', '');
    setValue('rent-input-field', '');
    setValue('clothes-input-field', '');

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
    if (getInputValue('income-input-field') == '') {
        alert('You did not mentioned your income..');
        makeExpenseEmpty();

    } else if (getIncome == 0) {
        alert('Income Field is 0 or empty');
        makeExpenseEmpty();

    } else if (totalExpense > getIncome) {
        alert('Total Expense should not greater than Balance');
        makeExpenseEmpty();
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
    let currentBalance = Number(document.getElementById('balance').innerText);
    let remainingBalance = currentBalance - savingAmount;
    // Check validation
    if (getInputValue('income-input-field') == '') {
        alert("You did not mentioned your income..!");

    } else if (getIncome == 0) {
        alert("Income is 0");
    } else if (getIncome > 0) {
        if (savingAmount == 0 && currentBalance == 0) {
            alert('You did not added your income in your balance..!');

        } else {
            if (savingAmount > currentBalance) {
                alert("You don't have enough Money to save..!");
                setValue('saving-input-field', '');
            } else {
                checkEmpty('saving-input-field');
                // set Saving Amount
                setInnerText('saving-amount', savingAmount);
                // set Remaining Balance
                setInnerText('remaining-balance', remainingBalance);
            }
        }

    }
});