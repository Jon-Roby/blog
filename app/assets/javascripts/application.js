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



//Darkens bar in index.html.erb when cursor hovers
/* 
$(document).ready(function(){
	
});
*/



//Lightbox with notes appears when bar in index.html.erb is clicked.
$(document).ready(function(){



	//Darkens bar in index.html.erb when cursor hovers
	var $overlay = $('<div id="overlay"></div>');
		$("#Bar_Image_Wrapper li")
			.mouseenter(function(){
				$(this).append($overlay.show());
			})
			.mouseleave(function(){
				$overlay.hide();
			});


	//Lightbox with notes appears when accompanying bar with same number is clicked.
	$("#Bar_Image_Wrapper li").click(function(){
		
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

}); 




