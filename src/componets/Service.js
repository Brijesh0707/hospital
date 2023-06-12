import React from 'react';
import data from '../jsondata2/data2.json';
import './Service.css'

const Service = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='mt-5 text-center' id="service-01">Service detail</h1>
        </div>
      </div>
      {data.map((item) => (
        <div className='row text-center mt-5' key={item.id} id="cards001">
          <div className='col-md-5'>
            <img src={item.img} width="150" height="150" alt={item.title} /><br/>
            <h5>{item.title}</h5>
          </div>
          <div className='col-md-5'>
            <h4>Description</h4> <br/>
            <p>{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
