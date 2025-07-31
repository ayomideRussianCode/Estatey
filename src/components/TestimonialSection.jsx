function TestimonialSection() {
  const reports = [
    {
      number: "9",
      text: "Years experience in real estate",
    },
    {
      number: "$23K",
      text: "Total Net Profit Every Month",
    },
    {
      number: "17",
      text: "Every month a new happy customer",
    },
    {
      number: "$4K -7K",
      text: "Approximate Profit In 20 Business Days",
    },
  ];
  return (
    <section className="flex flex-col lg:flex-row m-8 gap-6 lg:mx-28 lg:my-40">
      {/* LHS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-1/2">
        {reports.map((report, index) => (
          <div key={index} className="flex flex-col bg-white">
            <h1 className="text-[#401408] text-4xl mb-2 font-semibold">
              {report.number}
            </h1>
            <p className="text-md text-gray-700 leading-tight w-40">
              {report.text}
            </p>
          </div>
        ))}
      </div>

      {/* RHS */}
      <div className="flex flex-col lg:w-1/2 bg-white  ">
        <h1 className="lg:w-100 text-[#401408] font-bold text-2xl lg:text-4xl mb-4">
          We use Real Estate to show our appreciation of the world.
        </h1>
        <p className="text-md lg:w-100 leading-tight text-gray-700">
          We provide equity and debt capital globally to back projects that make
          an impact.
        </p>
        <button className="flex justify-center text-sm bg-black rounded-none text-white p-3 w-30 mt-6">
          Know More
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;
