import { Routes ,Route, useLocation } from "react-router-dom";
// import { SignIn } from "./components/signin.jsx";
// import { SignUp } from "./components/signup.jsx";
// import NavbarClient from "./components/navbarclient.jsx";
// import Home from "./components/home.jsx";
// import EditProfile from "./components/editprofile.jsx";
import Forum from "./components/forum.jsx";
import Blog from "./components/blog.jsx";


export default function MainApp(){
    const location = useLocation()
    return(
        <>
        {/* <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes> */}
        
        {/* <EditProfile/> */}

        {/* <Forum/> */}
        <Blog/>
        </>
        
    )
}