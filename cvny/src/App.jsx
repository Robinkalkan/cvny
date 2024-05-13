import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Portfolio from "./Components/Portfolio"
import PersonligtBrev from "./Components/PersonligtBrev"
import CV from "./Components/CV"
import Contact from "./Components/Contact"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="PersonligtBrev" element={<PersonligtBrev />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="CV" element={<CV />} />
          <Route path="Contact" element={<Contact />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
