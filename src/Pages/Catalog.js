import React from 'react'
import "./About.css"
import cat1 from "../images/cat1.jpg"

export default function Catalog() {
  return (
    <>
      <div className="container">
        <div className='heading'>
          <h1>Catalogs</h1>
        </div>
          <div className="container1">
            <img src={cat1} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, excepturi dolore. Debitis expedita cumque numquam adipisci, modi corrupti repellat vitae eum quae, inventore neque ratione! Quos unde ad eligendi, dicta voluptatum voluptas?</p>
          </div>
        </div>
   </>
  )
}
