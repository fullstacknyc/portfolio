document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "myDevGuides", description: "My personal project website. Contact me or explore.", link: "https://vscript.vercel.app" },
        { name: "myLinkedIn", description: "Connect with me professionally.", link: "https://www.linkedin.com/in/camilogomezvalencia" },
        { name: "myProjects", description: "A library of my projects.", link: "https://myprojects.vercel.app"}
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
