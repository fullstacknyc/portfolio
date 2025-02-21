class HeaderComponent extends HTMLElement {
    connectedCallback() {
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
  
      this.querySelector('#darkModeButton').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      });
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  