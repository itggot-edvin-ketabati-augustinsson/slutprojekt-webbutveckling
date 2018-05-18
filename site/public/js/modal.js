function execute(){
    modalBox()
    var timeDelay = 3000
    setTimeout(modalBox , timeDelay)
    clearTimeout(modalBox)
}

function modalBox(){
    var element = document.querySelector(".bokat");
    element.classList.toggle("show_bokat");
}