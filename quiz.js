const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    // Add more questions here
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    // Ensure you have 10 questions in total
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    questionElement.innerHTML = `<h2>${questionObj.question}</h2>`;
    
    questionObj.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        questionElement.appendChild(optionElement);
    });

    quizContainer.appendChild(questionElement);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedAnswer === correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert('Please select an answer!');
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    
    resultText.textContent = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    resultContainer.style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
}

// Load the first question
loadQuestion();
