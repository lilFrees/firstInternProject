import Line from "../UI/Line";

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
    </div>
  );
}

export default Testimonial;
