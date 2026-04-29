/*
  ===============================
  QUESTION BANKS
  ===============================

  allQuestions stores all coding challenges for each difficulty.
  Each difficulty has an array of level objects.

  Each level object contains:
  - title: name shown at the top of the challenge
  - question: instructions for the student
  - expectedOutput: what the student's Java code should produce
  - rules: pattern rules used to check the answer
  - hints: three hint styles based on hint mode
*/
const allQuestions = {
  easy: [
    {
      title: "Level 1: Print 1 to 3",
      question: "Write a Java for loop that prints the numbers 1 through 3.",
      expectedOutput: `1
2
3`,
      rules: { type: "for", start: "1", condition: "i<=3", update: "i++", requiresPrintln: true },
      hints: {
        guided: "Use a for loop. Start i at 1, continue while i <= 3, and increase i by 1 each time. Put System.out.println(i); inside the loop.",
        standard: "Use a for loop that starts at 1 and stops at 3.",
        minimal: "Start at 1. Stop at 3."
      }
    },
    {
      title: "Level 2: Print 1 to 5",
      question: "Write a Java while loop that prints the numbers 1 through 5.",
      expectedOutput: `1
2
3
4
5`,
      rules: { type: "while", start: "1", condition: "i<=5", update: "i++", requiresPrintln: true },
      hints: {
        guided: "Write int i = 1; first. Then use while(i <= 5) { System.out.println(i); i++; }",
        standard: "Initialize a counter first, then use while.",
        minimal: "Counter + while."
      }
    },
    {
      title: "Level 3: Even Numbers",
      question: "Write a loop that prints 2, 4, 6, 8, 10.",
      expectedOutput: `2
4
6
8
10`,
      rules: {
        type: "flexible",
        validStarts: ["2"],
        validConditions: ["i<=10", "i<11"],
        validUpdates: ["i+=2", "i=i+2"],
        requiresPrintln: true
      },
      hints: {
        guided: "You may use either a for loop or a while loop. Start at 2, keep going to 10, and add 2 each time.",
        standard: "Start at 2 and increase by 2.",
        minimal: "Step size 2."
      }
    },
    {
      title: "Level 4: Countdown",
      question: "Write a Java for loop that prints 5 down to 1.",
      expectedOutput: `5
4
3
2
1`,
      rules: { type: "for", start: "5", condition: "i>=1", update: "i--", requiresPrintln: true },
      hints: {
        guided: "Start at 5. Keep going while i >= 1. Use i-- each time. Print i inside the loop.",
        standard: "Use a reverse for loop.",
        minimal: "Count backward."
      }
    },
    {
      title: "Level 5: While Loop Practice",
      question: "Write a Java while loop that prints 1 through 3.",
      expectedOutput: `1
2
3`,
      rules: { type: "while", start: "1", condition: "i<=3", update: "i++", requiresPrintln: true },
      hints: {
        guided: "First write int i = 1;. Then use while(i <= 3) { System.out.println(i); i++; }",
        standard: "Create a counter first, then use while.",
        minimal: "Initialize before the loop."
      }
    }
  ],

  medium: [
    {
      title: "Level 1: Print 1 to 5",
      question: "Write a Java for loop that prints the numbers 1 through 5.",
      expectedOutput: `1
2
3
4
5`,
      rules: { type: "for", start: "1", condition: "i<=5", update: "i++", requiresPrintln: true },
      hints: {
        guided: "Use for(int i = 1; i <= 5; i++) { System.out.println(i); }",
        standard: "Use a normal for loop.",
        minimal: "Standard for loop."
      }
    },
    {
      title: "Level 2: Odd Numbers",
      question: "Write a Java while loop that prints 1, 3, 5, 7, 9.",
      expectedOutput: `1
3
5
7
9`,
      rules: { type: "while", start: "1", condition: "i<=9", update: "i+=2", requiresPrintln: true },
      hints: {
        guided: "Write int i = 1; first. Use while(i <= 9), print i, and add 2 each time.",
        standard: "Use a while loop and increase by 2.",
        minimal: "Odd numbers with while."
      }
    },
    {
      title: "Level 3: Multiples of 3",
      question: "Write a loop that prints 3, 6, 9, 12.",
      expectedOutput: `3
6
9
12`,
      rules: {
        type: "flexible",
        validStarts: ["3"],
        validConditions: ["i<=12", "i<13"],
        validUpdates: ["i+=3", "i=i+3"],
        requiresPrintln: true
      },
      hints: {
        guided: "You may use either for or while. Start at 3, keep going to 12, and add 3 each time.",
        standard: "Increase by 3.",
        minimal: "Multiples of 3."
      }
    },
    {
      title: "Level 4: Countdown",
      question: "Write a Java while loop that prints 10 down to 1.",
      expectedOutput: `10
9
8
7
6
5
4
3
2
1`,
      rules: { type: "while", start: "10", condition: "i>=1", update: "i--", requiresPrintln: true },
      hints: {
        guided: "Write int i = 10; first. Then use while(i >= 1) { System.out.println(i); i--; }",
        standard: "Use while and count backward.",
        minimal: "Reverse while loop."
      }
    },
    {
      title: "Level 5: Print 1 to 4",
      question: "Write a loop that prints numbers 1 through 4.",
      expectedOutput: `1
2
3
4`,
      rules: {
        type: "flexible",
        validStarts: ["1"],
        validConditions: ["i<=4", "i<5"],
        validUpdates: ["i++", "i=i+1"],
        requiresPrintln: true
      },
      hints: {
        guided: "You may use either a for loop or a while loop. Start at 1 and stop after printing 4.",
        standard: "1 through 4.",
        minimal: "Either loop works."
      }
    },
    {
      title: "Level 6: While Countdown",
      question: "Write a Java while loop that prints 4 down to 1.",
      expectedOutput: `4
3
2
1`,
      rules: { type: "while", start: "4", condition: "i>=1", update: "i--", requiresPrintln: true },
      hints: {
        guided: "Start with int i = 4;. Use while(i >= 1). Print i, then do i--.",
        standard: "Use i-- inside the loop.",
        minimal: "Initialize first."
      }
    },
    {
      title: "Level 7: 2x2 Stars",
      question: "Write nested for loops to print a 2x2 square of stars.",
      expectedOutput: `**
**`,
      rules: { type: "nested", outerRows: "2", innerCols: "2", requiresPrint: true, requiresPrintln: true },
      hints: {
        guided: "Use one outer for loop for rows and one inner for loop for columns. Print stars in the inner loop and move to a new line after each row.",
        standard: "One loop for rows, one for columns.",
        minimal: "Two nested for loops."
      }
    },
    {
      title: "Level 8: 3 Rows of 2 Stars",
      question: "Write nested while loops to print 3 rows with 2 stars on each row.",
      expectedOutput: `**
**
**`,
      rules: { type: "nestedWhile", outerRows: "3", innerCols: "2", requiresPrint: true, requiresPrintln: true },
      hints: {
        guided: "Use a while loop for rows and another while loop for columns. Reset the inner counter each row.",
        standard: "Use nested while loops.",
        minimal: "Rows and columns with while."
      }
    },
    {
      title: "Level 9: 5 to 15 by 5",
      question: "Write a loop that prints 5, 10, 15.",
      expectedOutput: `5
10
15`,
      rules: {
        type: "flexible",
        validStarts: ["5"],
        validConditions: ["i<=15", "i<16"],
        validUpdates: ["i+=5", "i=i+5"],
        requiresPrintln: true
      },
      hints: {
        guided: "You may use for or while. Start at 5 and add 5 each time until 15.",
        standard: "Start at 5 and increase by 5.",
        minimal: "Step size 5."
      }
    },
    {
      title: "Level 10: 0 to 4",
      question: "Write a Java for loop that prints 0 through 4.",
      expectedOutput: `0
1
2
3
4`,
      rules: { type: "for", start: "0", condition: "i<5", update: "i++", requiresPrintln: true },
      hints: {
        guided: "Use for(int i = 0; i < 5; i++). Print i inside the loop.",
        standard: "This one stops before 5.",
        minimal: "0 up to 4."
      }
    }
  ],

  hard: [
    {
      title: "Level 1: Nested Stars 3x3",
      question: "Write nested loops to print a 3x3 block of stars.",
      expectedOutput: `***
***
***`,
      rules: { type: "nested", outerRows: "3", innerCols: "3", requiresPrint: true, requiresPrintln: true },
      hints: {
        guided: "Use two nested for loops. Outer loop runs 3 times, inner loop runs 3 times. Print stars in the inner loop and System.out.println() after each row.",
        standard: "3 rows and 3 columns.",
        minimal: "Nested for loops."
      }
    },
    {
      title: "Level 2: Reverse Even Numbers",
      question: "Write a Java while loop that prints 10, 8, 6, 4, 2.",
      expectedOutput: `10
8
6
4
2`,
      rules: { type: "while", start: "10", condition: "i>=2", update: "i-=2", requiresPrintln: true },
      hints: {
        guided: "Write int i = 10; first. Use while(i >= 2), print i, then subtract 2 each time.",
        standard: "Count backward by 2 with while.",
        minimal: "Reverse evens."
      }
    },
    {
      title: "Level 3: Multiples of 4",
      question: "Write a loop that prints 4, 8, 12, 16.",
      expectedOutput: `4
8
12
16`,
      rules: {
        type: "flexible",
        validStarts: ["4"],
        validConditions: ["i<=16", "i<17"],
        validUpdates: ["i+=4", "i=i+4"],
        requiresPrintln: true
      },
      hints: {
        guided: "You may use either for or while. Start at 4, keep going to 16, and add 4 each time.",
        standard: "Start at 4 and add 4.",
        minimal: "Multiples of 4."
      }
    },
    {
      title: "Level 4: 4 Rows of 3 Stars",
      question: "Write nested loops to print 4 rows of 3 stars.",
      expectedOutput: `***
***
***
***`,
      rules: { type: "nestedWhile", outerRows: "4", innerCols: "3", requiresPrint: true, requiresPrintln: true },
      hints: {
        guided: "Use nested while loops. One controls rows, one controls columns. Reset the inner counter each new row.",
        standard: "Outer while for rows, inner while for columns.",
        minimal: "Nested while loops."
      }
    },
    {
      title: "Level 5: 1 to 10",
      question: "Write a loop that prints numbers 1 through 10.",
      expectedOutput: `1
2
3
4
5
6
7
8
9
10`,
      rules: {
        type: "flexible",
        validStarts: ["1"],
        validConditions: ["i<=10", "i<11"],
        validUpdates: ["i++", "i=i+1"],
        requiresPrintln: true
      },
      hints: {
        guided: "You may use either for or while. Start at 1 and continue until 10.",
        standard: "Either loop works here.",
        minimal: "1 through 10."
      }
    }
  ]
};

/*
  ===============================
  PRE-QUIZ QUESTIONS
  ===============================

  These questions are used before the game starts.
  Their purpose is to aquire the student's skill level
  so the game can recommend a difficulty and hint setting.
*/
const preQuizQuestions = [
  {
    title: "Pre-Quiz 1",
    category: "syntax",
    text: "Which loop is best when you know exactly how many times something should repeat?",
    options: ["for loop", "while loop", "if statement", "switch statement"],
    answer: "for loop",
    explanation: "A for loop is commonly used when the number of repetitions is known."
  },
  {
    title: "Pre-Quiz 2",
    category: "syntax",
    text: "What does i++ do in Java?",
    options: ["Subtracts 1 from i", "Adds 1 to i", "Sets i to 0", "Compares i"],
    answer: "Adds 1 to i",
    explanation: "i++ increases the variable by 1."
  },
  {
    title: "Pre-Quiz 3",
    category: "logic",
    text: "Which condition would print 1 through 5 in a loop starting at 1?",
    options: ["i < 5", "i <= 5", "i >= 5", "i == 5"],
    answer: "i <= 5",
    explanation: "If the loop starts at 1 and should include 5, the condition must allow 5."
  },
  {
    title: "Pre-Quiz 4",
    category: "output",
    text: "What will this print?\nfor(int i = 1; i <= 3; i++) System.out.println(i);",
    options: ["0 1 2", "1 2 3", "1 2", "3 2 1"],
    answer: "1 2 3",
    explanation: "The loop starts at 1, prints each value through 3, and increases by 1."
  },
  {
    title: "Pre-Quiz 5",
    category: "debugging",
    text: "What is wrong with this loop?\nfor(int i = 1; i <= 5; i--)",
    options: [
      "Nothing is wrong",
      "It decreases instead of increases",
      "It needs System.out.print",
      "The loop should start at 0"
    ],
    answer: "It decreases instead of increases",
    explanation: "If i starts at 1 and the condition is i <= 5, using i-- moves in the wrong direction."
  },
  {
    title: "Pre-Quiz 6",
    category: "while",
    text: "What must a while loop usually include to avoid running forever?",
    options: [
      "A switch statement",
      "A changing condition or counter update",
      "A class constructor",
      "A Scanner object"
    ],
    answer: "A changing condition or counter update",
    explanation: "Without updating the counter or changing the condition, the loop may never end."
  },
  {
    title: "Pre-Quiz 7",
    category: "nested",
    text: "In nested loops that print rows and columns, which loop usually controls the rows?",
    options: ["The inner loop", "The outer loop", "The if statement", "The println statement"],
    answer: "The outer loop",
    explanation: "The outer loop usually controls how many rows are printed."
  },
  {
    title: "Pre-Quiz 8",
    category: "nested",
    text: "If a loop starts at 0 and uses i < 4, how many times does it run?",
    options: ["3", "4", "5", "It never runs"],
    answer: "4",
    explanation: "The values are 0, 1, 2, and 3, so the loop runs 4 times."
  }
];

/*
  ===============================
  POST-QUIZ QUESTIONS
  ===============================

  These questions are shown after the game ends
  to measure learning growth.
*/
const postQuizQuestionsByDifficulty = {
  easy: [
    {
      title: "Post-Quiz 1",
      text: "What does a for loop do?",
      options: [
        "Repeats code multiple times",
        "Stops a program",
        "Stores data",
        "Creates objects"
      ],
      answer: "Repeats code multiple times"
    },
    {
      title: "Post-Quiz 2",
      text: "Which loop runs while a condition is true?",
      options: ["for loop", "while loop", "if statement", "switch"],
      answer: "while loop"
    },
    {
      title: "Post-Quiz 3",
      text: "What does i++ mean?",
      options: ["Add 1", "Subtract 1", "Multiply", "Divide"],
      answer: "Add 1"
    },
    {
      title: "Post-Quiz 4",
      text: "Which loop would be a good choice when you already know how many times something should repeat?",
      options: ["for loop", "while loop", "if statement", "switch statement"],
      answer: "for loop"
    },
    {
      title: "Post-Quiz 5",
      text: "Preview: If a loop starts at 1 and uses i += 2, what kind of numbers will it print?",
      options: ["Even numbers", "Odd numbers", "Negative numbers", "Only 1"],
      answer: "Odd numbers"
    }
  ],

  medium: [
    {
      title: "Post-Quiz 1",
      text: "What will this print?\nfor(int i = 1; i <= 3; i++)",
      options: ["1 2 3", "0 1 2", "1 2", "3 2 1"],
      answer: "1 2 3"
    },
    {
      title: "Post-Quiz 2",
      text: "What is the purpose of i += 2?",
      options: [
        "Increase by 2",
        "Decrease by 2",
        "Multiply by 2",
        "Compare values"
      ],
      answer: "Increase by 2"
    },
    {
      title: "Post-Quiz 3",
      text: "Why are loop conditions important?",
      options: [
        "They control when loops stop",
        "They print output",
        "They store data",
        "They create variables"
      ],
      answer: "They control when loops stop"
    },
    {
      title: "Post-Quiz 4",
      text: "Preview: In nested loops, which loop usually controls the rows?",
      options: ["The inner loop", "The outer loop", "The if statement", "The print statement"],
      answer: "The outer loop"
    },
    {
      title: "Post-Quiz 5",
      text: "Preview: What can happen if a loop condition never becomes false?",
      options: [
        "An infinite loop",
        "The program always prints once",
        "The loop is skipped",
        "A variable is deleted"
      ],
      answer: "An infinite loop"
    }
  ],

  hard: [
    {
      title: "Post-Quiz 1",
      text: "Which loop structure is best for nested patterns?",
      options: ["Single loop", "Nested loops", "if statements", "switch"],
      answer: "Nested loops"
    },
    {
      title: "Post-Quiz 2",
      text: "What happens if a loop condition never becomes false?",
      options: [
        "Infinite loop",
        "Program stops",
        "Error always occurs",
        "Nothing happens"
      ],
      answer: "Infinite loop"
    },
    {
      title: "Post-Quiz 3",
      text: "Why are nested loops used?",
      options: [
        "To handle rows and columns",
        "To stop execution",
        "To store variables",
        "To skip code"
      ],
      answer: "To handle rows and columns"
    },
    {
      title: "Post-Quiz 4",
      text: "If a loop starts at 10 and uses i -= 2 while i >= 2, what will it print?",
      options: [
        "10, 8, 6, 4, 2",
        "10, 9, 8, 7, 6",
        "2, 4, 6, 8, 10",
        "10, 8, 6"
      ],
      answer: "10, 8, 6, 4, 2"
    },
    {
      title: "Post-Quiz 5",
      text: "Which statement best describes a strong loop solution?",
      options: [
        "It has the correct start, condition, and update",
        "It always uses a for loop",
        "It never uses a counter variable",
        "It avoids print statements"
      ],
      answer: "It has the correct start, condition, and update"
    }
  ]
};

/*
  ===============================
  GAME STATE VARIABLES
  ===============================

  These variables track the student's current progress.
*/
let questions = [];                   // Current set of levels based on chosen difficulty
let difficulty = "medium";            // Selected difficulty
let studentName = "";                 // Student's name
let hintMode = "standard";            // guided / standard / minimal
let suggestedDifficulty = "medium";   // Recommendation from pre-quiz
let suggestedHintMode = "standard";   // Recommended hint level

let currentLevel = 0;                 // Index of the current level
let score = 0;                        // Total score
let xp = 0;                           // Total XP earned
let attempts = 0;                     // Attempts on the current level
let hintUsed = false;                 // Whether a hint was used on the current level
let badges = [];                      // Earned badges

/*
  These track session analytics.
*/
let totalAttempts = 0;
let totalHintsUsed = 0;
let totalCorrectFirstTry = 0;
let completedLevels = 0;


/*
  These track quiz progress and results.
*/
let preQuizScore = 0;
let postQuizScore = 0;
let currentQuizIndex = 0;
let currentQuizType = "pre";
let preQuizResults = [];
let visitedQuestions = new Set();

/*
  ===============================
  DOM REFERENCES
  ===============================

  These constants store references to HTML elements
  as variables so JavaScript can update the page through the HTML.
*/

/* Screen containers */
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const placementScreen = document.getElementById("placement-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

/* Start screen elements */
const studentNameInput = document.getElementById("student-name");
const startBtn = document.getElementById("start-btn");
const resumeBtn = document.getElementById("resume-btn");
const clearBtn = document.getElementById("clear-btn");
const startMessage = document.getElementById("start-message");

/* Quiz screen elements */
const quizTitle = document.getElementById("quiz-title");
const quizSubtitle = document.getElementById("quiz-subtitle");
const quizQuestionTitle = document.getElementById("quiz-question-title");
const quizQuestionText = document.getElementById("quiz-question-text");
const quizOptions = document.getElementById("quiz-options");
const quizNextBtn = document.getElementById("quiz-next-btn");
const quizFeedback = document.getElementById("quiz-feedback");

/* Placement screen elements */
const placementSummary = document.getElementById("placement-summary");
const suggestedDifficultyText = document.getElementById("suggested-difficulty");
const suggestedHintsText = document.getElementById("suggested-hints");
const placementReason = document.getElementById("placement-reason");
const placementReview = document.getElementById("placement-review");
const overrideDifficulty = document.getElementById("override-difficulty");
const overrideHints = document.getElementById("override-hints");
const useRecommendationBtn = document.getElementById("use-recommendation-btn");
const useCustomBtn = document.getElementById("use-custom-btn");

/* Game screen elements */
const studentDisplay = document.getElementById("student-display");
const difficultyDisplay = document.getElementById("difficulty-display");
const hintLevelDisplay = document.getElementById("hint-level-display");
const levelNumber = document.getElementById("level-number");
const scoreDisplay = document.getElementById("score");
const xpText = document.getElementById("xp-text");
const xpBar = document.getElementById("xp-bar");
const badgeToast = document.getElementById("badge-toast");
const levelToast = document.getElementById("level-toast");
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const expectedOutput = document.getElementById("expected-output");
const codeInput = document.getElementById("code-input");
const feedback = document.getElementById("feedback");
const hintText = document.getElementById("hint-text");
const progressText = document.getElementById("progress-text");
const badgeList = document.getElementById("badge-list");
const analyticsText = document.getElementById("analytics-text");
const requirementMessageEl = document.getElementById("requirement-message");

/* Game buttons */
const checkBtn = document.getElementById("check-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");
const saveBtn = document.getElementById("save-btn");
const quitBtn = document.getElementById("quit-btn");

/* End screen elements */
const finalMessage = document.getElementById("final-message");
const summaryText = document.getElementById("summary-text");
const playAgainBtn = document.getElementById("play-again-btn");

/*
  Hides every screen and shows only the one passed in.
  This is how the app moves between pages without reloading.
*/
function showScreen(screen) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  placementScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

/*
  Capitalizes the first letter of a word.
  Example: "easy" becomes "Easy"
*/
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/*
  Converts the internal hint mode value into display text like the above function.
*/
function prettyHintMode(mode) {
  if (mode === "guided") return "Guided";
  if (mode === "minimal") return "Minimal";
  return "Standard";
}

/*
  Cleans and normalizes student code before checking it.
  This helps the checker ignore spaces and case differences.
*/
function normalizeCode(code) {
  return code
    .replace(/\s+/g, "")
    .replace(/integer/g, "int")
    .trim()
    .toLowerCase();
}

/*
  Shuffles the answer choices for the quizzes.
*/
function shuffleArray(array) {
  // Create a copy so original isn't changed
  let shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    // Swap values
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/*
  Starts a completely new session.
  Resets all progress and launches the pre-quiz.
*/
function startNewFlow() {
  studentName = studentNameInput.value.trim();

  if (!studentName) {
    startMessage.textContent = "Please enter the student's name.";
    return;
  }

  score = 0;
  xp = 0;
  attempts = 0;
  hintUsed = false;
  badges = [];
  totalAttempts = 0;
  totalHintsUsed = 0;
  totalCorrectFirstTry = 0;
  completedLevels = 0;
  preQuizScore = 0;
  postQuizScore = 0;
  currentQuizIndex = 0;
  currentQuizType = "pre";
  preQuizResults = [];
  suggestedDifficulty = "medium";
  suggestedHintMode = "standard";

  startPreQuiz();
}

/*
  Prepares and displays the pre-quiz.
*/
function startPreQuiz() {
  preQuizQuestions.sort(() => Math.random() - 0.5);
  currentQuizType = "pre";
  currentQuizIndex = 0;
  quizTitle.textContent = "Pre-Quiz";
  quizSubtitle.textContent = "Answer these 8 questions so the game can recommend the best difficulty and hint level.";
  renderQuizQuestion();
  showScreen(quizScreen);
}

/*
  Prepares and displays the post-quiz.
*/
function startPostQuiz() {
  postQuizQuestionsByDifficulty[difficulty].sort(() => Math.random() - 0.5);
  currentQuizType = "post";
  currentQuizIndex = 0;
  quizTitle.textContent = "Post-Quiz";
  quizSubtitle.textContent = "Answer these questions after finishing the game.";
  renderQuizQuestion();
  showScreen(quizScreen);
}

/*
  Returns whichever quiz set is currently active.
*/
function getCurrentQuizSet() {
  if (currentQuizType === "pre") {
    return preQuizQuestions;
  }

  return postQuizQuestionsByDifficulty[difficulty];
}
/*
  Displays the current quiz question and its options.
*/
function renderQuizQuestion() {
  const quizSet = getCurrentQuizSet();
  const q = quizSet[currentQuizIndex];

  quizQuestionTitle.textContent = `${q.title} (${currentQuizIndex + 1}/${quizSet.length})`;
  quizQuestionText.textContent = q.text;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";

  // 🔥 Shuffle the options
  const shuffledOptions = shuffleArray(q.options);

  shuffledOptions.forEach((option) => {
    const label = document.createElement("label");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz-option";
    radio.value = option;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + option));

    quizOptions.appendChild(label);
  });
}

/*
  Saves the current quiz answer, updates the score,
  and moves to the next quiz question or next screen.
*/
function nextQuizQuestion() {
  const selected = document.querySelector('input[name="quiz-option"]:checked');
  if (!selected) {
    quizFeedback.textContent = "Please select an answer.";
    return;
  }

  const quizSet = getCurrentQuizSet();
  const q = quizSet[currentQuizIndex];
  const isCorrect = selected.value === q.answer;

  if (currentQuizType === "pre") {
    preQuizResults.push({
      question: q.text,
      category: q.category,
      selected: selected.value,
      correctAnswer: q.answer,
      explanation: q.explanation,
      isCorrect: isCorrect
    });

    if (isCorrect) {
      preQuizScore++;
    }
  }

  if (currentQuizType === "post" && isCorrect) {
    postQuizScore++;
  }

  currentQuizIndex++;

  if (currentQuizIndex < quizSet.length) {
    renderQuizQuestion();
  } else {
    if (currentQuizType === "pre") {
      determinePlacement();
      showPlacementScreen();
    } else {
      showEndScreen();
    }
  }
}

/*
  Examines pre-quiz results and decides what difficulty
  and hint level to recommend.
*/
function determinePlacement() {
  const missedSyntax = preQuizResults.filter(
    (item) => !item.isCorrect && (item.category === "syntax" || item.category === "while")
  ).length;

  const missedLogic = preQuizResults.filter(
    (item) => !item.isCorrect && (item.category === "logic" || item.category === "output" || item.category === "debugging")
  ).length;

  const missedNested = preQuizResults.filter(
    (item) => !item.isCorrect && item.category === "nested"
  ).length;

  if (preQuizScore <= 2) {
    suggestedDifficulty = "easy";
    suggestedHintMode = "guided";
  } else if (preQuizScore <= 5) {
    suggestedDifficulty = "medium";
    suggestedHintMode = "standard";
  } else {
    suggestedDifficulty = "hard";
    suggestedHintMode = "minimal";
  }

  if (missedNested >= 2 && suggestedDifficulty === "hard") {
    suggestedDifficulty = "medium";
    suggestedHintMode = "standard";
  }

  if (missedSyntax >= 2) {
    suggestedDifficulty = "easy";
    suggestedHintMode = "guided";
  }

  if (missedLogic >= 2 && suggestedDifficulty === "hard") {
    suggestedDifficulty = "medium";
  }
}

/*
  Creates an explanation for why
  a certain recommendation was made.
*/
function buildPlacementReason() {
  const missed = preQuizResults.filter((item) => !item.isCorrect);

  if (missed.length === 0) {
    return "You answered all of the pre-quiz questions correctly, so the game suggests Hard difficulty with Minimal hints.";
  }

  const categoriesMissed = [...new Set(missed.map((item) => item.category))];

  let categoryText = categoriesMissed.join(", ");
  if (!categoryText) categoryText = "general loop concepts";

  return `Your score and answer pattern suggest that you may need the most support in: ${categoryText}. That is why this difficulty and hint level were recommended.`;
}

/*
  Displays the placement screen after the pre-quiz.
*/
function showPlacementScreen() {
  placementSummary.textContent = `${studentName}, you scored ${preQuizScore} out of ${preQuizQuestions.length} on the pre-quiz.`;

  suggestedDifficultyText.textContent = capitalize(suggestedDifficulty);
  suggestedHintsText.textContent = prettyHintMode(suggestedHintMode);
  placementReason.textContent = buildPlacementReason();

  overrideDifficulty.value = suggestedDifficulty;
  overrideHints.value = suggestedHintMode;

  placementReview.innerHTML = "";

  preQuizResults.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "review-item";

    div.innerHTML = `
      <p><strong>Question ${index + 1}:</strong> ${item.question}</p>
      <p><strong>Your Answer:</strong> ${item.selected}</p>
      <p><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
      <p class="${item.isCorrect ? "correct" : "incorrect"}">
        ${item.isCorrect ? "Correct" : "Incorrect"}
      </p>
      <p><strong>Why:</strong> ${item.explanation}</p>
    `;

    placementReview.appendChild(div);
  });

  showScreen(placementScreen);
}

/*
  Starts the main game using either the recommended setup
  or the student's custom selections.
*/
function beginGameWithSetup(selectedDifficulty, selectedHintMode) {
  difficulty = selectedDifficulty;
  hintMode = selectedHintMode;
  questions = allQuestions[difficulty];
  currentLevel = 0;
  visitedQuestions = new Set([0]);
  
  if (requirementMessageEl) {
    requirementMessageEl.textContent = getRequirementMessage();
  }

  studentDisplay.textContent = studentName;
  difficultyDisplay.textContent = capitalize(difficulty);
  hintLevelDisplay.textContent = prettyHintMode(hintMode);

  updateBadges();
  updateXP();
  loadQuestion();
  showScreen(gameScreen);
}

/*
  Loads the current coding level into the screen.
*/
function loadQuestion() {
  const q = questions[currentLevel];
  visitedQuestions.add(currentLevel);

  levelNumber.textContent = currentLevel + 1;
  scoreDisplay.textContent = score;
  questionTitle.textContent = q.title;
  questionText.textContent = q.question;
  expectedOutput.textContent = q.expectedOutput;
  codeInput.value = "";
  feedback.textContent = "Your feedback will appear here.";
  feedback.className = "";
  hintText.textContent = "No hint used yet.";
  nextBtn.disabled = true;
  attempts = 0;
  hintUsed = false;
  checkBtn.disabled = false;

  updateProgress();
  updateAnalytics();
  saveProgress();
}

/*
  Returns the requirement message based on difficulty level.
*/
function getRequirementMessage() {
  if (difficulty === "easy") {
    return "🎯 Goal: Reach 100 XP to master this level.";
  }

  if (difficulty === "medium") {
    return "🎯 Goal: Reach 100 XP AND complete all questions at least once to master this level.";
  }

  if (difficulty === "hard") {
    return "🔥 Goal: Reach 100 XP AND complete ALL questions at least once to master this level.";
  }

  return "";
}

/*
  Displays a message when the player masters a difficulty.
*/
function showMasteryMessage() {
  let message = "";

  if (difficulty === "easy") {
    message = "🎉 You mastered Easy difficulty!";
  } else if (difficulty === "medium") {
    message = "🎉 You mastered Medium difficulty!";
  } else if (difficulty === "hard") {
    message = "🔥 You mastered Hard difficulty!";
  }

  message += " Get ready for the Post-Quiz!";

  feedback.textContent = message;
  feedback.className = "feedback-success mastery";
}

/*
  Cleans up output text so we can compare it properly.
  Removes carriage returns and extra spaces.
*/
function normalizeOutput(text) {
  return text.replace(/\r/g, "").trim();
}

/*.
  Returns the captured groups if found, otherwise null.

  Example:
  extractFirstMatch("for(int i=0;i<5;i++)", regex)
*/
function extractFirstMatch(code, regex) {
  const match = code.match(regex);
  return match ? match.slice(1) : null;
}

/*
  Converts a string into a number.
*/
function parseNumber(value) {
  return Number(value);
}

/*
  Determines how the loop variable changes each iteration.

  Supports:
  i++
  i--
  i += 2
  i -= 2
  i = i + 2
  i = i - 2

  Returns the step value (positive or negative)
*/
function getStepFromUpdate(updateText, variableName) {
  const cleaned = updateText.replace(/\s+/g, "");

  if (cleaned === `${variableName}++`) return 1;
  if (cleaned === `${variableName}--`) return -1;

  let match = cleaned.match(new RegExp(`^${variableName}\\+=(-?\\d+)$`));
  if (match) return Number(match[1]);

  match = cleaned.match(new RegExp(`^${variableName}-=(\\d+)$`));
  if (match) return -Number(match[1]);

  match = cleaned.match(new RegExp(`^${variableName}=${variableName}\\+(-?\\d+)$`));
  if (match) return Number(match[1]);

  match = cleaned.match(new RegExp(`^${variableName}=${variableName}-(\\d+)$`));
  if (match) return -Number(match[1]);

  return null; // invalid update
}

/*
  Checks if a condition is true for a given value.

  Example:
  testCondition(3, "<=", 5) → true
*/
function testCondition(value, operator, limit) {
  switch (operator) {
    case "<": return value < limit;
    case "<=": return value <= limit;
    case ">": return value > limit;
    case ">=": return value >= limit;
    default: return false;
  }
}

/*
  Simulates a single loop (for OR while).

  It generates the output that the student's loop would produce.

  Example output:
  "1\n2\n3"
*/
function simulateSingleLoop(start, operator, limit, step) {
  const output = [];
  let value = start;

  // Prevent invalid loops
  if (step === 0 || step === null) return null;

  let guard = 0; // prevents infinite loops

  while (testCondition(value, operator, limit)) {
    output.push(String(value));
    value += step;
    guard++;

    // safety check to avoid infinite loop
    if (guard > 1000) {
      return null;
    }
  }

  return output.join("\n");
}

/*
  Simulates nested loops for star patterns.

  Example output:
  **
  **
*/
function simulateNestedLoop(rowStart, rowOp, rowLimit, rowStep, colStart, colOp, colLimit, colStep) {
  if ([rowStep, colStep].includes(null) || rowStep === 0 || colStep === 0) {
    return null;
  }

  const lines = [];
  let i = rowStart;
  let rowGuard = 0;

  while (testCondition(i, rowOp, rowLimit)) {
    let line = "";
    let j = colStart;
    let colGuard = 0;

    while (testCondition(j, colOp, colLimit)) {
      line += "*";
      j += colStep;
      colGuard++;

      if (colGuard > 1000) return null;
    }

    lines.push(line);
    i += rowStep;
    rowGuard++;

    if (rowGuard > 1000) return null;
  }

  return lines.join("\n");
}

/*
  Main validation function.

  This checks whether the student's code:
  1. Uses the required loop type (or an allowed one for flexible questions)
  2. Has valid loop structure
  3. Produces the expected output when simulated

  It supports:
  - for
  - while
  - flexible
  - nested
  - nestedWhile
*/
function validateAnswer(code, rules, expectedOutput) {
  const raw = code;
  const c = normalizeCode(code);
  const normalizedExpected = normalizeOutput(expectedOutput);

  const hasFor = c.includes("for(");
  const hasWhile = c.includes("while(");
  const hasPrintln = c.includes("system.out.println");
  const hasPrint =
    c.includes('system.out.print("*")') ||
    c.includes("system.out.print('*')") ||
    c.includes('system.out.print(\\"*\\")');

  /*
    Helper: find a valid update statement for a variable.
    This avoids the old bug where the regex grabbed too much text.
  */
  function findUpdateStatement(varName, source) {
    const regexes = [
      new RegExp(`\\b${varName}\\s*\\+\\+`),
      new RegExp(`\\b${varName}\\s*--`),
      new RegExp(`\\b${varName}\\s*\\+=\\s*-?\\d+`),
      new RegExp(`\\b${varName}\\s*-=\\s*\\d+`),
      new RegExp(`\\b${varName}\\s*=\\s*${varName}\\s*\\+\\s*-?\\d+`),
      new RegExp(`\\b${varName}\\s*=\\s*${varName}\\s*-\\s*\\d+`)
    ];

    for (const rgx of regexes) {
      const match = source.match(rgx);
      if (match) {
        return match[0];
      }
    }

    return null;
  }

  /*
    Helper: check whether a parsed single-loop answer
    matches the allowed rule values for strict/flexible questions.
  */
  function singleLoopMatchesRules(start, operator, limit, step, rules) {
    const actualConditionText = `i${operator}${limit}`;

    // Build allowed condition list
    let allowedConditions = [];

    if (rules.type === "flexible") {
      allowedConditions = rules.validConditions || [];
    } else {
      // For strict for/while questions, allow both equivalent forms
      allowedConditions = [rules.condition];

      const parsedCondition = rules.condition.match(/^i(<=|<|>=|>)(-?\d+)$/);
      if (parsedCondition) {
        const [, ruleOp, ruleLimitText] = parsedCondition;
        const ruleLimit = Number(ruleLimitText);

        if (ruleOp === "<=") allowedConditions.push(`i<${ruleLimit + 1}`);
        if (ruleOp === "<") allowedConditions.push(`i<=${ruleLimit - 1}`);
        if (ruleOp === ">=") allowedConditions.push(`i>${ruleLimit - 1}`);
        if (ruleOp === ">") allowedConditions.push(`i>=${ruleLimit + 1}`);
      }
    }

    // Build allowed update list
    let updateOk = false;

    if (rules.type === "flexible") {
      if (step === 1 && rules.validUpdates?.includes("i++")) updateOk = true;
      if (step === -1 && rules.validUpdates?.includes("i--")) updateOk = true;
      if (rules.validUpdates?.includes(`i+=${step}`)) updateOk = true;
      if (step < 0 && rules.validUpdates?.includes(`i-=${Math.abs(step)}`)) updateOk = true;
      if (step > 0 && rules.validUpdates?.includes(`i=i+${step}`)) updateOk = true;
      if (step < 0 && rules.validUpdates?.includes(`i=i-${Math.abs(step)}`)) updateOk = true;

      const startOk = rules.validStarts?.some((s) => Number(s) === start);
      const conditionOk = allowedConditions.includes(actualConditionText);

      return startOk && conditionOk && updateOk;
    }

    // Strict for/while questions: keep required loop type, but allow equivalent conditions and updates
    const startOk = Number(rules.start) === start;
    const conditionOk = allowedConditions.includes(actualConditionText);

    if (rules.update === "i++" && step === 1) updateOk = true;
    if (rules.update === "i--" && step === -1) updateOk = true;
    if (rules.update === `i+=${step}`) updateOk = true;
    if (step < 0 && rules.update === `i-=${Math.abs(step)}`) updateOk = true;
    if (step > 0 && rules.update === `i=i+${step}`) updateOk = true;
    if (step < 0 && rules.update === `i=i-${Math.abs(step)}`) updateOk = true;

    // Also allow equivalent update styles for strict questions
    if (rules.update === "i++" && step === 1) updateOk = true;
    if (rules.update === "i--" && step === -1) updateOk = true;
    if (rules.update.startsWith("i+=") && step === Number(rules.update.replace("i+=", ""))) updateOk = true;
    if (rules.update.startsWith("i-=") && step === -Number(rules.update.replace("i-=", ""))) updateOk = true;

    return startOk && conditionOk && updateOk;
  }

  /*
    ----------------------------
    SINGLE LOOP QUESTIONS
    ----------------------------
  */
  if (rules.type === "for" || rules.type === "while" || rules.type === "flexible") {
    let loopType = null;

    if (rules.type === "for") {
      if (!hasFor) return { valid: false, reason: "required_for_missing" };
      loopType = "for";
    } else if (rules.type === "while") {
      if (!hasWhile) return { valid: false, reason: "required_while_missing" };
      loopType = "while";
    } else {
      if (!hasFor && !hasWhile) return { valid: false, reason: "loop_missing" };
      loopType = hasFor ? "for" : "while";
    }

    if (!hasPrintln) {
      return { valid: false, reason: "println_missing" };
    }

    /*
      ---------- FOR LOOP ----------
    */
    if (loopType === "for") {
      const parsed = extractFirstMatch(
        raw,
        /for\s*\(\s*(?:int\s+)?([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;\s*\1\s*(<=|<|>=|>)\s*(-?\d+)\s*;\s*([^)]+)\)/
      );

      if (!parsed) {
        return { valid: false, reason: "for_parse_failed" };
      }

      const [varName, startText, operator, limitText, updateText] = parsed;

      const start = parseNumber(startText);
      const limit = parseNumber(limitText);
      const step = getStepFromUpdate(updateText, varName);

      if (step === null) {
        return { valid: false, reason: "update_missing" };
      }

      const generated = simulateSingleLoop(start, operator, limit, step);

      if (generated === null) {
        return { valid: false, reason: "loop_simulation_failed" };
      }

      const normalizedGenerated = normalizeOutput(generated);

      if (!singleLoopMatchesRules(start, operator, limit, step, rules)) {
        return { valid: false, reason: "wrong_loop_structure" };
      }

      return {
        valid: normalizedGenerated === normalizedExpected,
        reason: normalizedGenerated === normalizedExpected ? "correct" : "wrong_output"
      };
    }

    /*
      ---------- WHILE LOOP ----------
    */
    if (loopType === "while") {
      const init = extractFirstMatch(
        raw,
        /(?:int\s+)?([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;/
      );

      const condition = extractFirstMatch(
        raw,
        /while\s*\(\s*([a-zA-Z_]\w*)\s*(<=|<|>=|>)\s*(-?\d+)\s*\)/
      );

      if (!init || !condition) {
        return { valid: false, reason: "while_parse_failed" };
      }

      const [initVar, startText] = init;
      const [condVar, operator, limitText] = condition;

      if (initVar !== condVar) {
        return { valid: false, reason: "counter_mismatch" };
      }

      const updateText = findUpdateStatement(initVar, raw);

      if (!updateText) {
        return { valid: false, reason: "update_missing" };
      }

      const start = parseNumber(startText);
      const limit = parseNumber(limitText);
      const step = getStepFromUpdate(updateText, initVar);

      if (step === null) {
        return { valid: false, reason: "update_missing" };
      }

      const generated = simulateSingleLoop(start, operator, limit, step);

      if (generated === null) {
        return { valid: false, reason: "loop_simulation_failed" };
      }

      const normalizedGenerated = normalizeOutput(generated);

      if (!singleLoopMatchesRules(start, operator, limit, step, rules)) {
        return { valid: false, reason: "wrong_loop_structure" };
      }

      return {
        valid: normalizedGenerated === normalizedExpected,
        reason: normalizedGenerated === normalizedExpected ? "correct" : "wrong_output"
      };
    }
  }

  /*
    ----------------------------
    NESTED FOR LOOPS
    ----------------------------
  */
  if (rules.type === "nested") {
    if (!hasFor) {
      return { valid: false, reason: "required_nested_for_missing" };
    }

    if (!hasPrint || !c.includes("system.out.println()")) {
      return { valid: false, reason: "nested_print_missing" };
    }

    const loopMatches = [...raw.matchAll(
      /for\s*\(\s*(?:int\s+)?([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;\s*\1\s*(<=|<|>=|>)\s*(-?\d+)\s*;\s*([^)]+)\)/g
    )];

    if (loopMatches.length < 2) {
      return { valid: false, reason: "nested_parse_failed" };
    }

    const [outerVar, outerStartText, outerOp, outerLimitText, outerUpdateText] = loopMatches[0].slice(1);
    const [innerVar, innerStartText, innerOp, innerLimitText, innerUpdateText] = loopMatches[1].slice(1);

    const outerStep = getStepFromUpdate(outerUpdateText, outerVar);
    const innerStep = getStepFromUpdate(innerUpdateText, innerVar);

    if (outerStep === null || innerStep === null) {
      return { valid: false, reason: "update_missing" };
    }

    const generated = simulateNestedLoop(
      parseNumber(outerStartText),
      outerOp,
      parseNumber(outerLimitText),
      outerStep,
      parseNumber(innerStartText),
      innerOp,
      parseNumber(innerLimitText),
      innerStep
    );

    if (generated === null) {
      return { valid: false, reason: "nested_simulation_failed" };
    }

    return {
      valid: normalizeOutput(generated) === normalizedExpected,
      reason: normalizeOutput(generated) === normalizedExpected ? "correct" : "wrong_output"
    };
  }

  /*
    ----------------------------
    NESTED WHILE LOOPS
    ----------------------------
  */
  if (rules.type === "nestedWhile") {
    if (!hasWhile) {
      return { valid: false, reason: "required_nested_while_missing" };
    }

    if (!hasPrint || !c.includes("system.out.println()")) {
      return { valid: false, reason: "nested_print_missing" };
    }

    const initMatches = [...raw.matchAll(/(?:int\s+)?([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;/g)];
    const whileMatches = [...raw.matchAll(/while\s*\(\s*([a-zA-Z_]\w*)\s*(<=|<|>=|>)\s*(-?\d+)\s*\)/g)];

    if (initMatches.length < 2 || whileMatches.length < 2) {
      return { valid: false, reason: "nested_while_parse_failed" };
    }

    const [outerVar, outerStartText] = initMatches[0].slice(1);
    const [innerVar, innerStartText] = initMatches[1].slice(1);

    const [outerCondVar, outerOp, outerLimitText] = whileMatches[0].slice(1);
    const [innerCondVar, innerOp, innerLimitText] = whileMatches[1].slice(1);

    if (outerVar !== outerCondVar || innerVar !== innerCondVar) {
      return { valid: false, reason: "counter_mismatch" };
    }

    const outerUpdateText = findUpdateStatement(outerVar, raw);
    const innerUpdateText = findUpdateStatement(innerVar, raw);

    if (!outerUpdateText || !innerUpdateText) {
      return { valid: false, reason: "update_missing" };
    }

    const outerStep = getStepFromUpdate(outerUpdateText, outerVar);
    const innerStep = getStepFromUpdate(innerUpdateText, innerVar);

    if (outerStep === null || innerStep === null) {
      return { valid: false, reason: "update_missing" };
    }

    const generated = simulateNestedLoop(
      parseNumber(outerStartText),
      outerOp,
      parseNumber(outerLimitText),
      outerStep,
      parseNumber(innerStartText),
      innerOp,
      parseNumber(innerLimitText),
      innerStep
    );

    if (generated === null) {
      return { valid: false, reason: "nested_simulation_failed" };
    }

    return {
      valid: normalizeOutput(generated) === normalizedExpected,
      reason: normalizeOutput(generated) === normalizedExpected ? "correct" : "wrong_output"
    };
  }

  return { valid: false, reason: "unsupported_rule_type" };
}

/*
  Converts validation results into user-friendly feedback messages.
*/
function buildFeedback(result, rules) {
  switch (result.reason) {
    case "required_for_missing":
      return "This question requires a for loop.";

    case "required_while_missing":
      return "This question requires a while loop.";

    case "required_nested_for_missing":
      return "This question requires nested for loops.";

    case "required_nested_while_missing":
      return "This question requires nested while loops.";

    case "loop_missing":
      return "You must use a loop.";

    case "println_missing":
      return "Make sure you print inside the loop.";

    case "nested_print_missing":
      return "For star patterns, use System.out.print(\"*\") inside the inner loop and System.out.println() after each row.";

    case "for_parse_failed":
      return "Your for loop format could not be read. Check the start, condition, and update parts.";

    case "while_parse_failed":
      return "Your while loop format could not be read. Check the counter setup, condition, and update.";

    case "nested_parse_failed":
      return "Your nested for loops could not be read correctly.";

    case "nested_while_parse_failed":
      return "Your nested while loops could not be read correctly.";

    case "counter_mismatch":
      return "Make sure the same variable is used consistently in initialization, condition, and update.";

    case "update_missing":
      return "Your loop variable must change each time.";

    case "loop_simulation_failed":
      return "Your loop could not be simulated. Check the condition and update step.";

    case "nested_simulation_failed":
      return "Your nested loop logic could not be simulated. Check your row and column loop conditions and updates.";

    case "wrong_loop_structure":
      return "Your loop structure does not match what this question expects.";

    case "wrong_output":
      return "Your loop runs, but the output is incorrect.";

    case "correct":
      return "Correct!";

    default:
      return "Check your loop logic carefully.";
  }
}

/*
  Handles what happens when the student clicks "Check Answer".
  - checks the answer
  - updates attempts
  - awards points and XP if correct
  - gives feedback if incorrect
*/
function checkAnswer() {
  const userCode = codeInput.value;
  const q = questions[currentLevel];
  const result = validateAnswer(userCode, q.rules, q.expectedOutput);

  attempts++;
  totalAttempts++;

  if (result.valid) {
    let points = 10;
    let earnedXP = 20;

    if (hintUsed) {
      points -= 3;
      earnedXP -= 5;
    }

    if (attempts === 1) {
      totalCorrectFirstTry++;
      points += 2;
      earnedXP += 5;
    }

    if (attempts >= 3) {
      points -= 2;
      earnedXP -= 5;
    }

    if (points < 3) points = 3;
    if (earnedXP < 5) earnedXP = 5;

    score += points;
    xp += earnedXP;
    completedLevels++;

    const hasVisitedAllQuestions = visitedQuestions.size >= questions.length;
    const requiresFullCycle = difficulty === "medium" || difficulty === "hard";
    const hasMasteredDifficulty =
      xp >= 100 && (!requiresFullCycle || hasVisitedAllQuestions);

    if (xp > 100) {
      xp = 100;
    }

    if (hasMasteredDifficulty) {
      xp = 100;

      showMasteryMessage();
      showBadgeToast(`${capitalize(difficulty)} Mastered`);

      scoreDisplay.textContent = score;
      updateXP();
      awardBadges();
      updateProgress();
      updateAnalytics();
      saveProgress();

      setTimeout(() => {
        startPostQuiz();
      }, 2000);

      return;
    }

    feedback.textContent = `Correct. You earned ${points} points and ${earnedXP} XP.`;

    if (xp >= 100 && requiresFullCycle && !hasVisitedAllQuestions) {
      feedback.textContent += ` ⚠️ You have enough XP, but you must complete all ${questions.length} questions before mastering ${difficulty}.`;
    }

    feedback.className = "feedback-success";

    scoreDisplay.textContent = score;
    updateXP();
    awardBadges();
    nextBtn.disabled = false;
    checkBtn.disabled = true;
    showLevelToast();
    updateProgress();
    updateAnalytics();
    saveProgress();
  } else {
    feedback.textContent = buildFeedback(result, q.rules);
    feedback.className = "feedback-error";

    if (attempts === 2) {
      feedback.textContent += " Try using a hint.";
    }

    if (attempts >= 3) {
      feedback.textContent += " Look closely at punctuation, braces, and loop logic.";
    }

    updateAnalytics();
  }
}

/*
  Shows a hint based on the selected hint mode.
*/
function showHint() {
  hintUsed = true;
  totalHintsUsed++;

  const currentQuestion = questions[currentLevel];
  hintText.textContent = currentQuestion.hints[hintMode];
  hintText.className = "feedback-hint";

  updateAnalytics();
  saveProgress();
}

/*
  Moves to the next level or starts the post-quiz
  if all levels are completed.
*/
function nextLevel() {
  if (currentLevel < questions.length - 1) {
    currentLevel++;
    loadQuestion();
  } else {
    startPostQuiz();
  }
}

/*
  Temporarily shows the "Level Cleared!" message.
*/
function showLevelToast() {
  levelToast.classList.remove("hidden");
  setTimeout(() => {
    levelToast.classList.add("hidden");
  }, 1200);
}

/*
  Updates the XP number and visual XP bar.
  XP wraps every 100 points for display.
*/
function updateXP() {
  const displayXP = xp % 100;
  xpText.textContent = `${displayXP} / 100`;
  xpBar.style.width = `${displayXP}%`;
}

/*
  Awards badges when the student reaches certain milestones.
*/
function awardBadges() {
  if (score >= 20 && !badges.includes("Rising Coder")) {
    badges.push("Rising Coder");
    showBadgeToast("Rising Coder");
  }

  if (completedLevels >= 4 && !badges.includes("Loop Explorer")) {
    badges.push("Loop Explorer");
    showBadgeToast("Loop Explorer");
  }

  if (totalHintsUsed === 0 && completedLevels >= 2 && !badges.includes("Independent Thinker")) {
    badges.push("Independent Thinker");
    showBadgeToast("Independent Thinker");
  }

  if (totalCorrectFirstTry >= 3 && !badges.includes("Fast Solver")) {
    badges.push("Fast Solver");
    showBadgeToast("Fast Solver");
  }

  if (difficulty === "hard" && completedLevels >= 3 && !badges.includes("Challenge Master")) {
    badges.push("Challenge Master");
    showBadgeToast("Challenge Master");
  }

  updateBadges();
}

/*
  Notification for obtaining a badge
*/
function showBadgeToast(badgeName) {
  badgeToast.textContent = `🏆 New Badge Earned: ${badgeName}`;
  badgeToast.classList.remove("hidden");

  setTimeout(() => {
    badgeToast.classList.add("hidden");
  }, 2000);
}

/*
  Renders the badge list to the page and explains what each badge was earned for.
*/
function updateBadges() {
  badgeList.innerHTML = "";

  if (badges.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No badges earned yet.";
    badgeList.appendChild(li);
    return;
  }

  badges.forEach((badge) => {
    const li = document.createElement("li");
    const description = badgeDescriptions[badge] || "Badge earned.";

    li.innerHTML = `<strong>${badge}</strong>: ${description}`;
    badgeList.appendChild(li);
  });
}

/*
  Updates the progress summary text.
*/
function updateProgress() {
  progressText.textContent =
    `${studentName}, you are on level ${currentLevel + 1} of ${questions.length}. ` +
    `Difficulty: ${capitalize(difficulty)}. Hint Level: ${prettyHintMode(hintMode)}. ` +
    `Score: ${score}. Completed Levels: ${completedLevels}.`;
}

/*
  Updates analytics text shown during the session.
*/
function updateAnalytics() {
  const avgAttempts = completedLevels > 0 ? (totalAttempts / completedLevels).toFixed(1) : "0.0";
  analyticsText.textContent =
    `Attempts: ${totalAttempts} | Hints Used: ${totalHintsUsed} | ` +
    `First-Try Correct: ${totalCorrectFirstTry} | Average Attempts per Solved Level: ${avgAttempts}`;
}

/*
  Saves the current game state into localStorage.
  localStorage is browser storage that persists even if the page closes.
*/
function saveProgress() {
  const gameData = {
  studentName,
  difficulty,
  hintMode,
  currentLevel,
  score,
  xp,
  attempts,
  hintUsed,
  badges,
  totalAttempts,
  totalHintsUsed,
  totalCorrectFirstTry,
  completedLevels,
  preQuizScore,
  postQuizScore,
  preQuizResults,
  suggestedDifficulty,
  suggestedHintMode,
  visitedQuestions: Array.from(visitedQuestions)
};

  localStorage.setItem("javaQuestUpdatedSave", JSON.stringify(gameData));
}

/*
  Loads saved progress from localStorage if it exists.
*/
function loadSavedProgress() {
  const saved = localStorage.getItem("javaQuestUpdatedSave");

  if (!saved) {
    startMessage.textContent = "No saved progress was found.";
    return;
  }

  const data = JSON.parse(saved);

  studentName = data.studentName || "";
  difficulty = data.difficulty || "medium";
  hintMode = data.hintMode || "standard";
  currentLevel = data.currentLevel || 0;
  score = data.score || 0;
  xp = data.xp || 0;
  attempts = data.attempts || 0;
  hintUsed = data.hintUsed || false;
  badges = data.badges || [];
  totalAttempts = data.totalAttempts || 0;
  totalHintsUsed = data.totalHintsUsed || 0;
  totalCorrectFirstTry = data.totalCorrectFirstTry || 0;
  completedLevels = data.completedLevels || 0;
  preQuizScore = data.preQuizScore || 0;
  postQuizScore = data.postQuizScore || 0;
  preQuizResults = data.preQuizResults || [];
  suggestedDifficulty = data.suggestedDifficulty || "medium";
  suggestedHintMode = data.suggestedHintMode || "standard";
  visitedQuestions = new Set(data.visitedQuestions || [currentLevel]);

  questions = allQuestions[difficulty];

  studentNameInput.value = studentName;
  studentDisplay.textContent = studentName;
  difficultyDisplay.textContent = capitalize(difficulty);
  hintLevelDisplay.textContent = prettyHintMode(hintMode);

  if (requirementMessageEl) {
    requirementMessageEl.textContent = getRequirementMessage();
  }

  updateBadges();
  updateXP();
  loadQuestion();
  showScreen(gameScreen);
}

/*
  Descriptions for each badge so players know what they earned it for.
*/
const badgeDescriptions = {
  "Rising Coder": "Earned by reaching at least 20 points.",
  "Loop Explorer": "Earned by completing multiple levels.",
  "Independent Thinker": "Earned by solving levels without using hints.",
  "Fast Solver": "Earned by getting several answers correct on the first try.",
  "Challenge Master": "Earned by making strong progress on Hard difficulty."
};

/*
  Removes saved browser data for this game.
*/
function clearSavedProgress() {
  localStorage.removeItem("javaQuestUpdatedSave");
}

/*
  Builds and shows the end screen after the post-quiz.
  Uses percentages instead of raw counts so pre-quiz and post-quiz
  are compared fairly even if they have different numbers of questions.
*/
function showEndScreen() {
  clearSavedProgress();

  const currentPostQuiz = postQuizQuestionsByDifficulty[difficulty];

  const preQuizTotal = preQuizQuestions.length;
  const postQuizTotal = currentPostQuiz.length;

  const prePercent = preQuizTotal > 0 ? (preQuizScore / preQuizTotal) * 100 : 0;
  const postPercent = postQuizTotal > 0 ? (postQuizScore / postQuizTotal) * 100 : 0;

  const percentChange = postPercent - prePercent;

  let improvementMessage = "";
  if (percentChange > 0) {
    improvementMessage = `Improved by ${percentChange.toFixed(1)} percentage points`;
  } else if (percentChange < 0) {
    improvementMessage = `Dropped by ${Math.abs(percentChange).toFixed(1)} percentage points`;
  } else {
    improvementMessage = "Stayed the same";
  }

  let performanceMessage = "";
  if (postPercent === 100) {
    performanceMessage = "Excellent work — you got every post-quiz question correct.";
  } else if (postPercent >= 80) {
    performanceMessage = "Strong performance — you showed a solid understanding of the concepts.";
  } else if (postPercent >= 60) {
    performanceMessage = "Good progress — you are building your loop logic skills.";
  } else {
    performanceMessage = "Keep practicing — you are still developing confidence with loops and logic.";
  }

  const badgeSummary =
    badges.length > 0
      ? badges.join(", ")
      : "No badges earned";

  finalMessage.textContent =
    `${studentName} completed Java Quest on ${capitalize(difficulty)} difficulty with ${prettyHintMode(hintMode)} hints, a score of ${score}, and ${badges.length} badge(s).`;

  summaryText.textContent =
    `Pre-Quiz: ${preQuizScore}/${preQuizTotal} (${prePercent.toFixed(1)}%). ` +
    `Post-Quiz: ${postQuizScore}/${postQuizTotal} (${postPercent.toFixed(1)}%). ` +
    `Overall result: ${improvementMessage}. ` +
    `${performanceMessage} ` +
    `Levels Completed: ${completedLevels}. ` +
    `Hints Used: ${totalHintsUsed}. ` +
    `First-Try Correct Answers: ${totalCorrectFirstTry}. ` +
    `Badges Earned: ${badgeSummary}.`;

  showScreen(endScreen);
}

/*
  Saves progress and returns the student to the start menu.
*/
function quitToMenu() {
  saveProgress();
  startMessage.textContent = "Your progress was saved.";
  showScreen(startScreen);
}

/*
  ===============================
  EVENT LISTENERS
  ===============================

  These connect buttons in the HTML to functions in JavaScript.
*/

/* Start screen buttons */
startBtn.addEventListener("click", startNewFlow);
resumeBtn.addEventListener("click", loadSavedProgress);
clearBtn.addEventListener("click", () => {
  clearSavedProgress();
  startMessage.textContent = "Saved progress cleared.";
});

/* Quiz button */
quizNextBtn.addEventListener("click", nextQuizQuestion);

/* Placement screen buttons */
useRecommendationBtn.addEventListener("click", () => {
  beginGameWithSetup(suggestedDifficulty, suggestedHintMode);
});

useCustomBtn.addEventListener("click", () => {
  beginGameWithSetup(overrideDifficulty.value, overrideHints.value);
});

/* Main game buttons */
checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextLevel);

saveBtn.addEventListener("click", () => {
  saveProgress();
  feedback.textContent = "Progress saved successfully.";
  feedback.className = "feedback-success";
});

quitBtn.addEventListener("click", quitToMenu);

/* End screen button */
playAgainBtn.addEventListener("click", () => {
  showScreen(startScreen);
});

/*
  Initial app state:
  show the start screen when the page first loads.
*/
showScreen(startScreen);