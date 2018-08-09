$( document ).ready(function() {
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
	  let users = data.results;
   var html_grid="";
  
 
	  $.each(data.results, function( index, value ) {
	  let i=0;
	  html_grid='<div class ="item-'+index+'">';
	  html_grid+=' <img src ="'+value.picture.medium+'">';
	  html_grid+='<div class="details">';
	  html_grid+='<p class="heading">'+value.name.title+ ' '+value.name.first+' '+value.name.last+'</p>';
	  html_grid+='<p class="email">'+value.email+'</p>';
	  html_grid+='<p class="place">'+value.location.city+'</p>';
	  html_grid+=' </div>';//close details class 
	  html_grid+=' </div>';//close item class
	  $('.container').html(html_grid);

		console.log(index);
	  });
	   
  
  }
   
});
});//end of document.ready()

