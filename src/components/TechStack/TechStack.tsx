/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Line from "../UI/Line";
import { TechProps } from "../../interfaces/TechProps";
import TechButton from "./TechButton";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import tec1 from "../../assets/techStack/back/tech1.png";
import tec2 from "../../assets/techStack/back/tech2.png";
import tec3 from "../../assets/techStack/back/tech3.png";
import tec4 from "../../assets/techStack/back/tech4.png";
import tec5 from "../../assets/techStack/back/tech5.png";
import tec6 from "../../assets/techStack/back/tech6.png";
import tec7 from "../../assets/techStack/back/tech7.png";
import tec8 from "../../assets/techStack/back/tech8.png";
import tec9 from "../../assets/techStack/back/tech9.png";

import front1 from "../../assets/techStack/front/tech1.png";
import front2 from "../../assets/techStack/front/tech2.png";
import front3 from "../../assets/techStack/front/tech3.png";
import front4 from "../../assets/techStack/front/tech4.png";
import front5 from "../../assets/techStack/front/tech5.png";
import front6 from "../../assets/techStack/front/tech6.png";
import front7 from "../../assets/techStack/front/tech7.png";
import front8 from "../../assets/techStack/front/tech8.png";
import front9 from "../../assets/techStack/front/tech9.png";

import db1 from "../../assets/techStack/db/tech1.png";
import db2 from "../../assets/techStack/db/tech2.png";
import db3 from "../../assets/techStack/db/tech3.png";
import db4 from "../../assets/techStack/db/tech4.png";

import cms1 from "../../assets/techStack/cms/tech1.png";
import cms2 from "../../assets/techStack/cms/tech2.png";
import cms3 from "../../assets/techStack/cms/tech3.png";
import cms4 from "../../assets/techStack/cms/tech4.png";

import cloud1 from "../../assets/techStack/cloud/tech1.png";
import cloud2 from "../../assets/techStack/cloud/tech2.png";
import cloud3 from "../../assets/techStack/cloud/tech3.png";
import cloud4 from "../../assets/techStack/cloud/tech4.png";

import devops1 from "../../assets/techStack/devops/tech1.png";
import devops2 from "../../assets/techStack/devops/tech2.png";

const backend = [tec1, tec2, tec3, tec4, tec5, tec6, tec7, tec8, tec9];

const frontend = [
  front1,
  front2,
  front3,
  front4,
  front5,
  front6,
  front7,
  front8,
  front9,
];

const db = [db1, tec3, db2, db3, db4, tec9];

const cms = [cms1, cms2, cms3, cms4];

const cloud = [cloud1, cloud2, cloud3, cloud4];

const devops = [devops1, devops2];

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
    images: backend,
  },
  {
    id: 2,
    images: frontend,
  },
  {
    id: 3,
    images: db,
  },
  {
    id: 3,
    images: cms,
  },
  {
    id: 3,
    images: cloud,
  },
  {
    id: 3,
    images: devops,
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
