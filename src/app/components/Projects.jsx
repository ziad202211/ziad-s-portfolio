"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    icon: "/images/projects/super-saiyan.png",
    title: "Super-Saiyan",
    description:
      "Took ownership of the Super-saiyan website after the initial version was developed by Eng. Hussien Khaled, leading the next phase of technical improvements and feature expansion. Enhanced the Supabase database structure, integrated a payment gateway, implemented new business requirements, refined UI components, and optimized overall performance. Built with React.js, backed by Supabase, and deployed on Vercel across two live instances.",
    tech: ["Reac.js", "Supabase", "Vercel" , "Tailwind CSS"],
    liveDemo: "https://www.super-saiyan.fit/",
    github: "",
  },
  {
    icon: "/images/projects/iwan.png",
    title: "Iwan Design House - interior design company website",
    description:
      "A professional interior design company website designed to enhance brand presence and support marketing efforts. Features a clean, responsive layout, project showcases, and smooth user experience optimized for all devices.",
    tech: ["Next js", "Supabase", "Tailwind CSS"],
    liveDemo: "https://www.iwandesignhouse.com/",
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
    icon: "/images/projects/doctor.png",
    title: "Doctor Appointment Web App",
    description:
      "A full-stack web application for booking doctor appointments with user authentication, scheduling, and form validation. Improved efficiency by automating manual booking tasks.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    liveDemo: "",
    github: "",
  },
  {
    icon: "/images/projects/movie-app.png",
    title: "Movies Web Application",
   description:
  "A responsive React Movie Web App built with React 18, React Router v6, Context API, and custom hooks. Users can browse, search, and favorite movies with dynamic routing, global state management, and local storage persistence. Features include reusable components, responsive design with Bootstrap 5, and performance optimizations like lazy loading and memoization, demonstrating proficiency in modern React concepts such as hooks, props, JSX, and state management."
,
    tech: ["React js", "Bootstrap"],
    liveDemo: "https://movie-app-six-chi-82.vercel.app/",
    github: "https://github.com/ziad202211/Movie-app",
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
  {
    icon: "/images/projects/Faris.png",
    title: "Faris for Architectural Development",
    description:
      "Developed a modern company website for Faris, featuring a fully functional admin dashboard for content management.Built using React.js with Supabase for backend services and real-time database integration.The system allows dynamic content updates, secure data handling, and scalable architecture for future growth.",
    tech: ["Reac.js", "Supabase", "Vercel" , "Tailwind CSS"],
    liveDemo: "https://faris-jet.vercel.app/",
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
                {project.liveDemo && project.liveDemo !== "#" ? (
                  <Link
                    href={project.liveDemo}
                    className="project-link flex items-center gap-1 hover:underline"
                    target="_blank"
                  >
                    🔗 Live Demo
                  </Link>
                ) : (
                  <span className="project-link flex items-center gap-1 text-gray-500 cursor-not-allowed">
                    🔗 Live Demo
                  </span>
                )}
                {project.github && project.github !== "#" ? (
                  <Link
                    href={project.github}
                    className="project-link flex items-center gap-1 hover:underline"
                    target="_blank"
                  >
                    📁 GitHub
                  </Link>
                ) : (
                  <span className="project-link flex items-center gap-1 text-gray-500 cursor-not-allowed">
                    📁 GitHub
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
