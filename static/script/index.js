document.getElementById('nav-bar').onclick = function () {
	if (document.getElementById('nav-bar').innerHTML == "=") {
		document.getElementById('nav-bar').innerHTML = "X";
		document.getElementById('nav-lt').style.display='block';
	} else {
		document.getElementById('nav-bar').innerHTML = "=";
		document.getElementById('nav-lt').style.display='none';
	}
}