"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    icon: "/images/projects/doctor.png",
    title: "Doctor Appointment Web App",
    description:
      "A full-stack web application for booking doctor appointments with user authentication, scheduling, and form validation. Improved efficiency by automating manual booking tasks.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    liveDemo: "#",
    github: "#",
  },
  {
    icon: "/images/projects/expense.png",
    title: "Expense Tracker",
    description:
      "A personal finance web app to track income and expenses with categories, charts, and persistent storage. Built to practice CRUD operations and database management.",
    tech: ["Next.js"],
    liveDemo: "https://expense-tracker-final-one.vercel.app/",
    github: "#",
  },
  {
    icon: "/images/projects/ai.png",
    title: "Artificial Neural Network Model",
    description:
      "A Python-based machine learning model designed for classification tasks, showcasing strong foundations in AI and data processing.",
    tech: ["Python", "NumPy", "Machine Learning"],
    liveDemo: "#",
    github: "#",
  },
  {
    icon: "/images/projects/iwan.png",
    title: "Iwan Design House - interior design company website",
    description:
      "A professional interior design company website designed to enhance brand presence and support marketing efforts. Features a clean, responsive layout, project showcases, and smooth user experience optimized for all devices.",
    tech: ["Next js", "Supabase", "Tailwind CSS"],
    liveDemo: "https://iwan-interior.vercel.app/",
    github: "#",
  },
  {
    icon: "/images/projects/ghina.png",
    title: "Ghinna Towers Real Estate - real estate company landing page",
    description:
    "A professional real estate company landing page built to support digital marketing campaigns. Highlights property offerings with a responsive design, intuitive navigation, and optimized performance across all devices.",
    tech: ["Next js", "Supabase", "Tailwind CSS"],
    liveDemo: "https://ghinna.vercel.app/",
    github: "#",
  },
];

const Projects = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll(".project-card");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));
    };

    handleScrollAnimations();
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Full-stack applications and creative solutions that bring ideas to life
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card fade-in-up" key={index}>
            {/* ✅ Full-width project image */}
            <div className="project-header relative w-full h-48 overflow-hidden rounded-t-lg">
              <Image
                src={project.icon}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="project-body p-4">
              <h3 className="project-title text-lg font-semibold">{project.title}</h3>
              <p className="project-description mt-2 text-sm text-gray-300">
                {project.description}
              </p>

              <div className="project-tech mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag, tagIndex) => (
                  <span
                    className="project-tech-tag bg-gray-800 px-2 py-1 text-xs rounded"
                    key={tagIndex}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4 mt-4">
                <Link
                  href={project.liveDemo}
                  className="project-link flex items-center gap-1 hover:underline"
                  target="_blank"
                >
                  🔗 Live Demo
                </Link>
                <Link
                  href={project.github}
                  className="project-link flex items-center gap-1 hover:underline"
                  target="_blank"
                >
                  📁 GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
