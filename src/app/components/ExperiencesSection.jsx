"use client";
import React, { useState, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceTag from "./ExperienceTag";

import { motion, useInView } from "framer-motion";
const ExperienceData = [
    {
      id: 1,
      Organization: "Suvarna TechnoSoft",
      Role: "Front-End Developer, Full Time",
      Period:"(Jan 2020 - July 2022)",
      Description: (
        <ul className="list-disc pl-2">
           <b>Technologies Used:</b>
          <li>HTML, CSS & JavaScript(DOM Manipulation)</li>
          <li>ReactJS - Redux, React Hooks, NPM</li>
          <li>Rest APIs & OAuth - Authorization</li>
          <li>Azure Active Directory - Authentication</li>
          <li>GitHub for Source Code Management</li>
        </ul>
      ),
      image: "/images/projects/Suvarna.jpeg",
      tag: ["Experience"],

      previewUrl: "",
    },
    {
      id: 2,
      Organization: "Suvarna TechnoSoft",
      Role: "Web Developer, Intern",
      Period:"(July 2019 - Dec 2019)",
      Description: (
        <ul className="list-disc pl-2">
           <b>Technologies Used:</b>
           <li>HTML, CSS & JavaScipt</li>
           <li>ReactJS</li>
          <li>GitHub for Source Code Management</li>
        </ul>
      ),
      image: "/images/projects/Suvarna.jpeg",
      tag: ["Experience"],

      previewUrl: "",
    },
    {
      id: 3,
      Organization: "Coursera Cerified",
      Role: "Front_End Development with React",
      image: "/images/projects/Coursera.jpeg",
      Period:"",
      Description:"",
      tag: ["Certifications"],

      previewUrl: "https://coursera.org/verify/MN6ZCE3Y6824",
    },
    {
      id: 4,
      Organization: "Microsoft Cerified",
      Role: "Azure Fundamentals",
      image: "/images/projects/Microsoft.jpeg",
      Period:"",
      Description:"",
      tag: ["Certifications"],

      previewUrl: "https://learn.microsoft.com/api/credentials/share/en-us/VyshnaviKarumuru-5044/8A907186F21854E5?sharingId=60D137E327399C2A",
    },
    {
      id: 5,
      Organization: "Microsoft Certified",
      Role: "Azure Data Fundamentals",
      Period:"",
      Description:"",
      image: "/images/projects/Microsoft.jpeg",
      tag: ["Certifications"],

      previewUrl: "https://learn.microsoft.com/api/credentials/share/en-us/VyshnaviKarumuru-5044/DF5EFAA47C9CF06A?sharingId=60D137E327399C2A",
    },
    {
      id: 6,
      Organization: "Udemy Cetified",
      Role: "Python Mega Course",
      Period:"",
      Description:"",
      image: "/images/projects/Udemy.jpeg",
      tag: ["Certifications"],

      previewUrl: "https://www.udemy.com/certificate/UC-06e15267-9008-4101-ad39-79355709615d/",
    }
  ];
  const ExperiencesSection = () => {
  const [tag, setTag] = useState("Experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredExperiences = ExperienceData.filter((experiences) =>
    experiences.tag.includes(tag)
  );

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

  return (
    <section id="Experiences">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experiences
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ExperienceTag
          onClick={handleTagChange}
          name="Experience"
          isSelected={tag === "Experience"}
        />
        <ExperienceTag
          onClick={handleTagChange}
          name="Certifications"
          isSelected={tag === "Certifications"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-10 md:gap-12">
        {filteredExperiences.map((experiences, index) => (
          <motion.li
            key={index}
            // variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ExperienceCard
              key={experiences.id}
              Organization={experiences.Organization}
              Role={experiences.Role}
              Period={experiences.Period}
              Description={experiences.Description}
              imgUrl={experiences.image}

              previewUrl={experiences.previewUrl}
            />
          </motion.li>

        ))}
        
      </ul>
      
    </section>
  );
};

export default ExperiencesSection;