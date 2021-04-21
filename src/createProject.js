export let projectsArray = [];

export function setProjects() {
    const temp = JSON.parse(localStorage.getItem('array') || '[]');
    projectsArray = temp;
}

export  class Builder {
  constructor(title) {
    this.title = title;
    this.taskArray = [];
  }
}

export function saveProject() {
    let locals = JSON.parse(localStorage.getItem('array') || '[]');
    locals.push(projectsArray);
    localStorage.setItem('array', JSON.stringify(projectsArray));
}

export function addNewProject(title) {
  const newProject = new Builder(title);
  projectsArray.push(newProject);
  saveProject()
}

export function addTask(project, task) {
  project.taskArray.push(task);
  saveProject();
}

