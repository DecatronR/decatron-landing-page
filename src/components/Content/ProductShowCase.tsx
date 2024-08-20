"use client"
export const ProductShowCase = () => {
  return (
    <section className="py-10 bg-primary sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5 animate-fadeInUp">
            <h2 className="font-poppins text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl mb-2">
              Join Our Waitlist
            </h2>
            <blockquote className="mt-1">
              <p className="text-lg leading-relaxed text-white animate-fadeIn">
                Be one of the first to experience the simplicity and efficiency
                of Decatron. Sign up now and get notified when we launch!
              </p>
            </blockquote>
          </div>

          <div className="animate-fadeInRight">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-10">
                <p className="mt-4 text-4xl font-bold text-black">
                  Why Choose Us
                </p>

                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Track and manage inspections with ease",
                    "Securely process payments and reduce no-shows",
                    "Increase accountability, transparency, and safety",
                    "Minimize disputes and miscommunications",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="inline-flex items-center space-x-2 animate-fadeIn"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
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
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-8 py-4 mt-10 font-semibold text-white bg-primary rounded-md transform transition-transform duration-300 hover:scale-105"
                  role="button"
                >
                  Join Waitlist
                </a>

                {/* <div className="flex items-center mt-5 animate-fadeIn">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500">
                    14 Days Moneyback Guarantee
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-in-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};
