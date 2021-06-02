(()=>{
    let lastSelected
    let checkBoxes = document.querySelectorAll('inbox input[tytpe="checkbox"]')

    const multiCheck = (el, e)=>{
        if(lastSelected && e.shiftKey){
            el.checked = lastSelected.checked
        }
    }
})