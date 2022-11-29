var num = 0

function clicado() {
    var header_center = document.getElementsByClassName("header-center")[0]
    header_center.style.display = "block"
    num += 1
    if (header_center.style.display == "block" && num%2==0) {
        header_center.style.display = "none"
    }
}

function first() {
    var box_review = document.getElementsByClassName("box-review")[0]
    box_review.style.justifyContent = "flex-start"

    /* var color_first = document.getElementsByClassName("first")[0]
    color_first.style.backgroundColor = "#7c5912" */
}

function second() {
    var box_review = document.getElementsByClassName("box-review")[0]
    box_review.style.justifyContent = "center"

    var feedback = document.getSelection

    /* var color_second = document.getElementsByClassName("second")[0]
    color_second.style.backgroundColor = "#7c5912" */
}

function third() {
    var box_review = document.getElementsByClassName("box-review")[0]
    box_review.style.justifyContent = "flex-end"

    
    /* var color_third = document.getElementsByClassName("third")[0]
    color_third.style.backgroundColor = "#7c5912" */
}

/* 

function first() {
    var box_review = document.getElementsByClassName("box-review")[0]
    box_review.style.marginLeft = "0px"
}

function second() {
    var box_review = document.getElementsByClassName("box-review")[0]
    box_review.style.marginLeft = "-1024.8px"
}

function third() {
    var box_review = document.getElementsByClassName("box-review")[0]
    box_review.style.marginLeft = "-2049.6px"
}

*/