import Home from "./Pages/Home.jsx"
import Courses from "./Pages/Courses.jsx"
import TestSeries from "./Pages/TestSeries.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"
import MorePage from "./Pages/MorePage.jsx"
import Layout from "./Layout/Layout.jsx"
import Layout2 from "./Layout/Layout2.jsx"
import LayoutLogin from "./Layout/LayoutLogin.jsx"
import {Routes,Route} from "react-router"
import { createContext,useState } from "react"
export const loginContext = createContext()
function App() {
   const [loginStatus, setLoginStatus] = useState(false);
   return(
    <>
      <loginContext.Provider value={{ loginStatus, setLoginStatus }}>
      <Routes>
        <Route path="/" element = {<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/test-series" element={<TestSeries/>} />
          <Route path="/more" element={<MorePage/>} />
        </Route>
        <Route path="*" element = {<Layout2/>}>
          <Route path="*" element={<NotFound/>} />
        </Route>
        <Route path="/login" element = {<LayoutLogin/>}>
          <Route path="/login" element={<LoginPage/>} />
        </Route>
      </Routes>
      </loginContext.Provider>
    </>
   )
}
  

export default App
