import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {


  return (

    <div className="app-general-div">
      <div className="bg-green-200"><Header /></div>
      <div className="bg-green-500"> <Skills /></div>
      <div className="bg-blue-500"><Profile /></div>
      <div className="bg-yellow-500"><Projects /></div>
      <div className="bg-purple-500"><Footer /></div>
    </div>

  )
}

export default App
