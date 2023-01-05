import React from 'react'
import './Topimg.css'
import top_left from "../../../images/top_left.gif"
import top_right from "../../../images/top_right.gif"
import jewels from "../../../images/jewels.gif"
import { Link } from 'react-router-dom'
// import top_left from "../../../images/top_left.gif"

export default function Navbar() {
  return (
    <>
    <Link to="/">
      <div className='topimg'>
            <div className="header-img">
                <img src={top_left} alt=""/><img src={top_right} alt=""/>
            </div>
            <div className="header-jewels">
                <img src={jewels} alt=""/>
            </div>
        </div></Link>
    </>
  )
}
