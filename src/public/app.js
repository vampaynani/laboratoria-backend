let usersList;
const API_BASE_URL = 'http://localhost:3000';

fetch(`${API_BASE_URL}/users`)
  .then(res => res.json())
  .then(result => {
    usersList = result;
    render();
  });

const createUser = document.getElementById('createUser');
createUser.addEventListener('submit', function(e){
  e.preventDefault();
  const newUser = {
    username: e.currentTarget.username.value,
    password: e.currentTarget.password.value
  };
  fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser)
  })
  .then(res => res.json())
  .then(result => {
    usersList = [...usersList, result[0]];
    render();
  });
});

const usersListHTML = document.getElementById('usersList');
usersListHTML.addEventListener('click', function(e){
  if(e.target.classList.contains('borrar')){
    const id = e.target.dataset.id;
    fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      usersList = usersList.filter(user => user.id != id);
      render();
    });
  }
});

function render(){
  const rows = usersList.map(user => `<tr>
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td><button class="borrar" data-id="${user.id}">Borrar</button></td>
    <tr>`).join('');
  const usersListHTML = document.getElementById('usersList');
  usersListHTML.innerHTML = rows;
}