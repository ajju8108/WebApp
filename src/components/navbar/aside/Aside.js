import React from 'react'
import "./Aside.css"
import blue_tab from "../../../images/blue_tab.gif"
import sign_up_img from "../../../images/sign_up_img.gif"
import add from "../../../images/add.gif"

export default function Aside(props) {
  return (
    <>
        <div>
        <aside className="sidebar">
            <div className="viewByProducts">
                <div className="sidebar_header">
                    <img src={blue_tab} alt="" />
                    <div className="sideheading1">
                        <b>
                            <p>:: {props.viewproducts.viewProducts}</p>
                        </b>
                    </div>
                </div>

                <div className="lists">
                    <ul className="ull" style={{marginleft: '20%', color: 'black'}}>
                        <li><a href="/diamonds.html">{props.viewproducts.diamonds}</a></li>
                        <li><a href="/engagementsrings.html">{props.viewproducts.engRing}</a></li>
                        <li><a href="/weddingring.html">{props.viewproducts.wedRings}</a></li>
                        <li>{props.viewproducts.earRings}</li>
                        <li>{props.viewproducts.necklace}</li>
                        <li>{props.viewproducts.pendants}</li>
                        <li>{props.viewproducts.bracelets}</li>
                        <li>{props.viewproducts.menswatch}</li>
                        <li>{props.viewproducts.womenWatch}</li>
                        <li>{props.viewproducts.acc}</li>
                        
                    </ul>
                </div>
            </div>

            <div className="generalInfo">
                <div className="sidebar_header">
                    <img src={blue_tab} alt="" />
                    <div className="sideheading2">
                        <b>
                            <p>:: {props.generalinfo.generalInfoHeading}</p>
                        </b>
                    </div>
                </div>
                <div className="lists">
                    <ul className="ull" style={{marginleft: '20%', color: 'black'}}>
                        <li>{props.generalinfo.aboutus}</li>
                        <li>{props.generalinfo.warranties}</li>
                        <li>{props.generalinfo.terms}</li>
                        <li>{props.generalinfo.privacy}</li>
                        <li>{props.generalinfo.contactUs}</li>
                        <li>{props.generalinfo.sitemap}</li>
                    </ul>
                </div>
            </div>

            <div className="signUp">
                <div className="sidebar_header">
                    <img src={blue_tab} alt="" />
                    <div className="sideheading3">
                        <b>
                            <p>:: {props.signup.signUp}</p>
                        </b>
                    </div>
                </div>

                <div className="signup-img">
                    <img src={sign_up_img} alt="" />
                </div>
                <div className="signup_details">
                    <input type="Enter your e-mail"/>
                    <input type="submit" style={{fontsize: '1em'}}/>
                </div>
            </div>

            <div className="bangles">
                <img src={add} alt="" />
            </div>

        </aside></div>
    </>
  )
}   
