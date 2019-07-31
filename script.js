
// Material Select Initialization
$(document).ready(function () {
  $("#placeOrder").click(function () {
    $(".checkout").slideDown();
    $(".details").slideDown();
    $(".toppings").slideDown();
    $(".slidebtn").slideDown();
    $("#placeorder").slideDown();
    $("#delivery").slideDown();
    $("section").hide();
  });
  $("#placeorder").click(function (event) {
    event.preventDefault();
    // Gets the input of one pizza
    var onePizza = function add(pizzaSize, pizzaCrust, pizzaTop) {
      var pizzaSize = $("#inputGroupSelect01 option:selected").val();
      var pizzaCrust = $("#inputGroupSelect2 option:selected").val();
      var pizzaTop = [];
      // Loops through the toppings checkboxes
      $.each($("input[name='tops']:checked"), function () {
        pizzaTop.push($(this).val());
        console.log(pizzaTop);
      });
      console.log(pizzaTop.join(","));

      var pricesPizza = 0;
      // In each case the price equals the value
      switch (pizzaSize) {
        case "small":
          pricesPizza = 500;
          break;
        case "medium":
          pricesPizza = 800;
          break;
        case "large":
          pricesPizza = 1000;
          break;
        default: pricesPizza;
          break;
      }
      // In each case the price equals the value
      switch (pizzaCrust) {
        case "crispy":
          pricesPizza = 150;
          break;
        case "stuffed":
          pricesPizza = 150;
          break;
        case "gluten":
          pricesPizza = 200;
          break;
        default: pricesPizza;
          break;
      }
      // Returns the total of the crust and size
      var topPrice = pizzaTop.length * 100;
      return parseInt(pizzaSize) + parseInt(pizzaCrust) + topPrice;
    }


    // Multiplies the total of one pizza times how many they are ordered
    function multiply() {
      var pizzaQuantity = $("input#amount").val();
      return onePizza() * parseInt(pizzaQuantity);
    }
    alert("Current price is " + multiply());
    $(".toDeliver").show();

    // Alerting the user that their order has been taken
    $("#delivery").click(function () {

      var deliveryPlace = $("input#Delivery").val();
      function addDelivery() {
        return multiply() + 200;
      }
      alert("Total price is" + addDelivery());
      alert("Thank you for making an order," + "your pizza order will be delivered at " + deliveryPlace);
      document.getElementById('reset').reset();
    });
  });
});
