let projects = []

//function to render the projects
function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach((project) => {
        const projectItem = document.createElement('li');
        projectItem.className = 'project mb-4 p-4 bg-white rounded shadow';
        projectItem.innerHTML = `<h3 class="text-xl font-bold mb-2>${project.name}</h3>
        <p class="text-gray-700 mb-2">${project.description}
        <p class="text-gray-600>Goal: $${project.goal} `
    })
}