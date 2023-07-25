const quizForm = document.getElementById('quiz-form1');
const resultDiv = document.getElementById('result1');

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm.elements['q1'].value;
  if (selectedAnswer === 'Paris') {
    resultDiv.innerHTML = 'Correct answer!';
    resultDiv.style.color = 'green';
  } else {
    resultDiv.innerHTML = 'Wrong answer. The correct answer is Paris.';
    resultDiv.style.color = 'red';
  }
});

// QUESTION 2

const quizForm2 = document.getElementById('quiz-form2');
const resultDiv2 = document.getElementById('result2');

quizForm2.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = quizForm2.elements['q2'].value;
  if (selectedAnswer === 'Delhi') {
    resultDiv2.innerHTML = 'Correct answer!';
    resultDiv2.style.color = 'green';
  } else {
    resultDiv2.innerHTML = 'Wrong answer. The correct answer is Paris.';
    resultDiv2.style.color = 'red';
  }
});

// QUESTION 3

const quizForm3 = document.getElementById('quiz-form3');
const resultDiv3 = document.getElementById('result3');
const fillInput = document.getElementById("fill-blank")

quizForm3.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = fillInput.value;
  if (selectedAnswer === 'Delhi') {
    resultDiv3.innerHTML = 'Correct answer!';
    resultDiv3.style.color = 'green';
  } else {
    resultDiv3.innerHTML = 'Wrong answer. The correct answer is Paris.';
    resultDiv3.style.color = 'red';
  }
});