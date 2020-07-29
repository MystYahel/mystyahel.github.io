function sendEmail() {
    var emailBody = document.getElementById("email-body").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username : "null",
        Password: "kaki", 
        To : "support@google.com",
        From : 'sfhujhh@gmail.com',
        Subject: "fuck you china", 
        body: emailBody, 
    }).then(
		message => alert("mail sent successfully")
	);
};