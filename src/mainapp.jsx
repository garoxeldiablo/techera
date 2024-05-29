// import { Routes , Route } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./components/hooks/authprovider.jsx"
import SignIn from "./page/signin.jsx" 
import CreatePost from "./page/createpost"
import NavbaGuest from "./components/navbarguest"
import Booking from "./page/booking.jsx"
import DetailOrder from "./page/detailorder.jsx"
import EditProfile from "./page/editprofile.jsx";
import PrivateRoute from "./components/hooks/privateroute"
import Home from "./page/home.jsx"

// import { SignIn } from "./page/signin.jsx";
// import { SignUp } from "./page/signup.jsx";
// import Home from "./page/home.jsx";
// import EditProfile from "./page/editprofile.jsx";
// import Forum from "./page/forum.jsx";
// import Blog from "./page/blog.jsx";
// import Booking from "./page/booking.jsx";
// import DetailOrder from "./page/detailorder.jsx";
// import CreatePost from "./page/createpost.jsx"; 
// import Consultation from "./page/consultation.jsx";

// import NavbarGuest from "./components/navbarguest.jsx"
// import Subscribe from "./components/subscribe.jsx";
// import CardTechnician from "./components/cardtechnician.jsx";

// example

export default function MainApp(){
    return(
        <>
        {/* <NavbarGuest isLoggedIn={false} name="agus bisana" />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/editprofile" element={<EditProfile />}/>
            <Route path="/forum" element={<Forum />}/>
            <Route path="/forum/createpost" element={<CreatePost />}/>
            <Route path="/consultation" element={<Consultation />}/>
            <Route path="/consultation/booking" element={<Booking />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/cart" element={<DetailOrder />}/>
            <Route path="/subscribe" element={<Subscribe />}/>
            <Route path="/cardt" element={<CardTechnician />}/>
        </Routes> */}

        {/* example */}

        <AuthProvider>
            <Router>
                <NavbaGuest/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/consultation/booking" element={
                    <PrivateRoute>
                        <Booking />
                    </PrivateRoute>
                    }/>
                    <Route path="/forum/createpost" element={
                    <PrivateRoute>
                        <CreatePost />
                    </PrivateRoute>
                    }/>
                    <Route path="/cart" element={
                    <PrivateRoute>
                        <DetailOrder />
                    </PrivateRoute>
                    }/>
                    <Route path="/editprofile" element={
                    <PrivateRoute>
                        <EditProfile />
                    </PrivateRoute>
                    }/>
                    <Route path="/signin" element={<SignIn/>}/>
                </Routes>
            </Router>
        </AuthProvider>
        </>
        
    )
}