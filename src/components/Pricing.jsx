import topBackground from "../assets/bg-top.svg";
import bottomBackground from "../assets/bg-bottom.svg";
import { useState } from "react";
import Package from "./Package";
import packages from "../data/packages";

const Pricing = () => {
  const [pricingType, setPricingType] = useState("annually");

  function togglePricingType() {
    setPricingType((prevPricingType) => {
      return prevPricingType === "annually" ? "monthly" : "annually";
    });
  }

  const dispalyPackages = packages.map((packageData, index) => (
    <Package key={index} pricingType={pricingType} {...packageData} />
  ));

  return (
    <section className="w-full min-h-screen bg-neutral-very-light-grayish-blue relative">
      <img
        src={topBackground}
        alt="Top Background"
        className="absolute top-0 right-0"
      />
      <img
        src={bottomBackground}
        alt="Top Background"
        className="absolute bottom-0 left-0"
      />

      <div className="container max-w-full">
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <div className="heading">
            <h1 className="text-center text-3xl font-bold text-neutral-grayish-blue">
              Our Pricing
            </h1>
          </div>
          <div className="switcher flex justify-center items-center gap-4 mt-7 mb-14">
            <button className="pricing-type">Annually</button>
            <button
              className="w-10 h-6 rounded-full bg-gradient-to-r from-primary-light-purple to-primary-dark-purple relative"
              onClick={togglePricingType}
            >
              <div
                className={`bg-white h-4 w-4 rounded-full absolute top-1/2 -translate-y-1/2 transition delay-100 ease-linear ${
                  pricingType === "annually" ? "left-1" : "right-1"
                }`}
              ></div>
            </button>
            <button className="pricing-type">Monthly</button>
          </div>
          <div className="packages-wrapper grid grid-cols-3 gap-3">
            {dispalyPackages}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
