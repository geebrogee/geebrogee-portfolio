import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const projects = [
  {
    title: "ThrillSeekers Convention",
    image: "/images/thrillseekers_logo.svg",
    description: "Branding and promotional materials for an extreme sports conference catering to adrenaline junkies.",
    slug: "thrillseekers-convention"
  },
];

function ProjectDetailThrillseekers() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">ThrillSeekers Convention</h1>
      <p className="mb-6 text-gray-700">
        This case study explores the full branding for ThrillSeekers Convention — a gathering of extreme sports enthusiasts. The work included logo design, print collateral, digital promotion, event badges, and signage. This identity captured the adrenaline-driven vibe while maintaining clarity and cohesion across all touchpoints.
      </p>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <img
          key={num}
          src={`/images/thrillseekers-mockup-${num}.jpg`}
          alt={`ThrillSeekers Mockup ${num}`}
          className="mb-4 rounded-xl shadow-md"
        />
      ))}
      <a
        href="/pdfs/thrillseekers-case-study.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        View Full Case Study (PDF)
      </a>
    </div>
  );
}

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <header className="sticky top-0 bg-white z-50 py-4 px-6 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Gabriel Gutierrez</h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav className="hidden md:flex space-x-6">
          <a href="#portfolio" className="text-gray-700 hover:text-black">Work</a>
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
      </header>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-6 py-4 bg-white shadow-md">
          <a href="#portfolio" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#about" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

      <section id="portfolio" className="grid gap-6 md:grid-cols-2 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="rounded-2xl shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.slug}`}
                className="text-blue-600 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section id="about" className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 text-base mb-6">
          I’m Gabriel Gutierrez, a well-rounded graphic designer based in California with over 12 years of hands-on experience in Adobe Creative Suite. While I’ve been dabbling with tools like Illustrator, Photoshop, and InDesign for over a decade, I’ve taken design seriously for the past five years—focusing deeply on refining my craft.
        </p>
        <p className="text-gray-700 text-base mb-6">
          I graduated from CSUN in 2024 with a B.A. in Art and an emphasis in Graphic Design, where I built a broad design foundation—ranging from branding and packaging to UI/UX, motion graphics, and digital storytelling. My core strengths lie in branding, creative direction, and building visual identities that resonate with real audiences.
        </p>
        <p className="text-gray-700 text-base mb-6">
          My tools of choice are Illustrator, Photoshop, and InDesign (advanced), with additional proficiency in Substance and Premiere Pro. I’m passionate about crafting designs that not only look sharp but communicate clearly and feel intentional.
        </p>
        <p className="text-gray-700 text-base">
          When I’m not designing, you’ll catch me exploring food spots, drawing inspiration from music festivals like EDC, or brainstorming creative ideas wherever the vibe is right.
        </p>
      </section>

      <section id="contact" className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 text-base mb-4">
          Interested in working together or want to chat? Feel free to reach out.
        </p>
        <a
          href="mailto:ggutierrezjr228@gmail.com"
          className="text-blue-600 hover:underline text-lg"
        >
          ggutierrezjr228@gmail.com
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        © 2025 Gabriel Gutierrez
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/thrillseekers-convention" element={<ProjectDetailThrillseekers />} />
      </Routes>
    </Router>
  );
}
