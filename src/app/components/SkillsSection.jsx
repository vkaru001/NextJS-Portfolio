"use client";
import React, { useState, useRef } from "react";
import SkillsCard from "./SkillsCard";
import SkillsTag from "./SkillsTag";
import { motion, useInView } from "framer-motion";

const skillsData = [
  {
    id: 1,
    title: "Java",
    image: "/images/projects/file.png",
    tag: ["All", "Languages"],
  },
  {
    id: 2,
    title: "Python",
    image: "/images/projects/python.png",
    tag: ["All", "Languages"],
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/projects/JS.png",
    tag: ["All", "Languages"],
  },
  {
    id: 4,
    title: "TypeScript",
    image: "/images/projects/TS.png",
    tag: ["All", "Languages"],
  },
  {
    id: 5,
    title: "ReactJS",
    image: "/images/projects/react12.png",
    tag: ["All", "Frontend"],
  },
  
  {
    id: 6,
    title: "NextJS",
    image: "/images/projects/next.js.png",
    tag: ["All", "Frontend"],
  },
  
  {
    id: 7,
    title: "MySQL",
    image: "/images/projects/SQL1.png",
    tag: ["All", "Backend"],
  },
  {
    id: 8,
    title: "HTML",
    image: "/images/projects/HTML1.png",
    tag: ["All", "Frontend"],
  },
  {
    id: 9,
    title: "Azure",
    image: "/images/projects/Azure1.png",
    tag: ["All", "Buildtools"],
  },
  {
    id: 10,
    title: "AWS",
    image: "/images/projects/AWS.png",
    tag: ["All", "Buildtools"],
  },
  {
    id: 11,
    title: "Redis",
    image: "/images/projects/redis.png",
    tag: ["All", "Backend"],
  },
  {
    id: 12,
    title: "PostgreSQL",
    image: "/images/projects/postgresql.png",
    tag: ["All", "Backend"],
  },
  {
    id: 13,
    title: "MongoDB",
    image: "/images/projects/mongodb.png",
    tag: ["All", "Backend"],
  },
  {
    id: 14,
    title: "GraphQL",
    image: "/images/projects/graphql.png",
    tag: ["All", "Backend"],
  },
  {
    id: 15,
    title: "Git",
    image: "/images/projects/Git1.png",
    tag: ["All", "Buildtools"],
  },
  {
    id: 16,
    title: "Kubernates",
    image: "/images/projects/Kubernates.png",
    tag: ["All", "Buildtools"],
  },
  {
    id: 17,
    title: "Jenkins",
    image: "/images/projects/Jenkins.png",
    tag: ["All", "Buildtools"],
  },
  {
    id: 18,
    title: "CSS3",
    image: "/images/projects/CSS.png",
    tag: ["All", "Frontend"],
  },
  {
    id: 19,
    title: "Bootstrap",
    image: "/images/projects/Bootstrap.png",
    tag: ["All", "Frontend"],
  },
  {
    id: 20,
    title: "TailwindCSS",
    image: "/images/projects/TailwindCSS.png",
    tag: ["All", "Frontend"],
  },
  {
    id: 21,
    title: "Drizzle ORM",
    image: "/images/projects/Drizzle.png",
    tag: ["All", "Backend"],
  },
  {
    id: 22,
    title: "Vercel",
    image: "/images/projects/vercel.png",
    tag: ["All", "Othertools"],
  },
  {
    id: 23,
    title: "Jira",
    image: "/images/projects/Drizzle.png",
    tag: ["All", "Othertools"],
  },
  {
    id: 24,
    title: "NodeJS",
    image: "/images/projects/Nodejs.png",
    tag: ["All", "Backend"],
  },
  {
    id: 25,
    title: "WordPress",
    image: "/images/projects/wordpress.png",
    tag: ["All", "Frontend"],
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
        {filteredSkills.map((skill,index) => (
          <motion.li
            key={index}
            // variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <SkillsCard
              key={skill.id}
              title={skill.title} 
              imgUrl={skill.image}
              
            />
           </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;


