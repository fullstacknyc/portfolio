document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {name: "VanillaScript", description: "A website made purely with javaScript to teach web development.", link: "https://vscript.vercel.app"},
        {name: "SafePass", description: "A file transfer site for @prodKz", link: "https://prodkz.vercel.app"}
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