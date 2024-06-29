import { FeedbackProps } from "../../interfaces/FeedbackProps";
import star from "../../assets/testimonials/star.svg";

function TestimonialClient({
  client,
  isActive,
  onClick,
}: {
  client: FeedbackProps;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={
        "flex w-40 cursor-pointer flex-col items-center gap-2 transition-all duration-300 " +
        (!isActive && "scale-90 opacity-60")
      }
      onClick={onClick}
    >
      <div
        className={
          "h-[100px] w-[100px] overflow-hidden rounded-full transition-all duration-300 " +
          (isActive && "shadow-xl shadow-black/5")
        }
      >
        <img
          src={client.image}
          alt="Testimonial"
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="inline-block h-[20px] w-[20px] overflow-hidden"
          >
            <img
              src={star}
              alt="Star"
              className="block h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className={"text-lg " + (isActive && "font-bold text-purple-900")}>
        {client.name}
      </div>
      <div className="text-sm">{client.job}</div>
    </div>
  );
}

export default TestimonialClient;
