(function() {
  emailjs.init("MAz2iorQdsu62nPTr");
})();

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_xdj3o94", "template_rakkobj", this)
    .then(function() {
      document.getElementById("response").innerText = "Sign-up successful!";
    }, function(error) {
      document.getElementById("response").innerText = "Failed: " + error.text;
    });
});