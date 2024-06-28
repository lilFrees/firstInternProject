import Line from "../UI/Line";

function Process() {
  return (
    <div className="border-y-[1px] border-slate-300">
      <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-14">
        <div className="flex flex-col items-center gap-4 text-center">
          <Line />
          <h2 className="text-4xl">
            <span>How development</span>
            <br />
            <span className="mt-4 block font-bold">through Alcaline works</span>
          </h2>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Process;
