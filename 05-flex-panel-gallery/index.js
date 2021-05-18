const panelElements = document.querySelectorAll('.panel')



function updater(){
    this.classList.toggle("open")
}

function secondUpdater(e){
if(e.propertyName.includes('flex')){
    this.classList.toggle("open-active")
}
}

panelElements.forEach((panel) => panel.addEventListener("click", updater))
panelElements.forEach((panel) => panel.addEventListener("transitionend", secondUpdater))