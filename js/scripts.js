document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful! (Backend authentication required)");
        window.location.href = "dashboard.html"; 
    } else {
        alert("Please enter valid credentials.");
    }
});
