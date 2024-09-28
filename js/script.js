document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulating sending data (you can replace this with actual server call logic)
    const responseMessage = document.getElementById("responseMessage");

    if (name && email && message) {
        responseMessage.textContent = "Thank you, " + name + ". Your message has been sent!";
        responseMessage.style.color = "green";

        // Clear form
        document.getElementById("contactForm").reset();
    } else {
        responseMessage.textContent = "Please fill in all fields!";
        responseMessage.style.color = "red";
    }
});
