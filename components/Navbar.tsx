import type { NextPage } from "next";
import Link from 'next/link';

const Navbar: NextPage = () => {
  return ( 
    <>
        {/* Navbar section */}
        <nav className="py-4 px-5 max-w-7xl mx-auto">
        <div className="flex justify-between">
            <Link href="/" className="text-gray-600 text-2xl">Blueclimate</Link> 
            <div className="space-x-5 hidden md:block">
                <Link href="/" className="hover:text-blue-600 text-gray-500 text-sm tracking-wide">Home</Link>
                <Link href="/about" className="hover:text-blue-600 text-gray-500 text-sm tracking-wide">About</Link>
                <Link href="/contact" className="hover:text-blue-600 text-gray-500 text-sm tracking-wide">Contact</Link>
                <Link href="/blog" className="hover:text-blue-600 text-gray-500 text-sm tracking-wide">Blogs</Link>
            </div>
        </div>
        </nav>
        <hr />
    </>
  )
};

export default Navbar;