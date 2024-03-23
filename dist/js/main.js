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

  if (Math.trunc(window.scrollY) > 500 && getBottom(skillSection, 500)) {
    skillBox.forEach((skill) => {
      skill.style = "animation-play-state:running;";
    });
    handelActiveScroll("skills");
  }
  if (
    Math.trunc(window.scrollY) > Math.trunc(projectSection.offsetTop - 100) &&
    getBottom(projectSection, 200)
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
handelActive();

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

handleVideoPlay();

function getBottom(section, number) {
  let offsetBottom = section.offsetTop + section.offsetHeight;
  let bottom = Math.trunc(window.scrollY) < Math.trunc(offsetBottom - number);
  return bottom;
}
// let projectBottom = projectSection.offsetTop + projectSection.offsetHeight;

//====== start handling email sending from the client side =============
let form = document.querySelector("form");
let clientName = document.getElementById("from_name");
let clientMail = document.getElementById("email_id");
let clientMessage = document.getElementById("message");
let inputs = document.querySelectorAll("input ,textarea");

form.onsubmit = (e) => {
  e.preventDefault();
  let params = {
    from_name: clientName.value,
    email_id: clientMail.value,
    message: clientMessage.value,
  };
  let nameValid = false;
  let mailValid = false;
  let messageValid = false;

  let { from_name: name, email_id: mail, message: msg } = params;
  //================== start name validation ================================

  if (name.length > 0 && isNaN(name)) {
    nameValid = true;
  } else {
    clientName.parentElement.classList.add("not-valid");
  }
  //================== end name validation ==================================

  //================== start email validation ===============================
  // regular experssion for email validation
  let mailReg = /(\D+?|\D+\w+)@\w+.\w+/g;
  if (mail.length > 0 && mail.match(mailReg)) {
    mailValid = true;
  } else {
    clientMail.parentElement.classList.add("not-valid");
  }
  //================== end email validation ===============================
  //================== start message validation ===========================
  if (msg.length > 0) {
    messageValid = true;
  } else {
    clientMessage.parentElement.classList.add("not-valid");
  }
  //================== end message validation =============================
  if (nameValid && mailValid && messageValid) {
    emailjs.send("service_9jmy653", "template_6l5xirh", params).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        clientMail.value = "";
        clientName.value = "";
        clientMessage.value = "";
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  }
};

[...inputs].forEach((input) => {
  input.oninput = (e) => {
    e.target.parentElement.classList.remove("not-valid");
  };
});
//====== end handling email sending from the client side =============
