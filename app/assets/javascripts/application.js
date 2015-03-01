// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.turbolinks
//= require_tree .

$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

//Lightbox with notes appears when bar in index.html.erb is clicked.
$(document).ready(function(){

	MathJax.Hub.Config({
	  "HTML-CSS": {
	    availableFonts: [],
	    preferredFont: null,
	    webFont: "Latin-Modern",
	    styles: {
	    	".Bar_Notes": {
	    			padding: "7px",
	    			"font-size": "100%"
	    	},
	    }
	  }
	});

	//Darkens bar in index.html.erb when cursor hovers
	var $overlay = $('<div id="overlay"></div>');
	$("#Bar_Image_Wrapper li")
		.mouseenter(function(){
			$(this).append($overlay.show());
		})
		.mouseleave(function(){
			$overlay.hide();
		});

	// Reveals Bar Image Titles
	$("#Bar_Image_Wrapper li")
		.mouseenter(function(){
			var $barNum = $(this).attr('id')
			var $note = $('#' + $barNum + '_Title');
			$($note).show();
		})
		.mouseleave(function(){
			$("#Bar_Image_Titles li").hide()
		});

	//Lightbox with notes appears when accompanying bar with same number is clicked.
	$("#Bar_Image_Wrapper li").click(function(){

		//Get BarX and add it to BarX_Notes
		var $barNum = $(this).attr('id')
		var $note = $('#' + $barNum + '_Notes').show();
		
		var $overlay = $('<div id="overlay"></div>');
		$overlay.append($note);
	
		//Add overlay
		$("body").append($overlay);	

		//Show overlay
		$overlay.show();

		$overlay.click(function(){
			$overlay.hide();
		}); 

	});

	//Hides photo bars and shows main picture.
	$("#Notes").click(function(){
		$('#Photo #homeimage').fadeOut(1000, function(){
			$('#Bar_Image_Wrapper li').slideDown(1000);
			$('#About').hide();
		});
	});

	//Hides photo bars and shows main picture.
	$("#Photo #homeimage").click(function(){
		$('#Photo #homeimage').fadeOut(1000, function(){
			$('#Bar_Image_Wrapper li').slideDown(1000);
			$('#About').hide();
		});
	});

	//Hides main picture and shows photo bars.
	$("#Jon").click(function(){
		$('#Bar_Image_Wrapper li').slideUp(1000, function(){
			$('#Photo #homeimage').fadeIn(1000);
			$('#About').hide();
		});
	});

	//Hides main picture and shows photo bars.
	$("#Roby").click(function(){
		$('#Bar_Image_Wrapper li').slideUp(1000, function(){
			$('#Photo #homeimage').fadeIn(1000);
			$('#About').hide();
		});
	});

	//Shows the navigation.
	$("#AboutNav").click(function(){
		$('#Bar_Image_Wrapper li').slideUp(1000, function(){
			$('#Photo #homeimage').fadeOut(1000);
			$('#About').fadeIn(1000);
		});
	});


	//Darken the main image
	$("#Photo #homeimage")
		.mouseenter(function(){
			$("#Photo #homeimage").append($overlay.show());
		})
		.mouseleave(function(){
			$overlay.hide();
		});


}); 




