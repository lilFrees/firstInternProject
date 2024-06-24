import { Button } from "antd";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between bg-white px-5 py-5 shadow-md">
      <div className="font-logo flex items-center gap-1 text-[24px]">
        <span className="px-2 py-2">
          <img src={logo} alt="Logo" />
        </span>
        Ik developers
      </div>
      <div className="flex items-center gap-8">
        <a href="#" className="text-md">
          About us
        </a>
        <a href="#" className="text-md">
          Services
        </a>
        <a href="#" className="text-md">
          Case Studies
        </a>
        <a href="#" className="text-md">
          Blog
        </a>
        <a href="#" className="text-md">
          How it Works
        </a>
        <a href="#" className="text-md">
          Hire
        </a>
      </div>

      <Button
        type="primary"
        className="border-0 bg-gradient-to-bl from-[#6675F7] to-[#57007B] px-7 py-4"
        size="large"
      >
        Contact us
      </Button>
    </div>
  );
}

export default Navbar;
