var num = 0
var clique = 0
var total = 0

var header_center = document.getElementsByClassName("header-center")[0]
var shop_pizza = document.getElementsByClassName("shop-pizza")[0]
var pizza = document.querySelectorAll("div.pizza").length /* estou contando quantas class pizza existem */

function clicked() {
    header_center.style.display = "flex"
    document.body.style.overflowY = "hidden"
    num += 1
    if(num > 1) {
        header_center.style.display = "none"
        document.body.style.overflowY = "visible"
        num = 0
    }
}

function menu_clicado() {
    header_center.style.display = "none"
    document.body.style.overflowY = "visible"
}

function shop_button_left() {
    buttonLeft()

    function buttonLeft() {
        if (clique == -(pizza)/3) {/* para saber quando o usuário não pode mais passar para o lado , criei essa fórmula, se o número de pizzas for sempre par irá sempre funcionar*/

        }
        else {
            total += -840
            shop_pizza.style.marginRight = total + "px"
            clique += -1
        }
    }
}

function shop_button_right() {
    buttonRight()

    function buttonRight() {
        if (clique == (pizza)/3) {
                
        }
        else {
            total += 840
            shop_pizza.style.marginRight = total + "px"
            clique += 1
        }
    }
}

/* Section Team */

var social1 = document.querySelector("#team .images1")
var social2 = document.querySelector("#team .images2")
var social3 = document.querySelector("#team .images3")

function show_social1() {
    social1.style.display = "block"
}

function show_social2() {
    social2.style.display = "block"
}

function show_social3() {
    social3.style.display = "block"
}

function hidden_social1() {
    social1.style.display = "none"
}

function hidden_social2() {
    social2.style.display = "none"
}

function hidden_social3() {
    social3.style.display = "none"
}