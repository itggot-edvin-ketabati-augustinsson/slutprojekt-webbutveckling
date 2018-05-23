function executeModal(){
    modalBox()
    var timeDelay = 3000
    setTimeout(modalBox , timeDelay)
    clearTimeout(modalBox)
}

function modalBox(){
    var element = document.querySelector(".modal");
    element.classList.toggle("show_modal");
}