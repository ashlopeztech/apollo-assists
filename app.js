// Orcad & Mespeak code

			function recognize_image(){
				document.getElementById('transcription').innerText = "(Recognizing...)"

				OCRAD(document.getElementById("pic"), {
					numeric: true
				}, function(text){
					
				})
			}
			function load_file () {
				var reader = new FileReader();
				reader.onload = function(){
					var img = new Image();
					img.src = reader.result;
					img.onload = function(){
						document.getElementById('nose').innerHTML = ''
						document.getElementById('nose').appendChild(img)
						OCRAD(img, function(text){
							document.getElementById('transcription').className = "done"
							document.getElementById('transcription').innerText = text;
							meSpeak.speak(text);
			    			 meSpeak.loadConfig("mespeak_config.json");
			    			 meSpeak.loadVoice("voices/en/en-us.json"); 
						})
					}
				}
				reader.readAsDataURL(document.getElementById('picker').files[0])
			}

// Jquery code for changing fonts

$("font_options").change(function() {
    //alert($(this).val());
    $('.changeMe').css("font-family", $(this).val());

});
