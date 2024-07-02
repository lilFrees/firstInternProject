import { motion, useScroll, useTransform } from "framer-motion";

function Ball({
  className,
  divRef,
  animatePos,
}: {
  className?: string;
  divRef?;
  animatePos?: "top" | "bottom";
}) {
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset:
      animatePos === "bottom"
        ? ["start start", "end start"]
        : ["start end", "start start"],
  });

  const ballY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className={
        "gradient-ball transition-all duration-300 ease-linear" +
        " " +
        className
      }
      style={{
        y: ballY,
      }}
    ></motion.div>
  );
}

export default Ball;
