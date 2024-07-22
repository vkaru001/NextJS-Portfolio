"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  
  { 
    organization:"Fiona Solutions",
    role: "Full-Stack Web Developer | Houston, TX",
    // location: "Sugar, TX",
    id: "internship",
    period:"(Feb 2024 - Present)",
    content: (
      <ul className="list-disc pl-2">
      <li>Spearheaded the development of an e-commerce platform using React, TypeScript and integrating SEO best practices resulting in improved search engine rankings and a 30% increase in organic traffic.</li>
      <li>Boosted frontend performance by implementing code splitting and lazy loading, improving user interaction speed by 35%.</li>
      <li>Utilized jQuery for DOM manipulation, event handling, and AJAX requests, enhancing web performance by 20% faster page loads.</li>
      <li>Optimized UI/UX workflows using Figma, reducing design-to-development time by 30% and increasing design consistency by 45%.</li>
      <li>Conducted code reviews, resolved JIRA issues, and focused on debugging, cross-platform browser, and unit testing using Jest.</li>
      <li>Initiated CI/CD pipelines with Jenkins for Kubernetes based web application deployment and used GitHub for version control, applying branching strategies, streamlined team collaboration.</li>     
      <li>Collaborated with UX/UI designers, backend developers, and product managers to deliver high-quality feature development, resulting in a 20% increase in user satisfaction.</li>
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