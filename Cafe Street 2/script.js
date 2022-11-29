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
    var box_review1 = document.getElementsByClassName("box-review1")[0]    
    var box_review2 = document.getElementsByClassName("box-review2")[0]
    var box_review3 = document.getElementsByClassName("box-review3")[0]

    box_review1.style.display = "flex"
    box_review2.style.display = "none"
    box_review3.style.display = "none"
}

function second() {
    var box_review1 = document.getElementsByClassName("box-review1")[0]    
    var box_review2 = document.getElementsByClassName("box-review2")[0]
    var box_review3 = document.getElementsByClassName("box-review3")[0]

    box_review1.style.display = "none"
    box_review2.style.display = "flex"
    box_review3.style.display = "none"


}

function third() {
    var box_review1 = document.getElementsByClassName("box-review1")[0]    
    var box_review2 = document.getElementsByClassName("box-review2")[0]
    var box_review3 = document.getElementsByClassName("box-review3")[0]

    box_review1.style.display = "none"
    box_review2.style.display = "none"
    box_review3.style.display = "flex"
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