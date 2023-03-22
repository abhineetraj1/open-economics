var igm = document.createElement("img");
igm.className="igm";
igm.src="static/png/oil.png";
var a = document.createElement("div");
a.innerHTML = "Loading...";
a.appendChild(igm);
a.className="cld";
document.getElementById('content').style.display="none";
document.getElementById("myvid").style.display="none";

document.body.appendChild(a);

window.onload =function () {
	document.getElementById('content').style.display="block";
	document.getElementById("myvid").style.display="block";
	a.remove();
}