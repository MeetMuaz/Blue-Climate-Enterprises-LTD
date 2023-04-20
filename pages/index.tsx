import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import divs from "../components/divs";
import BlogBox from "../components/BlogBox";
import Footer from '../components/Footer';
import React, { useState } from "react";
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';

interface Props {
  posts: [Post];
}



const Home:NextPage<Props> = ({ posts }) => {
  let newPost : any = posts.slice(-3);

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
            {newPost.map((post : any) => (
                  <BlogBox 
                  key={post._id}
                  title={post.title}
                  paragraph={post.description}
                  imageUrl={urlFor(post.mainImage).url()!}
                  author={post.author.name}
                  authorUrl={urlFor(post.author.image).url()!}
                  linkTo={`/post/${post.slug.current}`}
                />
                ))}
            </div>
          </div>

          <Footer />
    </>
  )
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {
    _id,
    title,
    author -> {
      name,
      image,
    },
      description,
      mainImage,
      slug
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    }
  }
}






            