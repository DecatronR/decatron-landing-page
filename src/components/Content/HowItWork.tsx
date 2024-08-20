import React from "react";

export const HowItWork = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-poppins text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Navigate the Real Estate Process with Ease Using Our Platform.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                List Properties
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Agents list properties and pinpoint locations on the map.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                  {" "}
                  2{" "}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Schedule Inspections
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Buyers schedule inspections using our scheduler.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                  {" "}
                  3{" "}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Payment in Escrow
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Buyers pay for the inspection, and we hold the payment in
                escrow.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                  {" "}
                  4{" "}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Inspection Completion
              </h3>
              <p className="mt-4 text-base text-gray-600">
                The inspection is completed, and the payment is released to the
                agent or refunded to the buyer based on the inspection outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
