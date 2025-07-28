function BrandsSection() {
  const brands = [
    { image: "/homey-logo.svg" },
    { image: "/luminous-logo.svg" },
    { image: "/umbrella-logo.svg" },
    { image: "/border-logo.svg" },
    { image: "/product-logo.svg" },
    { image: "/homey-logo.svg" },
  ];
  return (
    <div>
      <div className=" flex justify-center items-center mx-6 my-10 ">
        {brands.map((brand, index) => (
          <ul key={index} className="flex ">
            <img src={brand.image} alt="Brand Logo" />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default BrandsSection;
