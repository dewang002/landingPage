import { CiCircleCheck } from "react-icons/ci";
import { pricingOptions } from "../constant";

const Pricing = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 sm:text-6xl lg:text-7xl">
        Pricing
      </h1>
      <div className="grid grid-cols-12 mt-10 mx-10 lg:mx-40 gap-4">
        {pricingOptions.map((elem, index) => (
          <div key={index} className="col-span-12 lg:col-span-4 p-4 sm:p-6 lg:p-10 flex flex-col gap-6 rounded-xl border border-zinc-400">
            <h1 className="text-3xl mb-10 ">{elem.title}</h1>
            <h1 className="text-3xl">
              {elem.price} <span className="text-sm text-zinc-500">/Month</span>
            </h1>
            <ul>
            {elem.features.map((elem,index)=>{
              return <li key={index} className="flex py-2 items-center gap-2">
                <CiCircleCheck /> {elem}
              </li>
            })}
            </ul>
            <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
