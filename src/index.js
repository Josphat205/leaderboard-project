import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postLeader, getLeader } from './class.js';

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
  postLeader(url, data);
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
