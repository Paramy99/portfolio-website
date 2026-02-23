document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbwIA-8WtV-HGBPS3C2m7VKtGS8pKm3ybbPOOS8rPxe3Stj9p0m2JoIweBOJMCr651KL/exec", {
        method: "POST",
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Message Saved Successfully ✅");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        alert("Error sending data ❌");
    });
});