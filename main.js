//email API
function sendEmail(){
    Email.send({
        SecureToken : "3f335d8a-77aa-48e8-a341-7a4346143150",
        To : 'selloanephitsane@gmail.com',
        From : "smtp@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

//highlighting active menu item
$('li a').on('click', function(){
    $('li a').removeClass('active');
    $(this).toggleClass('active');
 })

 //for getting location of user API
var x = document.getElementById("socials");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}