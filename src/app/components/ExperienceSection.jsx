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
        <li>Developed dynamic UI components using Angular, TypeScript, and JavaScript ES6+, ensuring seamless user interactions with MVC capability.</li>
        <li>Supported client queries for monthly statements and enabled transaction sorting based on custom criteria using AngularJS, incorporating data binding, filters, and custom sorter functions.</li>
        <li>Created custom directives and filters in AngularJS with built-in $http services, streamlining data retrieval through dependency injection.</li>
        <li>Utilized AngularJS dependency injection to manage and inject various services, including custom services and reusable directives, optimizing application modularity.</li>
        <li>Implemented client-side functionalities such as hide/show elements, event handling, and AJAX calls using AngularJS and jQlite, improving UI responsiveness.</li>
        <li>Developed and deployed scalable Angular applications on AWS, utilizing S3 for static hosting, CloudFront for content delivery, and Cognito for user authentication, enhancing security and reducing latency by 30%.</li>
        <li>Improved the performance of the app by implementing change detection strategies and trackBy to enhance DOM rendering efficiency.</li>
        <li>Used Angulars built-in PreloadAllModules and developed custom preloading strategies to optimize resource loading in the background while maintaining app responsiveness.</li>
        <li>Conducted unit testing and debugging to ensure a bug-free experience across multiple browsers, improving application stability</li>
        <li>Worked in Agile teams, collaborating with backend developers, UX/UI designers, and product managers to optimize the user experience.</li>
        <li>Actively participated in conflict resolution and discussions, ensuring that team disagreements were addressed constructively and that the best technical decisions were made without impacting team morale.</li>
        <li>Participated actively in peer code reviews, providing constructive feedback to ensure code quality, adherence to best practices, and consistency across the project while learning from others code.</li>

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
