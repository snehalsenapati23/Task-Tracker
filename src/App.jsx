import Welcome from "./components/Welcome"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"

function App() {


  return (
    <>
    <div className="app">
      <Router>
     <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/homepage" element={<Home />} />
     </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
