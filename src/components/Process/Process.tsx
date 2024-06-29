import Line from "../UI/Line";
import NodeCard from "./NodeCard";

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
            <NodeCard />
            <NodeCard />
            <NodeCard />
          </div>
          <div className="relative">
            <div className="h-[2px] w-full bg-red-600" />
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
            <NodeCard />
            <NodeCard />
            <NodeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
