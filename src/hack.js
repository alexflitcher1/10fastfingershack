var interval = setInterval(function() { // interval function
  let activeText = document.querySelector('span[class=highlight]'); // get active text
  document.querySelector('input[class=form-control]').value = activeText.innerText; // put in text input
    $('input[class=form-control]').val(activeText.innerHTML).trigger({ // elumate click on the button
        type: 'keyup',
        which: 32 // space key
    });
}, 100); // time
// clearInterval(interval); // to stop interval
