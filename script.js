document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {name: "Project 1", description: "This is project 1", link: "#"},
        {name: "Project 2", description: "This is project 2", link: "#"},
        {name: "Project 3", description: "This is project 3", link: "#"},
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="blank">View Project</a>
        `;

        projectsContainer.appendChild(projectCard);
    })
});