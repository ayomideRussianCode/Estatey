function Listings() {
  const listingDetails = [
    {
      label: "Luxury Loft By Victoria Park",
      image: "/Img-1.png",
      price: "$4,299",
      duration: "/month",
      address: "709 West Drive Chicago, IL 60606",
      bed: "/bed-icon.svg",
      bath: "/bath-icon.svg",
      sqm: "/square-meter-icon.svg",
    },
    {
      label: "Luxury Loft By Victoria Park",
      image: "/Img-2.svg",
      price: "$4,299",
      duration: "/month",
      address: "709 West Drive Chicago, IL 60606",
      bed: "/bed-icon.svg",
      bath: "/bath-icon.svg",
      sqm: "/square-meter-icon.svg",
    },
    {
      label: "Luxury Loft By Victoria Park",
      image: "/Img-4.png",
      price: "$4,299",
      duration: "/month",
      address: "709 West Drive Chicago, IL 60606",
      bed: "/bed-icon.svg",
      bath: "/bath-icon.svg",
      sqm: "/square-meter-icon.svg",
    },
    {
      label: "Luxury Loft By Victoria Park",
      image: "/Img-3.svg",
      price: "$4,299",
      duration: "/month",
      address: "709 West Drive Chicago, IL 60606",
      bed: "/bed-icon.svg",
      bath: "/bath-icon.svg",
      sqm: "/square-meter-icon.svg",
    },
    {
      label: "Luxury Loft By Victoria Park",
      image: "/Img-5.svg",
      price: "$4,299",
      duration: "/month",
      address: "709 West Drive Chicago, IL 60606",
      bed: "/bed-icon.svg",
      bath: "/bath-icon.svg",
      sqm: "/square-meter-icon.svg",
    },
  ];

  return (
    <section className="px-6 py-10">
      <div className="flex flex-wrap gap-6 justify-center">
        {/* FEATURED CARD */}
        <div className="w-full sm:w-[48%] lg:w-[30%] p-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-2">
            Featured Listings
          </h1>
          <p className="text-black">More</p>
        </div>

        {/* PROPERTY CARDS */}
        {listingDetails.slice(0, 5).map((listings, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[30%] border border-gray-300"
          >
            <img
              className="w-full h-40 object-cover"
              src={listings.image}
              alt="Image"
            />
            <div className="p-4">
              <p className="text-black font-semibold text-xl mb-2">
                {listings.price}
                <span className="text-gray-700 text-sm">
                  {listings.duration}
                </span>
              </p>
              <p className="font-semibold text-xl mb-4">{listings.label}</p>
              <p className="border-b border-gray-300 py-2">{listings.address}</p>
              <div className="flex gap-4 mt-4 items-center text-sm  text-gray-600">
                <p className="flex gap-2">
                  {" "}
                  <img className="w-6 h-6" src={listings.bed} alt="bed" /> <span> 4 Beds</span>
                </p>
                <p className="flex gap-2">
                  {" "}
                  <img className="w-6 h-6" src={listings.bath} alt="bath" /> <span> 4 Baths</span>
                </p>{" "}
                <p className="flex gap-2">
                  {" "}
                  <img className="w-6 h-6" src={listings.sqm} alt="sqm" /> <span> 6 x 8m²</span>
                </p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Listings;
