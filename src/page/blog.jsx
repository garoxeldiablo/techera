import BlogCardSlider from '../components/blogcardslider'
import Footer from '../components/footer'
import NavbarClient from '../components/navbarclient'

const Blog = () => {
    return (
        <>
            <NavbarClient/>

            <div className="pt-40 pb-40 px-60 flex justify-between">
                <div>
                    <h1 className="text-blue-800 font-bold text-4xl pb-10">Hi! Agus Bisana!</h1>
                    <h2 className="font-bold text-2xl text-gray-600 pb-8">Have a nice day! Happy reading.</h2>
                    <p className="pb-8 text-gray-600">News, blog, and tips about technology</p>
                    <button className="bg-blue-800 px-7 py-2 text-white rounded-md font-semibold shadow-md">Get Started</button>
                </div>

                <img src="../src/assets/content/blog-hero.png" alt="" className="h-64 object-cover"/>
            </div>

            <div className="px-60 pb-5">
                <h1 className="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Computer</h1>
            </div>

            <BlogCardSlider/>

            <div className="px-60 pt-20 pb-5">
                <h1 className="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Software dan Hardware</h1>
            </div>

            <BlogCardSlider/>

            <div className="px-60 pt-20 pb-5">
                <h1 className="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Programming</h1>
            </div>

            <BlogCardSlider/>

            <div className="mb-40"></div>

            <Footer/>
        </>
    )
}

export default Blog