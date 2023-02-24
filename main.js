fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i <= data.length - 1; i++) {
      const spanElement = document.getElementById(`score-${i + 1}`);
      spanElement.textContent = data[i].score;
    }});
