  const changeSliderValue = (value) => {
    const rangeLabel = document.getElementById("range-label");
    let emoji = "<img class='image' src='/public/book-it-btn.png'>"; // Initial image

    if (value >= 9) {
      emoji = "<img class='image' src='/public/book-it-happiest.png' alt='Happiest Mask'>";
    } else if (value >= 8) {
      emoji = "<img class='image' src='/public/book-it-happy.png' alt='Happy Mask'>";
    } else if (value >= 7) {
      emoji = "<img class='image' src='/public/book-it-eh.png' alt='Neutral Mask Hotel'>";
    } else if (value >= 6) {
      emoji = "<img class='image' src='/public/book-it-neutral.png' alt='Sorta Sad Mask' class='emoji'>";
    } else if (value >= 5) {
      emoji = "<img class='image' src='/public/book-it-neutral.png' alt='Sorta Sad Mask' class='emoji'>";
    } else if (value >= 4) {
      emoji = "<img class='image' src='/public/book-it-sad.png' alt='Sad Mask '>";
    } else if (value >= 3) {
      emoji = "<img class='image' src='/public/book-it-slightly-sad.png' alt='Slightly Sad Mask '>";
    } else if (value >= 2) {
      emoji = "<img class='image' src='/public/book-it-crying.png' alt='Crying Mask '>";
    } else if (value >= 1) {
      emoji = "<img class='image' src='/public/book-it-mad.png' alt='Mad Mask '>";
    }

    rangeLabel.innerHTML = emoji;
  };

  window.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const logo = document.querySelector('.container img');
    const form = document.querySelector('.signup-form');
  
    // Center the logo initially
    const containerWidth = container.offsetWidth;
    const logoWidth = logo.offsetWidth;
    const leftOffset = (containerWidth - logoWidth) / 2;
    logo.style.left = leftOffset + 'px';

    // Animation to open the form
    setTimeout(function() {
      logo.style.animationName = 'bounce';
      logo.style.animationDuration = '0.5s';
      logo.style.animationIterationCount = 'infinite';
      logo.style.animationTimingFunction = 'linear';

      setTimeout(function() {
        logo.classList.add('opened');
        form.classList.add('opened');
        logo.style.animationName = 'none';
      }, 2000);
    }, 2000);
    
    changeSliderValue(5);
  });
  
  const thumbsUp = document.querySelector(".fa-thumbs-up");
  const thumbsDown = document.querySelector(".fa-thumbs-down");
  const slider = document.getElementById("range-slider");
  thumbsUp.addEventListener("click", () => {
    slider.stepUp();
    changeSliderValue(slider.value);
  });
  
  thumbsDown.addEventListener("click", () => {
    slider.stepDown();
    changeSliderValue(slider.value);
  });
  