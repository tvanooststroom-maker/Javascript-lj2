const list = document.querySelector('#books-list');

fetch('./books.json')
  .then(response => response.json())
  .then(books => {
  // Toon elk boek als een <li> in #books-list
books.forEach(book => {
  const item = document.createElement('li');
  item.textContent = `${book.title}  ${book.author} ${book.year}`;
  list.appendChild(item);
});
  })
  .catch(error => console.error('Fout:', error));
