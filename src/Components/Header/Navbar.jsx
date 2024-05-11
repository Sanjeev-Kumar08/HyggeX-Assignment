import React from 'react'
import Component from '../../assets/Component 40.svg'
import './Styles.css';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 text-xl ml-20">

        {/* <!-- Left side --> */}
        <div className="flex items-center text-white mt-5">
          {/* <!-- Logo --> */}
          <div className="text-xl font-bold mr-2 text-black"><img src={Component} alt="HyggeX"/></div>
        </div>

        {/* <!-- Right side --> */}
        <div className="flex items-center mr-6 mt-4">
          {/* <!-- Navigation links --> */}
          <ul className="flex list-items-color font-medium font-xl">
            <li className="mr-6 p-2">Home</li>
            <li className="mr-6 p-2">Flashcard</li>
            <li className="mr-6 p-2">Contact</li>
            <li className="mr-6 p-2">FAQ</li>
          </ul>
          {/* <!-- Login button with gradient --> */}
          <button className="bg-gradient-to-b from-blue-900 to-blue-700 text-white px-11 py-3 rounded-3xl text-xl mr-6">Login</button>
        </div>

      </nav>
      <h1></h1>
    </>
  )
}

export default Navbar