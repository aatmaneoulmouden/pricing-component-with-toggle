const Package = () => {
  return (
    <article className="package z-10 bg-white p-8 rounded-xl shadow-base text-center flex flex-col justify-center items-center gap-9">
      <h2 className="name text-lg font-bold text-neutral-grayish-blue">Basic</h2>
      <h3 className="pricing text-5xl font-bold text-neutral-dark-grayish-blue flex justify-center items-center"><span className="text-3xl mr-2">$</span>199.99</h3>
      <ul className="features w-full">
        <li>500 BG Storage</li>
        <li>2 Users Allowed</li>
        <li>Send up to 3 BG</li>
      </ul>
      <button className="w-full p-4 rounded-lg text-lg font-semibold uppercase tracking-[2px] text-white bg-gradient-to-r from-primary-light-purple to-primary-dark-purple">Learn More</button>
    </article>
  );
};

export default Package;
