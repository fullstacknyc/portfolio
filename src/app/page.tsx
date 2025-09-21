export default function HomePage() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="mb-6">
          Hi, I’m Camilo — Full Stack Developer
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          I build modern, business-ready websites and upgrade existing projects
          with full-stack solutions using Next.js, Node.js, and beyond.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div>
        <h2 className="mb-10">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card">
            <h3 className="mb-3">E-Commerce Upgrade</h3>
            <p>
              Migrated a legacy store into a modern Next.js app with improved
              performance and SEO.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-3">Portfolio Redesign</h3>
            <p>
              Built a dynamic portfolio with animations and a dark mode toggle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
