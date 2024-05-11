import React from 'react'
import Logo from '../../assets/Logo.svg'
import Create from '../../assets/Create.svg'
import Name from '../../assets/Name.svg'
import GradientText from '../GradientComponent/GradientText'
import './Styles.css';
import FAQ from '../FAQ/Faq'

function Footer() {
  return (
    <>
    <div className='Container flex ml-20 mt-14 mr-20'>

    {/* Left Part */}
    <div className="flex-1 flex flex-row justify-between items-end">

      
      <div className="flex items-end gap-5">
        {/* LOGO */}
        <div className="rounded-full bg-white p-1 relative">
          <div className="absolute inset-3 bg-blue-800 rounded-full shadow-lg blur-sm" style={{ transform: 'scale(1.5)', zIndex: '-1' }}></div>
          <img src={Logo} alt='Logo' className="rounded-full" style={{ width: '50px', height: '50px' }} />
        </div>
        {/* OTher Text */}
        <div>
          <p className="ml-2 font-semibold textColor">Published By</p>
          <img src={Name} alt='Name' />
        </div>

      </div>
    </div>



  
  {/* Right Part */}
  <div className="flex-1 flex flex-row justify-end items-center gap-3">
    <img src={Create} alt='Create' />
    <GradientText>
    <p className='text-2xl font-bold'>Create Flashcard</p>
    </GradientText>
  </div>


  </div>

 
</>
  )
}

export default Footer