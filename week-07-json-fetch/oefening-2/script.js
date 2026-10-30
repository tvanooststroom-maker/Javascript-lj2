// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    const list = document.createElement('ul');

    movies.forEach(movie => {
      const item = document.createElement('li');
      item.textContent = `${movie.title} — ${movie.director} (${movie.year}) - ${movie.genre}`;
      list.appendChild(item);
    });

    document.querySelector('#films').appendChild(list);
  })
  .catch(error => console.error('Fout:', error));
