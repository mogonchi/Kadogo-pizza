// business logic



function Orderpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number = number;
    this.total = total;
}

Orderpizza.prototype.newOrder
let totalprice = 0;

// user interface logic
$(document).ready(function(){
    $('.proceed').click(function(){
        $('#your-order').show();

    })
    $('.delivery').hide();
    $('#checkout').click(function(){
        alert("Hello" + "Your total bill is sh. " + totalprice)
        $(".delivery").show();
    });
    $('#final-order').click(function(){
        locationvalidate();
    });
    let topping = []
    $('#Garlic').change(function(){
        if (this.checked){
            topping.push($('#Garlic').val())
        };
    });
    $('#Gluten-free').change(function(){
        if (this.checked){
            topping.push($('#Gruten-free').val())
        };
    });
    $('#Mushroom').change(function(){
        if (this.checked){
            topping.push($('#Mushroon').val())
        };
    });
    $('#Black').change(function(){
        if (this.checked){
            topping.push($('#Black').val())
        };
    });
    $('#Tomatoes').change(function(){
        if (this.checked){
            topping.push($('#Tomatoes').val())
        };
    });
    $('#Green-pepper').change(function(){
        if (this.checked){
            topping.push($('#Green-pepper').val())
        };
    });
    
    $("form#form").submit(function(event){
        event.preventDefault();

        let pizzaName = $("select#flavor").val();
        let pizzaSize = $('select#size').val();
        let pizzaCrust = $('select#crust').val();
        let pizzaTopping = toppings;
        let pizzaNumber = $('input#number').val();
        let toppingsPrice = toppings.length * 80;
        let sizePrice = $('#size').find('option:selected').attr('price');
        let crustPrice = $('#crust').find('option:selected').attr('price');

        let inputtedTotal = $('select#totals').val();
         let newOrder = new Orderpizza(
             pizzaName, pizzaSize, pizzaCrust, pizzaNumber, pizzaTopping, inputtedTotal

         );
         let totalPrice = Number(sizePrice) + Number(crustPrice)+ Number(toppingsPrice)
         totalprice = totalPrice

         console.log(newOrder);
         $('tbody#made-orders').append("<tr>" + '<d>' +newOrder.pizzaname +'</d>' + '<td>' +newOrder.pizzasize + '</td>'+ + '<td>' +newOrder.pizzacrust+ '</td>' +'<td>' +newOrder.pizzanumber + '</td>' + '<td>' +newOrder.pizzatopping + '</td>' + '<td>' +totalPrice + '</td>' + "</tr>");

         function locationvalidate(){
             let name = document.getElementById("name").val();
             let phone = document.getElementById("phone").val();
             let location = document.getElementById("location").val();
              if (name == " " && phone == " " && location == " "){
                  alert("Please enter your details");
                  return false;
              } else {
                  return true
              }
         };

    });
    $("form#form-group").submit(function(event){
        event.preventDefault();
        let personName = $("#form-group #name").val();
        let personPhone = $("#form-group #phone").val();
        let personLocation = $("#form-group #location").val();
        alert('Hello' + personName + "your order will be delivered between 24 hours to " + personLocation + "." + "You will be charged delivery fee of sh.150." + "Your phone numeber is " + personPhone)
        
    });

    
});
function response(){
    alert('Your order will be delivered to Your selected location')
}

// $(function(){
//     $('#checkout').hide();
//     $('.delivery').hide();
//     $('#your-order').hide();
    

//     $(document).ready(function(){
//         $(".proceed").click(function(){
//             let flavor = $("#flavor option:selected").val();
//             let size = $("#size option:elected").val();
//             let crust = $("#crust option:elected").val();
//             let topping = $("#topping option:elected").val();
//             let total = $("#total").val();
//             alert(so
//         })


//     })

// })



// $(document).ready(function () {

   
//     $("button.proceed").click(function (event) {
//         let pizzaName = $("#flavor option: selected").val();
//         let pizzaSize = $("#size option:selected").val();
//         let pizzaCrust = $("#crust option: selected").val();
//         let pizzaTopping = [];
//         $.each($("input[name = 'toppings']:checked"), function () {
//             pizzaTopping.push($(this).val());
//         });
//         console.log(pizzaTopping.join(", "));

//         switch (pizzaSize) {
//             case "0":
//                 price = 0;
//             break;
//             case "Large":
//                 price = 2000;
                            
//                 console.log("The price is  " + price);
//             break;
//             case "Medium":
//                 price = 1500;
            
//                 console.log("The price is  " + price);
//             break;
//             case "Small":
//                 price = 600;
            
//                 console.log("The price is  " + price);
//             break;
//             default:
//                 console.log("error")


//         }
//         switch (pizzaCrust) {
//             case "0":
//                 crust_price = 0;
//             break;
//             case "Cripsy":
//                 crust_price = 150;
//             break;
//             case "Stuffed":
//                 crust_price = 180;
//             break;
//             case "Glutten-free":
//                 crust_price = 200;
//             break;
//             default:
//                 console.log("There is no price")

//         }
                    
//         let topping_value = pizzaTopping.length * 80;
                    
//         console.log("toppings value" + topping_value);

                    
//         if ((pizzaSize == " ") && (pizzaCrust == " ")) {
//             console.log("Nothing selected");
//             $("button.proceed").show();
//             $("#your-order").hide();
//             alert("Please select pizza size, crust and toppings");
//         } else {

//             $("button.proceed").hide();
//             $("#your-order").slideDown(1000);
//         }

                    
//         total = price + crust_price + topping_price;
//         console.log(total);
//         let checkoutTotal = 0;
//         checkoutTotal = checkoutTotal + total;
//         // $("#pizzaname").html($("#flavor option:selected").val());
//         // $("#pizzasize").html($("#size option:selected").val());
//         // $("#pizzacrust").html($("#crust option:selected").val());
//         // $("#pizzatopping").html($("#topping option:selected").val());
//         // $("#totals").html(total);


//         $("button#addpizza").click(function () {

//             let pizzaName = $("#flavor option: selected").val();
//             let pizzaSize = $("#size option:selected").val();
//             let pizzaCrust = $("#crust option: selected").val();
//             let pizzaTopping = [];

//             $.each($("input[name = 'toppings']:checked")(function () {
//                 pizzaTopping.push($(this).val());
            
//             }));

//             console.log(pizzatopping.join(", "));

//             switch (pizzaSize) {
//                 case "0":
//                     price = 0;
//                 break
//                 case "Large":
//                     price = 2000;
//                     console.log("The price is  " + price);
//                 break;
//                 case "Medium":
//                     price = 1500;
//                     console.log("The price is  " + price);
//                 break;
//                 case "Small":
//                     price = 600;
//                     console.log("The price is  " + price);
//                 break;
//                 default:
//                 console.log("error")
                                    


//             }
//             switch (pizzaCrust) {

//                 case "0":
//                     crust_price = 0;
//                 break;
//                 case "Cripsy":
//                     crust_price = 150;
//                 break;
//                 case "Stuffed":
//                     crust_price = 180;
//                 break;
//                 case "Glutten-free":
//                     crust_price = 200;
//                 break;
//                 default:
//                 console.log("There is no price")

//             }


//             let topping_valuev = pizzaTopping.length * 80; console.log("toppings value" + topping_value); total = price + crust_price + topping_value; console.log(total);

//             checkOutTotal = checkOutTotal + total; console.log(checkOutTotal);

//             let newOrder = new Orderpizza(pizzaName, size, crust, topping, total);

//             $("#your-order").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>') 
//             console.log(newOrder);


//         });

//         $("button#checkout").click(function () {
//             $("buttun#checkout").hide();
//             $("button#addpizza").hide();
//             $("button#homedelivery").slideDown(2000);
//             $("#totalprice").slideDown(2000);
//             alert("Your bills amount to sh. " + checkOutTotal);
//             $("#pizzatotal").append("Your bill is sh. " + checkOutTotal)
//         });

//         $("button#homedelivery").click(function () {
//             $(".pizzatable").hide();
//             $(".delivery").slideDown(1000);
//             $("#totalprice").hide();
//             $("#your-order h3").hide();
//             $("button#delivery").hide();
//             $("#pizzatotal").hide();
//             let deliveryAmount = checkOutTotal + 200;
//             console.log("You will pay sh. " + deliveryAmount + " on delivery");
//             $("#totalbill").append("Your bill plus delivery fee is: " + deliveryAmount);

//                         });

//         $("button#final-order").click(function (event) {
//             event.preventDefault();

//             $("button#final-order").hide();
//             $(".delivery").hide();
//             $("#pizzatotal").hide();


//             let deliveryAmount = checkOutTotal + 200;
//             console.log("Your final bill is: " + deliveryAmount);
//             let person = $("input#name").val();
//             let phone = $("input#phone").val();
//             let location = $("input#location").val();


//         if ($("input#name").val() && $("input#phone").val() && $("input#phone").val() && $("input#location").val() != "") {

//             $("#totalbill").hide();
//             alert("Hello" + person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryAmount);

//         } else {

//             $(".delivery").show();
//             $("button#final-order").show();
//             alert("Please fill your details for delivery")
//         }
        
//     });

//     event.preventDefault();

//     });

// });