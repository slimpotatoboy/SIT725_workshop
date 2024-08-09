$(document).ready(function () {
  var value1, value2;
  $("#clickMeButton").click(() => {
    $.ajax({
      url: "/addTwoNumber?n1=10&n2=20",
      success: function (response) {
        alert(response.data);
      },
    });
  });

  if (window.location.href.includes("first_name")) {
    alert(
      "Thank you for submitting the form, " + window.location.href.split("=")[1]
    );
  }

  $("#add").click(() => {
    var value1 = $("#value1").val();
    var value2 = $("#value2").val();
    $.ajax({
      url: `/addTwoNumber?n1=${value1}&n2=${value1}`,
      success: function (response) {
        alert(response.data);
      },
    });
  });
  $("#minus").click(() => {
    var value1 = $("#value1").val();
    var value2 = $("#value2").val();
    $.ajax({
      url: `/minusTwoNumber?n1=${value1}&n2=${value1}`,
      success: function (response) {
        alert(response.data);
      },
    });
  });
  $("#multiply").click(() => {
    var value1 = $("#value1").val();
    var value2 = $("#value2").val();
    $.ajax({
      url: `/multiplyTwoNumber?n1=${value1}&n2=${value1}`,
      success: function (response) {
        alert(response.data);
      },
    });
  });
  $("#divide").click(() => {
    var value1 = $("#value1").val();
    var value2 = $("#value2").val();
    $.ajax({
      url: `/divideTwoNumber?n1=${value1}&n2=${value1}`,
      success: function (response) {
        alert(response.data);
      },
    });
  });
});
