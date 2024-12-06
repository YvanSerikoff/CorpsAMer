const svg = document.querySelector(".body-image");
const points = document.querySelectorAll("circle");
const current = document.querySelector(".current");
let activePointIndex = -1;

const pointsPositions = [];

const popup = document.querySelector(".popup");

const iframe = document.querySelector("iframe");

let actualPoint = "head";

const pointsDetails = {
  head: { name: "Tête", exec: startQuiz },
  throat: { name: "Gorge", exec: startSecheresse },
  heart: { name: "Cœur", exec: startPeche },
  lung: { name: "Poumon", exec: startPeche },
};

const dialogPoints = {
    head: "Bonjour, je suis le pingouin, je suis là pour vous aider",
    throat: "Vous avez une sensation de sécheresse dans la gorge ?",
    heart: "Vous avez des problèmes de cœur ?",
    lung: "Vous avez des problèmes de poumon ?",
}

points.forEach((point) => {
  const { x, y } = point.getBoundingClientRect();
  pointsPositions.push({ x, y });
});

function highlightPoint(index) {
  if (index === activePointIndex) {
    return;
  }

  activePointIndex = index;

  points.forEach((point, i) => {
    if (i === index) {
      point.setAttribute("fill", "white");
      point.classList.add("active");

      console.log(point.getAttribute("data-name"));

      current.textContent = pointsDetails[point.getAttribute("data-name")].name;
      current.innerHTML += `<img src="assets/images/enter.png" width="18" />`;
    } else {
      point.setAttribute("fill", "rgba(255, 255, 255, 0.8)");
      point.classList.remove("active");

      const { x, y } = pointsPositions[index];

      svg.style.transform = `translate(${-x + window.innerWidth / 2}px, ${
        -y + window.innerHeight / 2
      }px)`;
    }
  });
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    highlightPoint(Math.min(activePointIndex + 1, points.length - 1));
  } else if (e.key === "ArrowUp") {
    highlightPoint(Math.max(activePointIndex - 1, 0));
  } else if (e.key === "Enter") {
    const point = points[activePointIndex];

    pinguinSpeak(dialogPoints[point.getAttribute("data-name")]);
    actualPoint = point.getAttribute("data-name");
  }
});

highlightPoint(0);

window.addEventListener("message", (event) => {
  if (event.data === "closeWindow") {
    iframe.src = "";

    iframe.style.display = "none";
  }
});

function closePopup() {
  const popup = document.querySelector(".popup");

  popup.style.display = "none";

  iframe.src = "";
}

function launchGame() {
  pointsDetails[actualPoint].exec();
  document.querySelector(".background-animation").style.display = "none";
}

function startQuiz() {
  console.log("Quiz started");

  popup.style.display = "block";

  iframe.src = "quiz.html";

  iframe.style.display = "block";
}

function startSecheresse() {
  console.log("Secheresse started");
}

function startPeche() {
  console.log("Peche started");
}

function pinguinSpeak(message) {
  const text = document.querySelector(".text-speech p");
  text.innerHTML = message;
  document.querySelector(".background-animation").style.display = "flex";
}
document.getElementById("close-modal").addEventListener("click", () => {
  document.querySelector(".background-animation").style.display = "none";
});
