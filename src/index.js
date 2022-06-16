import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postLeader, getLeader, alertMessage } from './class.js';

// global variables
const form = document.getElementById('form');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const refreshBtn = document.getElementById('refresh');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pjHboadpOkT4ruajF2JF/scores';

// get form data
const getFormData = () => {
  const data = {
    user: userName.value,
    score: userScore.value,
  };
  if (data.user === '' || data.score === '') {
    alertMessage('Please fill in all fields', 'bg-danger');
  } else {
    postLeader(url, data);
    clearFields();
    alertMessage('Score Added successfully', 'bg-success');
  }
};
// clear field function
const clearFields = () => {
  userName.value = '';
  userScore.value = '';
};
// get form data event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getFormData();
  clearFields();
});

// refesh page
refreshBtn.addEventListener('click', () => {
  getLeader(url);
});
