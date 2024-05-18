import { Routes ,Route } from "react-router-dom";
import { SignIn } from "./components/signin.jsx";
import { SignUp } from "./components/signup.jsx";
import Home from "./components/home.jsx";
import ClientArea from "./components/clientarea.jsx";
import EditProfile from "./components/editprofile.jsx";
import Forum from "./components/forum.jsx";
import Blog from "./components/blog.jsx";
<<<<<<< HEAD
// import BookAlert from "./components/bookalert.jsx";
>>>>>>> f422e5588ed788f62642c08eeefaf6172a192e64

=======
import BookAlert from "./components/bookalert.jsx";
>>>>>>> 6ca5bf808ebca31302859dc4805962bceae9cff2

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
        {/* <BookAlert/> */}
        </>
        
    )
}