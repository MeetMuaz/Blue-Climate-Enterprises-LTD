import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
    <Footer />
    </>
  );
};

export default Blog;