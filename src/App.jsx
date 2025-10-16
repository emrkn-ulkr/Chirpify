import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {


  return (

    <LanguageProvider>
      <div className="app-general-div">
        <div><Header /></div>
        <div><Skills /></div>
        <div><Profile /></div>
        <div><Projects /></div>
        <div><Footer /></div>
      </div>
    </LanguageProvider>


  )
}

export default App
