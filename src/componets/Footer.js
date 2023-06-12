import React from 'react'
import './footer.css'
import Logo from '../images/logo.jpg'

const Footer = () => {
  return (
 <>
  <div className='footer'>
    <div className='container-fluid'>
       <div className='row text-center'>
         <div className='col-md-10'>
            <h5>Thank you for choosing <img src={Logo} width="100" height="30" className='mt-2'/> </h5>
         </div>
       </div>
    </div>
  </div>
 </>
  )
}

export default Footer