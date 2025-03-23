document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "My Current Portfolio", description: "My main showcase project.", link: "https://vscript.vercel.app" },
        { name: "My GitHub", description: "Host and collaborate on code projects.", link: "https://github.com/fullstacknyc" },
        { name: "My LinkedIn", description: "Connect with me professionally.", link: "https://www.linkedin.com/in/camilogomezvalencia" }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectCard);
    });
});
