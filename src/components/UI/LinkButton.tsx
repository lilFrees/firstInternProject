import { ReactNode } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

function LinkButton({
  children,
  endIcon,
  size,
}: {
  children: ReactNode;
  endIcon?: "arrow" | "chevron" | undefined;
  size?: "small" | "medium" | undefined;
}) {
  const fontSize = size === "small" ? 14 : 20;

  return (
    <div className="flex w-max cursor-pointer items-center gap-4 self-end bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text font-bold text-transparent">
      <div className={"text-[" + fontSize + "px]"}>{children}</div>
      {endIcon === "arrow" && <FaArrowRight className="text-pink-700" />}{" "}
      {endIcon === "chevron" && <FaChevronRight className="text-pink-700" />}
    </div>
  );
}

export default LinkButton;
