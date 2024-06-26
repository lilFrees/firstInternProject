import { CaseStudyProps } from "../../interfaces/CaseStudyProps";
import LinkButton from "../UI/LinkButton";

function StudyCase(props: { case: CaseStudyProps }) {
  console.log(props.case);
  return (
    <div
      className={
        "flex h-max w-full basis-[50%] items-center overflow-hidden rounded-2xl border-[1px] " +
        "bg-" +
        props.case.color +
        "-100"
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
        <LinkButton endIcon="chevron" size="small">
          Read more
        </LinkButton>
      </div>
    </div>
  );
}

export default StudyCase;
