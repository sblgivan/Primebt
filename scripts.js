// Wait for DOM to load before running any scripts
document.addEventListener("DOMContentLoaded", function () {

  // Bot Drawer Toggle Functionality
  const drawerButton = document.querySelector('.drawer-button');
  const botDrawer = document.querySelector('.drawer');

  if (drawerButton) {
    drawerButton.addEventListener('click', function () {
      if (botDrawer.classList.contains('show')) {
        botDrawer.classList.remove('show');
      } else {
        botDrawer.classList.add('show');
      }
    });
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 60,  // Offset for the header
        behavior: "smooth"
      });
    });
  });

  // Scroll Animation for Landing Page Content (can be modified to other animations)
  const landingContent = document.querySelector('.landing-content');
  if (landingContent) {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        landingContent.style.opacity = 1 - scrollPosition / 500;
      } else {
        landingContent.style.opacity = 1;
      }
    });
  }

  // Basic Form Validation (for future forms like contact or order forms)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      const nameField = document.querySelector('#name');
      const emailField = document.querySelector('#email');
      const messageField = document.querySelector('#message');
      
      if (!nameField.value || !emailField.value || !messageField.value) {
        event.preventDefault();
        alert("All fields must be filled out.");
      } else if (!validateEmail(emailField.value)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
      }
    });
  }

  // Email Validation Helper Function
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Dynamic Team Member Profiles or Bot Listings (example to fetch or create elements dynamically)
  const teamSection = document.querySelector('.about-team');
  if (teamSection) {
    const teamMembers = [
      { name: "John Doe", title: "CEO", img: "assets/images/team1.jpg" },
      { name: "Jane Smith", title: "CTO", img: "assets/images/team2.jpg" },
      { name: "Bob Johnson", title: "Lead Developer", img: "assets/images/team3.jpg" }
    ];

    teamMembers.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('team-member');
      memberDiv.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <p>${member.name} - ${member.title}</p>
      `;
      teamSection.appendChild(memberDiv);
    });
  }

});
      
