import { CardProps } from "antd";

function Card({ image, title, paragraph }: CardProps) {
  console.log(title, image, paragraph);
  return <div>{title}</div>;
}

export default Card;
