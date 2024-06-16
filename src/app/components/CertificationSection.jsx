"use client";
import React, { useState, useRef } from "react";
import CertificationCard from "./CertificationCard";
import CertificationTag from "./CertificationTag";

import { motion, useInView } from "framer-motion";
const CertificationData = [
    
      
    {
      id: 1,
      Organization: "Coursera",
      Role: "Frontend Development with React",
      image: "/images/projects/Coursera.jpeg",

      tag: ["All","Web Technologies"],

      previewUrl: "https://coursera.org/verify/MN6ZCE3Y6824",
    },
    {
      id: 2,
      Organization: "Microsoft",
      Role: "Azure Fundamentals",
      image: "/images/projects/Microsoft.jpeg",

      tag: ["All","Cloud"],

      previewUrl: "https://learn.microsoft.com/api/credentials/share/en-us/VyshnaviKarumuru-5044/8A907186F21854E5?sharingId=60D137E327399C2A",
    },
    {
      id: 3,
      Organization: "Microsoft",
      Role: "Azure Data Fundamentals",
 
      image: "/images/projects/Microsoft.jpeg",
      tag: ["All","Cloud"],

      previewUrl: "https://learn.microsoft.com/api/credentials/share/en-us/VyshnaviKarumuru-5044/DF5EFAA47C9CF06A?sharingId=60D137E327399C2A",
    },
    {
      id: 4,
      Organization: "Udemy",
      Role: "Python Mega Course",

      image: "/images/projects/Udemy.jpeg",
      tag: ["All","Languages"],

      previewUrl: "https://www.udemy.com/certificate/UC-06e15267-9008-4101-ad39-79355709615d/",
    }
  ];
  const CertificationSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCertifications = CertificationData.filter((Certifications) =>
    Certifications.tag.includes(tag)
  );

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

  return (
    <section id="Certifications">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        I&apos;m Certified in
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        
        <CertificationTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <CertificationTag
          onClick={handleTagChange}
          name="Web Technologies"
          isSelected={tag === "Web Technologies"}
        />
        <CertificationTag
          onClick={handleTagChange}
          name="Cloud"
          isSelected={tag === "Cloud"}
        />
        <CertificationTag
          onClick={handleTagChange}
          name="Languages"
          isSelected={tag === "Languages"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-4 gap-10 md:gap-12">
        {filteredCertifications.map((Certifications, index) => (
          <motion.li
            key={index}
            // variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <CertificationCard
              key={Certifications.id}
              Organization={Certifications.Organization}
              Role={Certifications.Role}
              // Period={Certifications.Period}
              // Description={Certifications.Description}
              imgUrl={Certifications.image}

              previewUrl={Certifications.previewUrl}
            />
          </motion.li>

        ))}
        
      </ul>
      
    </section>
  );
};

export default CertificationSection;