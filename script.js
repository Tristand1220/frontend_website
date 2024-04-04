function togglemenu(){
    const menu = document.querySelector(".menu-links") /*targetting menu-link elemments*/
    const icon = document.querySelector(".hamburger-icon") /*targetting hamburger-icon elemments*/
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}