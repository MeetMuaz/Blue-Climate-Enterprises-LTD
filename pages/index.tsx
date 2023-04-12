import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import divs from "../components/divs";
import BlogBox from "../components/BlogBox";
import Footer from '../components/Footer';
import React, { useState } from "react";



const Home: NextPage = () => {

  const [ filter, setFilter ] = useState<string>("a");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }

  const filteredDivs = divs.filter((div) =>
    div.props.className.includes(filter)
  );

  const handleButtonClick = (filter : string) => {
    setFilter(filter)
  };
 
  return ( 
    <>
        <Navbar />

        {/* toggle section */}
        <hr />
            <div className="px-5 max-w-7xl mx-auto">
                <div className="flex justify-evenly w-full text-sm font-sans">
                    <button 
                      className="hover:text-blue-600 border-b-transparent border-b-2 hover:border-blue-600 py-5 outline-none"
                      onClick={() => handleButtonClick("a")}
                    >
                      Travel and Tour
                    </button>
                    <button 
                      className="hover:text-blue-600 border-b-transparent border-b-2 hover:border-blue-600 py-5 outline-none"
                      onClick={() => handleButtonClick("b")}
                    >
                      Real Estate
                    </button>
                </div>
            </div>
          <hr />

          {/* filter section */}
          <div className="filter-value">
            {filteredDivs.map((div) => div)}
          </div>

          {/* blog section */}
          <div className="pt-10 pb-16 px-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <BlogBox 
                  title="The feature of Real estate and Travel in Nigeria"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam..."
                  imageUrl="/travel.jpg"
                  time="2 h ago"
                  author="Cardi Mikel"
                  authorUrl="/travel.jpg"
                  linkTo="/"
                />
                <BlogBox 
                  title="Life is like a banana you can fly but car can not run"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam..."
                  imageUrl="/estate.jpg"
                  time="2 h ago"
                  author="Cardi Mikel"
                  authorUrl="/estate.jpg"
                  linkTo="/"
                />
                <BlogBox 
                  title="Why is Tesla Cybertruck designed the way it is"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam..."
                  imageUrl="/mission.jpg"
                  time="2 h ago"
                  author="Cardi Mikel"
                  authorUrl="/map.jpg"
                  linkTo="/"
                />
            </div>
          </div>

          <Footer />
    </>
  )
};

export default Home

       



            