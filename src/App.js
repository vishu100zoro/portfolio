import Profile from "./PortfolioContainer/Home/Profile";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Project from "./PortfolioContainer/Project/Project";
import Contact from "./PortfolioContainer/Contactme/Contact";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
function App() {
  return (
    <div className="App">
       <Profile/>
       <AboutMe/>
       <Resume/>
       <Project/>
       <Contact/>
       <Navbar/>
    </div>
  );
}

export default App;
