import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {


  return (

    <div className="app-general-div">
      <div><Header /></div>
      <div><Skills /></div>
      <div><Profile /></div>
      <div className="bg-yellow-500"><Projects /></div>
      <div className="bg-purple-500"><Footer /></div>
    </div>

  )
}

export default App
