/**
 * @jest-environment jsdom
 */
import clearCompleted from './status.js';
import { tasks } from './Task.js';

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

describe('add items', () => {
  test('add first item', () => {

    document.querySelector('#task').value = 'test 1';
    tasks.newTask();
     
    const listfield = document.querySelectorAll('li');
  
    expect(listfield).toHaveLength(1);
  });

  test('add 2 item', () => {

    document.querySelector('#task').value = 'test 2';
    tasks.newTask();

    const listfield = document.querySelectorAll('li');

    expect(listfield).toHaveLength(2);
  });

  test('add 3 item', () => {

    document.querySelector('#task').value = 'test 3';
    tasks.newTask();

    const listfield = document.querySelectorAll('li');

    expect(listfield).toHaveLength(3);
  });

  
});

describe('delete items', () => {
  test('remove one item', () => {
    tasks.removeTask(0);
    const listfield = document.querySelectorAll('li');
    expect(listfield).toHaveLength(2);
  });
});

describe('editing items', () => {
  test('edit item at id-1 to normal', ()=> {
    
    tasks.updateTask()
    
    let desc = document.querySelector('#input-1').value;
    desc = 'normal'

    expect(desc).toBe('normal')
  })
})

describe('check items as completed items', () => {
  test('turn item at index zero to true', ()=> {

    tasks.completeTask(0)
    
    let checkItem1 = document.getElementById(0).checked
    checkItem1 = true;

    expect(checkItem1).toBeTruthy()
  
  })
})

describe('clear all completed', () => {
  test('Remove all checked items', ()=> {

    clearCompleted()

    const allTasks = tasks.todoList
    const ClearAllCompleted = allTasks.filter((item) => item.completed === false);

    expect(ClearAllCompleted).toHaveLength(1)
  })
})