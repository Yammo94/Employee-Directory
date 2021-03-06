$(document).ready(function(){
	function capitalise(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}	
	$.ajax({
			url: 'https://randomuser.me/api/?results=12&nat=us',
			dataType: 'json',
			success: function(data){
			var html_grid="";
			let index;
			for(let i = 0; i < data.results.length; i++)
			{
				var img = data.results[i].picture.medium;
				var first_name = data.results[i].name.first;
				var last_name = data.results[i].name.last;
				var city = data.results[i].location.city;
				var mail = data.results[i].email;
				html_grid+='<div class="details">';
				html_grid+='<div class ="item" id ="'+i+'">';
				html_grid+='<img src ="'+img+'" class="profile-img">';
				
				html_grid+='<p class="heading">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
				html_grid+='<p class="email">'+mail+'</p>';
				html_grid+='<p class="place">'+capitalise(city)+'</p>';
				html_grid+='</div>';//close details class 
				html_grid+='</div>';//close item class
				$('.container').html(html_grid);
				
			}//for closed
				function buildModal(i)
				{
					var modal_html ="";

				var img = data.results[i].picture.large;
				var first_name = data.results[i].name.first;
				var last_name = data.results[i].name.last;
				var city = data.results[i].location.city;
				var mail = data.results[i].email;

				var username = data.results[i].login.username;
				var cell_no = data.results[i].cell;
				var street = capitalise(data.results[i].location.street) ;
				var state = capitalise(data.results[i].location.state);
				var postcode = data.results[i].location.postcode;
				var dob = data.results[i].dob.date;
				var birth = dob.slice(0,10);
				var address = street + ', '+ capitalise(city) +', '+state+', '+postcode;
				modal_html+='<div id ="modal-content">';
				modal_html+='<div class="content">';
				modal_html+='<img src ="'+img+'" class="modal-img">';
				modal_html+='<p class="employee_name">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
				modal_html+='<p class="employee_mail">'+mail+'</p>';
				modal_html+='<p class="employee_city">'+capitalise(city)+'</p>';
				modal_html+='<div class ="hr-line"></div>';
				modal_html+='<p class="employee_phone">'+cell_no+'</p>';
				modal_html+='<p class="address">'+address+'</p>';
				modal_html+='<div class ="employee_birthday">Birthday: ' +birth+'</div>';
				modal_html+='<div class="indicator">';
				modal_html+='<button type="button" class="previous">Prev</button>';
				modal_html+='<button type="button" class="next">Next</button>';
      			
   				modal_html+=' </div>';
				modal_html+='</div>';
				modal_html+='</div>';
				
				$('.modal').html(modal_html);
				$('.modal').show();
				}
			$('.details').on('click', function(e) {
		if(e.target.id) {
			 index = e.target.id;
			console.log('index'+index);
			buildModal(index);
		}
				});
				
				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event){
					var body= document.querySelectorAll('body');
					
					var hasclass = event.target.classList.contains('modal');
					if(hasclass){
						$('.modal').hide();
					}//if closed
				}//window closed
			
var indi =document.querySelector('.indicator');
indi.addEventListener('click',function(event)
{
	console.log("indicator");
	var click_prev= event.target.classList.contains('previous');
	if(click_prev)
	prevImg();
	var click_next= event.target.classList.contains('next');
	if(click_next)
	nextImg();
});
function prevImg() {
	var currentItem;
	currentItem = index;
	console.log("prev currentItem"+currentItem);
  if (currentItem>0) {
  	$('.previous').show();
  	$('.next').show();
    currentItem--;
  }
 else if(currentItem==0)
	{
		$('.previous').hide();
		$('.next').show();
		$('.previous').show();
  	$('.next').show();
	}
  buildModal(currentItem);
}

function nextImg() {
	var currentItem;
  currentItem = index;
	console.log("prev currentItem"+currentItem);
  if (currentItem < 12) {
    currentItem++;

  }
  else if(currentItem==11)
	{
		$('.previous').show();
		$('.next').hide();

	}

  buildModal(currentItem);
}
/*
function x()
{
	console.log("clickked previous");
}
var previ = document.querySelector('.previous');
console.log(previ);
previ.addEventListener('click',x);
/*$('.previous').click(x);
$('.next').click(nextImg);*/
			}//sucess closed
		});	//ajax closed
});//end of document.ready()


