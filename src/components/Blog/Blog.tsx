import Marquee from "react-fast-marquee";
import Line from "../UI/Line";
import image1 from "../../assets/blog/blog1.png";
import image2 from "../../assets/blog/blog2.png";
import image3 from "../../assets/blog/blog3.png";
import image4 from "../../assets/blog/blog4.png";
import image5 from "../../assets/blog/blog5.png";
import { BlogProps } from "../../interfaces/BlogProps";
import BlogCard from "./BlogCard";

const posts: BlogProps[] = [
  {
    id: 1,
    image: image1,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    id: 2,
    image: image2,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    id: 3,
    image: image3,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    id: 4,
    image: image4,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    id: 5,
    image: image5,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
];

function Blog() {
  return (
    <div className="flex flex-col gap-16 px-2 py-14">
      <div className="mx-auto max-w-[1145px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <Line />
          <h2 className="text-4xl">
            <span>Featured</span>
            <br />
            <span className="mt-4 block font-bold">Resources</span>
          </h2>
        </div>
      </div>
      <Marquee pauseOnHover>
        {posts.map((post) => (
          <BlogCard key={post.id} card={post} />
        ))}
      </Marquee>
    </div>
  );
}

export default Blog;
