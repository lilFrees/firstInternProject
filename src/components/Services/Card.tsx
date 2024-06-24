import { CardProps } from "../../interfaces/CardProps";

function Card({ card }: { card: CardProps }) {
  console.log(card);
  return <div>{card.title}</div>;
}

export default Card;
