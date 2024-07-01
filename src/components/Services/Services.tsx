import "swiper/css";
import icon1 from "../../assets/services/icon-1.svg";
import icon2 from "../../assets/services/icon-2.svg";
import icon3 from "../../assets/services/icon-3.svg";
import { CardProps } from "../../interfaces/CardProps";
import Card from "./Card";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Swiper from "swiper";

const services: CardProps[] = [
  {
    id: 1,
    title: "Web Design & Development",
    paragraph:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: icon1,
  },
  {
    id: 2,
    title: "Software Testing Service",
    paragraph:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: icon2,
  },
  {
    id: 3,
    title: "Mobile App Development",
    paragraph:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: icon3,
  },
  {
    id: 4,
    title: "Data Engineering",
    paragraph:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: icon1,
  },
  {
    id: 5,
    title: "Web Design & Development",
    paragraph:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: icon1,
  },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<null | Swiper>(null);

  function handleSwiper(swiper: Swiper) {
    setCurrentIndex(swiper.realIndex);
  }

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="z-50 border-y-[1px] border-slate-300 bg-slate-100">
      <div className="mx-auto flex max-w-[1145px] flex-col gap-8 py-12">
        <h2 className="text-center text-4xl font-bold">Services we offer</h2>
        <SwiperReact
          className="w-full overflow-visible"
          slidesPerView={3}
          spaceBetween={50}
          autoplay={{
            delay: 1000,
          }}
          onSwiper={(e) => {
            swiperRef.current = e;
          }}
          onSlideChange={handleSwiper}
          loop={true}
        >
          {services.map((card, index) => (
            <SwiperSlide key={card.id}>
              <Card
                card={card}
                isActive={
                  currentIndex === index - 1 ||
                  currentIndex === index + services.length - 1
                }
              />
            </SwiperSlide>
          ))}
        </SwiperReact>
        <div className="mt-5 flex items-center justify-center gap-2">
          {services.map((_card, i) => (
            <button
              key={i}
              className={
                "h-5 w-5 rounded-full border-2 transition-all duration-75 " +
                (currentIndex === i
                  ? " border-transparent bg-gradient-to-tr from-purple-900 to-pink-600"
                  : " border-gray-300")
              }
              onClick={() => {
                goToSlide(i);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
