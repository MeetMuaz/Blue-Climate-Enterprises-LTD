import Header from "./Header";
import ServiceBox from "./ServiceBox";
import Section from "./Section";

const divs = [
    <div className="a" key={1}>
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
                  color="bg-violet-400"
                />  
                <ServiceBox 
                  header="Flight Booking"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                  color="bg-rose-400"
                /> 
                <ServiceBox 
                  header="Travelling Itinarary"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                  color="bg-yellow-400"
                />    
              </div>
              <Section 
                imageUrl="/travel.jpg"
                title="Blueclimate Travel and Tour"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci iste fugit quasi vel qui, provident eius deleniti enim magni unde minima, eos repellat consectetur aperiam suscipit incidunt, culpa illo?"
              />
            </div>
    </div>,
    <div className="b" key={2}>
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
                  color="bg-violet-400"
                />  
                <ServiceBox 
                  header="Flight Booking"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                  color="bg-rose-400"
                /> 
                <ServiceBox 
                  header="Travelling Itinarary"
                  paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, non? bala bu bula ba"
                  color="bg-yellow-400"
                />     
            </div>
            <Section 
              imageUrl="/estate.jpg"
              title="Blueclimate Real Estate"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci iste fugit quasi vel qui, provident eius deleniti enim magni unde minima, eos repellat consectetur aperiam suscipit incidunt, culpa illo?"
            />
            </div>
    </div>
  ];

  export default divs;