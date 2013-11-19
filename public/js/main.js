var date = Math.round((new Date()).getTime() / 1000);
console.log(date);

var dt = new Date(date);
console.log(dt);

/*----------------SOCKET STUFF------------------*/

/*----------------END SOCKET STUFF------------------*/

$('.landing-create-document').on("click", function() {
	var owner = $('#landing-create-email').val();
	var title = $('#landing-create-title').val();
	//Ajax call - create doc
	$.ajax({
		url : "/action/create_document",
		type : "post",
		dataType : "json",
		data : {
			'owner' : owner,
			'title' : title
		},
		success : function(response) {
			console.log(response);
		}
	});

	//header to document/id

});

