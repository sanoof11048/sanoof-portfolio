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

// ==========================================================================
// COMPACT BENTO GRID PROJECTS ENTRANCE ANIMATION (GSAP / IntersectionObserver)
// ==========================================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBentoProjects);
} else {
  initBentoProjects();
}

function initBentoProjects() {
  const bentoGrid = document.querySelector('.bento-grid');
  if (!bentoGrid) return;

  const bentoTiles = document.querySelectorAll('.bento-tile');
  if (!bentoTiles.length) return;

  // One-time entrance animation: fade in + scale from 0.96 to 1 with ~70ms stagger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(bentoTiles,
      { opacity: 0, scale: 0.96, y: 24 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bentoGrid,
          start: 'top 82%',
          once: true
        }
      }
    );
  } else if ('IntersectionObserver' in window) {
    // Fallback using IntersectionObserver
    bentoTiles.forEach(tile => {
      tile.style.opacity = '0';
      tile.style.transform = 'scale(0.96) translateY(24px)';
      tile.style.transition = 'opacity 550ms ease-out, transform 550ms ease-out';
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bentoTiles.forEach((tile, index) => {
            setTimeout(() => {
              tile.style.opacity = '1';
              tile.style.transform = 'scale(1) translateY(0)';
            }, index * 70);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(bentoGrid);
  }
}

