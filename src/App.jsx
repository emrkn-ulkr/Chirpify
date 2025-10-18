import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { DarkModeProvider } from "./components/DarkModeContext.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {


  return (

    <LanguageProvider>
      <DarkModeProvider>
        <div className="app-general-div">
          <div><Navbar /></div>
          <div><Skills /></div>
          <div><Profile /></div>
          <div><Projects /></div>
          <div></div>
        </div><Footer />
      </DarkModeProvider>
    </LanguageProvider >


  )
}

export default App
