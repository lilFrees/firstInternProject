import { v4 as uuid } from "uuid";
import { useState } from "react";
import Line from "../UI/Line";
import { TechProps } from "../../interfaces/TechProps";
import TechButton from "./TechButton";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import tec1 from "../../assets/techStack/tech1.png";
import tec2 from "../../assets/techStack/tech2.png";
import tec3 from "../../assets/techStack/tech3.png";
import tec4 from "../../assets/techStack/tech4.png";
import tec5 from "../../assets/techStack/tech5.png";
import tec6 from "../../assets/techStack/tech6.png";
import tec7 from "../../assets/techStack/tech7.png";
import tec8 from "../../assets/techStack/tech8.png";
import tec9 from "../../assets/techStack/tech9.png";

const stack: TechProps[] = [
  {
    id: 1,
    tech: "Backend",
  },
  {
    id: 2,
    tech: "Frontend",
  },
  {
    id: 3,
    tech: "Databases",
  },
  {
    id: 4,
    tech: "CMS",
  },
  {
    id: 5,
    tech: "CloudTesting",
  },
  {
    id: 6,
    tech: "DevOps",
  },
];

const techImages = [
  {
    id: 1,
    images: [tec1, tec2, tec3, tec4, tec5, tec6, tec7, tec8, tec9],
  },
  {
    id: 2,
    images: [tec9, tec8, tec7, tec6, tec5, tec4, tec3, tec2, tec1],
  },
];

function TechStack() {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Line />
        <h2 className="text-4xl">
          <span>Our</span>
          <br />
          <span className="mt-4 block font-bold">Tech Stack</span>
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <AnimatePresence>
          <div className="flex items-center justify-center gap-8">
            {stack.map((btn, i) => (
              <div key={btn.id} className="flex flex-col items-center">
                <TechButton
                  tech={btn}
                  onClick={() => setSelected(btn.id)}
                  isActive={selected === i + 1}
                />
              </div>
            ))}
          </div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={uuid()}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-wrap justify-center gap-12">
              {techImages[selected - 1]?.images.map((img, i) => (
                <div
                  className="flex h-24 w-36 items-center justify-center gap-12"
                  key={i}
                >
                  <img
                    src={img}
                    alt="tech"
                    className="block h-[70%] w-[70%] object-contain"
                  />
                </div>
              ))}
              {!techImages[selected - 1] && <p>No images available</p>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TechStack;
