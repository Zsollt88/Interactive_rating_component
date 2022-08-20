$(document).ready(function () {
  $(".ratingButton").click(function () {
    let rateVariable = $(this).val();
    console.log('The selected value is ' + rateVariable);
    $("#addRating").text(rateVariable);
  });

  $("#buttonForSubmit").click(function () {
    $("#thankYouState").css("display", "flex");
  });
});


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