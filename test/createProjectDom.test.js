import { printProject, loadProjects, editTask, loadTasks } from '../src/createProDom';
import { projectsArray } from '../src/createProject'
// describe('Test' , ()=> {
//   test('Set project' , ()=> {
//     document.body.innerHTML =
//       '  <div class="project-list" />' +
//       '  <input id="project-title"> ' +
//       ' </div>';

//     const title = document.querySelector('#project-title').value;
//     const projectList = document.querySelector('.project-list');
//     const projectName = document.createElement('h5');
//     projectList.appendChild(projectName);
//     printProject()
//     expect(title).toEqual('Test')
//   })
// })

test('Load project' , ()=> {
  const projectsArray = jest.fn(()=> [
    {
      title : 'Test' ,
      taskArray : []
    } ,
    {
      title: 'Test Two',
      taskArray: []
    }
  ])
  document.body.innerHTML =
      '  <div class="project-list" id="project-container" >' +
      '  </div>';

  const box = document.querySelector('#project-container');
  const forDelete = document.createElement('h1');
  box.appendChild(forDelete);
  const projectList = document.querySelector('.project-list');
  const projectName = document.createElement('h5');
  projectList.appendChild(projectName);
  loadProjects()
  const h5 = document.getElementsByTagName('h5');
  for (let i = 0; i < h5.length; i += 1) {
      expect(h5[i].innerHTML).toBe(projectsArray[i].title);
   }

})