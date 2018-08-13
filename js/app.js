$(document).ready(function(){
	function capitalise(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}	
	$.ajax({
			url: 'https://randomuser.me/api/?results=12&nat=us',
			dataType: 'json',
			success: function(data){
			var html_grid="";
			for(let i = 0; i < data.results.length; i++)
			{
				var img = data.results[i].picture.medium;
				var first_name = data.results[i].name.first;
				var last_name = data.results[i].name.last;
				var city = data.results[i].location.city;
				var mail = data.results[i].email;
				html_grid+='<div class ="item">';
				html_grid+='<img src ="'+img+'">';
				html_grid+='<div class="details">';
				html_grid+='<p class="heading">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
				html_grid+='<p class="email">'+mail+'</p>';
				html_grid+='<p class="place">'+capitalise(city)+'</p>';
				html_grid+=' </div>';//close details class 
				html_grid+=' </div>';//close item class
				$('.container').html(html_grid);
				var modal_html ="";
				var username = data.results[i].login.username;
				var cell_no = data.results[i].cell;
				var street = capitalise(data.results[i].location.street) ;
				var state = capitalise(data.results[i].location.state);
				var postcode = data.results[i].location.postcode;
				var dob = data.results[i].dob.date;
				var birth =dob.slice(0,10);
				var address = street + ', '+ capitalise(city) +', '+state+', '+postcode;
				modal_html+='<img src ="'+img+'">';
				modal_html+='<p class="heading">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
				modal_html+='<p class="email">'+mail+'</p>';
				modal_html+='<p class="place">'+capitalise(city)+'</p>';
				modal_html+='<div class="line"></div>';
				modal_html+='<p class="phone">'+cell_no+'</p>';
				modal_html+='<p class="address">'+address+'</p>';
				modal_html+='<div class ="dob">Birthday: ' +birth+'</p>';
				modal_html+= '<span class="close">&times;</span>';
				var modal_content =document.querySelector('.modal-content');
				console.log(modal_html);
				$('.modal-content').html(modal_html);
				var modal = document.getElementById('myModal');  // Get the modal
				var trigge = document.querySelector(".container"); // Get the item that opens the modal
				console.log(trigge);
				var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
				// When the user clicks the item, open the modal 
				trigge.onclick = function(){
					modal.style.display = "block";
					console.log('onclick '+modal_content);
				}
				// When the user clicks on <span> (x), close the modal
				span.onclick = function(){
					modal.style.display = "none";
				}
				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event){
					if(event.target == modal){
						modal.style.display = "none";
					}//if closed
				}//window closed
				}//for closed
				}//sucess closed
		});	//ajax closed
});//end of document.ready()

