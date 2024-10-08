import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar: NextPage = () => {
  const [mobileToggle, setMobileToggle] = useState<boolean>(true);

  function handleMobileToggle() {
    setMobileToggle(!mobileToggle);
  }

  return (
    <>
    {/* desktop nav section */}
    <div className="px-4 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* website logo */}
        <Link href={"/"}>
          <Image 
          src={"/logo.svg"}
          alt="logo"
          />
        </Link>

          {/* website links */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-sans">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-semibold bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white shadow-sm"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>

          {/* open  */}
          <div className="open block md:hidden">
            <button onClick={handleMobileToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6 w-6 text-gray-600 fill-current"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    {/* mobile nav section */}
    <div className={`z-30 fixed h-full transform left-0 top-0 overflow-auto ease-in-out transition-all duration-150 bg-white ${ mobileToggle ? 'w-0': 'w-64' }`}>
      <div className="p-4">
        {/* close button */}
      <div className="close">
        <button 
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={handleMobileToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-6 text-gray-600 fill-current"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
      </div>

      {/* website logo */}
      <Link
        href="/" 
        className="flex w-full items-center p-4 border-b"
        onClick={handleMobileToggle}
      >
        <Image 
        src={"/logo.svg"}
        alt="logo"
        />
      </Link>

            {/* website link */}
            <ul className="divide-y font-sans">
              <li>
                <Link
                  href="/"
                  className="my-4 inline-block"
                  onClick={handleMobileToggle}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="my-4 inline-block"
                  onClick={handleMobileToggle}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="my-4 inline-block"
                  onClick={handleMobileToggle}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="my-4 inline-block"
                  onClick={handleMobileToggle}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="my-8 inline-block w-full text-center font-semibold bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white shadow-sm"
                  onClick={handleMobileToggle}
                >
                  Get started
                </Link>
              </li>
            </ul>

            {/* social link */}
            <div className="follow">
              <p className="italic font-sans text-sm">follow us:</p>

        <div className="social flex space-x-5 mt-4">
          <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5 text-gray-600 fill-current"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
          </Link>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 text-gray-600 fill-current"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
          </Link>
          <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 text-gray-600 fill-current"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </Link>
          <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 text-gray-600 fill-current"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </> 
  )
};

export default Navbar;
