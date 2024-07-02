import { motion } from "framer-motion";

function Ball({ className }: { className?: string }) {
  return (
    <motion.div
      className={
        "gradient-ball transition-all duration-300 ease-linear" +
        " " +
        className
      }
      whileInView={{
        translateY: "20px",
      }}
    ></motion.div>
  );
}

export default Ball;
