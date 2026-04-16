"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [dark, setDark] = useState(true);

  const projects = [
    {
      title: "Data Archiver Engine",
      desc: "Python-based system using ZIP/GZIP compression and SHA-256 hashing.",
      points: [
        "Reduced storage usage by 50%",
        "Improved performance by 30%",
        "Ensured data integrity"
      ],
      link: "https://github.com/karthikachirra07"
    },
    {
      title: "E-Commerce Web App",
      desc: "Full-stack app with authentication, product listing and cart system.",
      points: [
        "User login & signup",
        "Product management",
        "Cart functionality"
      ],
      link: "#"
    }
  ];

  return (
    <main className={dark ? "bg-black text-white" : "bg-white text-black"}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md p-4 flex justify-between z-50">
        <h1 className="text-blue-500 font-bold">Karthika</h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDark(!dark)}>🌙</button>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Chirra Karthika
        </h1>

        <TypeAnimation
          sequence={[
            "Web Developer 💻",
            2000,
            "Problem Solver 🧠",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-blue-400 text-xl mt-4"
        />

        <p className="mt-4 text-gray-400 max-w-xl">
          B.Tech CSE student skilled in Java, Python, and Web Development.
          Built systems improving performance and efficiency.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="/resume.pdf" className="bg-blue-500 px-6 py-2 rounded-xl">
            Resume
          </a>

          <a href="https://github.com/karthikachirra07" target="_blank">
            <FaGithub size={25} />
          </a>

          <a href="https://linkedin.com/in/chirraKarthika" target="_blank">
            <FaLinkedin size={25} />
          </a>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* ABOUT */}
      <section id="about" className="py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl text-blue-400">About Me</h2>
        <p className="mt-4 text-gray-400">
          I am a Computer Science student with a CGPA of 8.97. I enjoy building
          scalable systems and solving real-world problems.
        </p>
      </section>

      <hr className="border-gray-800" />

      {/* SKILLS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl text-blue-400">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-6">
          {["Java", "Python", "JavaScript", "HTML", "CSS", "Node.js", "Git", "DBMS"].map((skill, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl text-center text-blue-400">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
              
              {i === 0 && (
                <span className="text-xs bg-blue-500 px-2 py-1 rounded">
                  Featured
                </span>
              )}

              <h3 className="text-xl font-semibold mt-2">{p.title}</h3>

              <p className="text-gray-400 mt-2">{p.desc}</p>

              <ul className="text-gray-400 mt-2 text-sm">
                {p.points.map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>

              <a
                href={p.link}
                target="_blank"
                className="inline-block mt-4 bg-blue-500 px-4 py-2 rounded"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* CODING */}
      <section className="py-20 text-center">
        <h2 className="text-3xl text-blue-400">Coding Profiles</h2>
        <p className="mt-4 text-gray-400">
          Solved 90+ problems on LeetCode, 56 on GFG (Rank 1281), and 40 on HackerRank.
        </p>
      </section>

      <hr className="border-gray-800" />

      {/* CURRENT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl text-blue-400">Currently</h2>
        <p className="mt-4 text-gray-400">
          Improving problem-solving skills.
        </p>
      </section>

      <hr className="border-gray-800" />

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl text-blue-400">Contact</h2>

        <p className="mt-4 text-gray-400">
          Open to internships and opportunities.
        </p>

        <div className="mt-4 text-gray-400">
          <p>📧 karthikachirra07@gmail.com</p>
          <p>💻 github.com/karthikachirra07</p>
          <p>🔗 linkedin.com/in/chirraKarthika</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Chirra Karthika
      </footer>

    </main>
  );
}