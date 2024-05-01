const shuffleInstance = new Shuffle(document.querySelector("#menu .work-items"), {
  itemSelector: ".item",
});

const filterButtons = document.querySelectorAll("#menu .filters button");
filterButtons.forEach((item) => {
  item.addEventListener("click", workFilter);
});

function workFilter() {
  const clickedButton = event.currentTarget;
  const clickedButtonGroup = clickedButton.getAttribute("data-group");

  const activeButton = document.querySelector("#menu .filters button.active");
  activeButton.classList.remove("active");
  clickedButton.classList.add("active");

  shuffleInstance.filter(clickedButtonGroup);
}

let testimonialImages = document.querySelectorAll("#testimonial .images img");
testimonialImages.forEach((item, index) => {
  let position = index + 1;
  item.addEventListener("click", function () {
    document.querySelector("#testimonial .images img.active").classList.remove("active");
    document.querySelector(`#testimonial .images img:nth-child(${position})`).classList.add("active");
    document.querySelector("#testimonial .comments .item.active").classList.remove("active");
    document.querySelector(`#testimonial .comments .item:nth-child(${position})`).classList.add("active");
  });
});
let formItems = document.querySelectorAll("#contact .form input, #contact .form textarea");
formItems.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.classList.add("focus");
  });
  item.addEventListener("keydown", function () {
    item.parentElement.classList.add("focus");
  });
  item.addEventListener("blur", function () {
    if (!item.value) {
      item.parentElement.classList.remove("focus");
    }
  });
});

function initalEmail() {
  emailjs.init("XOA7aiCVVzp5pQLQF");
}

const name1 = document.getElementById("textInput").value;
const email1 = document.getElementById("emailInput").value;
const subject1 = document.getElementById("subjectInput").value;
const message1 = document.getElementById("messageInput").value;
const form = document.getElementById("message-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_j4lg72v", "template_68n9p19", this, "XOA7aiCVVzp5pQLQF").then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      if (response.text == "OK") {
        document.getElementById("textInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("subjectInput").value = "";
        document.getElementById("messageInput").value = "";
        formItems.forEach((item) => {
          item.parentElement.classList.remove("focus");
        });
        window.alert("Message has been sent!");
      }
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );
});
