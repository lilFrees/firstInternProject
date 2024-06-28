import { Pagination } from "swiper/modules";
import Line from "../UI/Line";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a hic nisi labore necessitatibus dolorum, saepe molestiae debitis mollitia dignissimos ut ex earum deleniti iusto recusandae repellendus soluta, illum sunt voluptas enim? Delectus sit minus ratione alias quidem molestiae vero, sequi ut dolorem nisi sunt ipsa quis consequatur expedita laboriosam.",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a hic nisi labore necessitatibus dolorum, saepe molestiae debitis mollitia dignissimos ut ex earum deleniti iusto recusandae repellendus soluta, illum sunt voluptas enim? Delectus sit minus ratione alias quidem molestiae vero, sequi ut dolorem nisi sunt ipsa quis consequatur expedita laboriosam.",
  },
  {
    id: 3,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a hic nisi labore necessitatibus dolorum, saepe molestiae debitis mollitia dignissimos ut ex earum deleniti iusto recusandae repellendus soluta, illum sunt voluptas enim? Delectus sit minus ratione alias quidem molestiae vero, sequi ut dolorem nisi sunt ipsa quis consequatur expedita laboriosam.",
  },
];

function Testimonial() {
  return (
    <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Line />
        <h2 className="text-4xl">
          <span>Why customers love</span>
          <br />
          <span className="mt-4 block font-bold">working with us</span>
        </h2>
      </div>
      <div className="">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              console.log(index, className);
              return `<div className="h-9 w-9 bg-slate-700 rounded-full">
                <div>asd</div>
              </div>`;
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="mx-auto max-w-[70ch] py-14">
                <div className="text-center text-[18px] text-slate-700">
                  {el.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
