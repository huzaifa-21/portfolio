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
    Math.trunc(window.scrollY) < Math.trunc(skillSection.offsetTop - 200)
  ) {
    skillBox.forEach((skill) => {
      skill.style = "animation-play-state:running;";
    });
    handelActiveScroll("skills");
  }
  if (
    Math.trunc(window.scrollY) > Math.trunc(projectSection.offsetTop - 100) &&
    Math.trunc(window.scrollY) < Math.trunc(projectSection.offsetBottom - 100)
  ) {
    handelActiveScroll("project");
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
let projectBottom = projectSection.offsetTop + projectSection.offsetHeight;

handleVideoPlay();

handelActive();
