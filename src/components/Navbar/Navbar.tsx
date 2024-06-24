import { Button } from "antd";

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between bg-white px-5 py-5 shadow-md">
      <div>Logo</div>
      <div className="flex items-center gap-8">
        <div className="text-md">About us</div>
        <div>Services</div>
        <div>Case Studies</div>
        <div>Blog</div>
        <div>How it Works</div>
        <div>Hire</div>
      </div>
      <Button type="primary">Contact us</Button>
    </div>
  );
}

export default Navbar;
