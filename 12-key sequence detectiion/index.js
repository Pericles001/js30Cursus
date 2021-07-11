(() => {
    // Declare constants for secret code & array to hold keys pressed
    let pressedKeys = []
    const secretCode = 'helloworld'

    // Attach event listener to window object
    window.addEventListener('keyup', (e) => {
      /* If value of secret code at index matching array's length
          is equivalent to the key property of the event, push the
          value into the array. Otherwise, reset the array.
      */
      secretCode[pressedKeys.length] === e.key ?
        pressedKeys.push(e.key) : pressedKeys.length = 0

      /* If array of pressed keys matches secret code
        when joined together, log out a message,
        call the 'cornify_add()' function,
        & reset the array.
      */
      pressedKeys.join('') === secretCode && (()=>{
        console.info('Hello you handsome devil!')
        cornify_add()
        pressedKeys = []
      })()
    })
  })(); // Wrap code in IIFE to avoid polluting the global namespace
