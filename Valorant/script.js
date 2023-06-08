let click = 1 /* melhorar */

function menu() {
	let div_links = document.querySelector(".navegation .links")
	if(click == 1) {
		div_links.style.display = "flex"
		click += 1
	}
	else if(click == 2) {
		div_links.style.display = "none"
		click = 1
	}

}