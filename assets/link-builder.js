$(function() {

	$(document).ready(function(){

		$('#generate_link').click(function(evt) {
			evt.preventDefault();

			var url = $('input[name=url]').val();
			var source = $('select[name=utm_source]').val();
			var medium = $('select[name=utm_medium]').val();
			var campaign = $('select[name=utm_campaign]').val();
			var term = $('select[name=utm_term]').val();
			var content = $('input[name=utm_content]').val();

			if( url === '' ) {
				alert('You need to enter a URL');
				return;
			}

			if( source === '' ) {
				alert('You need to enter a Source');
				return;
			}

			if( medium === '' ) {
				alert('You need to enter a Medium');
				return;
			}


			if( campaign === '' ) {
				alert('You need to enter a Campaign');
				return;
			}

			if( term === '' ) {
				alert('You need to enter a Term');
				return;
			}

			if( content === '' ) {
				alert('You need to enter a Content Identifier');
				return;
			}

			var final_url = url+'?=utm_source'+source+'&utm_medium='+medium+'&utm_campaign='+campaign+'&utm_term='+term+'&utm_content='+content;

			$('input[name=final_url]').val(final_url);
		});

	});

});
