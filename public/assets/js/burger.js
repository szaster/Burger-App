function addBurger() {
  // Create an Object to be Sent to the Backend
  const burger = {
    burger_name: $("#burgerName").val(),
    //by default devoured is false when burder is added
  };
  if (burger.burger_name) {
    $.post("/api/burger", burger).done(() => {
      location.reload();
    });
  } else {
    window.alert("Cannot add burger with no name.");
  }
}

// Update Burger from Database Button
function eatBurger() {
  // Create an Object to be Sent to the Backend
  const burgerID = $(this).data("id");
  const request = { type: "PUT", data: { devoured: true } };
  $.ajax(`/api/burger/${burgerID}`, request)
    .done(() => {
      location.reload();
    })
    .fail(() => {
      // window.alert("Could not commit data");
    });
}

function eatBurgerAgain() {
  const burgerID = $(this).data("id");
  const request = { type: "PUT", data: { devoured: false } };
  $.ajax(`/api/burger/${burgerID}`, request).done(() => {
    location.reload();
  });
}

function attachEventHandlers() {
  $("#addBurger").on("click", addBurger);
  $(".eat_me").on("click", eatBurger);
  $(".repeat").on("click", eatBurgerAgain);
}
$(document).ready(attachEventHandlers);
