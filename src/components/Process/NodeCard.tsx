function NodeCard() {
  return (
    <div className="flex w-80 flex-col gap-3 rounded-lg border-[1px] border-slate-300 p-6">
      <div className="text-xl font-bold">
        <span className="bg-gradient-to-tr from-purple-900 to-pink-600 bg-clip-text text-transparent">
          #1
        </span>{" "}
        Assemble the right team
      </div>
      <p className="text-sm text-gray-600">
        We handle all aspects of vetting and choosing the right team that you
        don't have the time expertise or desire to do.
      </p>
    </div>
  );
}

export default NodeCard;