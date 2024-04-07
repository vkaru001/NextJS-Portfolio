"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Front-End Developer",
    id: "Full-Time",
    period:"(Jan 2020 - July 2022)",
    content: (
      <ul className="list-disc pl-2">
        <li>Implemented many upgrades for “HIMS” and “LIS” website’s UI with ReactJS and Node.js, aligning with the business requirements with enhancing the site’s responsiveness.</li>
        <li>Assisted in creating multiple dynamic widgets to improve the capture and display of doctor availability, reducing appointment booking approval time for customers by 40%.</li>
        <li>Achieved a 30% reduction in website load times through performance optimization techniques.</li>
        <li>Integrated the customer services chatbot functionality, resulting in a 15% increase in customer support. </li>
        <li>Monitored performance of the REST API and optimized it as required, led to 20% improvement in API speed and 30% decrease in API calls using Redis cache and managed databases using MySQL. </li>
        <li>Active code reviewer and managed many JIRA issues, reviewing the most changes on my team Quarter Over Quarter (QoQ) and focused on performance and cross platform browser and device support.</li>
      </ul>
    ),
  },
  {
    title: "Web Developer",
    id: "Intern",
    period:"(Jun 2019 - Dec 2019)",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed multiple proof-of-concepts (POCs) by building various login portals and Product UI builder screens for Outpatient Management’s web applications using HTML, CSS3, JavaScript, and React.</li>
        <li>Implemented new UI features and components while resolving existing UI bugs before stage release.</li>
        <li>Initiated CI/CD pipelines using Jenkins and Github Actions to ensure efficient software deployment.</li>
      </ul>
    ),
  },
  
];

const ExperienceSection = () => {
  const [tab, setTab] = useState("Full-Time");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experiences
      </h2>
      <Image src="/images/projects/Suvarna.jpeg" width={300} height={300} />
      {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
         */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          {/* <h2 className="text-4xl font-bold text-white mb-4">3 Years of Experience</h2> */}
          {/* <p className="text-base lg:text-lg">
          
          </p> */}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Full-Time")}
              active={tab === "Full-Time"}
            >
              {" "}
              Full-Time{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Intern")}
              active={tab === "Intern"}
            >
              {" "}
              Intern{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            <h1><b>{TAB_DATA.find((t) => t.id === tab).title}</b></h1>
            <small>{TAB_DATA.find((t) => t.id === tab).period}</small>
            {TAB_DATA.find((t) => t.id === tab).content}
            
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default ExperienceSection;
