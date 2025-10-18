import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./components/DarkModeContext";


function App() {


  return (

    <LanguageProvider>
      <DarkModeProvider>
        <div className="app-general-div">
          <div><Header /></div>
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
