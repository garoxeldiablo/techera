import { Routes , Route } from "react-router-dom";

import { SignIn } from "./components/signin.jsx";
import { SignUp } from "./components/signup.jsx";
import Home from "./components/home.jsx";
import ClientArea from "./components/clientarea.jsx";
import EditProfile from "./components/editprofile.jsx";
import Forum from "./components/forum.jsx";
import Blog from "./components/blog.jsx";
import BookAlert from "./components/bookalert.jsx";
import CreatePost from "./components/createpost.jsx"; 

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
            <Route path="/createpost" element={<CreatePost />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/bookalert" element={<BookAlert />}/>
        </Routes>
        </>
        
    )
}