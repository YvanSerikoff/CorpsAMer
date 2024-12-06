const svg = document.querySelector(".body-image");
const points = document.querySelectorAll("circle");
const current = document.querySelector(".current");
let activePointIndex = -1;

const pointsPositions = [];

const pointsDetails = {
  head: { name: "Tête", exec: startQuiz },
  throat: { name: "Gorge", exec: startSecheresse },
  heart: { name: "Cœur", exec: startPeche },
  lung: { name: "Poumon", exec: startPeche },
};

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

    pointsDetails[point.getAttribute("data-name")].exec();
  }
});

highlightPoint(0);

// Quiz

function startQuiz() {
  console.log("Quiz started");
}

function startSecheresse() {
  console.log("Secheresse started");
}

function startPeche() {
  console.log("Peche started");
}
