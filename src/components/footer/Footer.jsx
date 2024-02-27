import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { IoIosGlobe } from "react-icons/io";



import './footer.css'


const Footer = () => {
  return (
    <footer>
      <p><FaPhoneAlt className='icons' /> <span>Toll free 1800 200 1234</span></p>
      <p><FaFacebookF  className='icons' /> <a href='https://www.facebook.com' target={'_blank'}>www.facebook.com/cripumps</a></p>
      <p><IoIosGlobe className='globe icons'   />  <a href='https://www.crigroups.com' target={'_blank'} >www.crigroups.com</a></p>
    </footer>
  )
}

export default Footer