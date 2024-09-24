document.getElementById("loginform").addEventListener("submit", function(event){
    event.preventDefault();

    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "sectionA") {
        alert("Login Successful");
        window.location.href = "api.html";
    } else if (username === "admin1" && password === "section") {
        alert("Login Successful");
        window.location.href = "api.html";
    }
    else {
        alert("Invalid username or password, please try again.");
    }

    
});
