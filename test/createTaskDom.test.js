import { clearInputs  } from '../src/createTaskDom';
import Task  from '../src/createTask'

describe('Test' , ()=> {
beforeEach(() => {
  document.body.innerHTML = '<input id="task-title">' +
    '  <input id="task-description" />' +
    '  <input id="dueDate" />' +
    '  <select id="priority" />' +
    '  <option value="3"> Very Important </option>' +
    '  <option value="2">Important </option> ' +
    '  <option value="1">Not That Important</option>' +
    '</select>';
  document.querySelector('#task-title').value = 'Task';
  document.querySelector('#task-description').value = 'Description';
  document.querySelector('#dueDate').value = '2021-04-21';
  document.querySelector('#priority').value = '3';
 });

  test('Check clear the data from the inputs', () => {
    clearInputs();
    expect(document.querySelector('#task-title').value).toEqual('');
    expect(document.querySelector('#priority').value).not.toEqual('3');
    })

    test('Return new task' , ()=> {
      const newTask = jest.fn(()=> {
        const title = document.querySelector('#task-title').value;
        const description = document.querySelector('#task-description').value;
        const dueDate = document.querySelector('#dueDate').value;
        const priority = document.querySelector('#priority').value;
        const newT = new Task(title, description, dueDate, priority);
        clearInputs();
        return newT;
      })
      newTask();
      expect(newTask).toReturn();
      expect(document.querySelector('#task-title').value).toEqual('');
      expect(document.querySelector('#priority').value).not.toEqual('3');

    })
});
