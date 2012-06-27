// show and hide sections of a form
function preparePage() {
	document.forms.myform.onclick = function() {
	radio = document.forms.myform.np;
	console.log(radio);
	if (radio[0].checked) {
			 //use CSS style to show it
			document.getElementById("Toi").style.display = "block";
		} else {
			// hide the div
		document.getElementById("Toi").style.display = "none";
		}
	if (radio[1].checked) {
			 //use CSS style to show it
			document.getElementById("Hindu").style.display = "block";
		} else {
			// hide the div
		document.getElementById("Hindu").style.display = "none";
		}
	if (radio[2].checked) {
			 //use CSS style to show it
			document.getElementById("Ht").style.display = "block";
			document.forms.myform.text.style.display = "none";

			} else {
			// hide the div
		document.getElementById("Ht").style.display = "none";
		}
		};
	// now hide it on the initial page load.
	document.getElementById("Toi").style.display = "none";
	document.getElementById("Hindu").style.display = "none";
	document.getElementById("Ht").style.display = "none";
	document.forms.myform.text.style.display = "none";
	}

window.onload =  function() {
	preparePage();
};
