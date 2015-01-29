$(document).ready(function() {


	$("form").on("submit", function(e) {
		e.preventDefault();
		var title = $("#titleName").val();
		$.getJSON("http://www.omdbapi.com/?s=" + title, function(data) {
			if (data.Response === "False") {
				alert("No Such Items Found!");
			}
			else {
				for (var i = 0; i < data.Search.length; i++) {
					$("ol").append("<li>" + data.Search[i].Title + "</li>");
				}
			}		
		});			
	});	
	$("#titleName").val("");
	// $("ol").on("click", "submit", function(){
	// 	console.log("not me");
 //    	$(this).parent().fadeout(500, function() {
 //      		$(this).remove();
 //      	});
 //    });
});

