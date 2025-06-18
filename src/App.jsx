import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const projects = [
  {
    title: "ThrillSeekers Convention",
    image: "/images/thrillseekers_logo.svg",
    description: "Branding and promotional materials for an extreme sports conference catering to adrenaline junkies.",
    slug: "thrillseekers-convention",
    link: "https://geebrogee.design/projects/thrillseekers-convention"
  },
  // Add more projects here
];

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex flex-col items-center">
      <Link to="/" className="font-extrabold text-3xl mb-2">Gabriel Gutierrez</Link>
      <div className="space-x-4">
        <Link to="/" className="font-semibold hover:text-gray-400">Home</Link>
        <Link to="/projects" className="font-semibold hover:text-gray-400">Showcase</Link>
        <Link to="/contact" className="font-semibold hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
}

function ProjectCard({ image, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl shadow-lg h-80 w-full hover:scale-[1.02] transition-transform duration-300"
    >
      <img
        src={image}
        alt={`${title} logo`}
        className="w-full h-full object-contain opacity-100 group-hover:opacity-20 transition-opacity duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-200 mt-2 text-sm">{description}</p>
      </div>
    </a>
    
  );

}

function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-8 py-12 font-medium">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

function ProjectDetailThrillseekers() {
  return (
    <><div className="max-w-3xl mx-auto p-6 font-medium">
      <h1 className="text-3xl font-bold mb-4">ThrillSeekers Convention</h1>
      <p className="mb-6 text-gray-700">
        This case study explores the full branding for ThrillSeekers Convention — a gathering of extreme sports enthusiasts. The work included logo design, print collateral, digital promotion, event badges, and signage. This identity captured the adrenaline-driven vibe while maintaining clarity and cohesion across all touchpoints.
      </p>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <img
          key={num}
          src={`/images/thrillseekers-mockup-${num}.jpg`}
          alt={`Thrillseekers ${num}`}
          className="mb-4 w-full rounded-lg" />
      ))}
    </div><a
      href="/pdfs/thrillseekers_casestudy_final-reduced.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white font-semibold px-4 py-2 rounded-lg mb-6 hover:bg-gray-800 transition"
    >
        View Project Case Study (PDF)
      </a></>


  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/thrillseekers-convention" element={<ProjectDetailThrillseekers />} />
      </Routes>
    </Router>
  );
}

export default App;
