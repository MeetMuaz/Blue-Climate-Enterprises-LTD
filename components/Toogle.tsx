import type { NextPage } from "next";
import Link from 'next/link';

const Toogle: NextPage = () => {
  return ( 
    <>
        {/* Toogle section */}
        <div className="px-5 max-w-7xl mx-auto">
            <div className="flex justify-evenly w-full">
                <button className="text-gray-500 hover:text-blue-600 border-b-transparent border-b-2 hover:border-blue-600 py-4 text-sm">Travel and Tour</button>
                <button className="text-gray-500 hover:text-blue-600 border-b-transparent border-b-2 hover:border-blue-600 py-4 text-sm">Real Estate</button>
            </div>
        </div>
        <hr />
    </>
  )
};

export default Toogle;
