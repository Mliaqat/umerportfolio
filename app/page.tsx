import TypingEffect from "@/component/TypeingEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-black h-[100dvh]">
      <h1 className="text-white font-bold text-[4.5rem] center">I am umer</h1>
      <TypingEffect/>
    </div>
  );
}
