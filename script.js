const questions = [
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },

    {
        question: "Which language runs in a browser?",
        options: ["Java", "C++", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "Which database is commonly used with web applications?",
        options: ["MySQL", "Photoshop", "Excel", "PowerPoint"],
        answer: "MySQL"
    },

    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    }
];


let currentQuestion = 0;
let score = 0;


const questionText = document.getElementById("question");
const buttons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next");
const result = document.getElementById("result");


function loadQuestion() {

    let q = questions[currentQuestion];

    questionText.innerHTML = q.question;

    buttons.forEach((button, index) => {
        button.innerHTML = q.options[index];

        button.classList.remove("correct");
        button.classList.remove("wrong");

        button.disabled = false;

        button.onclick = function() {

            if(button.innerHTML === q.answer) {
                button.classList.add("correct");
                score++;
            }
            else {
                button.classList.add("wrong");
            }

            buttons.forEach(btn => btn.disabled = true);
        };
    });
}


nextButton.onclick = function() {

    currentQuestion++;

    if(currentQuestion < questions.length) {
        loadQuestion();
    }

    else {

        questionText.innerHTML = "Quiz Completed";

        document.getElementById("options").style.display = "none";

        nextButton.style.display = "none";

        result.innerHTML =
        "Your Score: " + score + "/" + questions.length;
    }

};


loadQuestion();
