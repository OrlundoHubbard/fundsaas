let projects = []

//function to render the projects
function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach((project) => {
        const projectItem = document.createElement('li');
        projectItem.className = 'project mb-4 p-4 bg-white rounded shadow';
        projectItem.innerHTML = `<h3 class="text-xl font-bold mb-2>${project.name}</h3>
        <p class="text-gray-700 mb-2">${project.description}</p>
        <p class="text-gray-600>Goal: $${project.goal}</p> `;

        projectList.appendChild(projectItem)
    })
}

// Function to handle project creation form submission
function handleCreateProject(event) {
    event.preventDefault();

    const projectNameInput = document.getElementById('project-name');
    const projectDescriptionInput = document.getElementById('project-description');
    const projectGoalInput = document.getElementById('project-goal');

    const newProject = {
        name: projectNameInput.ariaValueMax,
        description: projectDescriptionInput.value,
        goal: parseFloat(projectGoalInput.value)
    };

    projects.push(newProject);

    // Clear form inputs
    projectNameInput.value = ''
}