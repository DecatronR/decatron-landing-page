"use client"
export const CallToAction = () => {

  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/QwnYbGMYNkyd9iPQ9', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cta" className="py-10 bg-primary sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-center lg:py-5 animate-fadeIn">
            <h2 className="font-poppins text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-2 animate-fadeInUp">
              Join Our Waitlist
            </h2>
            <div className="mt-1 animate-fadeInUp">
              <blockquote>
                <p className="text-lg leading-relaxed text-white">
                  Be one of the first to experience the simplicity and efficiency of Decatron.
                  Sign up now and get notified when we launch!
                </p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-10">
                <p className="text-4xl font-bold text-black mb-4 animate-fadeInUp">
                  Why Choose Us
                </p>

                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Track and manage inspections with ease",
                    "Securely process payments and reduce no-shows",
                    "Increase accountability, transparency, and safety",
                    "Minimize disputes and miscommunications"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="inline-flex items-center space-x-2 animate-slideUp"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-primary"
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

                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-8 py-4 mt-10 font-semibold text-white bg-primary rounded-md transform transition-transform duration-300 hover:scale-105"
                  onClick={handleJoinWaitlist}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-in-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};
