// Configuration
const NUMBER_OF_QUESTIONS = 40;
const container = document.getElementById('cbt-container');
let selectedAnswers = {};

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to select and shuffle the 40 questions
function getShuffledTestQuestions() {
    // 1. Shuffle the entire pool of 240 questions
    shuffleArray(allQuestions);
    
    // 2. Take the first 40 questions for the test
    const testQuestions = allQuestions.slice(0, NUMBER_OF_QUESTIONS);
    
    // 3. Shuffle the options for each selected question
    testQuestions.forEach(q => shuffleArray(q.options));

    return testQuestions;
}

const testQuestions = getShuffledTestQuestions();


// --- RENDER FUNCTIONS ---

// Renders the initial test interface (40 questions + submit button)
function renderTest() {
    let htmlContent = '';
    
    testQuestions.forEach((q, index) => {
        const qIndex = index + 1;
        htmlContent += `
            <div class="question-card" id="q-${qIndex}">
                <p class="question-text"><strong>Q${qIndex}. [${q.topic}]</strong> ${q.question}</p>
                <div class="options">
        `;

        q.options.forEach((option, optionIndex) => {
            // Using a unique name for the radio group based on question index
            const inputName = `q${qIndex}`;
            const inputId = `q${qIndex}o${optionIndex}`;

            htmlContent += `
                <label for="${inputId}">
                    <input type="radio" id="${inputId}" name="${inputName}" value="${option}" data-question-index="${index}" />
                    ${option}
                </label>
            `;
        });

        htmlContent += `
                </div>
            </div>
        `;
    });

    // Add the submit button
    htmlContent += `<button id="submit-test">Submit Test & Get Results</button>`;

    container.innerHTML = htmlContent;

    // Attach event listeners for answer selection
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', handleAnswerSelection);
    });

    // Attach event listener for submission
    document.getElementById('submit-test').addEventListener('click', handleSubmit);
}

// Handles saving the user's selected answer
function handleAnswerSelection(event) {
    const radio = event.target;
    const qIndex = parseInt(radio.getAttribute('data-question-index'));
    selectedAnswers[qIndex] = radio.value;
}

// Handles the test submission and calls the scoring function
function handleSubmit() {
    // Confirm submission to prevent accidental clicks
    if (!confirm('Are you sure you want to submit the test? You cannot go back.')) {
        return;
    }
    
    renderResults();
}

// Renders the score, corrections, and explanations
function renderResults() {
    let score = 0;
    let resultsHtml = '<h2>Test Results & Evaluation</h2>';
    
    // 1. Calculate Score
    testQuestions.forEach((q, index) => {
        const userAnswer = selectedAnswers[index];
        if (userAnswer === q.answer) {
            score++;
        }
    });

    // 2. Score Summary
    resultsHtml += `
        <div class="score-summary">
            <p>Your Score: <span>${score}</span> / ${NUMBER_OF_QUESTIONS}</p>
            <p>Percentage: <span>${((score / NUMBER_OF_QUESTIONS) * 100).toFixed(1)}%</span></p>
            <p>Result: ${score >= (NUMBER_OF_QUESTIONS * 0.5) ? 'PASS! 🎉' : 'FAIL... Keep practicing! 😕'}</p>
            <button id="retake-test">Retake Test (New Questions)</button>
        </div>
    `;

    // 3. Detailed Corrections
    resultsHtml += '<h3>Detailed Corrections</h3>';

    testQuestions.forEach((q, index) => {
        const qIndex = index + 1;
        const userAnswer = selectedAnswers[index] || "*(Not Answered)*";
        const isCorrect = userAnswer === q.answer;
        const resultClass = isCorrect ? 'correct' : 'incorrect';
        
        resultsHtml += `
            <div class="evaluation-item ${resultClass}">
                <h3>Q${qIndex}. [${q.topic}] ${q.question}</h3>
                <p class="user-answer">Your Answer: <strong>${userAnswer}</strong></p>
                ${!isCorrect ? `<p class="correct-answer">Correct Answer: <strong>${q.answer}</strong></p>` : ''}
                <div class="explanation">
                    <strong>Explanation:</strong> ${q.explanation}
                </div>
            </div>
        `;
    });

    container.innerHTML = resultsHtml;
    
    // Add event listener to retake button
    document.getElementById('retake-test').addEventListener('click', () => {
        window.location.reload(); // Simple way to restart and get new questions
    });
}


// --- INITIALIZATION ---
// Start the application
renderTest();

