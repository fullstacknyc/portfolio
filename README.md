# Portfolio / LinkTree
This repository contains the source for my personal portfolio website camilo777.com. It is built as a single self-contained HTML file showcasing my skills as a JavaScript developer.

The portfolio emphasizes minimalism and mastery of the platform by existing as a single HTML file with embedded CSS and JavaScript. Each section such as Hello, About, Links, and Projects fills the viewport and scrolls smoothly using scroll snap. Text content animates with a typing effect as you scroll into view. The Hello section cycles through multilingual greetings. A command palette can be opened with Command K or Control K for quick navigation and actions. A slim progress bar at the top shows which section you are in. Projects open in an accessible modal with details, tags, and demo widgets. One example project includes a drag and drop uploader mockup. A download source button in the header allows saving the portfolio as a complete single HTML file.

The sections are Hello which displays the animated multilingual greeting, About which introduces me and my tech stack, Links which points to GitHub, LinkedIn, Email, and Resume, and Projects which lists my work with live links, code, and demos.

Projects are defined in the PROJECTS array in the script. To add a new project append an object with a slug, title, description, optional live link, code link, tags, and a demo type. The new project will automatically appear as a card in the Projects section with animated text.

The development philosophy of this portfolio is to be vanilla first, with no frameworks or build step, just HTML, CSS, and modern JavaScript. It supports progressive enhancement so it displays a message if JavaScript is disabled. It is accessible with focus management, reduced motion support, and semantic HTML. It is performant by being dependency free, animating lazily, and updating the DOM efficiently.

To run locally simply open the HTML file in a browser with a command like open index.html. No server or bundler is required.

This project is open source under the Apache 2.0 license.