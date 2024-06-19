"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>ReactJS, NextJS, Tailwaid CSS</li>
        <b>Features:</b>
        <li>Navigation, Animations, Filtering Projects and Experiences</li>
        <li>About section with tabs</li>
        
      </ul>
    ),
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vkaru001/NextJS-Portfolio",
  },
  {
    id: 2,
    title: "GrabIt. A Food Ordering Website",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>MERN Stack, REST API, Stripe API</li>
        <b>Features:</b>
        <li><b>Frontend:</b> User Authentication, Order Placement, Shopping cart, Payment Processing</li>
        <li><b>Admin Panel: </b>Food Items and Order Status Management</li>
      </ul>
    ),
    image: "/images/projects/GrabIt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vkaru001/GrabIt",
  },
  {
    id: 3,
    title: "AI Flashcards Application",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>NextJS, TypeScript, REST API, PostgreSQL, OpenAI API, Drizzle ORM, NodeJS</li>
        <b>Features:</b>
        <li>OpenAI API & Stripe API Integration, User Dashboard, Responsive UI</li>
        <li>Google OAuth 2.0 Authentication, Contribution grid</li>
      </ul>
    ),
    image: "/images/projects/qu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vkaru001/QuizGPT",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>MERN Stack, REST API, MongoDB, JWT</li>
        <b>Features:</b>
        <li><b>Frontend:</b> User Authentication, Shopping cart, Responsive UI</li>
        <li><b>Admin Panel: </b>Inventory & Offers Management</li>
      </ul>
    ),
    image: "/images/projects/e-commerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vkaru001/GrabIt",
  },
  {
    id: 5,
    title: "License Plate Recognition",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>Python, TensorFlow and Keras</li>
        <b>Features:</b>
        <li>Extracts License Plates from a Vehicle Image</li>
        
        
      </ul>
    ),
    image: "/images/projects/LPR.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/vkaru001/License-Plate-Recognition",

  },
  {
    id: 6,
    title: "Codex - Chat Application",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>HTML, CSS, JavaScript, Node.js, and OpenAI APIs</li>
        <b>Features:</b>
        <li>GPT-3 model API for interacting with AI</li>
        <li>Resembles CHATGPT</li>
        
      </ul>
    ),
    image: "/images/projects/Codex.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vkaru001/Open-AI-Codex",
  },
  
  

  {
    id: 7,
    title: "React Restaurant Application",
    description: (
      <ul className="list-disc pl-2">
         <b>Technologies Used:</b>
        <li>HTML, CSS, JavaScript, ReactJS, and Rest APIs</li>
        <b>Features:</b>
        <li>Client Server Communications with API</li>
        
        
      </ul>
    ),
    image: "/images/projects/Confusion.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vkaru001/Confusion",
  },

  
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          // <motion.li
          //   key={index}
          //   // variants={cardVariants}
          //   initial="initial"
          //   animate={isInView ? "animate" : "initial"}
          //   transition={{ duration: 0.3, delay: index * 0.4 }}
          // >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              
                gitUrl={project.gitUrl}
                
              imgUrl={project.image}
              
            />
          // </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
