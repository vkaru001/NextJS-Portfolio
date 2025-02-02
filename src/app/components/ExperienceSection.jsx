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
        <li>Developed dynamic React based UIs like EHRs, Doctor & Patient Portals with HTML5, CSS3, JavaScript ES6+, and Bootstrap for healthcare provider.</li>
        <li>Implemented Single Sign-On (SSO) for server-side solutions using OAuth 2.0 and AWS Cognito, enhancing secure access points. </li>
        <li>Implemented MongoDB to store and manage NoSQL patients’ data, resulting in a 35% improvement in data retrieval speed and enabling API with real-time updates. </li>
        <li>Managed secure Java 2EE applications, and use RESTful microservices with Redis caching, reducing API
calls by 50% and tracked performance with Dynatrace.</li>
        <li>Engineered sophisticated multithreading and concurrency solutions to manage high-traffic scenarios during healthcare processes with optimal responsiveness.</li>
        <li>Refined automation and dependency management with Maven & Jenkins, reducing deployment times by 40%.</li>
        <li>Engaged in all phases of Software Development Life Cycle using Agile methodologies, on complience with HIPPA guidelines.</li>
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
