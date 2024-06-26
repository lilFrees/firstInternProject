import Marquee from "react-fast-marquee";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";
import logo5 from "../../assets/logo-5.png";
import logo6 from "../../assets/logo-6.png";

const images = [
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
  {
    image: logo6,
  },
];

function CompanyList() {
  return (
    <div className="border-y-[1px] border-slate-300 bg-slate-200 py-14">
      <Marquee>
        <div className="mx-5 flex w-screen items-center justify-between">
          {images.map((el, i) => (
            <img src={el.image} key={i} alt="Logo" />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default CompanyList;
