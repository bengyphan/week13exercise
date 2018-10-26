document.getElementById("myBtn").addEventListener("click", function() {
var input = document.getElementById("input");
$.ajax({
	url: "https://jsonplaceholder.typicode.com/photos",

	dataType: "json",

	success: function(data) {

		
		for(var i=0; i < data.length; i++)

		if(input.value == data[i].id) {
			document.body.innerHTML += "<h2>" + data[i].title + "</h2>"
			document.body.innerHTML += "<img src='" + data[i].thumbnailUrl + "'>"
		}
		
	},

	type: "GET"
})
})