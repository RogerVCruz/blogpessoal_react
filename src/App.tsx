import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"


function App() {
// código typescript - lógica

  return (
    // código tsx => html+css
    <>
    <Navbar></Navbar>
     <Home/>
     <Footer></Footer>
    </>
  )
}

export default App
