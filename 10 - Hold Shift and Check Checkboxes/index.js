(()=>{
    let lastSelected
    let checkBoxes = document.querySelectorAll('inbox input[tytpe="checkbox"]')

    const multiCheck = (el, e)=>{
        if(lastSelected && e.shiftKey){
            el.checked = lastSelected.checked

            const [startIdx, endIdx] = el.id > lastSelected.id ?
            [lastSelected.id, el.id] :
            [el.id, lastSelected.id]

            const middleInputs = [...checkBoxes].slice(parseInt(startIdx )+1,endIdx )

            middleInputs.forEach(checkBox => checkBox.checked = el.checked)

            lastSelected = el
        }
    }

    checkBoxes.forEach()
})