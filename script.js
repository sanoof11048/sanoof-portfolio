function topFunction() {
  document.documentElement.scrollTop = 0
}

document
  .getElementById("submit-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (!name || !email || !message) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData(this);
    console.log(formData)  
    console.log(this)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwIrf3Z1oLRjVwSQPyXRuYC52T5kp3sRo6IuDMw20C64boxhDxvRNANoQWgX6V3zxpz/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully",
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
        });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  });
