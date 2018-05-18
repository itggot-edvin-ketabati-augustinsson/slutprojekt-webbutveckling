function toggleMenu(){
    var element = document.querySelector(".menu_div");
    element.classList.toggle("show_menu_div");
    
    element = document.querySelector("main");
    element.classList.toggle("fade")
}