import Line from "../UI/Line";
import case1 from "../../assets/Case-study__image.png";
import case2 from "../../assets/Case-study__image-2.png";
import case3 from "../../assets/Case-study__image-3.png";
import { CaseStudyProps } from "../../interfaces/CaseStudyProps";
// import StudyCase from "./StudyCase";

const caseStudies: CaseStudyProps[] = [
  {
    id: 1,
    image: case1,
    title: "Website Design for SCFC Canada",
    paragraph:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    color: "blue",
  },
  {
    id: 2,
    image: case2,
    title: "Website Design for SCFC Canada",
    paragraph:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    color: "green",
  },
  {
    id: 3,
    image: case3,
    title: "Website Design for SCFC Canada",
    paragraph:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    color: "pink",
  },
];

function Studies() {
  console.log(caseStudies);
  return (
    <div className="border-y-[1px] border-slate-300 bg-slate-200">
      <div className="mx-auto max-w-[1145px] px-2 py-14">
        <div className="flex flex-col items-center gap-4">
          <Line />
          <h2 className="text-center text-4xl">
            <span>Our recent</span>
            <br />
            <span className="mt-4 block font-bold">Case studies</span>
          </h2>
        </div>
        {/* CARDS */}
      </div>
    </div>
  );
}

export default Studies;