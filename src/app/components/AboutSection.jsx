"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Languages:</b> Java, Python, C#</li>
        <li><b>Web Technologies:</b> HTML, CSS, JavaScript & TypeScript</li>
        <li><b>FrameWorks:</b> ReactJS, NextJS & NodeJS</li>
        <li><b>APIs: </b>Rest API, GraphQL & OpenAI API</li>
        <li><b>DataBases:</b> MongoDB, PostgreSQL & MySQL</li>
        <li><b>Cloud:</b> Azure, AWS & Docker</li>
        <li><b>Version Control & Tools: </b>GitHub, Visual Studio, JIRA, Jenkins, pgAdmin, AEM, & Jest</li>
        <li><b>Analytical skills: </b>PowerBI, Qlik Sense, Tableau, Microsoft 365, Power Apps</li>
        <li><b>Machine Learning Techniques: </b> Linear Discriminant Analysis, Random Forest, Naive Bayies, Logistic Regression, Scikit, Seaborn, Tesseract, Pandas</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Florida International University, MS in Computer Science</li>
        <li>MLR Institute of Technology, B.Tech in Information Technology</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} />
         <div className="mt-4 md:mt-0 text-justify flex flex-col h-full">
          <p className="text-base lg:text-lg"> 
          <p>Hello! I am a passionate Front-End Engineer with over 3 years of expertise in crafting exceptional digital experiences. My passion lies in blending technical mastery with a deep understanding of user needs to deliver seamless and engaging web applications.</p> 
          <p>What sets me apart is my unique combination of technical prowess and exceptional soft skills. With proficiency in ReactJS, NextJS, NodeJS, and more, I pride myself on delivering robust, scalable solutions that incorporate the latest UI/UX design principles. I am also actively involved in solving problems on LeetCode, honing my data structures and algorithms skills in Java to continuously strengthen my problem-solving abilities.</p>
          <p> Beyond coding, I excel in collaborative environments, communicating effectively across teams and adapting seamlessly to evolving requirements. My creative problem-solving mindset allows me to approach challenges from fresh perspectives, consistently driving innovative solutions. Deeply committed to continuous learning, I actively explore emerging technologies to push boundaries and exceed expectations. If you are seeking a skilled, dedicated Front-End Engineer to bring your vision to life, I would be honored to discuss how my expertise can contribute to your success.</p>
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
