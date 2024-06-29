import { DesignCardProps } from "../../interfaces/DesignCardProps";

function DesignCard({ card }: { card: DesignCardProps }) {
  return (
    <div className="flex h-full w-full gap-6 border-[1px] border-slate-300 bg-white p-8">
      <div
        className={
          "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-bl p-2" +
          card.from +
          card.to
        }
      >
        <img
          src={card.icon}
          alt="Card Icon"
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">{card.name}</div>
        <div className="text-sm text-gray-600">
          Unlike other companies, we are a{" "}
          <span
            className={
              "bg-gradient-to-r bg-clip-text text-transparent" +
              card.from +
              card.to
            }
          >
            UX first
          </span>{" "}
          development company. Projects are driven by designers and they make
          sure design and experiences translate to code.
        </div>
      </div>
    </div>
  );
}

export default DesignCard;
