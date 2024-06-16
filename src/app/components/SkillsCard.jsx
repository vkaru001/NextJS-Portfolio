import React from "react";


const SkillsCard = ({ imgUrl, title }) => {
  return (
    <div>
      <div
        className="h-20 w-20 rounded relative "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        
      </div>
      <div className="text-white rounded-b-lg mt-3 bg-[#181818]py-8 px-4">
        <h5 className="text-sm text-left font-semibold mb-4">{title}</h5>
      </div>
    </div>
  );
};

export default SkillsCard;