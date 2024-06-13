import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignIn from "./page/signin.jsx" 
// import CreatePost from "./page/createpost"
import NavbaGuest from "./components/navbarguest"
import Booking from "./page/booking.jsx"
import DetailOrder from "./page/detailorder.jsx"
import EditProfile from "./page/editprofile.jsx";
import PrivateRoute from "./components/hooks/privateroute"
import Home from "./page/home.jsx"
import Consultation from "./page/consultation.jsx"
import Forum from "./page/forum.jsx";
import Blog from "./page/blog.jsx";
import { SignUp } from "./page/signup.jsx";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./components/store/store.js"
import Payment from "./components/payment.jsx"

export default function App(){
    return(
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                    <NavbaGuest/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/consultation" element={<Consultation />}/>
                        <Route path="/blog" element={<Blog />}/>
                        <Route path="/forum" element={<Forum />}/>
                        <Route path="/consultation/booking" element={
                        <PrivateRoute>
                            <Booking />
                        </PrivateRoute>
                        }/>
                        {/* <Route path="/forum/createpost" element={
                        <PrivateRoute>
                            <CreatePost />
                        </PrivateRoute>
                        }/> */}
                        <Route path="/cart" element={
                        <PrivateRoute>
                            <DetailOrder />
                            <Payment />
                        </PrivateRoute>
                        }/>
                        <Route path="/editprofile" element={
                        <PrivateRoute>
                            <EditProfile />
                        </PrivateRoute>
                        }/>
                        <Route path="/login" element={<SignIn/>}/>
                        <Route path="/users" element={<SignUp />} />

                    </Routes>
                    </Router>
                </PersistGate>
            </Provider>

        </>
        
    )
}