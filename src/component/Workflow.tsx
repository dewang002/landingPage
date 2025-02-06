import code from "../assets/code.jpg";
import { checklistItems } from "../constant";
import { CiCircleCheck } from "react-icons/ci";

const Workflow = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center sm:text-6xl lg:text-7xl">
        Accelearate your
        <span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h1>
      <div className="grid grid-cols-12 mt-10 mx-10 sm:mx-28 lg:mx-40">
        <div className="col-span-12 lg:col-span-6">
          <img src={code} alt="coding" />
        </div>
        <div className="col-span-12 lg:col-span-6 pt-10">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-2 sm:mx-5 lg:mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CiCircleCheck size={24} color="green" />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
