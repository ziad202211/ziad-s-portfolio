"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        const sections = ["home", "skills", "experience", "projects", "contact"];
        let currentActive = "home";

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              currentActive = sections[i];
              break;
            }
          }
        }
        setActiveSection(currentActive);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      const section = pathname.substring(1);
      setActiveSection(section);
    }
  }, [pathname]);

  const getLinkHref = (section) => {
    return pathname === "/" ? `#${section}` : `/#${section}`;
  };

  return (
    <nav className="navbar">

      {/* Hamburger */}
      <button
        className={`hamburger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["home", "skills", "experience", "projects", "contact"].map((section) => (
          <li key={section}>
            <Link
              href={getLinkHref(section)}
              className={activeSection === section ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
