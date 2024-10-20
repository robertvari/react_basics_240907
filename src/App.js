import "./css/main.css"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <div>
          <Navbar/>

          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>

        <Footer/>
      </div>

    </BrowserRouter>
  );
}

export default App;
