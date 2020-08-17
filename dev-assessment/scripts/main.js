"use strict";

//show/hide popup
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}; // form validation


function validateEmail(e) {
  var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var form = e.target.closest("form");
  var email = form.querySelector("input[type=email]");
  var test = mailformat.test(email.value); // because chrome and firefox default mail validation does not allow to do good validation except pattern attribute

  if (test) {
    email.setCustomValidity(''); //for Firefox

    form.submit();
  } else if (email.value.length == 0) {
    email.setCustomValidity("Please provide e-mail");
  } else {
    email.setCustomValidity("Seems it's not a valid e-mail");
  }

  ;
}
//# sourceMappingURL=main.js.map