import { useState } from 'react';
import ArrowRightIcon from '../assets/icon/arrow-r.png';

const BlogCardSlider = () => {
    const cards = [
        { 
            id: 1, 
            title: 'Caraku mengatasi black screen', 
            description: 'Panduan cara mengatasi black screen beserta langkah-langkahnya', 
            imgSrc: '../src/assets/content/blog1.jpg' 
        },
        { 
            id: 2, 
            title: 'Caraku mengatasi high CPU usage', 
            description: 'Panduan cara mengatasi high CPU usage beserta langkah-langkahnya', 
            imgSrc: '../src/assets/content/blog1.jpg' 
        },
        { 
            id: 3, 
            title: 'Caraku mengatasi blue screen', 
            description: 'Panduan cara mengatasi blue screen beserta langkah-langkahnya', 
            imgSrc: '../src/assets/content/blog1.jpg' 
        },
        { 
            id: 4, 
            title: 'Caraku mengatasi blue screen', 
            description: 'Panduan cara mengatasi blue screen beserta langkah-langkahnya', 
            imgSrc: '../src/assets/content/blog1.jpg' 
        },
        { 
            id: 5, 
            title: 'Caraku mengatasi blue screen', 
            description: 'Panduan cara mengatasi blue screen beserta langkah-langkahnya', 
            imgSrc: '../src/assets/content/blog1.jpg' 
        },
    ];

const [currentIndex, setCurrentIndex] = useState(0);
const itemsPerPage = 3;

const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - itemsPerPage ? 0 : prevIndex + 1));
};

return (
    <div className="relative w-full px-56">
        <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
                {cards.map((card) => (
                    <div key={card.id} className="w-1/3 flex-shrink-0 px-4">
                        <div className="bg-blue-800 p-4 shadow-md">
                            <img src={card.imgSrc} alt={card.title} className="w-full h-36 object-cover" />
                            <div className="my-2">
                                <a href="#" className="font-bold text-white">{card.title}</a>
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
