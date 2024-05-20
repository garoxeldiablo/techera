import { Routes , Route } from "react-router-dom";

import { SignIn } from "./page/signin.jsx";
import { SignUp } from "./page/signup.jsx";
import Home from "./page/home.jsx";
import ClientArea from "./page/clientarea.jsx";
import EditProfile from "./page/editprofile.jsx";
import Forum from "./page/forum.jsx";
import Blog from "./page/blog.jsx";
import Booking from "./page/booking.jsx";


import CreatePost from "./page/createpost.jsx"; 
import Subscribe from "./components/subscribe.jsx";

export default function MainApp(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/clientarea" element={<ClientArea />}/>
            <Route path="/editprofile" element={<EditProfile />}/>
            <Route path="/forum" element={<Forum />}/>
            <Route path="/forum/createpost" element={<CreatePost />}/>
            <Route path="/consultation/booking" element={<Booking />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/subscribe" element={<Subscribe />}/>
        </Routes>
        </>
        
    )
}