document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission and page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate phone number (basic validation for digits only, 10-15 characters)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    // Validate email
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Ensure message is not empty
    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // Display success message
    document.getElementById("successMessage").classList.remove("hidden");

    // Clear form fields after submission
    document.getElementById("contactForm").reset();

    // Hide success message after 3 seconds and refresh the page
    setTimeout(() => {
        document.getElementById("successMessage").classList.add("hidden");
        window.location.reload();
    }, 3000);
});