(() => {

    const pressed = [];
    const secretCode = 'Pericles'

    window.addEventListener('keyup', (e) => {
        console.log(e.key);
        pressed.push(e.key);
        console.log(pressed);
    })
})(); // Wrap code in IIFE to avoid polluting the global namespace
