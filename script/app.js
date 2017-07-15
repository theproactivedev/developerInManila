$("form span").hide();

var $firstName = $("#first-name");

function isFirstNameValid() {
	var value = $($firstName).val().length > 0;
    if (value) {
      alert("cute");
    } else {
      alert("no info");
    }
}

$("#submitButton").click(function(event) {
 $firstName.focus(isFirstNameValid).keyup(isFirstNameValid);
});





