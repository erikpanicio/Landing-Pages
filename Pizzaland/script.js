/* Variáveis */

var num = 0
var clique = 0
var total = 0

var open_menu = document.querySelector(".open-menu")
var menu_mobile = document.querySelector(".menu-mobile")
var close_menu = document.querySelector(".close-menu")
var shop_pizza = document.querySelector(".shop-pizza")
var pizza = document.querySelectorAll("div.pizza").length /* estou contando quantas class pizza existem */

/* Menu */

function openMenu() {
    open_menu.style.visibility = "hidden"
    menu_mobile.style.right = "0px"
    close_menu.style.right = "155px" /* teste */
    /* close_menu.style.display = "block" */

    
}

function closeMenu() {
    open_menu.style.visibility = "visible"
    /* menu_mobile.style.display = "none" */
    menu_mobile.style.right = "-200px"
    close_menu.style.right = "-200px" /* teste */
    /* close_menu.style.display = "none" */
    
}

/* Shop */

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

/* Passar automático */



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

/* Section gallery */

var gallery_fullscreen = document.querySelector("#gallery .gallery-fullscreen")

/* melhorar (deixar mais automático) */

function open_fullscreen(imagem) {
    gallery_fullscreen.style.display = "flex"
    document.body.style.overflowY = "hidden"

    var image_gallery_fullscreen = document.querySelector(".gallery-fullscreen img")

    if (imagem == 1) {
        let image_gallery = document.querySelector(".gallery-box-grid .item1 img")
        var image_gallery_src = image_gallery.getAttribute("src")
        image_gallery_fullscreen.setAttribute("src", image_gallery_src)
    }
    else if (imagem == 2) {
        let image_gallery = document.querySelector(".gallery-box-grid .item2 img")
        var image_gallery_src = image_gallery.getAttribute("src")
        image_gallery_fullscreen.setAttribute("src", image_gallery_src)
    }
    else if (imagem == 3) {
        let image_gallery = document.querySelector(".gallery-box-grid .item3 img")
        var image_gallery_src = image_gallery.getAttribute("src")
        image_gallery_fullscreen.setAttribute("src", image_gallery_src)
    }
    else if (imagem == 4) {
        let image_gallery = document.querySelector(".gallery-box-grid .item4 img")
        var image_gallery_src = image_gallery.getAttribute("src")
        image_gallery_fullscreen.setAttribute("src", image_gallery_src)
    }
    else if (imagem == 5) {
        let image_gallery = document.querySelector(".gallery-box-grid .item5 img")
        var image_gallery_src = image_gallery.getAttribute("src")
        image_gallery_fullscreen.setAttribute("src", image_gallery_src)
    }
    else if (imagem == 6) {
        let image_gallery = document.querySelector(".gallery-box-grid .item6 img")
        var image_gallery_src = image_gallery.getAttribute("src")
        image_gallery_fullscreen.setAttribute("src", image_gallery_src)
    }
}

function close_fullscreen() {
    gallery_fullscreen.style.display = "none"
    document.body.style.overflowY = "visible"
}