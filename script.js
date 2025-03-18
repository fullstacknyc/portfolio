document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "VanillaScript", description: "A website made purely with JavaScript to teach web development.", link: "https://vscript.vercel.app" },
        { name: "SafePass", description: "A file transfer site for @prodKz", link: "https://prodkz.vercel.app" },
        { name: "MDN Web Docs", description: "Comprehensive documentation for web technologies.", link: "https://developer.mozilla.org/" },
        { name: "W3Schools", description: "Interactive tutorials for web development.", link: "https://www.w3schools.com/" },
        { name: "Stack Overflow", description: "Q&A site for developers.", link: "https://stackoverflow.com/users/21625347/camilo?tab=profile" },
        { name: "GitHub", description: "Host and collaborate on code projects.", link: "https://github.com/fullstacknyc" }
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
