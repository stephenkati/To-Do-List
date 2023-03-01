/**
 * @jest-environment jsdom
 */

import Activity from './activity.js';
import {newTask, removeTask} from "./Task.js";

document.body.innerHTML = `
<div class="container">
        <div class="card-layout">
            <div class="card-title"> <p>Today's To Do</p> <i class="fa-solid fa-rotate"></i> </div>
            <form action="" id="form">
                <input type="text" class="add-task" id="task" placeholder="Add to your list..." required>
                <button type="submit"><i class="fa-sharp fa-solid fa-right-to-bracket"></i></button>
            </form>
            <ul class="card-list" id="card-list"> </ul>
            <a href="" id="clearall">Clear all completed</a>
        </div>
    </div>
`;

describe('add and delete items', () => {
    test('add first item', () => {
        // const index = 1;
        // const completed = false;
        // const description = 'exercise';
        // const task = new Activity(index, completed, description);
        // const listfield = document.querySelectorAll('li');
        // expect(listfield).toHaveLength(1);

       newTask();

       const listfield = document.querySelectorAll('li');

       expect(listfield).toHaveLength(1);

    })
});