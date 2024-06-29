import { BlogProps } from "../../interfaces/BlogProps";
import LinkButton from "../UI/LinkButton";

function BlogCard({ card }: { card: BlogProps }) {
  return (
    <div className="mr-14 flex w-72 flex-col gap-4">
      <div className="h-44 w-full overflow-hidden rounded-3xl">
        <img
          src={card.image}
          alt="Blog"
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="text-base font-semibold">
        How to Build a Scalable Application up to 1 Million Users on AWS
      </div>
      <LinkButton size="small" endIcon="arrow" className="mt-5 self-end">
        Read More
      </LinkButton>
    </div>
  );
}

export default BlogCard;
