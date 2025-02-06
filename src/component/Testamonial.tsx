import { testimonials } from "../constant"

const Testamonial = () => {
  return (
    <div className="mx-4 mt-10">
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl">
           What People are saying 
        </h1>
        <div className="grid grid-cols-12 gap-4 mt-10 mx-10 lg:mx-40">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-span-12 lg:col-span-4">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testamonial