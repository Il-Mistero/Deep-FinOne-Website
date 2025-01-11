document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('productVideo');
    const videoSection = document.getElementById('product-video');

    // Create an IntersectionObserver to track visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const isVisible = entry.isIntersecting;

            if (isVisible) {
                videoElement.play(); // Play the video when it's in view
            } else {
                videoElement.pause(); // Pause the video when it's out of view
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Start observing the section
    observer.observe(videoSection);
});