import Line from "../UI/Line";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import image1 from "../../assets/testimonials/client-1.png";
import image2 from "../../assets/testimonials/client-2.png";
import image3 from "../../assets/testimonials/client-3.png";
import image4 from "../../assets/testimonials/client-4.png";
import image5 from "../../assets/testimonials/client-5.png";
import { FeedbackProps } from "../../interfaces/FeedbackProps";
import TestimonialClient from "./TestimonialClient";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Swiper from "swiper";
import vector from "../../assets/apos.svg";

const testimonials: FeedbackProps[] = [
  {
    id: 1,
    name: "Romeena De Silva",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    job: "Janet Cosmetics",
    image: image1,
  },
  {
    id: 2,
    name: "Romeena De Silva",
    text: "I can't speak highly enough of Alcaline Solutions. Their expertise in web design and digital marketing is unparalleled. They delivered results that exceeded our expectations, and their team's professionalism made the entire process smooth and enjoyable.",
    job: "Janet Cosmetics",
    image: image2,
  },
  {
    id: 3,
    name: "Imran Khan",
    text: "Alcaline Solutions has been a game-changer for our business. Their innovative approach to web design and strategic digital marketing has significantly boosted our online visibility. Their team is responsive, creative, and truly dedicated to client success.",
    job: "Software Engineer",
    image: image3,
  },
  {
    id: 4,
    name: "Romeena De Silva",
    text: "Working with Alcaline Solutions was an absolute pleasure. They took the time to understand our brand and delivered a website that perfectly represents our company.",
    job: "Janet Cosmetics",
    image: image4,
  },
  {
    id: 5,
    name: "Romeena De Silva",
    text: "If you're looking for a web design and digital marketing agency that goes above and beyond, look no further than Alcaline Solutions. Their attention to detail, creative solutions, and commitment to client satisfaction are outstanding.",
    job: "Janet Cosmetics",
    image: image5,
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<Swiper | null>(null);

  function handleSwiper(swiper: Swiper) {
    setCurrentIndex(swiper.realIndex);
  }

  function handleNextSlide() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  function handlePrevSlide() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <Line />
        <h2 className="text-4xl">
          <span>Why customers love</span>
          <br />
          <span className="mt-4 block font-bold">working with us</span>
        </h2>
      </div>
      <div className="relative">
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-[50%] z-50 -translate-x-10 translate-y-[-100%] cursor-pointer rounded-full border-2 border-purple-900 bg-transparent p-4 text-purple-900 shadow-md shadow-transparent transition-all duration-300 hover:bg-purple-900 hover:text-white hover:shadow-purple-950/50"
        >
          <FaArrowLeft className="" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-[50%] z-50 translate-x-10 translate-y-[-100%] cursor-pointer rounded-full border-2 border-purple-900 bg-transparent p-4 text-purple-900 shadow-md shadow-transparent transition-all duration-300 hover:bg-purple-900 hover:text-white hover:shadow-purple-950/50"
        >
          <FaArrowRight className="" />
        </button>
        <SwiperReact
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-swiper"
          onSlideChange={handleSwiper}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
        >
          {testimonials.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="relative mx-auto w-[55ch] py-14">
                <div className="absolute -left-20 top-0 h-6 w-6">
                  <img
                    src={vector}
                    className="block h-full w-full object-contain"
                    alt="Apostrophe"
                  />
                </div>
                <div className="absolute -right-20 bottom-0 h-6 w-6">
                  <img
                    src={vector}
                    className="block h-full w-full scale-x-[-1] object-contain"
                    alt="Apostrophe"
                  />
                </div>
                <div className="text-center text-lg leading-8 text-slate-500">
                  {el.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperReact>
        <div className="flex items-center justify-center gap-20">
          {testimonials.map((el, i) => (
            <TestimonialClient
              key={el.id}
              client={el}
              isActive={currentIndex === i}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
