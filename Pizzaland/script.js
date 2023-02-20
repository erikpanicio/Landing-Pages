/* Menu mobile */

var open_menu = document.querySelector(".open-menu")
var menu_mobile = document.querySelector(".menu-mobile")
var close_menu = document.querySelector(".close-menu")

function openMenu() {
    open_menu.style.visibility = "hidden"
    menu_mobile.style.right = "0px"
    close_menu.style.right = "155px" 
}

function closeMenu() {
    open_menu.style.visibility = "visible"
    menu_mobile.style.right = "-200px"
    close_menu.style.right = "-200px"
}

/* Slider */

var slider2 = document.querySelector(".slider2")

/* preciso disso para que quando a tela for redimencionada ela siga o tamanho correto */
window.addEventListener("resize", function () {
    var tela = document.body.clientWidth
})

function transitionButton1() {
    slider2.style.transform = `translate3d(0px, 0px, 0px)`
}

function transitionButton2() {
    var tela = document.body.clientWidth
    /* let tela = window.clientWidth */
    slider2.style.transform = `translate3d(${-tela}px, 0px, 0px)`
    /* var open_menu = document.querySelector(".open-menu")
    open_menu.style.cssText = "position: absolute; top: 40px; right: 20px;" */
}

function transitionButton3() {
    var tela = document.body.clientWidth
    /* let tela = window.clientWidth */
    slider2.style.transform = `translate3d(${-tela*2}px, 0px, 0px)`
}

/* Information */

var n = 0

setInterval(colocar, 2500)

function colocar() {
    var information = document.getElementsByClassName("information")[n]
    information.classList.add("check")
    setTimeout(remover, 2500)
    function remover() {
        information.classList.remove("check")
    }
    n += 1
    if (n > 2) {
        n = 0
    }
}



/* 

var n = 0

setInterval(colocar, 2000)

function colocar() {
    var information = document.getElementsByClassName("information")[n]
    if (information.classList.contains == true){
        information.classList.remove("check")
    }
    else {
        var information = document.getElementsByClassName("information")[n]
        information.classList.add("check")
    }
    n += 1
    if (n > 2) {
        n = 0
    }
}

*/


/* 

var n = 0

setInterval(colocar, 2500)

var information = document.getElementsByClassName("information")[0]

information.classList.add("check")

function colocar() {
    for (var c=0;c<3;c++) {
        var information = document.getElementsByClassName("information")[c]
        if (information.classList.contains("check") == true) {
            information.classList.remove("check")
            setInterval(remover, 2500)
            function remover() {
                var information = document.getElementsByClassName("information")[c+1]
                information.classList.add("check")
            }
        }
    }
}

*/

/* 

var n = 0

setInterval(colocar, 2500)

function colocar() {
    var information = document.getElementsByClassName("information")[n]
    if (information.classList.contains("check") == false) {
        information.classList.add("check")
    }
    else {
        setTimeout(remover, 2500)
        function remover() {
            information.classList.remove("check")
        }
    }
    n += 1
    if (n > 2) {
        n = 0
    }
}

*/

/* Shop */

var clique = 0
var total = 0
var shop_pizza = document.querySelector(".shop-pizza")
var pizza = document.querySelectorAll("div.pizza").length /* estou contando quantas class pizza existem */

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