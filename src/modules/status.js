import { tasks } from './Task.js';

const clearCompleted = () => {
  let incomplete = tasks.todoList.filter((item) => {
    if (item.completed !== true) {
      return item;
    }
    return null;
  });

  incomplete = incomplete.map((item, id) => {
    item.index = id + 1;
    return item;
  });
  localStorage.setItem('task', JSON.stringify(incomplete));
  tasks.renderTask();
};

export default clearCompleted;