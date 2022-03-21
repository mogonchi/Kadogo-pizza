// // business logic

function Orderpizza(name, size, crust, topping) {
    this.flavor = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    
};

let price = function (pizzaSize, pizzaCrust, pizzaTopping) {
    let sizePrice;
    if (pizzaSize === "small") {
        sizePrice = 600;
    } else if (pizzaSize === "medium") {
        sizePrice = 1500;
    } else if (pizzaSize === "large") {
        sizePrice = 2000;
    } else {
        alert("Please select a size!!!")
    }

    let crustPrice;
    if (pizzaCrust === "Crispy") {
        crustPrice = 150;
    } else if (pizzaCrust === "Stuffed") {
        crustPrice = 180;
    } else if (pizzaCrust === "Gluten-free") {
        crustPrice = 200;
    } else {
        alert("Please select a crust!!!")
    }

    let toppingsPrice;
    if (pizzaSize === "small") {
        toppingsPrice = pizzaTopping.length * 100;
    } else if (pizzaSize === "medium") {
        toppingsPrice = pizzaTopping.length * 150;
    } else if (pizzaSize === "large") {
        toppingsPrice = pizzaTopping.length * 200;
    }

    let totalPrice = sizePrice + crustPrice + toppingsPrice;
    return totalPrice;

}

$(document).ready(function () {

    $("#proceed").click(function (event) {
        event.preventDefault();


        let pizzaType = $("#flavor option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        let pizzaTopping = [];
        let pizzaNumber = $('#number').val()

        $("input:checkbox[name = toppings]:checked").each(function () {
            pizzaTopping.push($(this).val());
        });

        let total = price(pizzaSize, pizzaCrust, pizzaTopping);
        let grandTotal = total * pizzaNumber
        let deliveryPrice = grandTotal + 150;

        let order = new Orderpizza(pizzaType, pizzaSize, pizzaCrust, pizzaTopping);
        $('#made-orders').append('<tr><td id="pizzaname" >' + order.flavor + '</td><td id="pizzasize">' + order.size + '</td><td id="pizzacrust">' + order.crust + '</td><td id="pizzatopping">' + order.topping + '</td><td id="pizzanumber" >' + pizzaNumber + '</td><td id="totals">' + grandTotal + '</td></tr>')


        $('#checkout').click(function (e) {
            e.preventDefault();
            alert("Hello, Your total bill is Ksh. " + grandTotal)
            $(".delivery").show();
        });
        $("#homedelivery").click(function(){
            alert('Your bill is '+grandTotal + ' plus the delivery fee of sh.150')
        })
        
    })


    $('#final-order').click(function () {
        locationvalidate();
    });

    $("form#form").submit(function (event) {

        event.preventDefault();



        function locationvalidate() {
            let name = document.getElementById("name").val();
            let phone = document.getElementById("phone").val();
            let location = document.getElementById("location").val();
            if (name == " " && phone == " " && location == " ") {
                alert("Please enter your details");
                return false;
            } else {
                return true
            }
        };

       


    });

    function response() {
        alert('Your order will be delivered to Your selected location')
        
    }

    $("form#form-group").submit(function (event) {
        event.preventDefault();
        let personName = $("#form-group #name").val();
        let personPhone = $("#form-group #phone").val();
        let personLocation = $("#form-group #location").val();
        alert('Hello  ' + personName + "  your order will be delivered between 24 hours to  " + personLocation + "." + "You will be charged delivery fee of sh.150." + "Your phone numeber is " + personPhone)

    });
    

    

});








