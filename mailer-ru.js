
// Create a variable for the submit button text value
let btn = document.getElementById('form-button');

// Listen for the submit event 
// This line prevents the page from reloading and lets the form finish submitting

document.getElementById('contact-form')
  .addEventListener('submit', function (event) {
    // This keeps the page from reloading
    event.preventDefault();
    // This prevents the form from being submitted twice 
    event.stopImmediatePropagation();

    // Disable the button so that the form isn't submitted multiple times 
    btn.disabled = true;
    btn.classList.add("button--disabled")
    // Change the value of the submit button to let the user now that their form is being submitted
    btn.value = "Отправляется...";
    // EmailJS data
    const serviceID = "service_s9wtj9u";
    const templateID = "template_x8hyl2s";

    // Send the form 
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        // Change the value of the button back to the original and reset the form
        btn.value = "Отправить";
        this.reset();
        // Alert the user that the form has been submitted 
        alert("✅ Ваше сообщение отправлено");
        // Enable the button again 
        btn.disabled = false;
        btn.classList.remove("button--disabled")
      }, (err) => {
        btn.value = "Отправить";
        this.reset();
        alert(JSON.stringify(err));
        // Enable the button again 
        btn.disabled = false;
        btn.classList.remove("button--disabled")
      });

  });




