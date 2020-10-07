function menuFunction() {
    var x = document.getElementById("main");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

function sendEmail(){
    Email.send({
        SecureToken : "42803bd8-5766-4d49-bcb0-efa026191551",
        To : 'selloanephitsane@gmail.com',
        From : "selloanephitsane@gmail.com.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    smtp.UseDefaultCredentials = false;
    smtp.EnableSsl = true;
}