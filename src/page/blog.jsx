import BlogCardSlider from '../components/blogcardslider'
import Footer from '../components/footer'

const Blog = () => {
    return (
        <>
            <div className="pt-40 pb-40 px-60 flex justify-between">
                <div>
                    <h1 className="text-blue-800 font-bold text-4xl pb-10">Halo! Agus Bisana!</h1>
                    <h2 className="font-bold text-2xl text-gray-600 pb-8">Semoga Harimu Menyenangkan! Selamat Membaca!</h2>
                    <p className="pb-8 text-gray-600">Berita, blog, dan tips tentang teknologi</p>
                    <button className="bg-blue-800 px-7 py-2 text-white rounded-md font-semibold shadow-md">Mulai</button>
                </div>

                <img src="../src/assets/content/blog-hero.png" alt="" className="h-64 object-cover"/>
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