import Home from "./Pages/Home.jsx"
import Courses from "./Pages/Courses.jsx"
import './App.css'
import NotFound from "./components/NotFound/NotFound.jsx"
import Layout from "./Layout/Layout.jsx"
import Layout2 from "./Layout/Layout2.jsx"
import {Routes,Route} from "react-router"
function App() {
   return(
    <>
      
      <Routes>
        <Route path="/" element = {<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
        </Route>
        <Route path="*" element = {<Layout2/>}>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      
    </>
   )
}
  

export default App
