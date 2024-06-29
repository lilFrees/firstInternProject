import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import icon1 from "../../assets/icon-1.svg";
import icon2 from "../../assets/icon-2.svg";
import icon3 from "../../assets/icon-3.svg";
import { CardProps } from "../../interfaces/CardProps";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

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
  return (
    <div className="z-50 border-y-[1px] border-slate-300 bg-slate-200">
      <div className="mx-auto flex max-w-[1145px] flex-col gap-8 py-12">
        <h2 className="text-center text-4xl font-bold">Services we offer</h2>
        <Swiper
          className="w-full py-16"
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
        >
          {services.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Services;
