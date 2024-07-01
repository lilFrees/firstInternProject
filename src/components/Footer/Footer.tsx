import logo from "../../assets/logo.svg";
import image from "../../assets/footer/google-page-speed 1.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mx-auto max-w-[1145px] py-14">
      <div className="grid grid-cols-[1fr_max-content_0.8fr_0.6fr] gap-16">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div className="h-4 w-4 overflow-hidden">
              <img
                src={logo}
                alt="Logo"
                className="block h-full w-full object-contain"
              />
            </div>
            <div className="font-logo text-base">Ik developers</div>
          </div>
          <p className="text-lg text-slate-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="h-14 w-52">
            <img
              src={image}
              alt="Page speed image"
              className="block h-full w-full object-contain text-left"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-lg font-bold text-slate-900">Links</div>
          <div className="flex flex-col gap-4 text-slate-600">
            <div>About us</div>
            <div>Services</div>
            <div>Case studies</div>
            <div>How it works</div>
            <div>Blog</div>
            <div>Careers</div>
            <div>Areas we serve</div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-lg font-bold text-slate-900">Contact us</div>
          <div className="flex flex-col gap-4 text-slate-600">
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div>+923183561921</div>
          </div>
        </div>
        <div className="mt-auto flex gap-4">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA] shadow-black/15 drop-shadow-xl transition-all duration-300 hover:bg-slate-200 hover:shadow-black/30">
            <FaFacebookF />
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA] shadow-black/15 drop-shadow-xl transition-all duration-300 hover:bg-slate-200 hover:shadow-black/30">
            <PiInstagramLogoThin />
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA] shadow-black/15 drop-shadow-xl transition-all duration-300 hover:bg-slate-200 hover:shadow-black/30">
            <FaTwitter />
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FAFAFA] shadow-black/15 drop-shadow-xl transition-all duration-300 hover:bg-slate-200 hover:shadow-black/30">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
