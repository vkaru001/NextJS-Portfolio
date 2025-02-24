"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  
  { 
    organization:"Fiona Solutions",
    role: "Frontend Web Developer | Houston, TX",
    // location: "Sugar, TX",
    id: "internship",
    period:"(Aug 2022 - Present)",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed and maintained custom reusable Angular modules for shared components, services, and utilities to reduce code duplication and ensure modularity.</li>
        <li>Initiating Amazon EC2 Cloud Instances using Amazon Web Services and managing and configuring launched instances with respect to specific applications. </li>
        <li>Improved page loading times by optimizing the build process using Angular CLI's AOT (Ahead of Time) compilation and lazy loading.</li>
        <li>Implemented complex state management using NgRx Store, Actions, Selectors, and Effects to handle asynchronous operations and ensure a single source of truth across the app.</li>
        <li>Designed and implemented role-based access control and route guards using CanActivate, CanDeactivate, and CanLoad to control access to routes based on user roles and permissions.</li>
        <li>Used content projection to build reusable components that allows parent components to pass template content into child components.</li>
        <li>Developed custom Angular pipes for data formatting (e.g., currency, date) and custom directives for DOM manipulation to implement reusable logic across components.</li>
        <li>Applied advanced techniques for SEO optimization in Angular applications with Angular Universal by generating meta tags dynamically based on route data and ensuring fast server-side rendering (SSR).</li>
        <li>Applied the OnPush change detection strategy in complex components to minimize Angular’s change detection overhead, reducing performance bottlenecks in large applications.</li>
        <li>Worked in Agile teams, participating in daily stand-ups, sprint planning, and retrospective meetings to ensure smooth collaboration and continuous delivery of high-quality features.</li>
        <li>Wrote unit and end-to-end tests using Jasmine and Karma, ensuring code quality and high test coverage.</li>
        <li>Collaborated with the backend team to integrate RESTful APIs, ensuring smooth data binding and component communication.</li>
        <li>Initiated CI/CD pipelines using Jenkins, Docker, streamlining deployment process for Kubernetes-based applications.</li>
        <li>Successfully collaborated with remote and distributed teams across different time zones, ensuring effective communication and maintaining productivity in a global environment.</li>
        <li>Engaged in user story grooming and backlog refinement sessions with product owners and stakeholders, providing input on feasibility, complexity, and the best approach to implement features in Angular.</li>

      
      </ul>
    ),
  },
  
];

const Experience2Section = () => {
  const [tab, setTab] = useState("internship");
  const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };

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
            {/* <TabButton
              selectTab={() => handleTabChange("internship")}
              active={tab === "internship"}
            >
              {" "}
              Internship{" "}
            </TabButton> */}
            
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