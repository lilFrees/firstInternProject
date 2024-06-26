import { CaseStudyProps } from "../../interfaces/CaseStudyProps";
import LinkButton from "../UI/LinkButton";

function StudyCase(props: { case: CaseStudyProps }) {
  let colorClass = "";

  switch (props.case.color) {
    case "blue":
      colorClass = "bg-[#F1F2FF]";
      break;
    case "pink":
      colorClass = "bg-[#FFF4F4]";
      break;
    case "lime":
      colorClass = "bg-[#F0FFF7]";
      break;
  }

  return (
    <div
      className={
        "flex h-max w-full basis-[50%] items-center overflow-hidden rounded-2xl border-[1px] border-slate-300 " +
        colorClass
      }
    >
      <div className="h-full w-full flex-1">
        <img
          src={props.case.image}
          alt="Design"
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-8 border-slate-100 px-14 py-16 text-slate-700">
        <h3 className="text-3xl font-semibold">{props.case.title}</h3>
        <p className="text-sm">{props.case.paragraph}</p>
        <LinkButton endIcon="chevron" size="small" className="self-end">
          Read more
        </LinkButton>
      </div>
    </div>
  );
}

export default StudyCase;
