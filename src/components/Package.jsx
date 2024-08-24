const Package = ({ name, pricing, features, isRecommended, pricingType }) => {
  const dispalyFeatures = features.map((feature, index) => (
    <li
      key={index}
      className={`py-3 border-t font-semibold ${
        isRecommended
          ? "text-white border-neutral-very-light-grayish-blue/30"
          : "text-neutral-grayish-blue border-neutral-light-grayish-blue/25"
      }`}
    >
      {feature}
    </li>
  ));
  return (
    <article
      className={`package z-10 p-8 rounded-xl shadow-base text-center flex flex-col justify-center items-center gap-9 w-96 ${
        isRecommended
          ? "bg-gradient-to-br from-primary-light-purple to-primary-dark-purple py-14 z-20"
          : "bg-white"
      }`}
    >
      <h2
        className={`name text-lg font-bold ${
          isRecommended ? "text-white" : "text-neutral-grayish-blue"
        }`}
      >
        {name}
      </h2>
      <h3
        className={`pricing text-5xl font-bold flex justify-center items-center ${
          isRecommended ? "text-white" : "text-neutral-dark-grayish-blue"
        }`}
      >
        <span className="text-3xl mr-2">$</span>
        {pricingType === "annually" ? pricing.annually : pricing.monthly}
      </h3>
      <ul className="features w-full">{dispalyFeatures}</ul>
      <button
        className={`w-full p-4 rounded-lg font-semibold uppercase tracking-[2px] border-2 border-white transition delay-75 ease-linear ${
          isRecommended
            ? "bg-white text-primary-dark-purple hover:text-white hover:bg-primary-dark-purple"
            : "text-white bg-gradient-to-r from-primary-light-purple to-primary-dark-purple hover:text-primary-dark-purple hover:from-white hover:to-white hover:border-primary-dark-purple"
        }`}
      >
        Learn More
      </button>
    </article>
  );
};

export default Package;
