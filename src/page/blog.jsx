import BlogCardSlider from '../components/blogcardslider'
import Footer from '../components/footer'
import { useState,useEffect } from 'react';

const Blog = () => {
    // tampilkan nama user
    const [displayUsername, setDisplayUsername] = useState(() => JSON.parse(localStorage.getItem('username')));

    useEffect(() => {
        const usernameData = localStorage.getItem('username');

        if (usernameData) {
            const parsedUsername = JSON.parse(usernameData);
            console.log(parsedUsername);
            setDisplayUsername(parsedUsername);
        }
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <>
            <div className="pt-40 px-6 md:px-48 pb-40 md:flex flex-row-reverse justify-between">
                <img src="../src/assets/content/blog-hero.png" alt="" className="h-64 object-cover"/>
                <div>
                    <h1 className="text-blue-800 font-bold text-4xl pb-10">Halo {}!</h1>
                    <h2 className="font-bold text-2xl text-gray-600 pb-8">Semoga Harimu Menyenangkan! Selamat Membaca!</h2>
                    <p className="pb-8 text-gray-600">Berita, blog, dan tips tentang teknologi</p>
                    <button className="bg-blue-800 px-7 py-2 text-white rounded-md font-semibold shadow-md">Mulai</button>
                </div>
            </div>

            <div className="px-60 pb-5">
                <h1 className="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Komputer</h1>
            </div>

            <BlogCardSlider/>

            <div className="px-60 pt-20 pb-5">
                <h1 className="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Software dan Hardware</h1>
            </div>

            <BlogCardSlider/>

            <div className="px-60 pt-20 pb-5">
                <h1 className="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Pemrograman</h1>
            </div>

            <BlogCardSlider/>

            <div className="mb-40"></div>

            <Footer/>
        </>
    )
}

export default Blog