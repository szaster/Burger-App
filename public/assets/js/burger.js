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
function attachEventHandlers() {
  $("#addBurger").on("click", addBurger);
}
$(document).ready(attachEventHandlers);

//Add Burger to Datab
