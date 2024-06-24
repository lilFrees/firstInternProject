import { Button } from "antd";
import heroImage from "../../assets/hero_img.svg";

function Hero() {
  return (
    <div className="mx-auto flex h-full max-w-[1145px] items-center justify-center gap-7 overflow-hidden px-4 py-4">
      <div className="flex flex-col items-start gap-4">
        <h1>
          <span className="text-[45px] font-light">
            Great <span className="font-bold">Product</span> is
          </span>
          <br />
          <span className="text-[53px] font-extrabold">
            built by great <span>teams</span>
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
