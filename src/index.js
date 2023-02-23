import './style.css';
import clearCompleted from './modules/status.js';
import { tasks } from './modules/Task.js';

tasks.inputTask();
tasks.renderTask();
tasks.updateTask();

const clearAll = document.querySelector('#clearall');
clearAll.addEventListener('click', (e) => {
  e.preventDefault();
  clearCompleted();
});