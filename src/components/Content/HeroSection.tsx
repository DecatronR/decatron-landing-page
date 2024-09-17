export const HeroSection = () => {
  return (
    <section id="home" className="pt-12 pb-24 bg-gray-50 sm:pt-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="px-6 text-lg text-gray-600 font-poppins">
            Simplify Your Real Estate Inspections.
          </h1>
          <h2
            className="
              mt-5 text-4xl font-bold leading-snug 
              text-gray-900 sm:text-5xl sm:leading-snug 
              md:text-6xl md:leading-snug 
              lg:text-6xl lg:leading-snug font-poppins"
          >
            Connecting Real Estate{" "}
            <span className="bg-gradient-to-r from-primary via-primary-500 to-primary-600 inline-block text-transparent bg-clip-text">
              Buyers and Renters,
            </span>{" "}
            <br /> With Accountable Agents
          </h2>

          {/* <div className="mt-9 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
            <a
              href="#"
              title="Join Waiting List"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md sm:px-5 sm:py-2 sm:text-base"
              role="button"
            >
              Join Wait list
            </a>

            <a
              href="#"
              title="Learn More"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md sm:px-5 sm:py-2 sm:text-base"
              role="button"
            >
              <svg
                className="w-4 h-4 mr-1.5 sm:w-5 sm:h-5 sm:mr-2"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Learn more
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
