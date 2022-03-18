
let price , crust_price, topping_price;
let total = 0;

// business logic
function Orderpizza(name, size, crust,topping, total) {
    this.name = name;
    this.size = size;
    this.crust =crust;
    this.topping =topping;
    this.total = total
}

// user interface logic

$(document).ready(function(){
    $("button.proceed").click(function(event){
        let pizzaName = $(".name option: selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option: selected").val();
        let pizzaTopping = $("#topping option: selected"). val();
        $.forEach(&("input[name = 'toppings']:checked"), function(){
            pizzaTopping.push($(this).val();)
        })
    })
})