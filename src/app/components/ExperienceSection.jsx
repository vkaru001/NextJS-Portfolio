"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    organization: "Suvarna TechnoSoft",
    role: "Full Stack Developer | Hyderabad, IND",
    id: "fulltime",
    period: "(Apr 2020 - July 2022)",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed and deployed React based enterprise applications for healthcare and pharmaceutical providers using AWS, improving user engagement and response times by 30%.</li>
        <li>Built secure Java 2EE applications using Spring Boot, with RESTful microservices and Redis caching, reducing API calls by 50% and tracked performance with Dynatrace.</li>
        <li>Led technical debt removal initiatives, refactoring legacy Java codebases to improve modularity and reduce bugs by 30%.</li>
        <li>Optimized Oracle SQL queries and indexed high-frequency database transactions, reducing query execution time by 25%.</li>
        <li>Conducted root cause analysis on high-severity production incidents using JIRA, implementing performance optimizations.</li>
        <li>Implemented process enhancement initiatives, automated deployment pipelines with Jenkins, by 40% faster deployment times.</li>
        <li>Collaborated with cross-functional team to develop new application features, while following HIPAA compliance guidelines.</li>

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
