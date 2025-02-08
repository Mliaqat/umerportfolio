"use client"; // Required in Next.js 13+ App Router

import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <div className="center" style={{marginTop:"4.5rem"}}>
      <div className="text-[4rem] text-white">
        <ReactTyped
          strings={["Web Developer", "Video Editor", "Graphic Designer"]}
          typeSpeed={100} // Speed of typing
          backSpeed={50} // Speed of backspacing
          loop // Loops the animation
          style={{fontSize:"2rem"}}
        />
      </div>
    </div>
  );
};

export default TypingEffect;
