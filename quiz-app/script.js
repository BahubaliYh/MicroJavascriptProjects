const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  }, {
    question: 'What is the most used programming language in 2019?',
    a: 'C++',
    b: 'Javascript',
    c: 'Python',
    d: 'Java',
    correct: 'd'
  }, {
    question: 'Who is the prisident of the US?',
    a: 'Bahubali',
    b: 'Baraka Obama',
    c: 'Donald Trump',
    d: 'Upendra',
    correct: 'c'
  }, {
    question: 'What does HTML stands for?',
    a: 'Hypertext Markup Langauge',
    b: 'Hypertool Markup Langauge',
    c: 'Hypertag Markup Language',
    d: 'HyperTech Machine Language',
    correct: 'a'
  }, {
    question: 'What year was javascript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the above',
    correct: 'a'
  }
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');

const answersEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz ()
{
  deselectAnswers();
  const currentQuizData = quizData[ currentQuiz ];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected ()
{


  let answer = undefined;
  answersEls.forEach((answerEl) =>
  {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers ()
{
  answersEls.forEach((answerEl) =>
  {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () =>
{

  const answer = getSelected();

  if (answer) {

    if (answer === quizData[ currentQuiz ].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    }
    else {
      quiz.innerHTML = `<h2>You Answered Correctly at ${ score }/${ quizData.length } Questions</h2> <button onclick="location.reload()">Reload</button>`
    }
  }
})