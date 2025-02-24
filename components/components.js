// Header Component
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <button id="navToggleButton" class="nav-toggle-button">☰</button>
                <div class="links">
                    <ul id="navMenu">
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/src/about.html">About</a></li>
                        <li><a href="/src/skills.html">Skills</a></li>
                        <li><a href="/src/projects.html">Projects</a></li>
                        <li><a href="/src/resume.html">Resume</a></li>
                        <li><a href="/src/contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="title">
                    <p>fullstacknyc</p>
                </div>
                <div class="darkMode">
                    <button id="darkModeButton">Dark Mode</button>
                </div>
            </header>
        `;

        const navButton = this.querySelector("#navToggleButton");
        const navMenu = this.querySelector("#navMenu");

        navButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (!this.contains(event.target) && navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
            }
        });

        // Dark Mode Persistence
        const darkModeButton = this.querySelector('#darkModeButton');
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }

        darkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
        });
    }
}

// Footer Component
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About</h3>
                        <p>Camilo's portfolio showcasing web development skills and projects.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="/src/about.html">About</a></li>
                            <li><a href="/src/skills.html">Skills</a></li>
                            <li><a href="/src/projects.html">Projects</a></li>
                            <li><a href="/src/resume.html">Resume</a></li>
                            <li><a href="/src/contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="https://github.com/fullstacknyc" target="_blank">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/camilogomezvalencia" target="_blank">LinkedIn</a></li>
                            <li><a href="https://linktr.ee/camilo1712" target="_blank">Linktr.ee</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Camilo. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

// Register the custom elements
customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
