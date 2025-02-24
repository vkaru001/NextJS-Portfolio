"use client";
import React, { useState, useRef } from "react";
import SkillsCard from "./SkillsCard";
import SkillsTag from "./SkillsTag";
import {  useInView } from "framer-motion";

const skillsData = [
  {
    id: 1,
    title: "Java",
    image: "/images/projects/java-svgrepo-com.svg",
    tag: ["All", "Languages"],
  },
  {
    id: 2,
    title: "Python",
    image: "/images/projects/python-svgrepo.svg",
    tag: ["All", "Languages"],
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/projects/javascript-svgrepo-com.svg",
    tag: ["All", "Languages"],
  },
  {
    id: 4,
    title: "TypeScript",
    image: "/images/projects/typescript-svgrepo-com.svg",
    tag: ["All", "Languages"],
  },
  {
    id: 5,
    title: "ReactJS",
    image: "/images/projects/react-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  
  {
    id: 6,
    title: "AngularJS",
    image: "/images/projects/angular-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  
  {
    id: 7,
    title: "MySQL",
    image: "/images/projects/mysql-logo-svgrepo-com.svg",
    tag: ["All", "Backend"],
  },
  {
    id: 8,
    title: "HTML",
    image: "/images/projects/html-5-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  {
    id: 9,
    title: "Azure",
    image: "/images/projects/azure-svgrepo-com.svg",
    tag: ["All", "Buildtools"],
  },
  {
    id: 10,
    title: "AWS",
    image: "/images/projects/aws.svg",
    tag: ["All", "Buildtools"],
  },
  {
    id: 11,
    title: "Redis",
    image: "/images/projects/redis-svgrepo-com.svg",
    tag: ["All", "Backend"],
  },
  {
    id: 12,
    title: "PostgreSQL",
    image: "/images/projects/postgresql-svgrepo-com.svg",
    tag: ["All", "Backend"],
  },
  
  {
    id: 13,
    title: "GitHub",
    image: "/images/projects/github.svg",
    tag: ["All", "Buildtools"],
  },
  {
    id: 14,
    title: "Linux",
    image: "/images/projects/linux-svgrepo-com.svg",
    tag: ["All", "Othertools"],
  },
  {
    id: 15,
    title: "Jenkins",
    image: "/images/projects/jenkins-svgrepo-com.svg",
    tag: ["All", "Buildtools"],
  },
  {
    id: 16,
    title: "CSS3",
    image: "/images/projects/css-3-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  {
    id: 17,
    title: "Bootstrap",
    image: "/images/projects/bootstrap-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  {
    id: 18,
    title: "TailwindCSS",
    image: "/images/projects/tailwindcss-icon-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  
  {
    id: 19,
    title: "Vercel",
    image: "/images/projects/vercel-icon-svgrepo-com.svg",
    tag: ["All", "Othertools"],
  },
  {
    id: 20,
    title: "Jira",
    image: "/images/projects/jira-svgrepo-com.svg",
    tag: ["All", "Othertools"],
  },
  
  {
    id: 21,
    title: "Figma",
    image: "/images/projects/figma-svgrepo-com.svg",
    tag: ["All", "Frontend"],
  },
  {
    id: 22,
    title: "RESTful API",
    image: "/images/projects/rest-api-blue-logo-22099.svg",
    tag: ["All", "Backend"],
  },
  
  
  {
    id: 23,
    title: "Docker",
    image: "/images/projects/docker-svgrepo-com.svg",
    tag: ["All", "Buildtools"],
  },
  {
    d: 24,
    title: "Kubernetes",
    image: "/images/projects/kubernetes-svgrepo-com.svg",
    tag: ["All", "Buildtools"],
  },
  
];

const SkillsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredSkills = skillsData.filter((skill) =>
    skill.tag.includes(tag)
  );

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

  return (
    <section id="skill">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <SkillsTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <SkillsTag
          onClick={handleTagChange}
          name="Languages"
          isSelected={tag === "Languages"}
        />
        <SkillsTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <SkillsTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <SkillsTag
          onClick={handleTagChange}
          name="Buildtools"
          isSelected={tag === "Buildtools"}
        />
        <SkillsTag
          onClick={handleTagChange}
          name="Othertools"
          isSelected={tag === "Othertools"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-8 gap-3 md:gap-4">
        {filteredSkills.map((skill) => (
          // <motion.li
          //   key={index}
          //   // variants={cardVariants}
          //   initial="initial"
          //   animate={isInView ? "animate" : "initial"}
          //   transition={{ duration: 0.3, delay: index * 0.4 }}
          // >
            <SkillsCard
              key={skill.id}
              title={skill.title} 
              imgUrl={skill.image}
              
            />
          //  </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;


