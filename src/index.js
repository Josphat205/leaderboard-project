import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leader from './class.js';

// global variables
const form = document.getElementById('form');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const refreshBtn = document.getElementById('refresh');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/D580GhSGd5bJQQHSvK71/scores';

// get form data
const getFormData = () => {
  const data = {
    user: userName.value,
    score: userScore.value,
  };
  Leader.PostLeader(url, data);
  Leader.displayLeader(data);
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
// add score to the leaderboard
document.addEventListener('DOMContentLoaded', () => {
  Leader.GetLeader(url);
});

// refesh page
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
