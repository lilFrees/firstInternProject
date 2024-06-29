import Line from "../UI/Line";
import NodeCard from "./NodeCard";
import trophy from "../../assets/trophy.png";
import { NodeProps } from "../../interfaces/NodeProps";

const nodes: NodeProps[] = [
  {
    id: 1,
    name: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    name: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    name: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
  },
  {
    id: 4,
    name: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    name: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
  },
  {
    id: 6,
    name: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

function Process() {
  return (
    <div className="border-y-[1px] border-slate-300">
      <div className="mx-auto flex max-w-[1145px] flex-col gap-16 px-2 py-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <Line />
          <h2 className="text-4xl">
            <span>How development</span>
            <br />
            <span className="mt-4 block font-bold">through Alcaline works</span>
          </h2>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex translate-x-[-1rem] justify-around gap-1">
            {nodes.slice(0, 3).map((node) => (
              <NodeCard key={node.id} card={node} />
            ))}
          </div>
          <div className="relative">
            <div className="relative">
              <div className="h-[2px] w-full bg-red-600" />
              <div className="absolute right-0 top-[50%] h-10 w-10 translate-x-[100%] translate-y-[-50%] overflow-hidden">
                <img
                  src={trophy}
                  alt="Trophy"
                  className="block h-full w-full object-contain"
                />
              </div>
            </div>
            {/*  */}
            <div className="absolute bottom-full left-40 h-6 w-[2px] bg-red-600"></div>
            <div className="absolute left-52 top-full h-6 w-[2px] bg-red-600"></div>
            {/*  */}
            <div className="absolute bottom-full left-[45%] h-6 w-[2px] bg-red-600"></div>
            <div className="absolute left-[52%] top-full h-6 w-[2px] bg-red-600"></div>
            {/*  */}
            <div className="absolute bottom-full right-52 h-6 w-[2px] bg-red-600"></div>
            <div className="absolute right-40 top-full h-6 w-[2px] bg-red-600"></div>
          </div>
          <div className="flex translate-x-4 justify-around gap-1">
            {nodes.slice(3, 6).map((node) => (
              <NodeCard key={node.id} card={node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
