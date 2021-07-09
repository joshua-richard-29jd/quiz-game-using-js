const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions , currentQuestionIndex

startButton.addEventListener('click', startgame)
nextButton.addEventListener('click' , () => {
currentQuestionIndex++
setNextQuestion()
})


function startgame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(quizQuestion) {
  questionElement.innerText = quizQuestion.question
  quizQuestion.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body , correct)
Array.from(answerButtonsElement.children).forEach(button => {
setStatusClass(button, button.dataset.correct)
console.log('arr', Array.from(answerButtonsElement.children) )
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'restart'
  startButton.classList.remove('hide')
}
}

function setStatusClass (element , correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }


const questions = [
    {
        question: 'whats is 2 + 2',
        answers: [
            {  text: '4' , correct: true },
            { text: '22' , correct: false }
        ]
    },

    {
      question: 'World Smallest Country',
      answers: [
          {  text: 'Canada' , correct: false },
          { text: 'America' , correct: false },
          { text: 'India' , correct: false },
          { text: 'Vatican City' , correct: true }
      ]
  },

  {
    question: 'Who was the first entered into space',
    answers: [
        {  text: 'Neil Armstrong' , correct: false },
        { text: 'Yuri Gagarin' , correct: true },
        { text: 'William Lundigan' , correct: false },
        { text: 'Edward McCauley' , correct: false }
    ]
},

{
  question: 'Novak Djokovic is a famous player associated with the game of',
  answers: [
      {  text: 'Hockey' , correct: false },
      { text: 'football' , correct: false },
      { text: 'chess' , correct: false },
      { text: 'Lawn Tennis' , correct: true }
  ]
},

{
  question: 'Which one of the following was the first fort constructed by the British in India?',
  answers: [
      {  text: 'Fort William' , correct: false },
      { text: 'Fort St. George' , correct: true },
      { text: 'Fort St. David' , correct: false },
      { text: 'Fort St. Angelo' , correct: false }
  ]
},

{
  question: 'What is the second largest country (in size) in the world?',
  answers: [
      {  text: 'Canada' , correct: true },
      { text: 'USA' , correct: false },
      { text: 'China' , correct: false },
      { text: 'Russia' , correct: false }
  ]
},

]