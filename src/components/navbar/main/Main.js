import React from 'react'
import "./Main.css"
import Footer from '../footer/Footer'
import { data } from './maindata'
import Topimg from "../Top/Topimg"
import Aside from '../aside/Aside'
import { Link } from 'react-router-dom'

export default function Main(props) {
    const viewProducts = {
        viewProducts: "View Products",
        diamonds: "Diamonds",
        engRing: "Engagement Rings",
        wedRings: "Wedding Rings",
        earRings: "Ear Rings",
        necklace: "Necklace",
        pendants: "Pendants",
        bracelets: "Bracelets",
        menswatch: "Men's Watch",
        womenWatch: "Women's Watch",
        acc: "Accessories"
    
      }
      const generalinfo = {
        generalInfoHeading: "General Info",
        aboutus: "About us",
        warranties: "Warranties",
        terms: "Terms",
        privacy: "Privacy Policy",
        contactUs: "Contact Us",
        sitemap: "Site Map"
    
      }
      const signupaside = {
        signUp: "SIGN UP",
      }
    return (
        <>
        <div>
       
        <Aside viewproducts={viewProducts} generalinfo={generalinfo} signup={signupaside} />
        </div>
        
        <div>
            <article>
                <nav>
                    <div class="navigation">
                        <Link to="/"> <b> :: {props.homenav.home} |</b></Link>
                        <Link to="/catalog"> <b> :: {props.homenav.catalog} |</b></Link>
                        <a href=""> <b> :: {props.homenav.sales} |</b></a>
                        <a href=""> <b> :: {props.homenav.new} </b></a>
                    </div>
                </nav>
                <div class="main_content" >
                    {data.map((d) => {
                        return (
                            <div class={`content_${d.id}`} key={d.id}>
                                <div class="img1"><img src={d.img} alt="" /></div>
                                <div class="star_img">
                                    <img src={d.star_img} alt="" /><span><b> :: {d.b} </b></span>
                                    <p>{d.p} <br /> {d.more}
                                       {d.about} {d.menswatch} <br /> {d.womenswatch}
                                    </p>
                                </div>
                            </div>
                        )
                    })} </div>
            </article>
            </div>
        </>
    )
}
