import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignIn from "./page/signin/signin.jsx" 
import CreatePost from "./page/createpost/createpost.jsx"
import NavbaGuest from "./components/navbarguest"
import Booking from "./page/booking/booking.jsx"
import DetailOrder from "./page/detailorder/detailorder.jsx"
import EditProfile from "./page/editprofile/editprofile.jsx";
import PrivateRoute from "./components/hooks/privateroute"
import Home from "./page/home.jsx"
import Consultation from "./page/consultation/consultation.jsx"
import Forum from "./page/forum/forum.jsx";
import Blog from "./page/blog/blog.jsx";
import { SignUp } from "./page/signup/signup.jsx";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./components/store/store.js"
import Payment from "./components/paymentmodal.jsx"
import SuccessModal from "./components/successmodal.jsx"

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
                        <Route path="/consultation/booking/:id" element={
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
                            <Payment />
                            <SuccessModal />
                        </PrivateRoute>
                        }/>
                        <Route path="/editprofile" element={
                        <PrivateRoute>
                            <EditProfile />
                        </PrivateRoute>
                        }/>
                        <Route path="/login" element={<SignIn/>}/>
                        <Route path="/register" element={<SignUp />} />

                    </Routes>
                    </Router>
                </PersistGate>
            </Provider>

        </>
        
    )
}