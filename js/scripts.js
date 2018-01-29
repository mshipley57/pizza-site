//back end logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculateCost = function(size,topping) {

  var sizeCost = (0);
  var toppingsCost = (0);
  if (size === "Kilobyte") {
    sizeCost = (8);
  } else; {
    sizeCost = (10);
  }

  if (topping === "Tesla Coils") {
    toppingsCost = (2);
  } else; {
    toppingsCost = 1;
  }
var onePizzaCost = sizeCost + toppingsCost

return onePizzaCost
};

//UI logic
$(document).ready(function(){

  $(".wholePizza").submit(function(event){
    event.preventDefault();

    // var inputtedPizzaSize = ("");
    // var inputtedPizzaTopping = ("");
    // var inputtedQuantity = 1;

    var costOfTotalOrder = 0;

    var size =   $("select#pizza-size-options").val();
    console.log(size);

    var type = $("select#toppings").val();
        console.log(type);

    var amountOfPizzas = $("input#amount").val();
    for( var i = 1; i <= amountOfPizzas; i++) {

      var singlePizza = new Pizza(size, type)

      var costOfSinglePizza = singlePizza.calculateCost(singlePizza.size,singlePizza.toppings)

      costOfTotalOrder = costOfTotalOrder + costOfSinglePizza
    }
    console.log(costOfTotalOrder)

    $("#pizza-size").append(costOfTotalOrder);

  });

});
