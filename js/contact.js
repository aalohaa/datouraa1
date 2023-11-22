function SendEmail() {
    const from_name = document.getElementById('fullName').value;
    const email_id = document.getElementById('email_id').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const data = {
        from_name: from_name,
        email_id: email_id,
        phone: phone,
        subject: subject,
        message: message
    };

    emailjs.send("service_ciny7vv", "template_tz1eg6y", data).then(function (res) {
        alert("Your email sent successfully! " + res.status);
    });
}
