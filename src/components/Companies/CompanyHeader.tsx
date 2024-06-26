import Line from "../UI/Line";

function CompanyHeader() {
  return (
    <div className="mx-auto flex max-w-[1145px] flex-col gap-7 px-4 py-12">
      <Line />
      <h2 className="text-4xl">
        <span>Meet the People</span>
        <br />
        <span className="mt-2 block font-bold">We are Working With</span>
      </h2>
    </div>
  );
}

export default CompanyHeader;
