import Image from "next/image";

export const Products = () => {
  return (
    <section id="products" className="py-12 bg-white sm:py-16 lg:py-20 font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            Our Products Aim to Address The Most Pressing Needs Through
            Innovation and Education
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 lg:mt-24 lg:gap-x-12">
          <div className="p-6 md:p-8 lg:p-10">
            <Image
              src="/images/logos/decRel.png"
              className="mx-auto"
              width={100}
              height={100}
              alt="Decatron Realtors"
            />
            <p className="mt-5 text-base text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus veniam animi nulla quaerat ad dolorum non inventore
              reprehenderit quam. Beatae non quasi enim minus accusantium, odio
              voluptas illo at excepturi!
            </p>
            <button className="mt-5 px-4 py-2 text-white bg-primary rounded hover:bg-[#ffb549]">
              Learn More
            </button>
          </div>

          <div className="p-6 md:p-8 lg:p-10 md:border-l md:border-gray-200">
            <Image
              src="/images/logos/dec360.png"
              width={100}
              height={100}
              className="mx-auto"
              alt="Decatron 360"
            />
            <p className="mt-5 text-base text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus veniam animi nulla quaerat ad dolorum non inventore
              reprehenderit quam. Beatae non quasi enim minus accusantium, odio
              voluptas illo at excepturi!
            </p>
            <button className="mt-5 px-4 py-2 text-white bg-primary rounded hover:bg-[#fb4747]">
              Learn More
            </button>
          </div>

          <div className="p-6 md:p-8 lg:p-10 md:border-l md:border-gray-200">
            <Image
              src="/images/logos/decSch.png"
              width={100}
              height={100}
              className="mx-auto"
              alt="Decatron School"
            />
            <p className="mt-5 text-base text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus veniam animi nulla quaerat ad dolorum non inventore
              reprehenderit quam. Beatae non quasi enim minus accusantium, odio
              voluptas illo at excepturi!
            </p>
            <button className="mt-5 px-4 py-2 text-white bg-primary rounded hover:bg-[#47fb9b]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
