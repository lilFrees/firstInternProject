import thumbnail from "../../assets/video-thumbnail.png";
import Line from "../UI/Line";
import LinkButton from "../UI/LinkButton";

function Presentation() {
  return (
    <div className="relative mx-auto flex max-w-[1145px] gap-12 overflow-hidden px-4 py-28">
      <div className="gradient-ball left-3 top-0 translate-y-[-50%]"></div>
      <div className="flex w-full flex-col gap-10">
        <Line />
        <h2 className="text-4xl">
          <span>Leading companies trust us</span>
          <br />
          <span className="mt-2 block font-bold">to develop software</span>
        </h2>
        <p className="text-md text-slate-500">
          We{" "}
          <span className="bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent">
            add development
          </span>{" "}
          to tech teams. Our value isn't limited to building teams but is
          equally distributed the project lifecycle. We are a custom software
          development company that guarantees the successful delivery of your
          project.
        </p>
        <LinkButton endIcon="arrow" className="mt-8">
          See more information
        </LinkButton>
      </div>
      <div className="relative h-full w-full cursor-pointer">
        <img
          src={thumbnail}
          alt="About us"
          className="block h-full w-full object-cover blur-[2px]"
        />
        <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center">
          <div className="absolute z-30 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-purple-700">
            <div className="relative inline-block">
              <div className="ml-2 h-0 w-0 border-b-[15px] border-l-[25px] border-t-[15px] border-white border-b-transparent border-t-transparent"></div>
            </div>
          </div>
          <div className="h-16 w-16 animate-ping rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
