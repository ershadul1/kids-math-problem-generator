const operations = ['+', '-', '*', '/']

const generateDecimalRandomNumber = () => {{
  return Math.round(Math.random()*(Math.random()*100) * 100) / 100;
}}

const generateIntegerRandomNumber = () => {{
  return Math.round(Math.random()*(Math.random()*100) * 10);
}}

const generateRandomMathProblem = () => {
  const operation = operations[Math.floor(Math.random()*operations.length)];
  let firstNumber;
  let secondNumber

  if (operation === '/') {
    firstNumber = generateIntegerRandomNumber();
    secondNumber = generateIntegerRandomNumber();
  } else {
    firstNumber = generateDecimalRandomNumber();
    secondNumber = generateDecimalRandomNumber();
  }

  return `${firstNumber} ${operation} ${secondNumber}`;
};


const evaluateAnswer = () => {
  let questionNode = document.getElementById("question");
  let question = questionNode.textContent;
  return Math.round(eval(question)*100)/100;
}

const checkAnswer = () => {

  const resultNode = document.getElementById("result-node");

  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }

  let validAnswer = evaluateAnswer();
  let inputNode = document.getElementById("user-input");
  let userInput = inputNode.value;


  let resultText = null;
  if (validAnswer.toString() === userInput.toString()) {
    resultText = document.createTextNode("Correct Answer! 🎉");
    resultNode.classList = "result-node text-center";
    resultNode.classList.add("correct-ans");
  } else {
    resultText = document.createTextNode("Sorry, Wrong Answer! Please Try Again");
    resultNode.classList = "result-node text-center";
    resultNode.classList.add("wrong-ans");
  }
  
  resultNode.appendChild(resultText);
}
 
content = document.getElementById("content");

const question = document.createElement("div");


const textNode = document.createTextNode(generateRandomMathProblem());
question.appendChild(textNode);
question.classList.add("question-text", "text-center", "mb-3");
question.setAttribute("id", "question");
content.appendChild(question);

const formNode = document.createElement("form");
formNode.setAttribute("onsubmit", "checkAnswer();return false")

const inputBox = document.createElement('div')
inputBox.classList.add("input-group", "mb-3");
const inputNode = document.createElement('input');
inputNode.classList.add("form-control");
inputNode.setAttribute("id", "user-input");
inputNode.setAttribute("type", "text");
inputNode.setAttribute("placeholder", "Write your answer here");
inputNode.setAttribute("required", "");
inputBox.appendChild(inputNode);

const btnNode = document.createElement('button');
btnNode.classList.add("btn", "btn-outline-secondary");
btnNode.setAttribute("type", "submit");
const btnText = document.createTextNode("Check Answer");
btnNode.appendChild(btnText);
inputBox.appendChild(btnNode);

formNode.appendChild(inputBox)
content.appendChild(formNode);


const resultNode = document.createElement('div');
resultNode.setAttribute("id", "result-node");
resultNode.classList.add("result-node", "text-center");

content.appendChild(resultNode);

formNode.onsubmit = e => {
  e.preventDefault();
  checkAnswer();
}


const revealCorrectAnswer = () => {
  let answer = evaluateAnswer();

  const resultNode = document.getElementById("result-node");

  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }

  resultText = document.createTextNode(`The correct answer is : ${answer}`);
  resultNode.classList = "result-node text-center";
  resultNode.classList.add("text-warning")

  resultNode.appendChild(resultText);
}


const revealCorrectAnswerBtn = document.createElement("button");
revealCorrectAnswerBtn.classList.add("btn", "btn-warning", "mt-5", "btn-lg");
revealCorrectAnswerBtn.setAttribute("type", "button");
const revealCorrectAnswerBtnText = document.createTextNode("Reveal Correct Answer");
revealCorrectAnswerBtn.appendChild(revealCorrectAnswerBtnText);

revealCorrectAnswerBtn.addEventListener("click", revealCorrectAnswer);

content.appendChild(revealCorrectAnswerBtn);

const nextBtn = document.createElement("button");
nextBtn.classList.add("btn", "btn-primary", "mt-5", "btn-lg");
nextBtn.setAttribute("type", "button");
const nextBtnText = document.createTextNode("Next question");
nextBtn.appendChild(nextBtnText);

nextBtn.addEventListener("click", () => location.reload());

content.appendChild(nextBtn);


