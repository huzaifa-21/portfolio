let skillSection = document.querySelector("#skills");
let homeSection = document.querySelector("#home");
let skillBox = document.querySelectorAll(".skill-box");
let oneSkillBox = document.querySelector(".skill-box");
let links = document.querySelectorAll(".nav-link");
skillBox = Array.from(skillBox);

window.onscroll = () => {
  if (Math.trunc(window.scrollY) < 150) {
    handelActiveScroll("home");
  }

  if (
    Math.trunc(window.scrollY) > 500 &&
    Math.trunc(window.scrollY) < Math.trunc(skillSection.offsetTop - 200)
  ) {
    skillBox.forEach((skill) => {
      skill.style = "animation-play-state:running;";
    });
    handelActiveScroll("skills");
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

handelActive();
