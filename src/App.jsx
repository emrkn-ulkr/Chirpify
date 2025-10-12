import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {


  return (

   <div class="grid grid-rows-5 h-screen">

       <div class="bg-red-50"><Header/></div>
  <div class="bg-green-500"> <Skills/></div>
  <div class="bg-blue-500"><Profile/></div>
  <div class="bg-yellow-500"><Projects/></div>
  <div class="bg-purple-500"><Footer/></div>
   
   </div>
  
  )
}

export default App
