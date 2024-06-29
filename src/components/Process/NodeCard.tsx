import { NodeProps } from "../../interfaces/NodeProps";

function NodeCard({ card }: { card: NodeProps }) {
  return (
    <div className="flex w-80 flex-col gap-3 rounded-lg border-[1px] border-slate-300 p-6">
      <div className="text-xl font-bold">
        <span className="bg-gradient-to-tr from-purple-900 to-pink-600 bg-clip-text text-transparent">
          #{card.id}
        </span>{" "}
        {card.name}
      </div>
      <p className="text-sm text-gray-600">{card.description}</p>
    </div>
  );
}

export default NodeCard;
