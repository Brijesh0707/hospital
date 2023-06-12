import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Banner from '../jsondata/data.json';
import data from '../jsondata2/data2.json';
import './Home.css'
import doctor from '../images/contact.jpg'
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Carousel
        style={{ height: "30%" }}
        pause={false}
        interval={2000}
        nextLabel={null}
        prevLabel={null}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        {Banner.map((bannerItem) => (
          <Carousel.Item key={bannerItem.id}>
            <img src={bannerItem.img} className="d-block w-100" alt={bannerItem.name} height="580" id="img001"/>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='container-fluid'>
        <div className='row justify-content-evenly'>
          <div className='col-md-10 text-center mt-5' id="">
            <h2 id="qoute">"The doctor of the future will give no medication but will interest his patients in the care of the human frame, diet, and in the cause and prevention of disease." -Thomas A. Edison</h2>
          </div>
        </div>
      </div>
      <section id="service">
  <div className='container-fluid mt-5'  id="service1" >
   <div className='row'>
    <div className='col-md-12'>
    <h2 className='text-center mt-5' id="text1">Service's</h2>
    </div>
   </div>
    <div className='row row-cols-lg-3 row-cols-2 justify-content-center text-center'>

      {data.map((item) => (
        <div className="card" key={item.id} id="cards">
          <img className="card-img-top" src={item.img} alt="Card image cap" id="img02" width="40" height="170" />
          <div className="card-body">
            <h5 className="card-title" id="title1">{item.title}<br/></h5>
            <br/>
            <br/>
          
          </div>
        </div>
      ))}
      <NavLink to="/service">
      <button type='button' className='text-center mt-5' id="view01">View More</button>
      </NavLink>
    </div>
  </div>
</section>
 <section id="contact">
   <div className='container-fluid mt-5'>
    <div className='row'>
       <div className='col-md-12 text-center'>
         <h2>Contact</h2>
       </div>
    </div>
      <div className='row justify-content-evenly mt-5'>
      <div className='col-md-5'>
        <img src={doctor} width="400" height="400"  id="doctor" />
      </div>
     <div className='col-md-5 text-center' id="appoint">
        <h2>Appointment</h2>
        <br/>
        <h4>Call 123-123-123</h4>
        <br/>
        <h5>Or</h5>
        <br/>
        <NavLink to="/contact">
        <button type='button' id="form">Appointment date</button>
        </NavLink>
     </div>
      </div>
     
   </div>
 </section>

    </>
  );
};

export default Home;
