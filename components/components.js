// Header Component
class HeaderComponent extends HTMLElement {
    // This method is called when the element is added to the DOM
    connectedCallback() {
        // Set the inner HTML of the component
        this.innerHTML = `
            <header>
                <div class="links">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Resume">Resume</a></li>
                        <li><a href="#Contact">Contact</a></li>
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

        // Add event listener to the dark mode button
        this.querySelector('#darkModeButton').addEventListener('click', () => {
            // Toggle the 'dark-mode' class on the body element
            document.body.classList.toggle('dark-mode');
        });
    }
}

// Footer Component
class FooterComponent extends HTMLElement {
    // This method is called when the element is added to the DOM
    connectedCallback() {
        // Set the inner HTML of the component
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
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Contact">Contact</a></li>
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
