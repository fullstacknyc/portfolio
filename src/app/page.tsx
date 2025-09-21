export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m Camilo — Full Stack Developer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I build modern, business-ready websites and upgrade existing projects
          with full-stack solutions using Next.js, Node.js, and beyond.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h3 className="font-bold text-xl mb-2">E-Commerce Upgrade</h3>
            <p className="text-gray-600">
              Migrated a legacy store into a modern Next.js app with improved
              performance and SEO.
            </p>
          </div>
          <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <h3 className="font-bold text-xl mb-2">Portfolio Redesign</h3>
            <p className="text-gray-600">
              Built a dynamic portfolio with animations and dark mode toggle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
