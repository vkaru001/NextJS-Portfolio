import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo1.png"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#24292f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href = "/"><Image src={Logo} alt="Logo" width = {48} height = {48}/></Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
