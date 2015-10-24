$(function() {
  // Handler for .ready() called.

//Mobile Navigation

$( "li.mobileport" ).click(function() {
  $( 'ul.mobileportdetail' ).slideToggle('medium');
  });

$( "li.mobileinfo" ).click(function() {
  $( 'ul.mobileinfodetail' ).slideToggle('medium');
  });



//Main Navigation 
	  	
$("li.port").hover(
  function () {
     $('ul.portdetail').slideDown('medium');
  }, 
  function () {
     $('ul.portdetail').slideUp('medium');
  }
);

$("li.info").hover(
  function () {
     $('ul.infodetail').slideDown('medium');
  }, 
  function () {
     $('ul.infodetail').slideUp('medium');
  }
);

//Main Navigation End

	});

