"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    organization: "Suvarna TechnoSoft",
    role: "Full Stack Web Developer | Hyderabad, IND",
    id: "fulltime",
    period: "(June 2019 - July 2022)",
    content: (
      <ul className="list-disc pl-2">


        <li>Developed and maintained multiple React, JavaScript ES6+ user interfaces for healthcare insurance providers.</li>
        <li>Integrated AWS cloud services (Cognito, S3, EC2, Lambda) for enhanced API security, and to handle 3X more concurrent users. </li>
        <li>Built 5+ custom WordPress plugins using PHP, enhancing site functionality and increasing user engagement by 25%.</li>
        <li>Improved PostgreSQL database performance by 40% for high-volume data by optimizing schemas, creating stored procedures, and refining complex SQL queries for processing over 50K transactions.</li>
        <li>Managed RESTful microservices with Java and Spring Boot, applying Redis caching strategies reducing API calls by 50% and used Dynatrace for user behavior tracking and performance metrics, improved marketing analytics and 15% more users.</li>
        <li>Refined automation dependency management with Maven & Jenkins, led to 40% shorter deployment times.</li>
        <li>Engaged in all phases of SDLC using Agile Scrum methodologies, including gathering requirements, designing, analyzing, and developing code, to create accessible and high-quality software adhering to WCAG 2.0 guidelines.</li>
      </ul>
    ),
  },
  
];

const ExperienceSection = () => {
  const [tab, setTab] = useState("fulltime");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="experience">
      {/* <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experiences
      </h2> */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/Suvarna.jpeg" width={300} height={300} />
         <div className="mt-4 md:mt-0 text-justify flex flex-col h-full">
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("fulltime")}
              active={tab === "fulltime"}
            >
              {" "}
              Full-Time{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            <h1><strong className="text-2xl">{TAB_DATA.find((t) => t.id === tab).organization}</strong></h1>
            <h6><b className="text-white text-md">{TAB_DATA.find((t) => t.id === tab).role}</b></h6>
            <small>{TAB_DATA.find((t) => t.id === tab).period}</small>
            {/* <small><i>{TAB_DATA.find((t) => t.id === tab).location}</i></small> */}
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
