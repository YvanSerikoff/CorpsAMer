const introCloud = document.getElementById("intro-cloud");
const startQuizButton = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");
const questionNumberElement = document.getElementById("question-number");
const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const validateButton = document.getElementById("validate-answer");
const explanationElement = document.getElementById("explanation");
const scoreElement = document.getElementById("score");
const multiplierElement = document.getElementById("multiplier");

let currentQuestionIndex = 0;
let selectedOption = null;
let score = 0;
let multiplier = 1;

// Mélanger les questions et en sélectionner 15 au hasard
const shuffledQuestions = shuffleArray(quizData).slice(0, 15);

// Afficher le nuage d'introduction
introCloud.style.display = "block";

// Ajouter un écouteur d'événement pour le bouton "Lancer le quiz"
startQuizButton.addEventListener("click", function () {
  introCloud.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

function loadQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionNumberElement.textContent = currentQuestionIndex + 1;
  questionTextElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  selectedOption = null;
  validateButton.textContent = "Valider";
  explanationElement.style.display = "none";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => {
      // Désélectionner toutes les options
      document
        .querySelectorAll(".option")
        .forEach((btn) => btn.classList.remove("selected"));
      // Sélectionner l'option cliquée
      button.classList.add("selected");
      selectedOption = option;
    });
    optionsContainer.appendChild(button);
  });
}

validateButton.addEventListener("click", () => {
  if (validateButton.textContent === "Valider") {
    if (selectedOption) {
      const currentQuestion = shuffledQuestions[currentQuestionIndex];
      const correctAnswer = currentQuestion.correctAnswer;
      document.querySelectorAll(".option").forEach((button) => {
        if (button.textContent === correctAnswer) {
          button.classList.add("correct");
        }
        if (
          button.textContent === selectedOption &&
          selectedOption !== correctAnswer
        ) {
          button.classList.add("incorrect");
        }
      });
      explanationElement.textContent = currentQuestion.explanation;
      explanationElement.style.display = "block";

      // Mettre à jour le score
      if (selectedOption === correctAnswer) {
        score += 10 * multiplier;
        multiplier *= 1.5; // Augmenter le multiplicateur de manière exponentielle
      } else {
        score -= 5;
        multiplier = 1; // Réinitialiser le multiplicateur en cas de mauvaise réponse
      }
      scoreElement.textContent = score;
      multiplierElement.textContent = `x${multiplier.toFixed(1)}`;
      multiplierElement.classList.toggle("green", multiplier > 1);

      validateButton.textContent = "Question suivante";
    } else {
      alert("Veuillez sélectionner une option avant de valider.");
    }
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      loadQuestion();
    } else {
      // Fin du quiz
      quizContainer.innerHTML = `<h2>Quiz terminé !</h2><p>Votre score final est : ${score}</p><button>Fermer</button>`;

      document.querySelector("button").addEventListener("click", close);
    }
  }
});

function close() {
  window.parent.postMessage("closeWindow", "*");
}

// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
