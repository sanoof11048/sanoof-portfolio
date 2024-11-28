function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
document.getElementById("submit-form").addEventListener("submit", async function(e) {
    e.preventDefault();
	console.log("clicked")
    if(true){
        var formData = new FormData(this);
    }
try {
	const response = await fetch("https://script.google.com/macros/s/AKfycbwIrf3Z1oLRjVwSQPyXRuYC52T5kp3sRo6IuDMw20C64boxhDxvRNANoQWgX6V3zxpz/exec", {
		method: "POST",
		body: formData,	
	});

	if (response.ok) {
		alert("Form submitted successfully");
		window.location.reload();
	} else {
		throw new Error("Network response was not ok");
	}
} catch (error) {
	console.error("Error:", error);
	alert("Something went wrong");
}		
	}
);



