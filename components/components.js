// Header Component
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="links">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="/src/about.html">About</a></li>
                        <li><a href="/src/skills.html">Skills</a></li>
                        <li><a href="/src/projects.html">Projects</a></li>
                        <li><a href="/src/resume.html">Resume</a></li>
                        <li><a href="/src/contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="title">
                    <p>camilo.jgv</p>
                </div>
                <div class="darkMode">
                    <button id="darkModeButton">Dark Mode</button>
                </div>
            </header>
        `;

        this.querySelector('#darkModeButton').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
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
                            <li><a href="/src/">About</a></li>
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
                            <li><a href="https://twitter.com/hawtiiccee" target="_blank">Twitter</a></li>
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