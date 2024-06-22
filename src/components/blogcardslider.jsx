import { useState } from 'react';
import ArrowRightIcon from '/assets/icon/arrow-r.png';

const BlogCardSlider = () => {
    const cards = [
        { 
            id: 1, 
            title: 'Caraku mengatasi blue screen', 
            description: 'Tips mengatasi blue screen beserta langkah-langkahnya', 
            imgSrc: 'https://img2.beritasatu.com/cache/beritasatu/960x620-3/2023/11/1700481210-520x324.webp',
            href: "https://www.beritasatu.com/ototekno/2782076/8-cara-mengatasi-laptop-yang-mengalami-blue-screen-pada-windows-10", 
        },
        { 
            id: 2, 
            title: 'Caraku mengatasi high CPU usage', 
            description: 'Panduan cara mengatasi high CPU usage beserta langkah-langkahnya', 
            imgSrc: 'https://www.intel.co.id/content/dam/www/central-libraries/us/en/images/2023-01/s10-u05-01-end-or-restart-screenshot-original-rwd.jpg.rendition.intel.web.1648.927.jpg',
            href: "https://www.intel.co.id/content/www/id/id/gaming/resources/how-to-fix-high-cpu-usage.html", 
        },
        { 
            id: 3, 
            title: 'Caraku mengatasi virus dan malware', 
            description: 'Panduan cara mengatasi virus dan malware beserta langkah-langkahnya', 
            imgSrc: 'https://bucket.cloud.lintasarta.co.id:8082/bucket01-la-cloudeka/2023/08/cara-mengatasi-malware.jpg',
            href: "https://cloudeka.id/id/berita/web-sec/cara-mengatasi-malware/", 
        },
        { 
            id: 4, 
            title: 'Caraku mengatasi black screen/blank/no display', 
            description: 'Panduan cara mengatasi black screen/blank/no display beserta langkah-langkahnya', 
            imgSrc: 'https://cdn.eraspace.com/pub/media/wysiwyg/artikel/Tahun_2023/Mei/LaptopBlackScreen-1.jpg', 
            href: "https://eraspace.com/artikel/post/tips-mengatasi-laptop-black-screen-mudah-tanpa-panik", 
        },
        { 
            id: 5, 
            title: 'Caraku mengatasi Wifi tidak menangkap sinyal pada laptop', 
            description: 'Panduan cara mengatasi Wifi tidak menangkap sinyal pada laptop beserta langkah-langkahnya', 
            imgSrc: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1621917592/xrmjou0yzgvxxntkjsf4.jpg', 
            href: "https://kumparan.com/how-to-tekno/wifi-tidak-terdeteksi-di-laptop-begini-solusinya-1voNHaMUyG6/full", 
        },
    ];

const [currentIndex, setCurrentIndex] = useState(0);
const itemsPerPage = 3;

const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - itemsPerPage ? 0 : prevIndex + 1));
};

return (
    <div className="relative w-full lg:px-56">
        <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
                {cards.map((card) => (
                    <div key={card.id} className="md:w-1/3 w-full flex-shrink-0 px-4">
                        <div className="bg-blue-800 p-4 shadow-md">
                            <img src={card.imgSrc} alt={card.title} className="w-full h-36 object-cover" />
                            <div className="my-2">
                                <a href={card.href} target='__blank' className="font-bold text-white">{card.title}</a>
                                <span className="block text-white">{card.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-8 bg-white text-blue-800 h-72 mx-56 bg-opacity-90"
            onClick={handleNextClick}
        >
            <img src={ArrowRightIcon} alt="Next" className="w-10 h-10" />
        </button>
    </div>
    );
};

export default BlogCardSlider;
