// business logic
let price, crust_price, topping_price;
let total = 0;


function Orderpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
// alert ("hey there")
// // user interface logic
// $(document).ready(function(event){

//     $("#form.proceed").click(function(){
//         $('#your-order#addpizza').show();
//         $("#your-order#checkout").show();
        
//     })
    
// })

$(document).ready(function () {

    $("#form.proceed").click(function(){
        $('#your-order').show();
    })
    $("button.proceed").click(function (event) {
        let pizzaName = $("#flavor option: selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option: selected").val();
        let pizzaTopping = [];
        $.each($("input[name = 'toppings']:checked"), function () {
            pizzaTopping.push($(this).val());
        });
        console.log(pizzaTopping.join(", "));

        switch (pizzaSize) {
            case "0":
                price = 0;
            break;
            case "Large":
                price = 2000;
                            
                console.log("The price is  " + price);
            break;
            case "Medium":
                price = 1500;
            
                console.log("The price is  " + price);
            break;
            case "Small":
                price = 600;
            
                console.log("The price is  " + price);
            break;
            default:
                console.log("error")


        }
        switch (pizzaCrust) {
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
                    
        let topping_value = pizzaTopping.length * 80;
                    
        console.log("toppings value" + topping_value);

                    
        if ((pizzaSize == " ") && (pizzaCrust == " ")) {
            console.log("Nothing selected");
            $("button.proceed").show();
            $("#your-order").hide();
            alert("Please select pizza size, crust and toppings");
        } else {

            $("button.proceed").hide();
            $("#your-order").slideDown(1000);
        }

                    
        total = price + crust_price + topping_price;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;
        $("#pizzaname").html($("#flavor option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html($("#topping option:selected").val());
        $("#totals").html(total);


        $("button#addpizza").click(function () {

            let pizzaName = $("#flavor option: selected").val();
            let pizzaSize = $("#size option:selected").val();
            let pizzaCrust = $("#crust option: selected").val();
            let pizzaTopping = [];

            $.each($("input[name = 'toppings']:checked")(function () {
                pizzaTopping.push($(this).val());
            
            }));

            console.log(pizzatopping.join(", "));

            switch (pizzaSize) {
                case "0":
                    price = 0;
                break
                case "Large":
                    price = 2000;
                    console.log("The price is  " + price);
                break;
                case "Medium":
                    price = 1500;
                    console.log("The price is  " + price);
                break;
                case "Small":
                    price = 600;
                    console.log("The price is  " + price);
                break;
                default:
                console.log("error")
                                    


            }
            switch (pizzaCrust) {

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


            let topping_valuev = pizzaTopping.length * 80; console.log("toppings value" + topping_value); total = price + crust_price + topping_value; console.log(total);

            checkOutTotal = checkOutTotal + total; console.log(checkOutTotal);

            let newOrder = new Orderpizza(pizzaName, size, crust, topping, total);

            $("#your-order").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>') 
            console.log(newOrder);


        });

        $("button#checkout").click(function () {
            $("buttun#checkout").hide();
            $("button#addpizza").hide();
            $("button#homedelivery").slideDown(2000);
            $("#totalprice").slideDown(2000);
            alert("Your bills amount to sh. " + checkOutTotal);
            $("#pizzatotal").append("Your bill is sh. " + checkOutTotal)
        });

        $("button#homedelivery").click(function () {
            $(".pizzatable").hide();
            $(".delivery").slideDown(1000);
            $("#totalprice").hide();
            $("#your-order h3").hide();
            $("button#delivery").hide();
            $("#pizzatotal").hide();
            let deliveryAmount = checkOutTotal + 200;
            console.log("You will pay sh. " + deliveryAmount + " on delivery");
            $("#totalbill").append("Your bill plus delivery fee is: " + deliveryAmount);

                        });

        $("button#final-order").click(function (event) {
            event.preventDefault();

            $("button#final-order").hide();
            $(".delivery").hide();
            $("#pizzatotal").hide();


            let deliveryAmount = checkOutTotal + 200;
            console.log("Your final bill is: " + deliveryAmount);
            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();


        if ($("input#name").val() && $("input#phone").val() && $("input#phone").val() && $("input#location").val() != "") {

            $("#totalbill").hide();
            alert("Hello" + person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryAmount);

        } else {

            $(".delivery").show();
            $("button#final-order").show();
            alert("Please fill your details for delivery")
        }
        
    });

    event.preventDefault();

    });

});