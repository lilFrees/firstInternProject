function Line(props: { className?: string }) {
  return (
    <div
      className={
        "h-[5px] w-[70px] bg-gradient-to-r from-pink-900 to-pink-500 " +
        props?.className
      }
    ></div>
  );
}

export default Line;
