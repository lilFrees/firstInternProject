import { ReactNode } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

function LinkButton({
  children,
  endIcon,
}: {
  children: ReactNode;
  endIcon?: "arrow" | "chevron" | undefined;
}) {
  return (
    <div className="flex w-max cursor-pointer items-center gap-4 bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-[16px] font-bold text-transparent">
      <div>{children}</div>
      {endIcon === "arrow" && <FaArrowRight className="text-pink-700" />}{" "}
      {endIcon === "chevron" && <FaChevronRight className="text-pink-700" />}
    </div>
  );
}

export default LinkButton;
