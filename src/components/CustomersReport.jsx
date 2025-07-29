import StarIcon from "./StarIcon";

function CustomersReport() {
  return (
    <section className="w-full bg-[#275738] text-white">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img
          className="w-16 h-16 pt-4"
          src="/quote-icon.svg"
          alt="/quotation"
        />
        <h1 className="text-white text-3xl mb-8 font-semibold">
          What our Customers Say
        </h1>
        <StarIcon className="pb-6" rating={5} />
        <p className="text-white text-sm lg:w-[365px] mx-auto mb-2">
          “Lorem ipsum dolor sit amet consectetur. Erat vehicula dignissim amet
          lacus eleifend mi nec amet. Ultrices senectus vitae laoreet neque.
          Elementum elit in.”
        </p>
        <p className="text-xl font-semibold ">Lailastly</p>
        <p className="text-sm mb-4 font-light">Real Estate</p>
        <img className="pb-20" src="/Tablist.png" alt="Image" />
      </div>
    </section>
  );
}

export default CustomersReport;
