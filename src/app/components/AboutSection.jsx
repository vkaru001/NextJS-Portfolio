"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const AboutSection = () => {

  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} />
         <div className="mt-4 md:mt-0 text-justify flex flex-col h-full">
         <ul className="list-disc pl-2">
         <li>Experienced Frontend Developer specializing in Angular, React, TypeScript, JavaScript ES6+, and AWS, with a 5+ years of strong background in building scalable and modular web applications.</li>
         <li>Proficient in developing reusable Angular modules, components, services, and utilities to ensure code modularity and maintainability.</li>
         <li>Experienced in AngularJS development, incorporating dependency injection, custom directives, filters, and AJAX-based data fetching to enhance legacy applications.</li>
         <li>Expertise in state management using NgRx (Store, Actions, Selectors, and Effects)  and Redux/Context API for React, for efficient data flow and handling of asynchronous operations.</li>
         <li>Hands-on experience in cloud platforms with 2+ years of experience in AWS (EC2, S3, Lambda, Cloud Front, Cognito) to develop and deploy scalable, high-performance applications, ensuring reliability and cost efficiency.</li>
         <li>Expertise in managing Angular component lifecycle hooks (e.g., ngOnInit, ngAfterViewInit, ngOnChanges, ngOnDestroy) to optimize application performance and behavior.</li>
         <li>Proficient in AngularJS and Angular, skilled in developing dynamic UI components using Angular templates, markup, expressions, and layout structures (FLEX/GRID).</li>
         <li>Skilled in performance optimization, utilizing AOT compilation, lazy loading, OnPush change detection, and trackBy to enhance application speed and responsiveness.</li>
         <li>Integrated RESTful APIs endpoints, enabling real-time data retrieval and manipulation for up-to-date application insights.</li>
         <li>Proven experience in Agile methodologies and CI/CD practices, ensuring efficient development workflows and fast-paced releases by implementing CI/CD pipelines using Jenkins, GitHub, and Docker for streamlined deployments.</li>

      
      </ul>
          {/* <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>  */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
        </div> */}
        </div> 
      </div>
    </section>
  );
};

export default AboutSection;
