// import img_01 from "../../../images/img_01.gif"
import img_02 from "../../../images/img_02.gif"
import img_03 from "../../../images/img_03.gif"
import img_04 from "../../../images/img_04.gif"
import img_05 from "../../../images/img_05.gif"
import star_img from "../../../images/bullet.gif"
import img_01 from "../../../images/img_01.gif"
import { Link } from "react-router-dom"

export const data =
    [
        {
            id: "1",
            img: require("../../../images/img_01.gif"),
            star_img: require("../../../images/bullet.gif"),
            p: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat animi rerum molestias
            molestiae ipsa sint blanditiis, iure ea earum vel atque aut facere fugit, quo sapiente. Sit
            quas fugit porro.  Read more`,
            b:`FABULOUS DIAMONDS`,
            about: <Link to="/about">about us</Link>
        },
        {
            id: "2",
            img:  require("../../../images/img_02.gif"),
            star_img: require("../../../images/bullet.gif"),
            p: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat animi rerum molestias
            molestiae ipsa sint blanditiis, iure ea earum vel atque aut facere fugit, quo sapiente. Sit
            quas fugit porro`,
            b:`MEN AND WOMEN JEWELARY`,
            more: <Link to="/Menwomenjew">More ...&gt;</Link>
        },
        {
            id: "3",
            img:  require("../../../images/img_03.gif"),
            star_img: require("../../../images/bullet.gif"),
            p: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat animi rerum molestias
            molestiae ipsa sint blanditiis, iure ea earum vel atque aut facere fugit, quo sapiente. Sit
            quas fugit porro`,
            b:`JEWELARY`,
            more: <Link to="/jewelary">More ...&gt;</Link>
        },
        {
            id: "4",
            img:  require("../../../images/img_05.gif"),
            star_img: require("../../../images/bullet.gif"),
            p: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat animi rerum molestias
            molestiae ipsa sint blanditiis, iure ea earum vel atque aut facere fugit, quo sapiente. Sit
            quas fugit porro`,
            b:`WATCHES AND ACCESSORIES`,
            menswatch: <Link to="/menswatch">~ Mens's Watches</Link>,
            womenswatch: <Link to="/womenswatch">~ Womens's Watches</Link>
        },
        {
            id: "5",
            img:  require("../../../images/img_04.gif"),
            star_img: require("../../../images/bullet.gif"),
            p: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat animi rerum molestias
            molestiae ipsa sint blanditiis, iure ea earum vel atque aut facere fugit, quo sapiente. Sit
            quas fugit porro`,
            b:`DIAMOND STUDS`,
            more: <Link to="/diamond">More ...&gt;</Link>
        }

    ]
