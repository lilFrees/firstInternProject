import { useRef } from "react";
import Ball from "../UI/Ball";
import Line from "../UI/Line";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CompanyHeader() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="relative mx-auto flex max-w-[1145px] justify-between overflow-hidden px-4 py-12"
    >
      <Ball
        className="bottom-0 right-[40%] translate-y-[50%]"
        animatePos="bottom"
        divRef={ref}
      />
      <div className="flex flex-col gap-7">
        <Line />
        <h2 className="text-4xl">
          <span>Meet the People</span>
          <br />
          <span className="mt-2 block font-bold">We are Working With</span>
        </h2>
      </div>
      <div className="mt-auto flex h-full gap-5">
        <div className="cursor-pointer rounded-full border-2 border-purple-900 bg-transparent p-4 text-purple-900 shadow-md shadow-transparent transition-all duration-300 hover:bg-purple-900 hover:text-white hover:shadow-purple-950/50">
          <FaArrowLeft className="" />
        </div>
        <div className="cursor-pointer rounded-full border-2 border-purple-900 bg-transparent p-4 text-purple-900 shadow-md shadow-transparent transition-all duration-300 hover:bg-purple-900 hover:text-white hover:shadow-purple-950/50">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
