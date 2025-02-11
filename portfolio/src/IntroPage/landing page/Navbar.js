import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const navItems = [
    { id: "home", icon: "material-symbols:home-outline", label: "Home" },
    { id: "about", icon: "material-symbols:person-outline", label: "About" },
    { id: "resume", icon: "material-symbols:work-outline", label: "Resume" },
    { id: "skills", icon: "material-symbols:category-outline", label: "Skills" },
    { id: "projects", icon: "material-symbols:view-timeline", label: "Projects" },
    { id: "contact", icon: "material-symbols:mail-outline", label: "Contact" },
  ];

  return (
    <div className="flex flex-col my-16 justify-center items-center gap-10 fixed">
      <div className="flex border border-gray-400 rounded-full p-3">
        <Icon icon="material-symbols:menu-rounded" width="24" height="24" style={{ color: "#fff" }} />
      </div>
      <div className="flex flex-col gap-7 mx-auto border border-gray-400 rounded-full py-6 px-4">
        {navItems.map((item) => (
          <div key={item.id} onClick={() => scrollToSection(item.id)}>
            <span className="tooltip">
              <Icon
                icon={item.icon}
                className={activeSection === item.id ? "text-green-400" : "text-gray-400"}
                width="20"
                height="20"
                aria-label={item.label}
              />
              <span className="tooltiptext">{item.label}</span>
            </span>
          </div>
        ))}
      </div>
      {/* Sections */}
      {navItems.map((item) => (
        <div key={item.id} id={item.id} className="min-h-screen"></div>
      ))}
    </div>
  );
};
