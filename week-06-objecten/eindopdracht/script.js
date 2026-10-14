const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const showUsers = (usersToShow) => {
  const userList = document.querySelector('#users');

  userList.innerHTML = '';

  usersToShow.forEach((user) => {
    const { name, email, role, active } = user;

    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Rol: ${role}</p>
      <p>Status: ${active ? 'Actief' : 'Niet actief'}</p>
    `;

    userList.appendChild(article);
  });
};

const filterUsers = () => {
  const filteredUsers = filter === 'admin'
    ? users.filter((user) => user.role === 'admin')
    : users;

  showUsers(filteredUsers);
};

const AdminButton = document.querySelector('#filter-admin');
AdminButton.addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

const AllButton = document.querySelector('#filter-all');
AllButton.addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

const userForm = document.querySelector('#user-form');
userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const roleInput = document.querySelector('#role');

  const defaultUser = {
    name: '',
    email: '',
    role: 'user',
    active: true,
  };

  const newUser = {
    ...defaultUser,
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    role: roleInput.value,
  };

  users.push(newUser);
  filterUsers();
  userForm.reset();
});

filterUsers();
