document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {name: "VanillaScript", description: "A website made purely with javaScript to teach web development.", link: "https://vscript.vercel.app"},
        {name: "Victoria's Garden", description: "A game made purely with javaScript to practice javaScript.", link: "#"},
        {name: "Pip3k", description: "A pip-boy 3000 like app.", link: "#"},
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