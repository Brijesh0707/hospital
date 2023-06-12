
import { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    healthIssue: '',
    specialist: '',
    email: '',
    appointmentDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {


   
    if (
      formData.name &&
      formData.phoneNumber &&
      formData.healthIssue &&
      formData.specialist &&
      formData.email &&
      formData.appointmentDate
    ) {
      alert('Data submitted successfully!');
    }
  };
  return (
 <>
   <div className='container-fluid mt-5'>
     <div className='row'>
       <div className='col-md-12'>
         <h1 className='text-center mt-5'>Appointment Form</h1>
       </div>
     </div>
     <div className='row justify-content-evenly text-center mt-5'>
       <div className='col-md-10' id="for001">
       <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
           id="input001"
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
           id="input001"
            type="tel"
            className="form-control"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Health Issue</label>
          <input
           id="input001"
            type="text"
            className="form-control"
            name="healthIssue"
            value={formData.healthIssue}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialist</label>
          <select
            className="form-select"
            name="specialist"
            value={formData.specialist}
            onChange={handleChange}
            id="input001"
          >
            <option value="">Select Specialist</option>
            <option value="orthopedic">Orthopedic</option>
            <option value="neurologist">Neurologist</option>
            <option value="cardiologist">Cardiologist</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
           id="input001"
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Appointment Date</label>
          <input
           id="input001"
            type="date"
            className="form-control"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
       </div>
     </div>
   </div>
 </>
  )
}

export default Contact