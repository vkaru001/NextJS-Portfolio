"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    organization: "Suvarna TechnoSoft",
    role: "Frontend Developer | Hyderabad, IND",
    id: "fulltime",
    period: "(June 2019 - July 2022)",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed responsive service-oriented architecture (SOA) using <b>React.js</b> for healthcare providers.</li>
        <li>Implemented OAuth 2.0 authentication using AWS Cognito, with secure access to 3rd party APIs and protecting sensitive information. </li>
        <li>Optimized and managed <b>RESTful microservices in API Gateway</b> to secure API connections, resulting in 50% lesser API calls using <b>Redis Cache,</b> enhancing backend efficiency.</li>
        <li>Improved automation and dependency management with <b>Maven and Jenkins,</b> which brought about 40% shorter deployment times, enhancing overall project efficiency and expediting delivery.</li>
        <li>Collaborated with UX designers and product managers to optimize user experiences, integrating feedback forums.</li>
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
