import React from 'react'
import GradientText from '../GradientComponent/GradientText'
import Card from './Card/Card'
import LeftArrow from '../../assets/LeftArrow.svg'
import RightArrow from '../../assets/RightArrow.svg'
import Refresh from '../../assets/Refresh.svg'
import Maximize from '../../assets/Maximize.svg'
import './Styles.css'

function Hero() {
  return (
    <>
    {/* Heading... */}
      <div className='ml-20 mt-14'>
        <GradientText>Relations and Functions (Mathematics)</GradientText>
      </div>
      {/* Card... */}
      <div>
        {/* Subheading Div */}
        <div className="flex mt-8 text-xl ml-20 flex justify-center items-center">
        <div className="flex gap-8">
          <div className="relative">
            <div className="font-bold darkBlue pb-2">Study</div>
            <div className="absolute bottom-0 left-[-10px] right-[-10px] h-[2px] bg-blue-900"></div>
          </div>
          <div className="mr-4">Quiz</div>
          <div className="mr-4">Test</div>
          <div className="mr-4">Game</div>
          <div className="mr-4">Others</div>
        </div>

        </div>
        {/* CARD DIV */}
        <div className="flex mt-8 text-xl ml-20 flex justify-center items-center">
          <Card
            frontContent="9 + 6 + 7x - 2x - 3"
            backContent="5x + 12"
          />
          
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8 text-xl gap-16 ml-16">
          <div className='ml-6 mt-3'><img src={Refresh} alt="Refresh Icon"/></div>

          <div className='ml-6'><img src={LeftArrow} alt="Left Arrow Icon"/></div>

          <div className='mt-3'><h3 className='font-bold text-2xl numColor'>01/10</h3></div>

          <div className=''><img src={RightArrow} alt="Right Arrow Icon"/></div>

          <div className='ml-6 mt-3'><img src={Maximize} alt="Maximize Icon"/></div>
        </div>

      </div>
    </>
  )
}

export default Hero