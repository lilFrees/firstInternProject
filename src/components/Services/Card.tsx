import { CardProps } from "../../interfaces/CardProps";

function Card({ card }: { card: CardProps }) {
  return (
    <div className="shadow-black-5 flex flex-col gap-4 rounded-lg bg-slate-50 px-3 py-6 shadow-xl">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-pink-500 bg-slate-200">
        <img src={card.image} alt={`${card.title} icon`} />
      </div>
      <div className="text-lg font-semibold">{card.title}</div>
      <div className="text-sm text-slate-500">{card.paragraph}</div>
    </div>
  );
}

export default Card;
