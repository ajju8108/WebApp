import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
export default function Footer(props) {
  return (
    <>
      <div>
      <footer>
        <Link to="/aboutmain">{props.about}</Link> <span>|</span>
        <a href="">{props.warranties}</a> <span>|</span>
        <a href="">{props.terms}</a> <span>|</span>
        <a href="">{props.privacy}</a> <span>|</span>
        <a href="">{props.contact}</a> <span>|</span>
        <a href="">{props.siteMap}</a> <span>|</span><br />
        <a href="mailto:ajaymaurya199618@gmail.com"><i>&#169;{props.email}.</i></a>
        <span> {props.rights}</span>
      </footer>
    </div></>
  )
}
