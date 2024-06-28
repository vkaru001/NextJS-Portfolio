"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    organization: "Suvarna TechnoSoft",
    role: "Frontend Developer | Hyderabad, IND",
    id: "fulltime",
    period: "(Jan 2020 - July 2022)",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed Web Applications for Hospitals HIMS and LIS websites UI with <b>ReactJS, JavaScript, and Python</b> and
leveraged <b>AWS services (EC2, S3, Lambda, API Gateway, RDS)</b> for hosting and managing SEO friendly web applications, ensuring scalability.</li>
        <li>Implemented <b>OAuth 2.0 authentication</b> flow using <b>AWS Cognito</b> User Pools, enabling secure user access to 3rd-party APIs. </li>
        <li>Monitored and Optimized <b>REST API</b> performance, led to 20% spike in API speed & 30% lower API calls using <b>Redis cache and MongoDB.</b></li>
        <li>Boosted website performance by 30% via optimization techniques, ensuring optimal user experience, and used <b>Dynatrace</b> for website analytics.</li>
        <li>Created dynamic widgets to improve doctor availability, reducing appointment booking time by 40%.</li>
        <li>Conducted code reviews, resolved <b>JIRA</b> issues, and focused on troubleshooting, cross-platform browser, unit testing and application support.</li>
      </ul>
    ),
  },
  {
    organization: "Suvarna TechnoSoft",
    role: "Web Developer | Hyderabad, IND",
    id: "internship",
    period:"(Jun 2019 - Dec 2019)",
    content: (
      <ul className="list-disc pl-2">
        <li>Built and maintained a <b>WordPress</b> website for the hospital using <b>HTML5, CSS3, and JavaScript</b>, ensuring a user-friendly experience.</li>
        <li>Designed new UI features and components using <b>React & Bootstrap</b> to create visually appealing designs for UI, enhancing user engagement.</li>
        <li>Initiated CI/CD pipelines using <b>Jenkins and Github Actions</b>, reduced deployment time by 30%, leading to an efficient software deployment.</li>

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
            <TabButton
              selectTab={() => handleTabChange("internship")}
              active={tab === "internship"}
            >
              {" "}
              Internship{" "}
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
