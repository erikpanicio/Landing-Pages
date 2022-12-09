var num = 0

function clicked() {
    var header_center = document.getElementsByClassName("header-center")[0]
    header_center.style.display = "flex"
    document.body.style.overflowY = "hidden"
    num += 1
    if(num > 1) {
        header_center.style.display = "none"
        document.body.style.overflowY = "visible"
        num = 0
    }
}