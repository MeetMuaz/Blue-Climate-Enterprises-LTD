import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Toogle from "../components/Toogle";
import Header from "../components/Header";
import ServiceBox from "../components/ServiceBox";
import BlogBox from "../components/BlogBox";
import Cto from '../components/Cto';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return ( 
    <>
        <Navbar />
        <Toogle />
        


          <div className="">
            <Header 
              header="Explore Beatiful World!"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
              imageUrl="/travel.jpg"
              linkTo="/contact"
              linkText="Contact Us Today" 
            />
            <div className="py-10 px-5 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ServiceBox 
                  header="Hotel Reservation"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                />  
                <ServiceBox 
                  header="Flight Booking"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                /> 
                <ServiceBox 
                  header="Travelling Itinarary"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                /> 
                <ServiceBox 
                  header="Hotel Reservation"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                />  
                <ServiceBox 
                  header="Flight Booking"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                /> 
                <ServiceBox 
                  header="Travelling Itinarary"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                />     
              </div>
            </div>
          </div>



          <div className="">
            <Header 
              header="Explore Beatiful World!"
              paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
              imageUrl="/estate.jpg"
              linkTo="/contact"
              linkText="Contact Us Today" 
            />
            <div className="py-10 px-5 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ServiceBox 
                  header="Hotel Reservation"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                />  
                <ServiceBox 
                  header="Flight Booking"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                /> 
                <ServiceBox 
                  header="Travelling Itinarary"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                /> 
                <ServiceBox 
                  header="Hotel Reservation"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                />  
                <ServiceBox 
                  header="Flight Booking"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                /> 
                <ServiceBox 
                  header="Travelling Itinarary"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                />     
              </div>
            </div>
          </div>




          <Cto />
          <div className="pt-10 pb-16 px-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <BlogBox 
                  title="Why is Tesla Cybertruck designed the way it is"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam..."
                  imageUrl="/travel.jpg"
                  time="2 h ago"
                  author="Cardi Mikel"
                  authorUrl="/travel.jpg"
                  linkTo="/"
                />
                <BlogBox 
                  title="Why is Tesla Cybertruck designed the way it is"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam..."
                  imageUrl="/travel.jpg"
                  time="2 h ago"
                  author="Cardi Mikel"
                  authorUrl="/vision.jpg"
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
