import type { NextPage } from 'next';
import Header from '../components/Header';
import Cto from '../components/Cto';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About: NextPage = () => {
  return (
    <>
    <div>
      <Navbar />
      <Header 
        header="Intrested In Knowing Us!"
        paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
        imageUrl="/travel.jpg"
        linkTo="/"
        linkText="Learn More Today"
      />
      <Cto />
      <Mission />
      <Vision />
      <Footer />
    </div>
    </>
  )
}

export default About;