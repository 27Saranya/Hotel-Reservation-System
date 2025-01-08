document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    if (username && password && role) {
        if (role === "Admin") {
            window.location.href = "admin.html";  
        } else if (role === "Customer") {
            window.location.href = "cust.html";  
        }
    } else {
        alert("Please fill in all fields");
    }
});