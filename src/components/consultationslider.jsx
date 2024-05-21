import { useState } from 'react';
import ArrowRightIcon from '../assets/icon/arrow-r.png';
import { Rating, RatingStar } from 'flowbite-react';

const ConsultationCardSlider = () => {
    const cards = [
        { 
            id: 1, 
            name: 'Jovis Jocunda', 
            division: 'Software', 
            imgSrc: '../src/assets/technician/me1.jpg' 
        },
        { 
            id: 2, 
            name: 'Agus Bisana', 
            division: 'Software', 
            imgSrc: '../src/assets/technician/a.jpg' 
        },
        { 
            id: 3, 
            name: 'Gideon Aji', 
            division: 'Software', 
            imgSrc: '../src/assets/technician/g.jpg' 
        },
        { 
            id: 4, 
            name: 'Shaela', 
            division: 'Software', 
            imgSrc: '../src/assets/technician/s.jpg' 
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 2; // Number of fully visible items

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative mx-52">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {cards.map((card) => (
                        <div key={card.id} className="w-[35%] flex-shrink-0 px-4">
                            <div className="flex gap-2 rounded-md border border-blue-800 mt-2 mb-3 shadow-md w-full">
                                <img src={card.imgSrc} alt={card.name} className="w-28 h-28 mx-3 mt-3 mb-8 object-cover border border-blue-800 rounded-sm shadow-md"/>
                                <div className="pr-20 py-3">
                                    <h2 className="font-bold text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">{card.name}</h2>
                                    <p className="text-xs font-medium -mt-1 mb-2">{card.division}</p>
                                    <Rating>
                                        <RatingStar />
                                        <RatingStar />
                                        <RatingStar />
                                        <RatingStar />
                                        <RatingStar filled={false} />
                                    </Rating>
                                    <div className="flex gap-2">
                                        <button className="text-xs bg-blue-800 text-white px-4 py-0.5 rounded-md shadow-md mt-2">
                                            Call
                                        </button>

                                        <button className="text-xs bg-blue-500 text-white px-3 py-0.5 rounded-md shadow-md mt-2">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-800 bg-opacity-90"
                onClick={handleNextClick}
            >
                <img src={ArrowRightIcon} alt="Next" className="w-8 h-8" />
            </button>
        </div>
    );
};

export default ConsultationCardSlider;
