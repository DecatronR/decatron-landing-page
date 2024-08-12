import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const HowItWork = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-poppins text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How do we offer?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Ease, Speed and Safety of Real Estate Transactions.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white">1</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Property Owner
              </h3>
              <ul className="mt-4 text-left space-y-2 text-black">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Maximize your property&apos;s value with stress-free inspections</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Avoid inflated prices and unreliable agents with Decatron 360</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Ensure smooth, buyer-ready inspections for a hassle-free sale</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white">2</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Agent
              </h3>
              <ul className="mt-4 text-left space-y-2 text-black">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Streamline your business with targeted inspections and increased safety</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Boost your knowledge and skills in the real estate industry</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Earn inspection fees to supplement your income and stay ahead</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white">3</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Buyer
              </h3>
              <ul className="mt-4 text-left space-y-2 text-black">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Find your dream property with confidence and transparency</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Enjoy a smooth inspection process with Decatron 360</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Make informed decisions with accurate property information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
