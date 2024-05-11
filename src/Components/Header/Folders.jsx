import React from 'react'
import Frame from '../../assets/Frame.svg'
import Vector from '../../assets/Vector.svg'


function Folders() {
  return (
  <>
    <div className='flex items-center gap-2 py-4 px-2 folder-items-color text-2xl font-normal ml-20 mt-14'>
      <div><img src={Frame} alt="Home"/></div>
      <div className="flex items-center justify-center"><img src={Vector} alt="Vector"/></div>
      <div>Flashcard</div>
      <div className="flex items-center justify-center"><img src={Vector} alt="Vector"/></div>
      <div>Mathematics</div>
      <div className="flex items-center justify-center"><img src={Vector} alt="Vector"/></div>
      <div className='darkBlue font-semibold'>Relations and Functions</div>
    </div>
  </>
  )
}

export default Folders