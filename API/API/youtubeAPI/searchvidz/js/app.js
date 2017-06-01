
$(function(){
$("form").on("submit", function(event){

event.preventDefault();

var request = gapi.client.youtube.search.list({

part:"snippet",
type:"video",
q:encodeURIComponent($("#query").val()).replace(/%20/g, "+"),
maxResults: 10,
order:"viewCount",

});

request.execute(function(response){



	var results = response.result;
	$.each(results,function(index,item){


		console.log();
	});
});

});

function init(){

gapi.client.setApiKey("AIzaSyBhHc5h_YbpdBIAnHc20VhoJX6IEa8MxYQ");
gapi.client.load("youtube",'v3' );


}
	
