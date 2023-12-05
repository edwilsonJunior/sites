let homec = document.querySelector("span#home")
let noticiac = document.getElementById("noticiatxt")
function home(){
    homec.innerHTML = `<span class="spanheaders" onmouseover="home()" id="home" onmouseout="homed()"><a href="">Home</a></span>`
}
function homed(){
    homec.innerHTML = `<span class="spanheaders" onmouseover="home()" id="home" onmousedown="homed()">Home</span>`
}
function noticia(){
    noticiac.innerHTML = `<a href=""><span class="spanheaders" onmouseover="noticia()" id="home" onmouseout="noticiad()">Notícias</span></a>`
}
function noticiad(){
    noticiac.innerHTML = `<span class="spanheaders" onmouseover="noticia()" id="home" onmouseout="noticiad()">Notícias</span>`
}
