$(document).ready(function () {
  $("#formSubmit").click(() => {
    formSubmitted();
  });

  getAllContacts();
});

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.first_name +
      item.last_name +
      '<i class="material-icons right">more_vert</i></span><p><a href="#"></a></p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.subTitle +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

function getAllContacts() {
  fetch("/api/contacts")
    .then((response) => response.json())
    .then((data) => addCards(response.data))
    .catch((error) => console.error(error));
  //   $.get("/api/contacts", (response) => {
  //     // response's data is in array format, so we can use it
  //     if (response.statusCode === 200) {
  //       addCards(response.data);
  //     }
  //   });
}

const formSubmitted = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.email = $("#email").val();
  formData.message = $("#message").val();

  console.log(formData);
  postContact(formData);
};

function postContact(contact) {
  $.ajax({
    url: "/api/contact", // The URL to send the request to
    type: "POST", // Specify the request method
    data: contact, // Convert the data object to a JSON string
    success: function (data) {
      if (result.statusCode === 201) {
        alert("Contact added successfully");
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error(
        "There was a problem with the AJAX request:",
        textStatus,
        errorThrown
      );
    },
  });
  //   $.ajax({
  //     url: "/api/contact",
  //     type: "POST",
  //     data: cat,
  //     success: (result) => {
  //       if (result.statusCode === 201) {
  //         alert("contact added successfully");
  //       }
  //     },
  //   });
}

