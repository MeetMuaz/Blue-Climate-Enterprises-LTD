import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BlogBox from '../components/BlogBox';

const Blog: NextPage = () => {
  return (
    <>
    <Navbar />
    <Header
        header="Welcome To Our Blog!"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
        imageUrl="/travel.jpg"
        linkTo="/"
        linkText="Learn More Today"  
    />

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
  );
};

export default Blog;