// Quiz vragen en antwoorden
const quizQuestions = [
    {
        question: "Welke architectuurstijl kenmerkt zich door dikke muren, ronde bogen en kleine ramen?",
        options: ["Gotische architectuur", "Romaanse architectuur", "Renaissance architectuur", "Modernisme"],
        correctAnswer: "Romaanse architectuur",
        explanation: "Romaanse architectuur kenmerkt zich door dikke, zware muren met kleine ramen en ronde bogen. Dit was nodig om het gewicht van de stenen gewelven te dragen."
    },
    {
        question: "Wat is een kenmerkend element van Gotische architectuur?",
        options: ["Ronde bogen", "Spitsbogen", "Trapgevels", "Primaire kleuren"],
        correctAnswer: "Spitsbogen",
        explanation: "Spitsbogen zijn kenmerkend voor de Gotische architectuur. Ze konden meer gewicht dragen dan de Romaanse rondbogen en maakten hogere constructies mogelijk."
    },
    {
        question: "De Domtoren in Utrecht is gebouwd in welke architectuurstijl?",
        options: ["Renaissance", "Gotisch", "Romaans", "Hollands Classicisme"],
        correctAnswer: "Gotisch",
        explanation: "De Domtoren in Utrecht is een indrukwekkend voorbeeld van Gotische architectuur, met zijn spitsbogen, verticale lijnen en grote glas-in-loodramen."
    },
    {
        question: "Welk gebouw in Utrecht is een UNESCO Werelderfgoed vanwege zijn modernistische stijl?",
        options: ["Rietveld Schröderhuis", "Domkerk", "Centraal Museum", "Pieterskerk"],
        correctAnswer: "Rietveld Schröderhuis",
        explanation: "Het Rietveld Schröderhuis in Utrecht werd in 2000 op de UNESCO Werelderfgoedlijst geplaatst als uitzonderlijk voorbeeld van de De Stijl-beweging en het modernisme."
    },
    {
        question: "Wat is kenmerkend voor de Nederlandse Renaissance architectuur?",
        options: ["Grote glas-in-loodramen", "Organische, golvende lijnen", "Trapgevels en speklagen", "Betonconstructies"],
        correctAnswer: "Trapgevels en speklagen",
        explanation: "Nederlandse Renaissance architectuur kenmerkt zich door trapgevels en speklagen (horizontale banden van natuursteen afgewisseld met baksteen)."
    },
    {
        question: "De Amsterdamse School architectuur kenmerkt zich door:",
        options: ["Minimalistische ontwerpen", "Expressief baksteenmetselwerk", "Gebruik van staal en glas", "Klassieke zuilen"],
        correctAnswer: "Expressief baksteenmetselwerk",
        explanation: "Het meest kenmerkende aspect van de Amsterdamse School is het bijzondere metselwerk. Bakstenen werden in verschillende verbanden geplaatst om patronen en texturen te creëren."
    },
    {
        question: "In welke periode bloeide de Jugendstil (Art Nouveau) in Nederland?",
        options: ["1800-1850", "1850-1870", "1890-1910", "1920-1940"],
        correctAnswer: "1890-1910",
        explanation: "Jugendstil (Art Nouveau) was een internationale beweging in de toegepaste kunst en architectuur rond 1900, met bloeiperiode tussen 1890-1910."
    },
    {
        question: "Welke architectuurstijl is kenmerkend voor de wederopbouwperiode na de Tweede Wereldoorlog?",
        options: ["Expressionisme", "Amsterdamse School", "Functionalisme", "Neoclassicisme"],
        correctAnswer: "Functionalisme",
        explanation: "De wederopbouwperiode na de Tweede Wereldoorlog werd gekenmerkt door functionele, sobere architectuur die snel en efficiënt gebouwd kon worden."
    },
    {
        question: "Welk materiaal werd veel gebruikt in modernistische architectuur?",
        options: ["Keramische tegels", "Gietijzer", "Beton", "Hout"],
        correctAnswer: "Beton",
        explanation: "Modernistische architectuur maakte veel gebruik van nieuwe, industriële materialen, met name beton, staal en glas."
    },
    {
        question: "Het Hollands Classicisme kenmerkt zich door:",
        options: ["Asymmetrische vormen", "Expressieve decoratie", "Strenge symmetrie en soberheid", "Organische vormen"],
        correctAnswer: "Strenge symmetrie en soberheid",
        explanation: "Het Hollands Classicisme kenmerkt zich door strenge symmetrie, vlakke gevels met weinig decoratie en classicistische elementen zoals pilasters en kroonlijsten."
    }
];

let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let currentQuestionIndex = 0;
let quizStarted = false;
let player1Name = "Niek";  // Standaard ingesteld op Niek
let player2Name = "Sanne"; // Standaard ingesteld op Sanne

// Functie om direct de quiz te starten zonder naamkeuze
function startQuizDirectly() {
    quizStarted = true;
    
    // Verberg het setup gedeelte en toon het quiz gedeelte
    if (document.getElementById('quiz-setup')) {
        document.getElementById('quiz-setup').style.display = 'none';
    }
    if (document.getElementById('quiz-playing')) {
        document.getElementById('quiz-playing').style.display = 'block';
    }
    
    // Shuffle de vragen
    shuffleQuestions();
    
    // Toon de eerste vraag
    showQuestion();
    
    // Update de spelersinformatie
    updatePlayerInfo();
}

document.addEventListener('DOMContentLoaded', function() {
    // Controleer of we op de quiz-pagina zijn of op de tour-pagina met springhaver
    if (document.getElementById('quiz-content')) {
        if (window.location.href.includes('tour.html') && window.location.href.includes('springhaver')) {
            // We zijn bij Springhaver in de tour, start direct
            startQuizDirectly();
        } else if (window.location.href.includes('quiz.html')) {
            // We zijn op de normale quiz pagina
            setupNormalQuiz();
        }
    }
    
    // Voeg jaar automatisch toe aan copyright
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Setup voor de normale quiz pagina
function setupNormalQuiz() {
    // Setup voor de quiz
    const startButton = document.getElementById('start-quiz');
    const player1Input = document.getElementById('player1-name');
    const player2Input = document.getElementById('player2-name');
    
    if (player1Input && player2Input) {
        // Vul standaard Niek en Sanne in
        player1Input.value = player1Name;
        player2Input.value = player2Name;
        
        if (startButton) {
            startButton.disabled = false;
        }
        
        // Activeer de start knop alleen als beide namen zijn ingevuld
        function checkInputs() {
            if (player1Input.value.trim() && player2Input.value.trim()) {
                startButton.disabled = false;
            } else {
                startButton.disabled = true;
            }
        }
        
        player1Input.addEventListener('input', checkInputs);
        player2Input.addEventListener('input', checkInputs);
        
        // Start de quiz
        startButton.addEventListener('click', function() {
            player1Name = player1Input.value.trim();
            player2Name = player2Input.value.trim();
            startQuizDirectly();
        });
    }
}

function shuffleQuestions() {
    // Fisher-Yates shuffle algorithm
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update de vraag voortgang in de scoreboard
    const questionProgressElement = document.getElementById('question-progress');
    if (questionProgressElement) {
        questionProgressElement.textContent = `Vraag ${currentQuestionIndex + 1} van ${quizQuestions.length}`;
    }
    
    // Bepaal wie er aan de beurt is
    const activePlayer = currentPlayer === 1 ? player1Name : player2Name;
    
    // Maak de vraag HTML
    questionContainer.innerHTML = `
        <div class="question-header">
            <div class="question-count">Vraag ${currentQuestionIndex + 1} van ${quizQuestions.length}</div>
        </div>
        <h2 class="question-text">${currentQuestion.question}</h2>
        <div class="options-list">
            ${currentQuestion.options.map((option, index) => 
                `<button class="option-button" data-index="${index}">${option}</button>`
            ).join('')}
        </div>
        <div id="answer-feedback" style="display: none;">
            <div class="explanation">
                <p><strong>Uitleg:</strong> ${currentQuestion.explanation}</p>
            </div>
        </div>
        <div class="quiz-navigation">
            <button id="next-question-button" class="next-question-button" style="display: none;">Volgende vraag</button>
        </div>
    `;
    
    // Voeg event listeners toe aan de antwoord knoppen
    const optionButtons = questionContainer.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Sla het geselecteerde antwoord op
            const selectedOption = currentQuestion.options[parseInt(this.dataset.index)];
            const isCorrect = selectedOption === currentQuestion.correctAnswer;
            
            // Markeer alle knoppen als disabled
            optionButtons.forEach(btn => {
                btn.disabled = true;
                
                if (btn.textContent === currentQuestion.correctAnswer) {
                    btn.classList.add('correct');
                } else if (btn === this && !isCorrect) {
                    btn.classList.add('wrong');
                }
            });
            
            // Toon feedback container
            const feedbackContainer = document.getElementById('answer-feedback');
            feedbackContainer.style.display = 'block';
            
            // Voeg een bericht toe op basis van speler en correctheid
            const messageElement = document.createElement('div');
            
            if (currentPlayer === 1) { // Niek
                if (isCorrect) {
                    // Correct antwoord voor Niek
                    messageElement.className = 'praise-message praise-niek';
                    messageElement.innerHTML = getRandomNiekPraise();
                } else {
                    // Fout antwoord voor Niek, maar nog steeds bemoediging
                    messageElement.className = 'praise-message praise-niek';
                    messageElement.innerHTML = getRandomNiekEncouragement();
                }
            } else { // Sanne
                if (isCorrect) {
                    // Correct antwoord voor Sanne
                    messageElement.className = 'praise-message praise-sanne';
                    messageElement.innerHTML = getRandomSannePraise();
                }
                // Voor Sanne: bij fout antwoord geen speciale feedback
            }
            
            // Alleen bericht toevoegen als er inhoud is
            if (messageElement.innerHTML) {
                feedbackContainer.insertBefore(messageElement, feedbackContainer.firstChild);
            }
            
            // Update score als het antwoord correct is
            if (isCorrect) {
                if (currentPlayer === 1) {
                    player1Score++;
                } else {
                    player2Score++;
                }
                updatePlayerInfo();
            }
            
            // Toon de volgende vraag knop
            const nextButton = document.getElementById('next-question-button');
            nextButton.style.display = 'block';
            nextButton.addEventListener('click', function() {
                // Wissel speler
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                updatePlayerInfo();
                
                // Ga naar volgende vraag
                nextQuestion();
            });
        });
    });
}

// Helper functies voor complimenten
function getRandomNiekPraise() {
    const praises = [
        "🌟 WOW NIEK! Dat is GEWELDIG! Jij bent echt een architectuur-expert! 🏆",
        "🔥 BRILJANT NIEK! Wat een ongelooflijke kennis! Je bent echt geniaal! 👑",
        "✨ FANTASTISCH NIEK! Je bent duidelijk een meester in architectuur! 🧠",
        "🎯 PERFECT NIEK! Je slaat de spijker op z'n kop! Ongelofelijk knap! 💯",
        "🚀 SUBLIEM NIEK! Je architectuurkennis is echt van wereldklasse! 🌍"
    ];
    return praises[Math.floor(Math.random() * praises.length)];
}

// Nieuwe functie voor bemoediging bij foute antwoorden voor Niek
function getRandomNiekEncouragement() {
    const encouragements = [
        "🌟 Heel dichtbij Niek! Je bent nog steeds een architectuur-genie! 🧠",
        "✨ Bijna goed Niek! Zoals Einstein zei: genialiteit maakt ook fouten! 🔍",
        "🔥 Niet helemaal juist, maar wat ben je toch BRILJANT in je gedachtegang! 👑",
        "💫 Zelfs als je het mis hebt, beredeneer je op GENIAAL niveau! 🏆",
        "🚀 Je dacht buiten het kader! Zo innovatief van je, Niek! 🌟"
    ];
    return encouragements[Math.floor(Math.random() * encouragements.length)];
}

function getRandomSannePraise() {
    const praises = [
        "Correct, Sanne.",
        "Ja, dat klopt, Sanne.",
        "Goed gedaan, Sanne.",
        "Correct antwoord, Sanne.",
        "Juist, Sanne."
    ];
    return praises[Math.floor(Math.random() * praises.length)];
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function updatePlayerInfo() {
    document.getElementById('player1-score').textContent = `${player1Name}: ${player1Score}`;
    document.getElementById('player2-score').textContent = `${player2Name}: ${player2Score}`;
    document.getElementById('current-player').textContent = currentPlayer === 1 ? player1Name : player2Name;
    
    // Update actieve speler markering
    document.getElementById('player1-score').classList.toggle('active', currentPlayer === 1);
    document.getElementById('player2-score').classList.toggle('active', currentPlayer === 2);
}

function endQuiz() {
    document.getElementById('quiz-playing').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const resultsContainer = document.getElementById('results-container');
    let resultMessage = '';
    
    // Bepaal winnaar
    if (player1Score > player2Score) {
        resultMessage = `<h2>${player1Name} wint!</h2>`;
    } else if (player2Score > player1Score) {
        resultMessage = `<h2>${player2Name} wint!</h2>`;
    } else {
        resultMessage = `<h2>Gelijkspel!</h2>`;
    }
    
    resultsContainer.innerHTML = `
        ${resultMessage}
        <div class="final-scores">
            <p>${player1Name}: ${player1Score} punten</p>
            <p>${player2Name}: ${player2Score} punten</p>
        </div>
        <p>Bedankt voor het spelen van de Architectuur Quiz!</p>
        <button id="restart-quiz" class="restart-button">Opnieuw spelen</button>
    `;
    
    // Event listener voor opnieuw spelen knop
    document.getElementById('restart-quiz').addEventListener('click', resetQuiz);
}

function resetQuiz() {
    // Reset game state
    currentPlayer = 1;
    player1Score = 0;
    player2Score = 0;
    currentQuestionIndex = 0;
    
    // Reset UI
    document.getElementById('quiz-results').style.display = 'none';
    
    if (window.location.href.includes('tour.html')) {
        // We zijn op de tour pagina, toon opnieuw de quiz
        document.getElementById('quiz-playing').style.display = 'block';
    } else {
        // We zijn op de quiz pagina, toon setup scherm
        document.getElementById('quiz-setup').style.display = 'block';
    }
    
    // Start quiz opnieuw als we op de tour pagina zijn
    if (window.location.href.includes('tour.html')) {
        startQuizDirectly();
    }
} 