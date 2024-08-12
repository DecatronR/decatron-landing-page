import Image from "next/image";

export const Features = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className=" font-poppins text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
           Our Products
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Our Products Aims to Address The Most Pressing Needs Through Innovation and Education
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <Image 
              src="/images/logos/decRel.png" 
              className="mx-auto"
              width={100} 
              height={100}
              alt="Decatron Realtors"
             />
            <p className="mt-5 text-base text-gray-600 font-pj">
              Should you want to sell a property, or have your property listed on our website
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <Image
              src="/images/logos/dec360.png" 
              width={100}
              height={100}
              className="mx-auto" 
              alt="Decatron 360"
            />
            <p className="mt-5 text-base text-gray-600 font-pj">
              Streamline the recruitment process with a comprehensive ATS that
              allows you to manage applicants, track their progress, and
              collaborate with your hiring team seamlessly.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
          <Image
              src="/images/logos/decSch.png" 
              width={100}
              height={100}
              className="mx-auto" 
              alt="Decatron School"
             />
            <p className="mt-5 text-base text-gray-600 font-pj">
              Create and administer customized assessments to evaluate
              candidates skills, competencies, and fit for the role, ensuring
              you make informed hiring decisions.
            </p>
          </div>

          {/* <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <svg
              width={40}
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-opacity=".9"
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                ></path>
              </g>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Automated Interview Scheduling
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Simplify the scheduling process and eliminate back-and-forth
              emails with automated interview scheduling tools that sync with
              your calendar and the candidate&apos;s availability.
            </p>
          </div> */}

          {/* <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg
              viewBox="0 -1 22 22"
              version="1.1"
              width={40}
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>
                  communication / 23 - communication, call, mobile, phone, ring
                  icon
                </title>{" "}
                <g
                  id="Free-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <g
                    transform="translate(-1190.000000, -230.000000)"
                    id="Group"
                    stroke="#000000"
                    stroke-width="2"
                  >
                    {" "}
                    <g
                      transform="translate(1189.000000, 228.000000)"
                      id="Shape"
                    >
                      {" "}
                      <line x1="12" y1="3" x2="12" y2="7">
                        {" "}
                      </line>{" "}
                      <line x1="19" y1="5" x2="17" y2="8">
                        {" "}
                      </line>{" "}
                      <line x1="5" y1="5" x2="7" y2="8">
                        {" "}
                      </line>{" "}
                      <path d="M21.4920529,17.1618068 C21.5718939,17.2959486 21.5617353,17.4758055 21.467266,17.6006549 L19.1840809,20.6180579 C18.9620722,20.9114615 18.5799423,20.9606463 18.3135712,20.7301031 L15.4711571,18.6699963 L15.4711571,16.4543063 C15.4741957,16.0551169 15.4741957,15.5882374 14.9878676,15.5847853 L9.03712496,15.5847853 C8.53188162,15.5882374 8.53188162,16.0551169 8.52884294,16.4543063 L8.52884294,18.6699963 L6.00179857,20.8169446 C5.74591506,21.0718322 5.36281157,21.0588541 5.12874587,20.7873688 L2.54330108,17.7885941 C2.43790373,17.6663471 2.42461497,17.4749819 2.51157517,17.3317429 C4.68124462,13.7579931 6.94269236,11.0415144 12.0427216,11.0003405 C17.1427508,10.9591667 19.3834154,13.6190638 21.4920529,17.1618068 Z">
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Centralized Communication Hub
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Facilitate efficient communication between recruiters, hiring
              managers, and candidates with a centralized communication hub,
              ensuring everyone stays informed and engaged throughout the
              recruitment process.
            </p>
          </div> */}

          {/* <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg
              width={40}
              className="mx-auto"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke="none"
                  stroke-width="1"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M746.667 106.667V1493.33H1173.33V106.667H746.667ZM1056 224H864V1376H1056V224ZM106.667 533.333H533.333V1493.33H106.667V533.333ZM224 650.667H416V1376H224V650.667Z"
                  ></path>{" "}
                  <path d="M1920 1706.67H0V1824H1920V1706.67Z"></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1386.67 746.667H1813.33V1493.33H1386.67V746.667ZM1504 864H1696V1376H1504V864Z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Comprehensive Analytics and Reporting
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Gain valuable insights into your recruitment efforts with
              comprehensive analytics and reporting tools, allowing you to track
              key metrics, identify trends, and optimize your hiring strategy
              for better results.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
