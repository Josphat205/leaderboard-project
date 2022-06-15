export default class Leader {
  // post score to leaderboard
  static async PostLeader(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await response.json();
  }

  // get leaderboard result
  static async GetLeader(url) {
    const response = await fetch(url);
    const data = await response.json();
    data.result.map((item) => Leader.displayLeader(item));
  }

  // display leaderboard result
  static displayLeader(item) {
    const list = document.getElementById('list');
    const listItem = document.createElement('tr');
    listItem.innerHTML = `
    <td>${item.user}</td>
    <td>${item.score}</td>
    `;
    list.appendChild(listItem);
  }
}
