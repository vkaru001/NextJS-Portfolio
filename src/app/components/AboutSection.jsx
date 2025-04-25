"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const AboutSection = () => {

  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} />
         <div className="mt-4 md:mt-0 text-justify flex flex-col h-full">
         <ul className="list-disc pl-2">
         <li>Experienced Full Stack Developer with a 4+ years of strong background in building scalable and high performance web applications using React, JavaScript ES6+, and TypeScript.</li>
         <li>Proficient in backend development using Java, Node.js, and Spingboot implementing RESTful microservices for seamless data communication.</li>
         <li>Skilled in database management with MySQL, PostgreSQL, and MongoDB, ensuring optimized queries, data integrity, and performance tuning for large-scale applications.</li>
         <li>Hands-on experience with cloud technologies, including AWS (EC2, S3, Lambda, CloudFront, Cognito) and Azure (Azure Functions, Azure PostgreSQL, Azure B2C) for scalable application deployment, backed by AWS Solutions Architect Associate and Microsoft Azure Developer Associate certifications.</li>
         <li>Strong understanding of DevOps and CI/CD pipelines, integrating GitHub Actions, Jenkins, Docker, and Kubernetes for automated deployments and infrastructure management.</li>

      </ul>
          {/* <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>  */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
        </div> */}
        </div> 
      </div>
    </section>
  );
};

export default AboutSection;
