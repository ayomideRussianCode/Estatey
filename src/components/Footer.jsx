import React from "react";

function Footer() {
  const footerLinks = ["Home", "About Us", "Career", "Blog", "Contact Us"];
  const socialLinks = ["INSTAGRAM", "FACEBOOK", "TWITTER"];

  return (
    <section className="flex flex-col lg:flex-row ">
      {/* LHS */}
      <div className=" bg-[#401408] lg:w-2/4">
        <div className="flex flex-col px-6 lg:px-28 py-10 text-white ">
          <h1 className="text-5xl lg:w-90 pb-4 font-semibold">
            We'd love to hear from you
          </h1>
          <p className="pb-10 lg:w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="pb-6"> GET IN TOUCH </p>
          <p className="lg:w-50 pb-8">
            2118 Thornridge Cir. Syracuse, Connecticut 35624{" "}
          </p>
          <p>(208) 555-0112</p>
          <div className="flex mt-4">
            <ul className="flex flex-col lg:flex-row gap-12">
              {socialLinks.map((socialLink, index) => (
                <li className="underline" key={index}>
                  {socialLink}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* LHS */}
      <div className="bg-white lg:w-3/4">
        <div className="flex flex-col px-6 lg:px-14 py-10 ">
          <h1 className="pb-6 font-bold text-2xl lg:text-4xl text-black">
            Contact Us
          </h1>
          <form className="">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                placeholder="First name"
                className="px-4 py-2 bg-[#f8f8f8] rounded-none"
                type="text"
              />
              <input
                placeholder="Last name"
                className="px-4 py-2 bg-[#f8f8f8] rounded-none"
                type="text"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 pt-4">
              <input
                placeholder="Email "
                className="px-4 py-2 bg-[#f8f8f8] rounded-none"
                type="text"
              />
              <input
                placeholder="Phone Number "
                className="px-4 py-2 bg-[#f8f8f8] rounded-none"
                type="text"
              />
            </div>
            <textarea
              className=" lg:w-md h-20 p-2 mt-4 bg-[#f8f8f8]"
              placeholder="Message"
              name=""
              id=""
            ></textarea>
          </form>
          <div className="flex  mt-4">
            <button className="bg-black px-8 py-2 rounded-none text-white">
              Submit
            </button>
          </div>
          <div className="flex mt-14">
            <ul className="flex flex-col lg:flex-row gap-8">
              {footerLinks.map((footerLink, index) => (
                <li key={index}>{footerLink}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
