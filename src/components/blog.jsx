import BlogCardSlider from "./blogcardslider";
import NavbarClient from "./navbarclient";

const Blog = () => {
    return (
        <>
            <NavbarClient/>

            <div class="pt-40 pb-40 px-60 flex justify-between">
                <div>
                    <h1 class="text-blue-800 font-bold text-4xl pb-10">Hi! Agus Bisana!</h1>
                    <h2 class="font-bold text-2xl text-gray-600 pb-8">Have a nice day! Happy reading.</h2>
                    <p class="pb-8 text-gray-600">News, blog, and tips about technology</p>
                    <button class="bg-blue-800 px-7 py-2 text-white rounded-md font-semibold shadow-md">Get Started</button>
                </div>

                <img src="../src/assets/content/blog-hero.png" alt="" class="h-64 object-cover"/>
            </div>

            <div class="px-60 pb-5">
                <h1 class="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Computer</h1>
            </div>

            <BlogCardSlider/>

            <div class="px-60 pt-20 pb-5">
                <h1 class="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Software dan Hardware</h1>
            </div>

            <BlogCardSlider/>

            <div class="px-60 pt-20 pb-5">
                <h1 class="border-b-2 border-blue-800 text-lg font-bold text-gray-600">Programming</h1>
            </div>

            <BlogCardSlider/>
        </>
    )
}

export default Blog