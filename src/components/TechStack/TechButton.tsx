import { MouseEventHandler } from "react";
import { TechProps } from "../../interfaces/TechProps";
import { motion } from "framer-motion";

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
    <div className="relative">
      <button className={className + " text-[16px]"} onClick={onClick}>
        {tech.tech}
      </button>
      {isActive && (
        <motion.div
          className="absolute bottom-[-12px] h-[2px] w-full bg-gradient-to-r from-purple-900 to-pink-600"
          layoutId="underline"
        ></motion.div>
      )}
    </div>
  );
}

export default TechButton;
