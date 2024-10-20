import "./css/main.css"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>    
  );
}

export default App;
