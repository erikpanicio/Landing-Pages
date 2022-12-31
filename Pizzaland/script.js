var num = 0

var header_center = document.getElementsByClassName("header-center")[0]

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
    var shop_pizza = document.getElementsByClassName("shop-pizza")[0]
    shop_pizza.style.marginRight = "0"
}

function shop_button_right() {
    var shop_pizza = document.getElementsByClassName("shop-pizza")[0]
    shop_pizza.style.marginRight = "840px"
}

function show_social1() {
    var show_social1 = document.querySelector("#team .images1")
    show_social1.style.display = "block"
}

function show_social2() {
    var show_social2 = document.querySelector("#team .images2")
    show_social2.style.display = "block"
}

function show_social3() {
    var show_social3 = document.querySelector("#team .images3")
    show_social3.style.display = "block"
}

function hidden_social1() {
    var hidden_social1 = document.querySelector("#team .images1")
    hidden_social1.style.display = "none"
}

function hidden_social2() {
    var hidden_social2 = document.querySelector("#team .images2")
    hidden_social2.style.display = "none"
}

function hidden_social3() {
    var hidden_social3 = document.querySelector("#team .images3")
    hidden_social3.style.display = "none"
}