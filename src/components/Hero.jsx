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
      <div className="bg-[#401408] h-180 lg:w-1/2">
        <div>
          {" "}
          <h1 className="text-6xl lg:w-6/12 lg:mx-28 mx-10 my-8 font-semibold text-[#f6dee3] ">
            Creative Real Estate Agency
          </h1>
          <p className="text-md lg:w-2/4 lg:mx-28 mx-10 my-8 text-[#FFFFFF]">
            Estatey is an international estate company that offers services like
            property appraisal as well as the sale, purchase, and investment of
            real estate.
          </p>
          <div>
            <div className="flex justify-center items-center lg:flex-row gap-4">
              <div className="lg:w-1/2 lg:mx-28 mx-10 px-4 py-8 w-50 bg-white">
                {filters.map((item, index) => (
                  <div className="flex gap-4 m-4 ">
                    <div key={index} className="rounded-none flex items-center px-2 py-2 bg-[#ececec]">
                      <img src={item.img} alt={item.alt} />
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
              <div className= "w-50 lg:mx-28 mx-10 text-white font-normal lg:w-1/2">
                <h1 className="pt-4 mx-4">Our Services</h1>
                {services.map((service, index) => (
                  <div className="mx-4">
                    <div key={index}>
                      <img src={service.img} alt={service.alt} />
                    </div>
                    <p className="text-sm" key={index}>{service.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="lg:w-1/2">
      <img className="h-180 w-full " src="/hero-img.png" alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
