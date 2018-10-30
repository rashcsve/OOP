//validace dat
$( document ).ready(function() {
	$("#amount").validate({
		rules: {
			converter: {
				number: true,
				minlength: 1,
				maxlength: 10
			},

			search: {
				required: true
			}
		}
	});
	
});