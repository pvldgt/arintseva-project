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
    if (document.documentElement.lang === "ru") {
      btn.value = "Отправляется...";
    } else if (document.documentElement.lang === "en") {
      btn.value = "Sending...";
    };

    // EmailJS data
    const serviceID = "service_s9wtj9u";
    const templateID = "template_x8hyl2s";

    // Send the form 
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        // Change the value of the button back to the original and reset the form
        if (document.documentElement.lang === "ru") {
          btn.value = "Отправить";
        } else if (document.documentElement.lang === "en") {
          btn.value = "Send";
        };
        this.reset();
        // Alert the user that the form has been submitted 
        if (document.documentElement.lang === "ru") {
          alert("✅ Ваше сообщение отправлено");
        } else if (document.documentElement.lang === "en") {
          alert("✅ Your message has been sent");
        };
        // Enable the button again 
        btn.disabled = false;
        btn.classList.remove("button--disabled")
      }, (err) => {
        // Change the value of the button back to the original and reset the form
        if (document.documentElement.lang === "ru") {
          btn.value = "Отправить";
        } else if (document.documentElement.lang === "en") {
          btn.value = "Send";
        };
        this.reset();
        // Show the error
        alert(JSON.stringify(err));
        // Enable the button again 
        btn.disabled = false;
        btn.classList.remove("button--disabled")
      });

  });




