import React from "react";

export const About = () => {
    
  return (
    <section id="about" className="py-12 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row">
          {/* About Text */}
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold leading-snug text-gray-900 sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug font-poppins">
              Our Product
            </h2>
            <p className="mt-6 text-base text-gray-600 font-poppins">
                Decatron is a revolutionary real estate inspection management and payment system
                that transforms the way buyers, agents, and sellers interact. Our platform ensures
                seamless inspections, secure payments, and increased accountability, making your
                real estate experience more efficient and reliable.
            </p>
            <p className="mt-4 text-base text-gray-600 font-poppins">
                Unlike other platforms that only focus on property listings,
                we are interested in entire inspection process,
                ensuring that buyers are satisfied, and agents get paid for their services.
            </p>
          </div>

          {/* About Image */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              src="/images/mockup/about.jpg"
              alt="About Our Platform"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
