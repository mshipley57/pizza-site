//back end logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = toppings
}

var inputtedPizzaSize = ("");
var inputtedPizzaTopping = ("");
var inputtedQuantity = 0;
var cost = 0;

cost = function(size,topping,quantity) {
  var sizeCost = 0;
  var toppingsCost = 0;
  if (size === "Kilobyte") {
    sizeCost = 8;
  } else {
    sizeCost = 10;
  }
  if ((toppings === "Tesla Coils") || ("AI")) {
    toppingsCost = 1;
  } else {
    typeCost = .8;
  }
  append.parseFloat ((typeCost * sizeCost * quantity).toFixed(2));
};
//UI logic
$(document).ready(function(){
  $("form#wholePizza").submit(function(event){
    event.preventDefault();

    inputtedPizzaSize = $("select#pizza-size-options").val();
    inputtedPizzaTopping = $("select#pizza-toppings").val();
    inputtedQuantity = parseInt($("input#amount")).val();
    cost = cost(inputtedPizzaSize, inputtedPizzaTopping, inputtedQuantity).toFixed(2);

    $("#pizza-size-options").append(inputtedPizzaSize);
    $("#pizza-toppings").append(inputtedPizzaTopping);
    $("#pizza-amount").append(inputtedQuantity);
    $(".pizza-cost").text("$" + cost);

    $(".pizza-cost").append;

  //  newPizza = new Pizza (inputtedPizzaSize, inputtedPizzaTopping, inputtedQuantity, cost);
  //  $(".pizza-size-options").text(newPizza.pizza-size-options);
  //  $("#pizza-toppings").text(newPizza.toppings);
  //  $("#pizza-amount").text(newPizza.amount);
  //  $(".pizza-cost").text("$" + cost);

  //  $(".pizza-cost").show();

  })
});
