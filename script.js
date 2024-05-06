const elements = document.querySelectorAll(".fadeInLeft, .fadeInRight");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
      // Element is at least 50% visible (centered)
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, {
  threshold: 1 // Observe when element is at least 50% visible
});

elements.forEach(element => observer.observe(element));