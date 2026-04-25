import './App.css'
import Navbar from './navbar.jsx'
import Products from './products.jsx'
import Footer from './footer.jsx'
import image from "./assets/redlandbaler.png"
import image2 from "./assets/RedlandDiscrotavator.png"
import image3 from "./assets/RedlandRotavator.png"
function App() {
  return (
    <>
      <Navbar/>
      <Products image={image} name ="baler"  description="a type of agricultural machinery"/>
      <Products image={image2}  name="discrotavator" description="a type of agricultural machinery" />
      <Products image={image3} name="rotavator" description="a type of agricultural machinery" />
      <Footer/>

    </>
  )
}

export default App
