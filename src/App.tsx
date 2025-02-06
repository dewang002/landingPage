import Featuresection from "./component/Featuresection"
import Footer from "./component/Footer"
import Herosection from "./component/Herosection"
import Navbar from "./component/Navbar"
import Pricing from "./component/Pricing"
import Testamonial from "./component/Testamonial"
import Workflow from "./component/Workflow"

const App = () => {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Featuresection/>
      <Workflow/>
      <Pricing/>
      <Testamonial/>
      <Footer/>
    </>
  )
}

export default App