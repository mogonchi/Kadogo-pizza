
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
        // $.forEach( &("input[name = 'toppings']:checked"), function(){
        //     pizzaTopping.push($(this).val());
        // })
    });
    // console.log(pizzatopping.join(""))
    switch(pizzaSize){
        case "0":
            price = 0;
            break;
            case "Large":
                price = 2000;
                console.log( "The price is  " + price);
            break;
            case "Medium":
                price = 1500;
                console.log( "The price is  " + price);
            break;
            case "Small":
                price = 600;
                console.log( "The price is  " + price);
            break;
                default:
                console.log("error")


    }
    switch(pizzaCrust) {
        case "0":
            crust_price = 0;
            break;
            case "Cripsy":
                crust_price = 150;
            break;
            case "Stuffed":
                crust_price = 180;
            break;
            case "Glutten-free":
                crust_price = 200;
            break;
            default:
                console.log("There is no price")
        
    }
    switch (pizzaTopping) {
        case "0":
            topping_price = 0;
            break;
            case "Tomatoes":
                topping_price = 50;
                break;
                case "Black olives":
                topping_price = 50;
                break;
                case "Mushroom":
                topping_price = 50;
                break;
                case "Fresh garlic":
                topping_price = 50;
                break;
                case "Onions":
                topping_price = 50;
                break;
                case "Green pepper":
                topping_price = 50;
                break;
                default:
                    console.log("There is no price")

                
    }
     if((pizzaSize == " ") && (pizzaCrust == " ")){
         console.log("Nothing selected");
         $("button.proceed").show();
         $("#your-order").hide();
         alert("Please select pizza size and crust");
     }
       else{
           $("button.proceed").hide();
           $("#your-order").slideDown(1000);
       }
       total = price + crust_price + topping_price;
       console.log(total);
       let checkoutTotal = 0;
       checkoutTotal = checkoutTotal + total;

       $("#pizzaname").html($(".name option:selected").val());
       $("#pizzasize").html($("#size option:selected").val());
       $("#pizzacrust").html($("#crust option:selected").val());
       $("#pizzatopping").html($("#topping option:selected").val());
       $("#totals").html(total);

})
