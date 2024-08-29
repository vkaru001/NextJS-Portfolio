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
          <p className="text-base lg:text-lg"> 
          <p>Hello! I am a passionate Front-End Engineer with over 3 years of expertise in crafting exceptional digital experiences. My passion lies in blending emerging technologies like <b>AI and ML</b> with user centric web applications.</p> 
          <p>What sets me apart is my unique combination of technical expertise and exceptional soft skills. With proficiency in ReactJS, NextJS, NodeJS, and more, I pride myself on delivering robust, scalable solutions that incorporate the latest UI/UX design principles. I am also actively involved in solving problems on LeetCode, honing my data structures and algorithms skills in Java to continuously strengthen my problem-solving abilities.</p>
          <p> Beyond coding, I excel in collaborative environments, communicating effectively across teams and adapting seamlessly to evolving requirements. If you are seeking a skilled Front-End Engineer, I would be honored to discuss how my expertise can contribute to your success.</p>
          </p>
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
