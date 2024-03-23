let skillSection = document.querySelector("#skills");
let homeSection = document.querySelector("#home");
let projectSection = document.querySelector("#project");
let skillBox = document.querySelectorAll(".skill-box");
let oneSkillBox = document.querySelector(".skill-box");
let links = document.querySelectorAll(".nav-link");

skillBox = Array.from(skillBox);
window.onscroll = () => {
  console.log(getBottom(projectSection));
  if (Math.trunc(window.scrollY) < 150) {
    handelActiveScroll("home");
  }

  if (
    Math.trunc(window.scrollY) > 400 &&
    Math.trunc(window.scrollY) < Math.trunc(getBottom(skillSection) - 500)
  ) {
    skillBox.forEach((skill) => {
      skill.style = "animation-play-state:running;";
    });
    handelActiveScroll("skills");
  }
  if (
    Math.trunc(window.scrollY) > Math.trunc(projectSection.offsetTop - 100) &&
    Math.trunc(window.scrollY) < Math.trunc(getBottom(projectSection) - 200)
  ) {
    handelActiveScroll("projects");
  }
};

function handelActive() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

function handelActiveScroll(sectionId) {
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(`${sectionId}-tab`)) {
      link.classList.add("active");
    }
  });
}

function handleVideoPlay() {
  let videos = [...document.querySelectorAll(".project-video")];
  videos.forEach((video) => {
    video.onmouseenter = (e) => {
      e.target.play();
    };
    video.onmouseleave = (e) => {
      e.target.pause();
    };
  });
}

function getBottom(section) {
  let offsetBottom = section.offsetTop + section.offsetHeight;
  return offsetBottom;
}
// let projectBottom = projectSection.offsetTop + projectSection.offsetHeight;

handleVideoPlay();

handelActive();

//====== start handling email sending from the client side =============
let form = document.querySelector("form");
let clientName = document.getElementById("from_name");
let clientMail = document.getElementById("email_id");
let clientMessage = document.getElementById("message");

form.onsubmit = (e) => {
  e.preventDefault();
  let params = {
    from_name: clientName.value,
    email_id: clientMail.value,
    message: clientMessage.value,
  };
  emailjs.send("service_9jmy653", "template_6l5xirh", params).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
};
//====== end handling email sending from the client side =============
