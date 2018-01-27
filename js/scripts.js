//back end logic
function Pizza(size, topping) {
  this.size = size;
  this.toppings = toppings;
}


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

  $(".wholePizza").submit(function(event){
    event.preventDefault();

    var inputtedPizzaSize = ("");
    var inputtedPizzaTopping = ("");
    var inputtedQuantity = 1;
    var cost = 0;

    $("select#pizza-size-options").val();
    $("select#pizza-type").val();
    $("input#pizza-amount").val();
    

    //Pizza.prototype.cost = function(amount) {
      //return ((parseFloat(this.size)) + ((parseFloat(this.toppings)));




  });
});
