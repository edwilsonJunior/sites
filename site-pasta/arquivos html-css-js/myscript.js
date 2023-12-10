var iconMenu = document.querySelectorAll("div#icone")
iconMenu.addEventListener('click', ()=>{
    let menu = document.getElementById("menu")
    menu.classList.add('.show')
    menu.classList.remove('.hide')
})