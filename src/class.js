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
  data.forEach((item) => {
    output += `
    <tr>
    <td>${item.user}</td>
    <td>${item.score}</td>
    </tr>
    `;
    list.innerHTML = output;
  });
};

// get leaderboard result
export const getLeader = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const dataArray = data.result;
  displayLeader(dataArray);
};
