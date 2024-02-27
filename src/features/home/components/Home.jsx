import React from 'react'
import trophy from '../../../assets/1.png'
import photo from '../../../assets/2.png'
import products from '../../../assets/3.png'
import '../styles/home.css'
const Home = () => {
  return (
    <>
  
    <div className='container'>
     <div className='img-container'>
      <img className='trophy' src={trophy} alt="trophy" />
      </div>
     <div className='img-container-1'>
      <h4>C.R.I pumps wins the National Energy Conservation Award 2018 for the fourth time.</h4>
      <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy </li>
      <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with lot enabled control panel.</li>
      <img src={photo} alt="photograph"  className='photograph'/>
      <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan. Speaker of Lok Sabha & Shri. Raj Kumar Singh. Honorable Minister of State</p>
     </div>

    </div>

    <div className='bottom-container'>


      <p className='heading' >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</p>
      <img src={products} alt="products" className='products' />
    
      <p className='footer-text' >Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      
    </div>
 
    <div className='services'>
    <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
    
      <div className='items'>
      <li>CHEMICALS & PROCESS</li>
      <li>POWER</li>
      <li>WATER & WASTE WATER</li>
      <li>OILS & GAS</li>
      <li>PHARMA</li>
      <li>SUGARS & DISTILLERIES</li>
      <li>PAPER & PULP</li>
      <li>MARINE & DEFENCE </li>
      <li>METAL & MINING</li>
     </div>
     <div  className='items'>
      <li>FOOD & BEVERAGE</li>
      <li>PETROCHEMICAL & REFINERIES</li>
      <li>SOLAR</li>
      <li>BUILDING</li>
      <li>HVAC </li>
      <li>FIRE FIGHTING</li>
      <li>AGRICULTURE & RESIDENTIAL</li>
     </div>
      </div>
   
    </>
  )
}

export default Home


