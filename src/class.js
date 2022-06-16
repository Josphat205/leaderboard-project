// post score to leaderboard
const list = document.getElementById('list');
export const postLeader = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  await response.json();
};

// display leaderboard result
export const displayLeader = (data) => {
  let output = '';
  if (data.length > 0) {
    data.forEach((item) => {
      output += `
    <tr>
    <td>${item.user}</td>
    <td>${item.score}</td>
    </tr>
    `;
      list.innerHTML = output;
    });
  } else {
    output += `
    <tr>
    <td>No Score found, Please Add scores</td>
    </tr>
    `;
    list.innerHTML = output;
  }
};

// get leaderboard result
export const getLeader = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const dataArray = data.result;
  displayLeader(dataArray);
};

export const alertMessage = (message, className) => {
  // add classname
  const div = document.createElement('div');
  div.className = `pop ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get parent
  const form = document.querySelector('#form');
  const container = form.firstElementChild;
  form.insertBefore(div, container);
  // remove after 3 seconds
  setTimeout(() => {
    document.querySelector('.pop').remove();
  },
  3000);
};
