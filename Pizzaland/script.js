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

var slider2 = document.querySelector("#slider2")

var button1 = document.querySelector(".transition-button1")
var button2 = document.querySelector(".transition-button2")
var button3 = document.querySelector(".transition-button3")

var slidenum = 0

function transitionButton1() {
    slider2.style.transform = `translate3d(0px, 0px, 0px)`
    button1.style.backgroundColor = "#FBB403"
    button2.style.backgroundColor = "transparent"
    button3.style.backgroundColor = "transparent"
    slidenum = 1
}

function transitionButton2() {
    var tela = document.body.clientWidth
    slider2.style.transform = `translate3d(${-tela}px, 0px, 0px)`
    button1.style.backgroundColor = "transparent"
    button2.style.backgroundColor = "#FBB403"
    button3.style.backgroundColor = "transparent"
    slidenum = 2

}

function transitionButton3() {
    var tela = document.body.clientWidth
    slider2.style.transform = `translate3d(${-tela*2}px, 0px, 0px)`
    button1.style.backgroundColor = "transparent"
    button2.style.backgroundColor = "transparent"
    button3.style.backgroundColor = "#FBB403"
    slidenum = 3
}

/* preciso disso para que quando a tela for redimencionada ela siga o tamanho correto */
window.addEventListener("resize", function () {
    if(slidenum == 1) {
        transitionButton1()
    }
    else if(slidenum == 2) {
        transitionButton2()
    }
    else if(slidenum == 3) {
        transitionButton3()
    }
})

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

/* Reservation */

var data = new Date()

data = data.getDay()+1
console.log(data)

if(data == 2 || data == 3) {
    /* 07:00 AM - 02:00 PM */
}
else if(data == 4 || data == 5) {
    /* 06:00 AM - 01:00 PM */
    var optgroup = document.querySelector("#reservation .optgroup")
    optgroup.innerHTML += "<option></option>"
}
else if(data == 6){
/* fechado */
}
else if(data == 7 || data == 1) {
    /* 07:30 AM - 04:00 PM */
}

