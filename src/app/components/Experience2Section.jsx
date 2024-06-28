"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  
  { 
    organization:"Fiona Solutions",
    role: "Full-Stack Web Developer | SugarLand, TX",
    // location: "Sugar, TX",
    id: "internship",
    period:"(Feb 2024 - Present)",
    content: (
      <ul className="list-disc pl-2">
        <li>Built an e-commerce website with <b>React, TypeScript, Node.js,</b> and used <b>AEM</b> for content management to improve code reusability and
reduce development time by 20%.</li>
        <li>Maintained <b>RESTful APIs, using Node.js, and PostgreSQL</b>, handling 500+ requests per minute with 99.9% uptime.</li>
        <li>Implemented <b>pagination, split coding, lazy loading techniques,</b> reducing initial load times by 35% and improving page load speeds by 25%.</li>
        <li>Automated Business workflows using <b>Python</b>, reducing manual processing by 60% and avoiding human error in data handling.</li>
        <li>Integrated <b>SAP ERP</b> systems with business team, synchronizing inventory, orders, and customer data, reduced order processing time by 20%.</li>
        <li>Worked with cross-functional teams in daily scrum meetings, ensuring timely delivery and resulting in a 95% customer satisfaction rate.</li>
      </ul>
    ),
  },
  
];

const Experience2Section = () => {
  const [tab, setTab] = useState("internship");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="experience2">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experiences
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/fiona.jpeg" width={300} height={300} />
         <div className="mt-4 md:mt-0 text-justify flex flex-col h-full">
          
          <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("fulltime")}
              active={tab === "fulltime"}
            >
              {" "}
              Full-Time{" "}
            </TabButton> */}
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

export default Experience2Section;