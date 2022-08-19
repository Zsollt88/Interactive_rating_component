function voting() {
  let rateVariable = document.querySelector('input[type="radio"]:checked').value;
  console.log('The selected value is ' + rateVariable);
  document.getElementById("thankYouState").style.display = "flex";
  document.getElementById("addRating").innerHTML = rateVariable;
};



/* TRYING FOR CHANGE AND RESET BACKGROUND-COLOR OF LABELS
function resetList() {
  let resetListValues = document.querySelectorAll("label");
  for (let i = 0; resetListValues.length; i++) {
    resetListValues[i].style.backgroundColor = "hsl(213, 19%, 100%)";
  }
};

function colorChange(number) {
  let orginalColor = document.getElementById("rate" + number).style.backgroundColor;
  if (orginalColor != 'hsl(217, 12%, 63%)') {
    document.getElementById("rate" + number).style.backgroundColor = 'hsl(217, 12%, 63%)';
    document.getElementById("rate" + number).style.color = 'hsl(0, 0%, 100%)';
  }
};*/