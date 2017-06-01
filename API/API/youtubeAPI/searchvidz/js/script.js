//searchbar handler
$(function(){
var searchField = $("#query");
var icon=$("#search-btn");


$(searchField).focus(function(){

var text= $("#query").attr("placeholder");
if($(text) != "" ){
$("#query").removeAttr("placeholder");
}
$(this).animate({


	width:"100%"
},400);

$(icon).animate({

right:"10px"

});


});
$(searchField).blur(function(){



		if(searchField.val() == ""){$(searchField).animate({


width:"45%"
	},400);

$(icon).animate({


		right:"360px"
	},400);
	

	}

});


$("#search-form").submit(function(event){
event.preventDefault();

});	
});

function search(){
//clear Results
$("#results").html("");
$("#buttons").html("");

q =$("#query").val();


$.get(
"https://www.googleapis.com/youtube/v3/search",{

part: "snippet,id",
q: q,
type:'video',
key:'AIzaSyBhHc5h_YbpdBIAnHc20VhoJX6IEa8MxYQ'},
function(data){

var nextPageToken = data.nextPageToken;
var prevPageToken = data.prevPageToken;

#.each(data.items, function(i,item){

var output = getOutput(item);
$("#results").append(output);

});
var buttons = getButtons()


}

	);


}


