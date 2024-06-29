import Marquee from "react-fast-marquee";
import logo1 from "../../assets/trustedBy/logo-1.png";
import logo2 from "../../assets/trustedBy/logo-2.png";
import logo3 from "../../assets/trustedBy/logo-3.png";
import logo4 from "../../assets/trustedBy/logo-4.png";
import logo5 from "../../assets/trustedBy/logo-5.png";
import logo6 from "../../assets/trustedBy/logo-6.png";
import logo7 from "../../assets/trustedBy/logo-7.png";
import logo8 from "../../assets/trustedBy/logo-8.png";

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
  {
    image: logo7,
  },
  {
    image: logo8,
  },
];

function CompanyList() {
  return (
    <div className="border-y-[1px] border-slate-300 bg-slate-100 py-14">
      <Marquee play={true}>
        {images.map((el, i) => (
          <img src={el.image} key={i} alt="Logo" className="mr-24" />
        ))}
      </Marquee>
    </div>
  );
}

export default CompanyList;
