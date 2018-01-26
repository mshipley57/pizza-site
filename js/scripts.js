//back end logic
var inputtedPizzaSize = ("");
var inputtedPizzaTopping;
var inputtedQuantity = 0;
var price = 0;

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

price = function(size,topping,quantity) {
  var sizePrice = 0;
  var typePrice = 0;
  if (size === "Kilobyte") {
    sizePrice = 8;
  } else {
    sizePrice = 10;
  }
  if (type === "Tesla Coils" || "AI") {
    typePrice = 1;
  } else {
    typePrice = '.75';
  }
  return parseFloat ((typePrice * sizePrice * quantity).toFixed(2));
};

//UI logic
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    inputtedPizzaSize = $("select#pizzaBigness").val();
    inputtedPizzaTopping = $("select#pizza-toppings").val();
    inputtedQuantity = parseInt ($("input#amount")).val();
    price = price(inputtedPizzaSize, inputtedPizzaTopping, inputtedQuantity).toFixed(2);

    $("#pizzaBigness").append(inputtedPizzaSize);
    $("#pizza-toppings").append(inputtedPizzaTopping);
    $("#amount").append(inputtedQuantity);
    $("price").text("$" + price);

    $("price").show;
  })
});
