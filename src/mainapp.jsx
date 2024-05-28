import { Routes , Route } from "react-router-dom";

import { SignIn } from "./page/signin.jsx";
import { SignUp } from "./page/signup.jsx";
import Home from "./page/home.jsx";
import EditProfile from "./page/editprofile.jsx";
import Forum from "./page/forum.jsx";
import Blog from "./page/blog.jsx";
import Booking from "./page/booking.jsx";
import DetailOrder from "./page/detailorder.jsx";
import CreatePost from "./page/createpost.jsx"; 
import Consultation from "./page/consultation.jsx";


import Subscribe from "./components/subscribe.jsx";
import CardTechnician from "./components/cardtechnician.jsx";

export default function MainApp(){
    return(
        <>
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
        </Routes>
        </>
        
    )
}