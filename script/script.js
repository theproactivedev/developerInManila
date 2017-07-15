(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
//    el.addClass("already-visible"); 
	el.animate({left: '350px'});
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
//      el.addClass("come-in");
	  el.fadeIn("slow");
    } 
  });
  
});

$(document).ready(function() {
  $("html").hide();
  $("html").fadeIn("slow");
});

$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});


$(function() {
    $( document ).tooltip();
});

$("form span").hide();

var $firstName = $("#first-name");
var $mail = $("#mail");
var email = document.getElementById("mail");
var $submitButton = $("#submitButton");

function isFirstNameValid() {
  var value = $($firstName).val().length > 0;
  if (value) {
    return true;
  }
  return false;
}

function isEmailValid() {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(filter.test(email.value)) {
    return true;
  }
  return false;
}

//  validation for form
$("#submitButton").click(function(event) {
  event.preventDefault();
  $("form span").hide();
  if(!isFirstNameValid() && isEmailValid()) {
    $firstName.next().next().next().show();
  } else if (isFirstNameValid() && !isEmailValid()) {
    $mail.next().next().next().show();
  } else if (isFirstNameValid() && isEmailValid())  {
    $submitButton.next().next().next().show();
  } else {
    $("form span").show();
    $submitButton.next().next().next().hide();
  }
});

(function($) {

  $(window).resize(function() {
    if ( $(window).width() < 768 ) {
      $("nav").hide();
    }
  }).resize();

});