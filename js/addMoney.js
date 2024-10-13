/**
 * How to get a number from an input field
 * 1. create a variable
 * 2. right side document.getElementById(id)
 * 3. .value
 * 4. parseFloat
*/

document.getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    // wrong way to verify. do not try it at your serious website
    if (pinNumber === 1234) {
      
    }
    else {
      alert('Failed to add the money. Please try again later');
    }
  })