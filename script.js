// locomotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.1,
  });
  
  // Optional: Auto-play video on hover
  document.querySelectorAll(".product-card").forEach(card => {
    const video = card.querySelector("video");
    card.addEventListener("mouseenter", () => video.play());
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
  