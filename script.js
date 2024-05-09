const timeline = document.querySelector('.timeline');
const footer = document.querySelector('.footer');

// Function to synchronize scrolling speed with animation speed
function syncScroll() {
  const timelineOffset = 0; // Start scrolling from the top of the page
  const footerOffset = footer.offsetTop; // Get the offset of the footer

  // Calculate the distance to scroll
  const distanceToScroll = footerOffset - timelineOffset;

  // Determine the time taken to scroll based on the movedown animation duration
  const animationDuration = 4; // Example duration in seconds
  const timeToScroll = animationDuration * 1000; // Convert to milliseconds

  // Calculate the scroll speed (pixels per millisecond)
  const scrollSpeed = distanceToScroll / timeToScroll;

  // Define the delay before starting the scroll
  const delay = 0; // Delay in milliseconds

  // Smoothly scroll from the top to the footer with a delay and smooth transition
  let startTime = null;
  function step(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    if (timeElapsed >= delay) {
      const distanceScrolled = scrollSpeed * (timeElapsed - delay);
      window.scrollTo(0, timelineOffset + distanceScrolled);
    }
    if (timeElapsed - delay < timeToScroll) {
      window.requestAnimationFrame(step);
    }
  }

  // Call the step function to initiate the scrolling
  window.requestAnimationFrame(step);
}

// Call the syncScroll function when the page loads
window.addEventListener('load', syncScroll);
