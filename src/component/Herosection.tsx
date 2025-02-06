import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
  return (
    <div className=" text-white flex flex-col items-center gap-8 py-8">
      <h1 className="text-4xl max-w-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="max-w-4xl text-center text-zinc-400">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex gap-4">
        <a
          href=""
          className="py-3 px-4 bg-gradient-to-r from-orange-500 to-red-800 rounded-lg"
        >
          Start for free
        </a>
        <a href="" className="py-3 px-4 bg-gradient-to-r border rounded-lg">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 mx-10 md:mx-0 md:w-1/2 flex-col lg:flex-row justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg md:w-1/2 border-orange-700 shadow-sm shadow-orange-400 border mx-2 my-4"
        >
          <source src={video1} />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg md:w-1/2 border-orange-700 shadow-sm shadow-orange-400 border mx-2 my-4"
        >
          <source src={video2} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Herosection;
