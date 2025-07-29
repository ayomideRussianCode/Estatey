import React from "react";

function Hero() {
  const filters = [
    {
      img: "/location-icon.svg",
      alt: "location",
      label: "Location",
      value: "California, USA",
    },
    {
      img: "/dollar-icon.svg",
      alt: "currency",
      label: "Price",
      value: "$1500 -$2,500",
    },
    {
      img: "/property-icon.svg",
      alt: "property",
      label: "Type of Property",
      value: "Apartment",
    },
  ];

  const services = [
    {
      img: "/coins-icon.svg",
      alt: "icon",
      text: "The price we offer accordance with the quality we provide",
    },
    {
      img: "/gift-icon.svg",
      alt: "icon",
      text: "Official legality in the relevant government",
    },
  ];

  return (
    <div className="flex flex-col w-full lg:flex-row">
      {/* LHS */}
      <div className=" w-full bg-[#401408] text-white lg:w-1/2">
        <div className="px-6 lg:px-28 py-10">
          {" "}
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-[#f6dee3] ">
            Creative Real Estate Agency
          </h1>
          <p className=" lg:w-94 text-sm md:text-base mb-8 ">
            Estatey is an international estate company that offers services like
            property appraisal as well as the sale, purchase, and investment of
            real estate.
          </p>
          <div className="flex flex-col lg:flex-row gap-10 ">
            <div className=" bg-white p-6 rounded-none text-black flex-1">
              {filters.map((item, index) => (
                <div className="flex gap-4 m-4 ">
                  <div
                    key={index}
                    className="rounded-none flex items-center p-2 bg-[#ececec]"
                  >
                    <img className="w-6 h-6" src={item.img} alt={item.alt} />
                  </div>
                  <div className="text-xs">
                    <p key={index} className="text-[#686a79]">
                      {item.label}
                    </p>
                    <p key={index} className="font-bold">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
              <div>
                <button className="bg-black mt-4 py-2 px-8 mx-4 text-white">
                  Search
                </button>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="pt-4 text-lg mb-4 ">Our Services</h1>
              {services.map((service, index) => (
                <div className="mb-6">
                  <div key={index}>
                    <img
                      className="w-6 h-6 mb-2"
                      src={service.img}
                      alt={service.alt}
                    />
                  </div>
                  <p className="text-md md:text-sm" key={index}>
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RHS */}
      <div className="lg:w-1/2">
        <img className="h-180 w-full " src="/hero-img.png" alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
