function showMessage(text) {
    const message = document.getElementById("message");

    message.textContent = text;

    setTimeout(function () {
        message.textContent = "";
    }, 4000);
}


function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const userMessage = document.getElementById("userMessage").value;

    alert(
        "Thank you " +
        name +
        "!\n\n" +
        "Aapka message receive ho gaya.\n" +
        "Phone: " +
        phone +
        "\n\n" +
        userMessage
    );
}