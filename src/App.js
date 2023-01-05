
import Main from "./components/navbar/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Aboutmain from "./Pages/Aboutmain";
import Menwomenjew from "./Pages/Menwomenjew";
import Jewelary from "./Pages/Jewelary";
import Diamond from "./Pages/Diamond";
import Footer from "./components/navbar/footer/Footer"
import Menswatch from "./Pages/Menswatch";
import Topimg from "./components/navbar/Top/Topimg"
import Womenswatch from "./Pages/Womenswatch";
import Catalog from "./Pages/Catalog";
function App() {
  const homeNav = {
    home: 'HOME',
    catalog: "CATALOG",
    sales: "SALE OF THE MONTH",
    new: "WHAT'S NEW",
    fabulous: "FABULOUS DIAMONDS",
    menWomenJewwlary: "MEN AND WOMEN JEWELARY",
    jewlary: "JEWELARY",
    watches: "WATCHES AND ACCESSORIES",
    studs: "DIAMOND STUDS"
  }
  return (
    <>
      <BrowserRouter>
      <Topimg/>
        <Routes>
          <Route path="/" element={<Main homenav={homeNav} />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/aboutmain' element={< Aboutmain />}></Route>
          <Route exact path='/Menwomenjew' element={< Menwomenjew />}></Route>
          <Route exact path='/jewelary' element={< Jewelary />}></Route>
          <Route exact path='/diamond' element={< Diamond />}></Route>
          <Route exact path='/menswatch' element={< Menswatch />}></Route>
          <Route exact path='/womenswatch' element={< Womenswatch />}></Route>
          <Route exact path='/catalog' element={< Catalog />}></Route>
        </Routes>
                <Footer about="About Us" warranties="Warranties" terms="Terms" privacy="Privacy Policy" contact="Contact Us" siteMap="Site Map" email="2004 vernalistutorials.com" rights="All rights reserved" />
      </BrowserRouter>
    </>
  );
}
export default App;
