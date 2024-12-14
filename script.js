
document.addEventListener("DOMContentLoaded", () => {
    const giftBox = document.getElementById("giftBox");
    const message = document.getElementById("message");

    const gameArea = document.getElementById("game-area");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("timer");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const quizContent = document.getElementById("quiz-content");
    // Game Logic
    let score = 0;
    let timeLeft = 60;
    const cats = [];
  
    function spawnCat() {
      const cat = document.createElement("div");
      cat.classList.add("cat");
      cat.textContent = "🐱";
      cat.style.top = `${Math.random() * 90}%`;
      cat.style.left = `${Math.random() * 90}%`;
      cat.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        cat.remove();
        if (score === 10) popup.classList.remove("hidden");
      });
      gameArea.appendChild(cat);
      cats.push(cat);
      setTimeout(() => cat.remove(), 2000);
    }
  
    const gameTimer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        spawnCat();
      } else {
        clearInterval(gameTimer);
      }
    }, 1000);
  
    // Quiz Logic
  const quizQuestions = [
    { question: "What's your favorite flower?", options: ["Rose", "Sunflower"], correct: "Sunflower" },
    { question: "What's your favorite drink?", options: ["Tea", "Cold Coffee"], correct: "Cold Coffee" },
    { question: "What's your favorite animal?", options: ["Dog", "Cat"], correct: "Cat" },
    { question: "How beautifull you are princesss?", options: ["Infinitly ♥♥", "Thodu Sa"], correct: "Infinitly ♥♥" },
    { question: "How strong my cutuuu is?", options: ["Little", "Very Strong ♥♥"], correct: "Very Strong ♥♥" }
  ];

  const quizProgress = document.getElementById("quiz-progress");
  const quizQuestion = document.getElementById("quiz-question");
  const quizOptions = document.getElementById("quiz-options");

  let currentQuestion = 0;
  let scores = 0;

  function loadQuestion() {
    const questionData = quizQuestions[currentQuestion];
    quizProgress.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    quizQuestion.textContent = questionData.question;
    quizOptions.innerHTML = "";
    questionData.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "quiz-button";
      btn.onclick = () => checkAnswer(option);
      quizOptions.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    const correct = quizQuestions[currentQuestion].correct;
    if (selected === correct) {
      scores++;
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) {
        loadQuestion();
      } else {
        quizQuestion.textContent = `Congratulations! 🎉 You scored ${scores} out of ${quizQuestions.length}`;
        quizOptions.innerHTML = "";
      }
    } else {
      alert("Try again!");
    }
  }

  loadQuestion();


  magicButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    giftBox.classList.remove("hidden");  // Make sure the gift box is visible
    message.classList.add("hidden");  // Make sure the message is hidden initially
  });
  // Show popup on button click
  document.getElementById("magicButton").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("hidden");
  });
  giftBox.addEventListener("click", () => {
    giftBox.classList.add("hidden"); // Hide the gift box
    message.classList.remove("hidden"); // Show the sweet message
  });
  // Close popup
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });

});




  