import { CardProps } from "../../interfaces/CardProps";

function Card({ card, isActive }: { card: CardProps; isActive?: boolean }) {
  return (
    <div
      className={
        "rounded-lg p-[1px] transition-all duration-300 " +
        (!isActive
          ? " "
          : " translate-y-6 bg-gradient-to-r from-purple-500 to-pink-500")
      }
    >
      <div
        className={
          "shadow-black-5 flex h-full w-full flex-col gap-4 rounded-lg bg-slate-50 px-4 py-6 shadow-xl " +
          (isActive && "border-[1px] border-slate-300")
        }
      >
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-pink-500 bg-slate-200">
          <img src={card.image} alt={`${card.title} icon`} />
        </div>
        <div
          className={
            "w-max text-lg font-semibold " +
            (isActive &&
              "bg-gradient-to-tr from-purple-900 to-pink-600 bg-clip-text text-transparent")
          }
        >
          {card.title}
        </div>
        <div className="text-sm text-slate-500">{card.paragraph}</div>
      </div>
    </div>
  );
}

export default Card;
