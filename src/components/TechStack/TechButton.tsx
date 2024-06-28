import { MouseEventHandler } from "react";
import { TechProps } from "../../interfaces/TechProps";

function TechButton({
  tech,
  onClick,
  isActive,
}: {
  tech: TechProps;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}) {
  const className = isActive
    ? "bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent font-semibold"
    : "font-base";

  console.log(tech);
  return (
    <button className={className + " text-[16px]"} onClick={onClick}>
      {tech.tech}
    </button>
  );
}

export default TechButton;
