const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];
const filteredScores = scores.filter(score => score > 50);

const filteredList = document.querySelector("#result-filtered");
filteredScores.forEach(score => {
  const item = document.createElement("li");
  item.textContent = score;
  filteredList.append(item);
});

const dubbleScores = scores.map(score => score * 2)

const dubbleList = document.querySelector("#result-map");
dubbleScores.forEach (score => {
    const item = document.createElement("li");
    item.textContent = score;
    dubbleList.append(item);
});
const sortScores = scores.sort((a, b) => a - b);

const sortList = document.querySelector('#result-sorted')
sortScores.forEach (score => {
        const item = document.createElement("li");
    item.textContent = score;
    sortList.append(item);
});
// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted
