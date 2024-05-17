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

•	
•	
•	
•	•	Developed multiple proof-of-concepts (POCs) by building various login portals and Product UI builder screens for “HIMS” web applications using HTML, CSS3, JavaScript, and React.
•	Implemented new UI features and components enhancing user engagement and boosting user retention by 15% on release management.
•	Initiated CI/CD (Continuous Integration / Continuous Deployment) pipelines using Jenkins that reduced deployment time by 30%, leading to a more efficient software deployment process.



        <li>Developed internal portals for Hospital's "HIMS" and "LIS" websites' UI with ReactJS, JavaScript and Python, and leveraged AWS services (EC2, S3, RDS) for hosting and managing web applications, ensuring scalability and reliability. </li>
        <li>Implemented OAuth 2.0 authentication flow using AWS Cognito User Pools, enabling secure user login and access to third-party APIs. </li>
        <li>Monitored and Optimized REST API performance, led to 20% spike in API speed & 30% lower API calls using Redis cache and MongoDB.</li>
        <li>Achieved 30% reduction in website load times through performance optimization techniques, best user experience via enhancing usability. </li>
        <li>Created dynamic widgets to improve doctor availability, reducing appointment booking time by 40%. </li>
        <li>Conducted code debugging, resolved many JIRA issues, and focused on cross-browser compatibility, unit testing and integration testing and application support.</li>
      </ul>
    ),
  },
  {
    title: "Web Developer",
    id: "Intern",
    period:"(Jun 2019 - Dec 2019)",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed multiple proof-of-concepts (POCs) by building various login portals and Product UI builder screens for "HIMS" web applications using HTML, CSS3, JavaScript, and React.</li>
        <li>Implemented new UI features and components enhancing user engagement and boosting user retention by 15% on release management.</li>
        <li>Initiated CI/CD pipelines using Jenkins and Github Actions that reduced deployment time by 30%, ensuring efficient software deployment.</li>
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
