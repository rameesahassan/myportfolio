//typing-animation
const typedText = document.querySelector('.typed-text-output');
  const phrases = [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Quick Learner'
  ];
  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  const erasingDelay = 50;
  const nextPhraseDelay = 2000;

  function type() {
    if (isDeleting) {
      typedText.textContent = phrases[phraseIndex].substring(0, characterIndex - 1);
      characterIndex--;
    } else {
      typedText.textContent = phrases[phraseIndex].substring(0, characterIndex + 1);
      characterIndex++;
    }

    if (isDeleting) {
      typingDelay = erasingDelay;
    } else {
      typingDelay = 100; // Adjust this value to control typing speed
    }

    if (!isDeleting && characterIndex === phrases[phraseIndex].length) {
      isDeleting = true;
      typingDelay = nextPhraseDelay;
    }

    if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      phraseIndex++;
      if (phraseIndex === phrases.length) {
        phraseIndex = 0;
      }
    }

    setTimeout(type, typingDelay);
  }
//fade animation
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, nextPhraseDelay);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const fadeText = document.querySelector(".fade-text");

    function fadeAnimation() {
        fadeText.style.opacity = 0;

        setTimeout(function () {
            fadeText.style.opacity = 1;
        }, 1500); // Adjust this value to control the fade-in delay
    }

    fadeAnimation();
});
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  var homeSection = document.getElementById("home");
  var aboutSection = document.getElementById("about");
  var educationSection = document.getElementById("education");
  var skillSection = document.getElementById("skill");
  var serviceSection = document.getElementById("service");
  var contactSection = document.getElementById("contact");

  if (isInViewport(homeSection)) {
    homeSection.classList.add("slide-in");
  }

  if (isInViewport(aboutSection)) {
    aboutSection.classList.add("slide-in");
  }
  if (isInViewport(educationSection)) {
    educationSection.classList.add("slide-in");
  }

  if (isInViewport(skillSection)) {
    skillSection.classList.add("slide-in");
  }

  if (isInViewport(projectSection)) {
    projectSection.classList.add("slide-in");
  }

  if (isInViewport(contactSection)) {
    contactSection.classList.add("slide-in");
  }


}

// Function to handle the click event on the navbar links
function handleClick(event) {
  event.preventDefault();
  var targetId = event.target.getAttribute("href").substring(1);
  var targetSection = document.getElementById(targetId);
  
  if (targetSection) {
    targetSection.classList.add("slide-in");
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  }
}

// Event listeners
window.addEventListener("scroll", handleScroll);
var navbarLinks = document.querySelectorAll("nav a");
navbarLinks.forEach(function(link) {
  link.addEventListener("click", handleClick);
});
