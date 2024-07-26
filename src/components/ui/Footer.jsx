import React from "react";

const Footer = (props) => {
  console.log("props", props);
  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 flex items-center justify-center p-4 bg-black text-neutral-content">
        <div className="">
          <p className="">@ 2024 KMITL PCC Computer Club E113 Patio Chumphon</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;