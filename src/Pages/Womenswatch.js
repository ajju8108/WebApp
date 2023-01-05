import React from 'react'
import women1 from "../images/women1.jpg"
import women2 from "../images/women2.jpg"
import women3 from "../images/women3.jpg"
import "./Menswatch.css"
export default function Womenswatch() {
  return (
    <div>
      <div className="container1">
            <div className="firstwatch">
                <img src={women1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ut nobis temporibus accusantium. Sequi molestiae similique eligendi, natus excepturi aut vel nam!</p>
            </div>
            <div className="secondwatch">
                <img src={women2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ut nobis temporibus accusantium. Sequi molestiae similique eligendi, natus excepturi aut vel nam!</p>
            </div>
            <div className="thirdwatch">
                <img src={women3} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ut nobis temporibus accusantium. Sequi molestiae similique eligendi, natus excepturi aut vel nam!</p>
            </div>
      </div>
    </div>
  )
}
