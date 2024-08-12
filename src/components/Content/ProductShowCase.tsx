"use client"
import { useRef } from 'react';
import styles from "../styles/pricing.module.css"

export const ProductShowCase = () => {
  const scrollContainerRef = useRef(null);

  const handleMouseEnter = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-x-12 lg:gap-x-20">
          {/* Product Mockup Image */}
          <div 
            className={`flex-shrink-0 w-full md:w-1/2 lg:w-2/5 relative h-[500px] ${styles.scrollHover}`}
            onMouseEnter={handleMouseEnter}
          >
            <div className={`relative w-full h-full ${styles.scrollContainer}`} ref={scrollContainerRef}>
              <img
                src="/images/mockup/decatron360screenshot.png"
                alt="Decatron Realtors"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 lg:w-3/5 mt-7">
            <h6 className="font-poppins text-3xs font-bold leading-tight text-black sm:text-4xl lg:leading-tight lg:text-5xs ml-11">
              Explore</h6>
            <h2 className="font-poppins text-3xl font-bold leading-tight text-black sm:text-4xl lg:leading-tight lg:text-5xl ml-11">
              Decatron 360
            </h2>
            <div className="mt-0">
              <div className="overflow-hidden bg-white rounded-md">
                <div className="p-10">
                  <ul className="flex flex-col mt-0 space-y-4">
                    {[
                      "No more lengthy chains of agents between buyers and sellers",
                      "No more inflated prices and wasted time",
                      "No more misleading property advertisements",
                      "No more unqualified buyers and wasted agent time",
                      "No more outrageous agent fees without quality service"
                    ].map((text, index) => (
                      <li key={index} className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium text-gray-900">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-8 py-4 mt-10 font-semibold text-white bg-primary rounded-md"
                  >
                    Try It Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
