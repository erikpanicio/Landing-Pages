var num = 0

function clicado() {
    var header_center = document.getElementsByClassName("header-center")[0]
    header_center.style.display = "block"
    num += 1
    if (header_center.style.display == "block" && num%2==0) {
        header_center.style.display = "none"
    }
}

/* Comments */

var box_review1 = document.getElementsByClassName("box-review1")[0]    
var box_review2 = document.getElementsByClassName("box-review2")[0]
var box_review3 = document.getElementsByClassName("box-review3")[0]

var review_button_first = document.getElementsByClassName("review-button first")[0]
var review_button_second = document.getElementsByClassName("review-button second")[0]
var review_button_third = document.getElementsByClassName("review-button third")[0]

if(review_button_first.style.backgroundColor == "" && review_button_second.style.backgroundColor == "" && review_button_third.style.backgroundColor == ""){
    review_button_first.style.backgroundColor = "#7c5912"
}

function first() {
    box_review1.style.display = "flex"
    box_review2.style.display = "none"
    box_review3.style.display = "none"

    box_review1.style.opacity = "100%"
    box_review2.style.opacity = "0%"
    box_review3.style.opacity = "0%"

    review_button_first.style.backgroundColor = "#7c5912"
    review_button_second.style.backgroundColor = "#ffffff00"
    review_button_third.style.backgroundColor = "#ffffff00"

}

function second() {
    box_review1.style.display = "none"
    box_review2.style.display = "flex"
    box_review3.style.display = "none"

    box_review1.style.opacity = "0%"
    box_review2.style.opacity = "100%"
    box_review3.style.opacity = "0%"

    review_button_first.style.backgroundColor = "#ffffff00"
    review_button_second.style.backgroundColor = "#7c5912"
    review_button_third.style.backgroundColor = "#ffffff00"

}

function third() {
    box_review1.style.display = "none"
    box_review2.style.display = "none"
    box_review3.style.display = "flex"

    box_review1.style.opacity = "0%"
    box_review2.style.opacity = "0%"
    box_review3.style.opacity = "100%"

    review_button_first.style.backgroundColor = "#ffffff00"
    review_button_second.style.backgroundColor = "#ffffff00"
    review_button_third.style.backgroundColor = "#7c5912"

}

/* Rotação automática do comments */

var valor = review_button_first

setInterval(rotacao, 5000)

function rotacao() {
    if (valor == review_button_first) {
        first()
        valor = review_button_second
    }
    else if (valor == review_button_second) {
        second()
        valor = review_button_third
    }
    else if (valor == review_button_third){
        third()
        valor = review_button_first
    }
}

/* TESTE */
/* 
while (largura > "1175px"){
    var largura = screen.width
}

if (largura <= "1175px"){
    box_review1.style.display = "none"
    box_review2.style.display = "none"
    box_review3.style.display = "none"
} */