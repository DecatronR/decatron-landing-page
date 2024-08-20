import React, { useState } from "react";
import Image from "next/image";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleJoinWaitlist = () => {
    window.open('https://discord.gg/gjZhR2MQ', '_blank', 'noopener,noreferrer');
  };

  const handleLinkClick = (event: { preventDefault: () => void; }, id: any) => {
    event.preventDefault();
    smoothScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-gray-200 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logos/dec.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="Decatron 360"
          />
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="flex items-center text-white text-sm rounded-lg px-5 py-2 bg-primary hover:bg-black transition-colors"
            onClick={handleJoinWaitlist}
          >
            <span className="hidden sm:inline-block mr-2">Join Waitlist</span>
            
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "home")}
                className="block py-2 px-3 md:p-0 text-black hover:text-primary dark:hover:text-primary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className="block py-2 px-3 md:p-0 text-black hover:text-primary dark:hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleLinkClick(e, "cta")}
                className="block py-2 px-3 md:p-0 text-black hover:text-primary dark:hover:text-primary"
              >
                Why choose us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="block py-2 px-3 md:p-0 text-black hover:text-primary dark:hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
