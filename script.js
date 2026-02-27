const questions = [
    // 1
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Transfer Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    // 2
    {
        question: "Which language is primarily used for web development on the client side?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Java", correct: false },
            { text: "C#", correct: false }
        ]
    },
    // 3
    {
        question: "Which of the following is a NoSQL database?",
        answers: [
            { text: "MySQL", correct: false },
            { text: "MongoDB", correct: true },
            { text: "PostgreSQL", correct: false },
            { text: "Oracle", correct: false }
        ]
    },
    // 4
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Syntax", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    // 5
    {
        question: "Which protocol is used to securely browse the web?",
        answers: [
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "HTTPS", correct: true },
            { text: "SMTP", correct: false }
        ]
    },
    // 6
    {
        question: "What is the main purpose of a firewall?",
        answers: [
            { text: "Store data", correct: false },
            { text: "Filter network traffic", correct: true },
            { text: "Compile code", correct: false },
            { text: "Encrypt files", correct: false }
        ]
    },
    // 7
    {
        question: "Which of these is a version control system?",
        answers: [
            { text: "Git", correct: true },
            { text: "Docker", correct: false },
            { text: "Kubernetes", correct: false },
            { text: "Node.js", correct: false }
        ]
    },
    // 8
    {
        question: "Which data type is NOT primitive in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Object", correct: true },
            { text: "Boolean", correct: false }
        ]
    },
    // 9
    {
        question: "What is the default port for HTTP?",
        answers: [
            { text: "80", correct: true },
            { text: "443", correct: false },
            { text: "21", correct: false },
            { text: "22", correct: false }
        ]
    },
    // 10
    {
        question: "Which of these is a front-end JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Flask", correct: false },
            { text: "Spring", correct: false }
        ]
    },
    // 11
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Simple Query List", correct: false },
            { text: "Sequential Question Language", correct: false },
            { text: "Server Query Logic", correct: false }
        ]
    },
    // 12
    {
        question: "Which of the following is NOT a cloud computing provider?",
        answers: [
            { text: "AWS", correct: false },
            { text: "Microsoft Azure", correct: false },
            { text: "Google Cloud", correct: false },
            { text: "Linux", correct: true }
        ]
    },
    // 13
    {
        question: "What is the purpose of DNS?",
        answers: [
            { text: "Translate domain names to IP addresses", correct: true },
            { text: "Encrypt data", correct: false },
            { text: "Transfer files", correct: false },
            { text: "Compile code", correct: false }
        ]
    },
    // 14
    {
        question: "Which language is used for Android app development?",
        answers: [
            { text: "Java", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "Ruby", correct: false }
        ]
    },
    // 15
    {
        question: "Which of the following is an operating system?",
        answers: [
            { text: "Windows", correct: true },
            { text: "Oracle", correct: false },
            { text: "Python", correct: false },
            { text: "HTML", correct: false }
        ]
    },
    // 16
    {
        question: "What does HTTPS stand for?",
        answers: [
            { text: "Hypertext Transfer Protocol Secure", correct: true },
            { text: "Hypertext Transmission Protocol Standard", correct: false },
            { text: "High Transfer Protocol Security", correct: false },
            { text: "Hypertext Transfer Private Service", correct: false }
        ]
    },
    // 17
    {
        question: "Which command is used to initialize a new Git repository?",
        answers: [
            { text: "git start", correct: false },
            { text: "git init", correct: true },
            { text: "git new", correct: false },
            { text: "git create", correct: false }
        ]
    },
    // 18
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<hyper>", correct: false }
        ]
    },
    // 19
    {
        question: "Which protocol is commonly used to send emails?",
        answers: [
            { text: "SMTP", correct: true },
            { text: "FTP", correct: false },
            { text: "HTTP", correct: false },
            { text: "IMAP", correct: false }
        ]
    },
    // 20
    {
        question: "What does API stand for?",
        answers: [
            { text: "Application Programming Interface", correct: true },
            { text: "Application Process Integration", correct: false },
            { text: "Automated Program Interface", correct: false },
            { text: "Advanced Programming Instruction", correct: false }
        ]
    },
    // 21
    {
        question: "Which HTTP status code means 'Not Found'?",
        answers: [
            { text: "200", correct: false },
            { text: "404", correct: true },
            { text: "500", correct: false },
            { text: "301", correct: false }
        ]
    },
    // 22
    {
        question: "Which language is used for server-side web development?",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "Python", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false }
        ]
    },
    // 23
    {
        question: "Which type of loop is guaranteed to execute at least once in JavaScript?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do...while", correct: true },
            { text: "foreach", correct: false }
        ]
    },
    // 24
    {
        question: "Which of these is a common hashing algorithm for passwords?",
        answers: [
            { text: "MD5", correct: true },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false }
        ]
    },
    // 25
    {
        question: "Which technology is used to create interactive web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },
    // 26
    {
        question: "Which of the following is an IDE for Java?",
        answers: [
            { text: "Eclipse", correct: true },
            { text: "Node.js", correct: false },
            { text: "MongoDB", correct: false },
            { text: "Apache", correct: false }
        ]
    },
    // 27
    {
        question: "Which CSS property is used to change text color?",
        answers: [
            { text: "font-style", correct: false },
            { text: "color", correct: true },
            { text: "text-decoration", correct: false },
            { text: "background-color", correct: false }
        ]
    },
    // 28
    {
        question: "What does JSON stand for?",
        answers: [
            { text: "JavaScript Object Notation", correct: true },
            { text: "Java Standard Output Notation", correct: false },
            { text: "JavaScript Open Network", correct: false },
            { text: "Java Object Syntax Name", correct: false }
        ]
    },
    // 29
    {
        question: "Which command is used to clone a Git repository?",
        answers: [
            { text: "git clone", correct: true },
            { text: "git copy", correct: false },
            { text: "git pull", correct: false },
            { text: "git init", correct: false }
        ]
    },
    // 30
    {
        question: "Which of these is a Python web framework?",
        answers: [
            { text: "Flask", correct: true },
            { text: "Angular", correct: false },
            { text: "React", correct: false },
            { text: "Vue", correct: false }
        ]
    },
    // 31
    {
        question: "Which type of database stores data in tables?",
        answers: [
            { text: "Relational Database", correct: true },
            { text: "NoSQL Database", correct: false },
            { text: "Graph Database", correct: false },
            { text: "Object Database", correct: false }
        ]
    },
    // 32
    {
        question: "Which programming language is used for iOS development?",
        answers: [
            { text: "Swift", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "Kotlin", correct: false }
        ]
    },
    // 33
    {
        question: "Which HTML tag is used to display an image?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<src>", correct: false },
            { text: "<picture>", correct: false }
        ]
    },
    // 34
    {
        question: "What is the maximum length of a VARCHAR in MySQL?",
        answers: [
            { text: "255 characters", correct: true },
            { text: "100 characters", correct: false },
            { text: "512 characters", correct: false },
            { text: "1000 characters", correct: false }
        ]
    },
    // 35
    {
        question: "Which JavaScript method is used to parse a JSON string?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.object()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },
    // 36
    {
        question: "Which of these is a markup language?",
        answers: [
            { text: "HTML", correct: true },
            { text: "Python", correct: false },
            { text: "C#", correct: false },
            { text: "Java", correct: false }
        ]
    },
    // 37
    {
        question: "Which of the following is a common operating system for servers?",
        answers: [
            { text: "Linux", correct: true },
            { text: "Windows 10", correct: false },
            { text: "macOS Catalina", correct: false },
            { text: "Ubuntu Desktop", correct: false }
        ]
    },
    // 38
    {
        question: "Which cloud model provides software over the internet?",
        answers: [
            { text: "SaaS", correct: true },
            { text: "IaaS", correct: false },
            { text: "PaaS", correct: false },
            { text: "DaaS", correct: false }
        ]
    },
    // 39
    {
        question: "Which command shows the current Git branch?",
        answers: [
            { text: "git status", correct: false },
            { text: "git branch", correct: true },
            { text: "git log", correct: false },
            { text: "git commit", correct: false }
        ]
    },
    // 40
    {
        question: "Which of the following is a symmetric encryption algorithm?",
        answers: [
            { text: "AES", correct: true },
            { text: "RSA", correct: false },
            { text: "DSA", correct: false },
            { text: "ECC", correct: false }
        ]
    },
    // 41
    {
        question: "Which protocol is used for file transfer over the internet?",
        answers: [
            { text: "FTP", correct: true },
            { text: "HTTP", correct: false },
            { text: "SMTP", correct: false },
            { text: "SSH", correct: false }
        ]
    },
    // 42
    {
        question: "Which of these is NOT a JavaScript framework?",
        answers: [
            { text: "Vue.js", correct: false },
            { text: "React", correct: false },
            { text: "Angular", correct: false },
            { text: "Django", correct: true }
        ]
    },
    // 43
    {
        question: "Which of the following is used for data visualization in Python?",
        answers: [
            { text: "Matplotlib", correct: true },
            { text: "Flask", correct: false },
            { text: "Django", correct: false },
            { text: "NumPy", correct: false }
        ]
    },
    // 44
    {
        question: "Which protocol is used for secure file transfer?",
        answers: [
            { text: "SFTP", correct: true },
            { text: "FTP", correct: false },
            { text: "HTTP", correct: false },
            { text: "SMTP", correct: false }
        ]
    },
    // 45
    {
        question: "Which of these is a markup language used for styling documents?",
        answers: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: false },
            { text: "SQL", correct: false }
        ]
    },
    // 46
    {
        question: "Which of these is an example of cloud storage?",
        answers: [
            { text: "Google Drive", correct: true },
            { text: "MySQL", correct: false },
            { text: "Apache", correct: false },
            { text: "Node.js", correct: false }
        ]
    },
    // 47
    {
        question: "Which AI technique is used for pattern recognition?",
        answers: [
            { text: "Machine Learning", correct: true },
            { text: "Networking", correct: false },
            { text: "Databases", correct: false },
            { text: "Cloud Computing", correct: false }
        ]
    },
    // 48
    {
        question: "Which command is used to commit changes in Git?",
        answers: [
            { text: "git add", correct: false },
            { text: "git commit", correct: true },
            { text: "git push", correct: false },
            { text: "git merge", correct: false }
        ]
    },
    // 49
    {
        question: "Which of the following is a type of malware?",
        answers: [
            { text: "Trojan", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "Git", correct: false }
        ]
    },
    // 50
    {
        question: "Which of these is used to store key-value pairs in memory for fast access?",
        answers: [
            { text: "Redis", correct: true },
            { text: "MySQL", correct: false },
            { text: "MongoDB", correct: false },
            { text: "PostgreSQL", correct: false }
        ]
    },
    // 51
    {   
    question: "What does CPU stand for?",
    answers: [
        { text: "Central Processing Unit", correct: true },
        { text: "Computer Personal Unit", correct: false },
        { text: "Central Program Utility", correct: false },
        { text: "Control Processing Unit", correct: false }
    ]
},
// 52
{
    question: "Which company developed the Java programming language?",
    answers: [
        { text: "Sun Microsystems", correct: true },
        { text: "Microsoft", correct: false },
        { text: "IBM", correct: false },
        { text: "Google", correct: false }
    ]
},
// 53
{
    question: "Which device connects different networks together?",
    answers: [
        { text: "Switch", correct: false },
        { text: "Router", correct: true },
        { text: "Hub", correct: false },
        { text: "Modem", correct: false }
    ]
},
// 54
{
    question: "Which layer of the OSI model handles routing?",
    answers: [
        { text: "Transport Layer", correct: false },
        { text: "Network Layer", correct: true },
        { text: "Session Layer", correct: false },
        { text: "Physical Layer", correct: false }
    ]
},
// 55
{
    question: "Which HTML attribute is used to provide alternative text for images?",
    answers: [
        { text: "title", correct: false },
        { text: "alt", correct: true },
        { text: "src", correct: false },
        { text: "href", correct: false }
    ]
},
// 56
{
    question: "Which data structure allows fast search using key-value pairs?",
    answers: [
        { text: "Array", correct: false },
        { text: "Stack", correct: false },
        { text: "Hash Table", correct: true },
        { text: "Queue", correct: false }
    ]
},
// 57
{
    question: "What does LAN stand for?",
    answers: [
        { text: "Local Area Network", correct: true },
        { text: "Large Access Network", correct: false },
        { text: "Long Area Node", correct: false },
        { text: "Local Access Node", correct: false }
    ]
},
// 58
{
    question: "Which programming paradigm focuses on objects and classes?",
    answers: [
        { text: "Procedural Programming", correct: false },
        { text: "Object-Oriented Programming", correct: true },
        { text: "Functional Programming", correct: false },
        { text: "Logic Programming", correct: false }
    ]
},
// 59
{
    question: "Which port number is used for HTTPS?",
    answers: [
        { text: "21", correct: false },
        { text: "80", correct: false },
        { text: "443", correct: true },
        { text: "25", correct: false }
    ]
},
// 60
{
    question: "Which of these is used to style web pages?",
    answers: [
        { text: "SQL", correct: false },
        { text: "CSS", correct: true },
        { text: "Python", correct: false },
        { text: "C++", correct: false }
    ]
},
// 61
{
    question: "Which command installs dependencies in Node.js?",
    answers: [
        { text: "node install", correct: false },
        { text: "npm install", correct: true },
        { text: "node start", correct: false },
        { text: "npm run", correct: false }
    ]
},
// 62
{
    question: "Which of these is a JavaScript runtime environment?",
    answers: [
        { text: "Node.js", correct: true },
        { text: "React", correct: false },
        { text: "Angular", correct: false },
        { text: "Vue", correct: false }
    ]
},
// 63
{
    question: "Which protocol is used for remote login?",
    answers: [
        { text: "FTP", correct: false },
        { text: "SSH", correct: true },
        { text: "HTTP", correct: false },
        { text: "SMTP", correct: false }
    ]
},
// 64
{
    question: "Which of these is a mobile operating system?",
    answers: [
        { text: "Android", correct: true },
        { text: "Ubuntu Server", correct: false },
        { text: "Windows Server", correct: false },
        { text: "CentOS", correct: false }
    ]
},
// 65
{
    question: "Which HTML tag is used to create a table row?",
    answers: [
        { text: "<td>", correct: false },
        { text: "<tr>", correct: true },
        { text: "<table>", correct: false },
        { text: "<th>", correct: false }
    ]
},
// 66
{
    question: "Which CSS property controls the size of text?",
    answers: [
        { text: "font-style", correct: false },
        { text: "font-size", correct: true },
        { text: "text-align", correct: false },
        { text: "font-weight", correct: false }
    ]
},
// 67
{
    question: "Which algorithm is used for searching in a sorted array?",
    answers: [
        { text: "Binary Search", correct: true },
        { text: "Linear Search", correct: false },
        { text: "Bubble Sort", correct: false },
        { text: "Selection Sort", correct: false }
    ]
},
// 68
{
    question: "Which Java keyword is used to inherit a class?",
    answers: [
        { text: "implements", correct: false },
        { text: "extends", correct: true },
        { text: "inherits", correct: false },
        { text: "super", correct: false }
    ]
},
// 69
{
    question: "Which symbol is used for single-line comments in Java?",
    answers: [
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "<!-- -->", correct: false },
        { text: "**", correct: false }
    ]
},
// 70
{
    question: "Which database uses collections instead of tables?",
    answers: [
        { text: "MongoDB", correct: true },
        { text: "MySQL", correct: false },
        { text: "PostgreSQL", correct: false },
        { text: "Oracle", correct: false }
    ]
}


];


const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerbtn");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;   
    button.classList.add("btn");
    answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();
