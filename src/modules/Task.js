import Activity from './activity.js';

export default class Task {
  constructor() {
    this.todoList = [];
  }

    renderTask = () => {
      if (localStorage.getItem('task')) {
        this.todoList = JSON.parse(localStorage.getItem('task'));
        this.displayTask();
      }
    }

    inputTask = () => {
      const form = document.querySelector('#form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.newTask();
      });
    }

    newTask = () => {
      const index = this.todoList.length + 1;
      const completed = false;
      const description = document.querySelector('#task').value;
      const task = new Activity(index, completed, description);
      this.todoList.push(task);
      this.displayTask();
      this.storeTask();
      document.querySelector('#task').value = '';
    }

  displayTask = () => {
    const cardList = document.querySelector('.card-list');
    cardList.replaceChildren();

    this.todoList.forEach((item, id) => {
      const cardList = document.querySelector('.card-list');

      const li = document.createElement('li');
      li.setAttribute('id', id);

      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.onchange = () => this.completeTask(id);
      li.appendChild(input);

      const input1 = document.createElement('input');
      input1.setAttribute('type', 'text');
      input1.setAttribute('class', 'description');
      input1.setAttribute('value', `${item.description}`);
      const d = new Date();
      input1.setAttribute('id', d);
      li.appendChild(input1);

      const del = document.createElement('i');
      del.setAttribute('class', 'fa-solid fa-trash');
      del.onclick = () => this.removeTask(id);
      li.appendChild(del);

      cardList.appendChild(li);
    });
  }

  storeTask = () => {
    localStorage.setItem('task', JSON.stringify(this.todoList));
  }

  removeTask = (id) => {
    this.todoList.splice(id, 1);
    this.todoList.forEach((item, id) => {
      item.index = id + 1;
    });
    localStorage.setItem('task', JSON.stringify(this.todoList));
    this.displayTask();
    this.storeTask();
  }

  updateTask = () => {
    const desc = document.querySelectorAll('.description');
    desc.forEach((desript) => {
      desript.addEventListener('input', (e) => {
        const myinpt = e.target.parentElement.id;
        this.todoList.forEach((item, id) => {
          if (id.toString() === myinpt) {
            item.description = e.target.value;
          }
        });

        localStorage.setItem('task', JSON.stringify(this.todoList));
      });
    });
  }

  completeTask = (id) => {
    if (!id.checked) {
      console.log(id)
     }
  }

}
