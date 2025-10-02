document.addEventListener("DOMContentLoaded", () => {
  const createFloatingShapes = () => {
    const shapesContainer = document.getElementById("background-shapes");
    if (!shapesContainer) return;

    const numberOfShapes = 10; // Adjust number of shapes here

    for (let i = 0; i < numberOfShapes; i++) {
      const shape = document.createElement("div");
      shape.classList.add("shape");

      // Random size (e.g., between 20px and 100px)
      const size = Math.random() * 80 + 20;
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;

      // Random starting position across the viewport width
      shape.style.left = `${Math.random() * 100}vw`;

      // Random animation duration and delay
      const duration = Math.random() * 20 + 15; // 15s to 35s
      const delay = Math.random() * 10; // 0s to 10s delay
      shape.style.animation = `float ${duration}s ${delay}s linear infinite`;

      shapesContainer.appendChild(shape);
    }
  };

  const cardContent = document.getElementById("card-content");
  const navButtons = document.querySelectorAll(".nav-buttons button");

  const contentData = {
    bio: `<div class="bio-header">
            <div class="bio-text">
              <p class="greeting">Hey, I'm <b>Joseph</b></p>
              <p class="tagline">I build things for the web.</p>
            </div>
            <div class="bio-image-container">
              <img src="https://placehold.co/100x100/1dadc0/e8e8e8" alt="A picture of Joseph" class="profile-pic" />
            </div>
          </div>
          <p class="bio-summary">I build customized apps and websites to help brands and businesses of any size expand and stand out. I'm based in Ghana, but I collaborate with clients from anywhere. Let's work together to build your digital presence.</p>
          `,
    stuff: `Here's some of my work:
            <div class="project-list">
              <a href="#" target="_blank" class="project-item-link">
                <div class="project-item">
                  <img src="https://placehold.co/120x90/292929/e8e8e8?text=..." alt="Project A" class="project-image" />
                  <div class="project-description">
                  <h3>Project A</h3>
                  <p>A short description of this project.</p>
                  <h3> </h3>
                  <p> </p>
                  </div>
                </div>
              </a>
              <a href="#" target="_blank" class="project-item-link">
                <div class="project-item project-item--reverse">
                  <img src="https://placehold.co/120x90/292929/e8e8e8?text=..." alt="Project " class="project-image" />
                  <div class="project-description">
                  <h3>Project B</h3>
                  <p>A short description of this other project.</p>
                  <h3> </h3>
                  <p> </p>
                  </div>
                </div>
              </a>
            </div>
            `,
    contact: `You can reach me via email:<br>
              <div class="email-container">
                <div class="email-text-wrapper">
                  <a href="mailto:mbabachajoseph@gmail.com" id="email-link">mbabachajoseph@gmail.com</a>
                </div>
                <button id="copy-email-btn" class="copy-btn" title="Copy email address">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 96 960 960" width="16" fill="currentColor">
                    <path d="M180 936q-24 0-42-18t-18-42V276h60v600h480v60H180Zm120-120q-24 0-42-18t-18-42V156q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V156H300v600Zm0 0V156v600Z"/>
                  </svg>
                </button>
              </div>
              <br />
              <br />or here too...
              <div class="socials">
                <a href="https://wa.me/233551529100?text=Hello!%20saw%20you%20online%20and%20wanted%20to%20reach%20out" target="_blank" class="social-link" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/joseph-bacha-9b50a9377/" target="_blank" class="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/jobachx31" target="_blank" class="social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>`,
  };

  const card = document.querySelector(".card");

  // --- Function to handle CV button animation ---
  const handleCvButton = (contentKey) => {
    const cvBtn = document.querySelector(".cv-download-btn");
    if (cvBtn) {
      // Reset any temporary state
      cvBtn.classList.remove("is-downloading");

      // Hide it initially
      cvBtn.classList.remove("visible");

      // If we are on the bio tab, show it after a delay
      if (contentKey === "bio") {
        setTimeout(() => {
          // Only show if it hasn't been recently clicked
          if (!cvBtn.classList.contains("is-downloading")) {
            cvBtn.classList.add("visible");
          }
        }, 400); // 0.4 second delay
      }
    }
  };

  // Set initial active state
  document.getElementById("bio-btn").classList.add("active");
  cardContent.innerHTML = contentData.bio;
  // Set initial height
  card.style.height = `${cardContent.scrollHeight}px`;
  // Handle the CV button for the initial load
  handleCvButton("bio");

  // Create the background animation
  createFloatingShapes();

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Start fade-out animation
      cardContent.style.opacity = 0;

      // 2. Wait for fade-out to finish, then update content
      setTimeout(() => {
        // Remove active class from all buttons
        navButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");

        // Update content based on the button's id
        const contentKey = button.id.replace("-btn", ""); // e.g., "bio-btn" -> "bio"
        cardContent.innerHTML = contentData[contentKey];

        // 3. Set the card's height to match the new content's height
        card.style.height = `${cardContent.scrollHeight}px`;

        // 4. Start fade-in animation for new content
        cardContent.style.opacity = 1;

        // 5. Handle the CV button visibility
        handleCvButton(contentKey);

      }, 200); // This duration should match the CSS opacity transition
    });
  });

  // Event delegation for dynamically added content
  cardContent.addEventListener("click", (event) => {
    const copyButton = event.target.closest("#copy-email-btn");
    const emailLink = event.target.closest("#email-link");

    // Trigger if the copy button OR the email link is clicked
    if (copyButton || emailLink) {
      // If the link was clicked, prevent the default mailto: redirect
      if (emailLink) {
        event.preventDefault();
      }

      const container = event.target.closest(".email-container");
      const theButton = container.querySelector("#copy-email-btn");
      const emailWrapper = container.querySelector(".email-text-wrapper");
      const theEmail = emailWrapper.querySelector("a").textContent;
      const originalContent = emailWrapper.innerHTML;

      // Only run if the animation isn't already active
      if (!theButton.classList.contains("copied")) {
        navigator.clipboard.writeText(theEmail).then(() => {
          theButton.classList.add("copied");
          emailWrapper.classList.add("fading");
           theButton.classList.add("fading");

          // 1. After fade out, show "Copied!"
          setTimeout(() => {
            emailWrapper.innerHTML = "<span>Copied!</span>";
            emailWrapper.classList.remove("fading");

            // 2. After 1 second, fade out "Copied!"
            setTimeout(() => {
              emailWrapper.classList.add("fading");

              // 3. After fade out, restore original email
              setTimeout(() => {
                emailWrapper.innerHTML = originalContent;
                emailWrapper.classList.remove("fading");
              theButton.classList.remove("fading");
                theButton.classList.remove("copied"); // Re-enable button
              }, 200); // Matches CSS transition
            }, 1000); // How long "Copied!" stays visible
          }, 200); // Matches CSS transition
        });
      }
    }
  });

  // Separate event listener for the static CV button
  const cvButton = document.querySelector(".cv-download-btn");
  cvButton?.addEventListener("click", (e) => {
    // Prevent multiple clicks
    if (cvButton.classList.contains("is-downloading")) {
      e.preventDefault();
      return;
    }

    // 1. Trigger the download
    cvButton.querySelector("#cv-download-link")?.click();

    // 2. Add a class to prevent it from reappearing immediately if user switches tabs fast
    cvButton.classList.add("is-downloading");

    // 3. Fade the button out by removing the 'visible' class
    cvButton.classList.remove("visible");
  });

  // --- Project Item Hotspot Effect ---
  card.addEventListener("mousemove", (event) => {
    const projectItem = event.target.closest(".project-item");

    if (projectItem) {
      // Get the position of the cursor relative to the project item
      const rect = projectItem.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Set the CSS custom properties on the element
      projectItem.style.setProperty("--mouse-x", `${x}px`);
      projectItem.style.setProperty("--mouse-y", `${y}px`);
    }
  });
});
