const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answers: [
            { text: 'Shark', correct: false},
            { text: 'Blue Whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'Which is the smallest continent in the world',
        answers: [
            { text: 'Asia', correct: false},
            { text: 'Africa', correct: false},
            { text: 'Arctic', correct: false},
            { text: 'Australia', correct: true},
        ]
    },
    {
        question: 'Which is the largest desert in the world',
        answers: [
            { text: 'Kalahari', correct: false},
            { text: 'Gobi', correct: false},
            { text: 'Sahara', correct: false},
            { text: 'Antarctica', correct: true},
        ]
    },
    {
        question: 'Which is the deepest trench in the world',
        answers: [
            { text: 'Ganga', correct: false},
            { text: 'Yamuna', correct: false},
            { text: 'Nile', correct: false},
            { text: 'Mariana', correct: true},
        ]
    }
];

const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-button');
const nextBtnEl = document.getElementById('next-button');

let currentScore = 0;
let currentQuestionIndex = 0;

const selectAnswer = (e) => {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct;
    if (isCorrect) {
      selectedButton.classList.add('correct');
      currentScore++;
    } else {
      selectedButton.classList.add('incorrect');
    }
    Array.from(answerBtnEl.children).forEach(button => {
      if (button.dataset.correct === 'true') {
          button.classList.add('correct');
      }
      button.disabled = true;
    })
    nextBtnEl.style.display = 'block';
}

const resetState = () => {
    nextBtnEl.style.display = 'none';
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    questionEl.innerText = questionNumber + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const buttonEl = document.createElement('button');
        buttonEl.classList.add('button');
        buttonEl.innerText = answer.text;
        answerBtnEl.appendChild(buttonEl);
        if (answer.correct) {
            buttonEl.dataset.correct = answer.correct;
        }
        buttonEl.addEventListener('click', selectAnswer)
    })
}

const startQuiz = () => {
    currentQuestionIndex = 0;
    currentScore = 0;
    nextBtnEl.innerText = 'Next';
    showQuestion();
}

const showScore = () => {
    resetState();
    questionEl.innerText = `You scored ${currentScore} out of ${questions.length}`;
    nextBtnEl.innerText = 'Play Again';
    nextBtnEl.style.display = 'block';
}

const handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

startQuiz();

nextBtnEl.addEventListener('click', () => {
   if (currentQuestionIndex < questions.length) {
       handleNextButton();
   } else {
       startQuiz();
   }
})
