import { features } from "../constant"


interface Featuretype{
    text:string,
    description:string,
    icon:any
}
const Featuresection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-12 mt-16 mx-10 lg:mx-48">
        {
            features.map((elem:Featuretype,index:number)=>(
                <div key={index} className="col-span-12 lg:col-span-4 flex">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {elem.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl">{elem.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500">
                      {elem.description}
                    </p>
                  </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Featuresection