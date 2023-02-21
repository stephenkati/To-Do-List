import './style.css';

const todoList = [
  {
    index: 1,
    description: 'Morning Run',
    completed: false,
  },
  {
    index: 2,
    description: 'Meditation',
    completed: true,
  },
];

todoList.forEach((activity) => {
  const { description, completed, index } = activity;

  const cardList = document.querySelector('.card-list');

  const li = document.createElement('li');
  li.setAttribute('id', index);

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.checked = completed;
  li.appendChild(input);

  const p = document.createElement('p');
  p.setAttribute('class', 'description');
  p.textContent = description;
  li.appendChild(p);

  const i = document.createElement('i');
  i.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  li.appendChild(i);

  cardList.appendChild(li);
});