//back end logic
function Pizza(size, topping) {
  this.size = size;
  this.toppings = toppings;
}

var inputtedPizzaSize = ("");
var inputtedPizzaTopping = ("");
var inputtedQuantity = 1;
var cost = 0;

cost = function(size,topping,quantity) {
  var sizeCost = (0);
  var toppingsCost = (0);
  if (size === "Kilobyte") {
    sizeCost = (8);
  } else; {
    sizeCost = (10);
  }
  if (toppings === "Tesla Coils") {
    toppingsCost = (1);
  } else; {
    typeCost = '.8';
  }

};

//UI logic
$(document).ready(function(){

  $("form#pizza-size").submit(function(event){
    event.preventDefault();
    alert("ashfads")
    $("select#pizza-size-options").val();
    $("select#pizza-type").val();
    $("input#pizza-amount").val();






  })
});
