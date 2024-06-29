import Line from "../UI/Line";
import DesignCard from "./DesignCard";
import image1 from "../../assets/designApproach/design1.png";
import image2 from "../../assets/designApproach/design2.png";
import image3 from "../../assets/designApproach/design3.png";
import image4 from "../../assets/designApproach/design4.png";
import image5 from "../../assets/designApproach/design5.png";
import image6 from "../../assets/designApproach/design6.png";
import { DesignCardProps } from "../../interfaces/DesignCardProps";

const cards: DesignCardProps[] = [
  {
    id: 1,
    icon: image1,
    name: "UX Driven Engineering",
    from: " from-[#29272e] ",
    to: " to-[#27272e] ",
  },
  {
    id: 2,
    icon: image2,
    name: "Developing Shared Understanding",
    from: " from-[#68dbf2] ",
    to: " to-[#509cf5] ",
  },
  {
    id: 3,
    icon: image3,
    name: "Proven Experience and Expertise",
    from: " from-[#ff92ae] ",
    to: " to-[#ff3d9a] ",
  },
  {
    id: 4,
    icon: image4,
    name: "Security & Intellectual Property (IP)",
    from: " from-[#67e9f1] ",
    to: " to-[#24e795] ",
  },
  {
    id: 5,
    icon: image5,
    name: "Code Reviews",
    from: " from-[#ffef5e] ",
    to: " to-[#f7936f] ",
  },
  {
    id: 6,
    icon: image6,
    name: "Quality Assurance & Testing",
    from: " from-[#f76680] ",
    to: " to-[#57007b] ",
  },
];

function Design() {
  return (
    <div className="border-y-[1px] border-slate-300 bg-slate-100">
      <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-14">
        <div className="flex flex-col items-center gap-4">
          <Line />
          <h2 className="text-center text-4xl">
            <span>Our design and</span>
            <br />
            <span className="mt-4 block font-bold">development approach</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-6 gap-6 md:grid-cols-2 md:grid-rows-3">
          {cards.map((card) => (
            <DesignCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
