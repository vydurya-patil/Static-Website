// JavaScript function to scroll to the products section
function showProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Add a basic form validation message on submit
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
});

