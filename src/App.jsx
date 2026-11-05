import Contact from "./contact";
import Description from "./description";
import Hero from "./hero";
import PROJET from "./PROJET";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
export default function App(){
  return(
     <BrowserRouter> 
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'> 
   <div className='container'>
    <Link to="/" className="navbar-brand"> MON PORTFOLIO</Link>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
   <ul className="navbar-nav">
    <li className="nav-item">
        <Link to="/description" className="nav-link">A PROPOS</Link>
    </li>
    <li className="nav-item">
        <Link to="/projet" className="nav-link">PROJECTS</Link>
    </li>
    <li className="nav-item">
        <Link to="/contact" className="nav-link">CONTACT</Link>
    </li>
   </ul>
   </div>
   </div>
    </nav>
      <Routes>
        <Route path="/" element={< Hero/>}>
        </Route>
        <Route path="/description" element={< Description/>}>
          
        </Route>
        <Route path="/projet" element={< PROJET/>}>
        </Route>
        <Route path="/contact" element={< Contact/>}>
        </Route>
        
      </Routes>
     
     </BrowserRouter>

  )

}