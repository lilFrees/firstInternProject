import { CardProps } from "../../interfaces/CardProps";
import icon1 from "../../assets/icon-1.svg";
import Card from "./Card";

const services: CardProps[] = [
  {
    id: 1,
    title: "Web Design & Development",
    paragraph:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: icon1,
  },
];

function Services() {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto flex max-w-[1145px] flex-col py-12">
        <h2 className="text-center text-4xl font-bold">Services we offer</h2>
        <div className="flex items-center gap-4">
          {services.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
