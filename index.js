const buttonElem = document.getElementById('calculateButton');

function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseFloat(tip);
    const total = parseInt(sum) + calculatedTip;

    return total;
}

function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);

    return sumDivided;
}

function showDividedSum(sum) {
    document.getElementById('friendSum').innerHTML = sum + ' kr';
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
}

buttonElem.addEventListener('click', () => {
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;

    const total = calculateTip(sum, tip);
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
});