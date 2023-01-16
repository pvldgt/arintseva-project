
// Create a variable for the submit button text value
let btn = document.getElementById('form-button');

// Listen for the submit event 
document.getElementById('contact-form')
  .addEventListener('submit', function (event) {
    // This line prevents the page from reloading and lets the form finish submitting
    event.preventDefault();

    // Change the value of the submit button to let the user now that their form is being submitted
    btn.value = 'Отправляется...';

    // EmailJS data
    const serviceID = "service_svs287r";
    const templateID = "template_x8hyl2s";

    // Send the form 
    emailjs.sendForm(serviceID, templateID, this, "FhieyttOdI8JteqJU")
      .then(() => {
        // Change the value of the button back to the original and reset the form
        btn.value = "Отправить";
        this.reset();
        // Alert the user that the form has been submitted 
        alert("✅ Ваше сообщение отправлено.");
      }, (err) => {
        btn.value = "Отправить";
        this.reset();
        alert(JSON.stringify(err));
      });
  });

  // Something broke down, try again with CDN in the head tag
  // test preventing from clicking multiple times
  // make a separate file for API key and gitignore it 



