import { useState } from "react";
import Line from "../UI/Line";
import { TechProps } from "../../interfaces/TechProps";
import TechButton from "./TechButton";

const stack: TechProps[] = [
  {
    id: 1,
    tech: "Backend",
  },
  {
    id: 2,
    tech: "Frontend",
  },
  {
    id: 3,
    tech: "Databases",
  },
  {
    id: 4,
    tech: "CMS",
  },
  {
    id: 5,
    tech: "CloudTesting",
  },
  {
    id: 6,
    tech: "DevOps",
  },
];

function TechStack() {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Line />
        <h2 className="text-4xl">
          <span>Our</span>
          <br />
          <span className="mt-4 block font-bold">Tech Stack</span>
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-8">
          {stack.map((btn) => (
            <TechButton
              tech={btn}
              key={btn.id}
              onClick={() => {
                setSelected(btn.id);
              }}
              isActive={selected === btn.id}
            />
          ))}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default TechStack;
