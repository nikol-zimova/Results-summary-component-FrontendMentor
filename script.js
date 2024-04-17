fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var table = document.querySelector('.results-details');
    var totalScore = 0;
    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
                      <th class="${data[i].category.toLowerCase()}">
                          <img src="${data[i].icon}" alt="${data[i].category} icon">
                          ${data[i].category}
                      </th>
                      <td>
                          <span class="score">${data[i].score}</span>
                          <span class="total"> / 100</span>
                      </td>
                 </tr>
                 <tr class="spacer" aria-hidden="true"></tr>`;
      table.innerHTML += row;
      totalScore += data[i].score;
    }
    var avgScore = Math.round(totalScore / data.length);
    document.querySelector('.result-avg').textContent = avgScore;
  })
  .catch(error => console.error('Error:', error));
  document.querySelector('.error-message').textContent = 'An error occurred while fetching the results.';
