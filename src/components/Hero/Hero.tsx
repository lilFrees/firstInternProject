import { Button } from "antd";
import heroImage from "../../assets/hero_img.svg";
import Ball from "../UI/Ball";

function Hero() {
  return (
    <div className="relative mx-auto flex h-full max-w-[1145px] items-center justify-center gap-7 overflow-hidden px-4 py-4">
      {/* <div className="gradient-ball bottom-0 left-[40%] translate-y-[50%]"></div> */}
      <Ball className="bottom-0 left-[40%] translate-y-[50%]" />
      <div className="flex flex-col items-start gap-4">
        <h1>
          <span className="text-[45px] font-light">
            Great{" "}
            <span className="bg-gradient-to-b from-pink-700 to-pink-400 bg-clip-text font-bold text-transparent">
              Product
            </span>{" "}
            is
          </span>
          <br />
          <span className="text-[53px] font-extrabold">
            built by great{" "}
            <span className="bg-gradient-to-tr from-purple-800 to-pink-800 bg-clip-text font-bold text-transparent">
              teams
            </span>
          </span>
        </h1>
        <p className="text-[18px] text-slate-500">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <Button
          type="primary"
          size="large"
          className="mt-10 bg-sky-500 px-9 py-5 text-sm"
        >
          Let's get started
        </Button>
      </div>
      <div>
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
