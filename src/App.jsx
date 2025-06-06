import Home from "./Pages/Home.jsx"
import Courses from "./Pages/Courses.jsx"
import TestSeries from "./Pages/TestSeries.jsx"
import LoginPage from "./Pages/LoginPage.jsx"
import NotFound from "./components/NotFound/NotFound.jsx"
import MorePage from "./Pages/MorePage.jsx"
import Callback from "./Pages/Callback.jsx"
import Result from "./Pages/Result.jsx"
import Scholarship from "./Pages/Scholarship.jsx"
import Layout from "./Layout/Layout.jsx"
import Layout2 from "./Layout/Layout2.jsx"
import LayoutLogin from "./Layout/LayoutLogin.jsx"
import {Routes,Route} from "react-router"
import { createContext,useEffect,useState } from "react"

localStorage.setItem("loginStatus", false);

export const loginContext = createContext()
function App() {
   const [loginStatus, setLoginStatus] = useState(localStorage.getItem("loginStatus"));
   useEffect(() => {
    localStorage.setItem("loginStatus", loginStatus);
  }, [loginStatus]);
   return(
    <>
      <loginContext.Provider value={{ loginStatus, setLoginStatus }}>
      <Routes>
        <Route path="/" element = {<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/test-series" element={<TestSeries/>} />
          <Route path="/results" element={<Result/>} />
          <Route path="/more" element={<MorePage/>} />
          <Route path="/callback" element={<Callback/>} />
          <Route path="/scholarships" element={<Scholarship/>} />

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
