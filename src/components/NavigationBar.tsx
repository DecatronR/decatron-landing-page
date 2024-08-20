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

  const handleJoinCommunity = () => {
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
            onClick={handleJoinCommunity}
          >
            <span className="hidden sm:inline-block mr-2">Join Community</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:inline-block"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.29c-.297-.149-1.757-.868-2.03-.967-.273-.1-.472-.148-.67.149-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.787-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.151-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.148-.67-1.612-.916-2.207-.242-.583-.49-.504-.67-.513l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.48 1.064 2.874 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.572-.085 1.757-.718 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.424 6.706c-1.15 0-2.292-.29-3.296-.835l-.241-.141-3.897 1.011 1.043-3.796-.156-.242c-.868-1.337-1.326-2.89-1.326-4.499 0-4.533 3.688-8.222 8.223-8.222 2.198 0 4.265.857 5.817 2.408 1.552 1.552 2.408 3.62 2.408 5.817 0 4.533-3.688 8.22-8.222 8.22m6.84-15.061a10.911 10.911 0 0 0-7.708-3.193c-6.026 0-10.934 4.907-10.934 10.933 0 1.937.51 3.83 1.478 5.501l-1.561 5.69a.76.76 0 0 0 .927.927l5.687-1.54c1.665.89 3.527 1.36 5.404 1.36h.004c6.026 0 10.932-4.907 10.932-10.932 0-2.91-1.132-5.645-3.193-7.708"></path>
            </svg>
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
                onClick={(e) => handleLinkClick(e, "products")}
                className="block py-2 px-3 md:p-0 text-black hover:text-primary dark:hover:text-primary"
              >
                Products
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
