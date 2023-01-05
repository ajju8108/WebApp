import React from 'react'
import menswatch from "../images/menswatch.jpg"
import menswatch2 from "../images/menswatch2.jpg"
import menwatch4 from "../images/menwatch4.jpg"
import "./Menswatch.css"
import Topimg from "../components/navbar/Top/Topimg"

export default function Menswatch() {
  return (
    <div>
      <div className="container1">
            <div className="firstwatch">
                <img src={menswatch} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ut nobis temporibus accusantium. Sequi molestiae similique eligendi, natus excepturi aut vel nam!</p>
            </div>
            <div className="secondwatch">
                <img src={menswatch2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ut nobis temporibus accusantium. Sequi molestiae similique eligendi, natus excepturi aut vel nam!</p>
            </div>
            <div className="thirdwatch">
                <img src={menwatch4} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ut nobis temporibus accusantium. Sequi molestiae similique eligendi, natus excepturi aut vel nam!</p>
            </div>
      </div>
    </div>
  )
}
