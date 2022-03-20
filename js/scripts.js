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


$(document).ready(function () {

    $('.delivery').hide();
    $('#checkout').click(function () {
        alert("Hello" + "Your total bill is sh. " + totalprice)
        $(".delivery").show();
    });
    $('#final-order').click(function () {
        locationvalidate();
    });
    let topping = []
    $('#Garlic').change(function () {
        if (this.checked) {
            topping.push($('#Garlic').val())
        };
    });
    $('#Gluten-free').change(function () {
        if (this.checked) {
            topping.push($('#Gruten-free').val())
        };
    });
    $('#Mushroom').change(function () {
        if (this.checked) {
            topping.push($('#Mushroon').val())
        };
    });
    $('#Black').change(function () {
        if (this.checked) {
            topping.push($('#Black').val())
        };
    });
    $('#Tomatoes').change(function () {
        if (this.checked) {
            topping.push($('#Tomatoes').val())
        };
    });
    $('#Green-pepper').change(function () {
        if (this.checked) {
            topping.push($('#Green-pepper').val())
        };
    });

    $("form#form").submit(function (event) {

        event.preventDefault();

        let pizzaName = $("select#flavor").val();
        let pizzaSize = $('select#size').val();
        let pizzaCrust = $('select#crust').val();
        let pizzaTopping = topping;
        let pizzaNumber = $('input#number').val();
        let toppingsPrice = topping.length * 80;
        let sizePrice = $('#size').find('option:selected').attr('price');
        let crustPrice = $('#crust').find('option:selected').attr('price');



        let inputtedTotal = $('select#totals').val();
        let newOrder = new Orderpizza(
            pizzaName, pizzaSize, pizzaCrust, pizzaNumber, pizzaTopping, inputtedTotal

        );
        let totalPrice = Number(sizePrice) + Number(crustPrice) + Number(toppingsPrice)
        totalprice = totalPrice

        console.log(newOrder);
        $('tbody#made-orders').append("<tr>" + '<d>' + newOrder.pizzaname + '</d>' + '<td>' + newOrder.pizzasize + '</td>' + +'<td>' + newOrder.pizzacrust + '</td>' + '<td>' + newOrder.pizzanumber + '</td>' + '<td>' + newOrder.pizzatopping + '</td>' + '<td>' + totalPrice + '</td>' + +"</tr>");

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

        $(function () {
            if (pizzaSize == large) {
                console.log("price is sh." + 2000);
            } else if (pizzaSize == medium) {
                console.log("price is sh. " + 1500);
            } else if (pizzaSize == small) {
                console.log("price is sh. " + 600);
            }



        });
        $(function () {
                if (pizzaCrust == cripsy) {
                    console.log("price is sh." + 150);
                } else if (pizzaCrustcrust == stuffed) {
                    console.log("price is sh. " + 180);
                } else if (pizzaCrust == Gluten - free) {
                    console.log("price is sh. " + 200);
                }

            }),
        
            
        
        
    $("form#form-group").submit(function (event) {
        event.preventDefault();
        let personName = $("#form-group #name").val();
        let personPhone = $("#form-group #phone").val();
        let personLocation = $("#form-group #location").val();
        alert('Hello' + personName + "your order will be delivered between 24 hours to " + personLocation + "." + "You will be charged delivery fee of sh.150." + "Your phone numeber is " + personPhone)

    });


});

function response() {
    alert('Your order will be delivered to Your selected location')
    // alert("click the checkout button to check youor total cost")
}
})