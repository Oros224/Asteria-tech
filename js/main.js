document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        // Prevent form submission for validation
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;
        let errorMessage = "";

        if (name === "") {
            isValid = false;
            errorMessage += "Please enter your name.\n";
        }

        // regex patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            isValid = false;
            errorMessage += "Please enter your email.\n";
        } else if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        if (message === "") {
            isValid = false;
            errorMessage += "Please enter a message.\n";
        }

        if (!isValid) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
            contactForm.submit(); 
        }
    });
});
