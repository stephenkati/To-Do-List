import './style.css';
import Task from './modules/Task.js';

const tasks = new Task();
tasks.inputTask();
tasks.renderTask();
tasks.updateTask();