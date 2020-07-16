function addBurger() {
  console.log("Add Burger Button clicked");
  // Create an Object to be Sent to the Backend
  const burger = {
    burger_name: $("#burgerName").val(),
    //by default devoured is false when burder is added
  };
  if (burger.burger_name) {
    console.log("burger name is:", burger);
    $.post("/api/burger", burger).done(() => {
      location.reload();
    });
  } else {
    window.alert("Cannot add burger with no name.");
  }
}

// Update Burger from Database Button
function eatBurger() {
  console.log("Eat Burger Button clicked");
  // Create an Object to be Sent to the Backend
  const burgerID = $(this).data("id");
  console.log("Brgr ID:", burgerID);
  const request = { type: "PUT", data: { devoured: true } };
  $.ajax(`/api/burger/${burgerID}`, request)
    .done(() => {
      console.log("brgr moved to eaten", request);
      location.reload();
    })
    .fail(() => {
      // window.alert("Could not commit data");
    });
}

function eatBurgerAgain() {
  console.log("Eat Burger again Button clicked");
}

function attachEventHandlers() {
  $("#addBurger").on("click", addBurger);
  console.log($(".eat_me"));
  $(".eat_me").on("click", eatBurger);
  $(".repeat").on("click", eatBurgerAgain);
}
$(document).ready(attachEventHandlers);
