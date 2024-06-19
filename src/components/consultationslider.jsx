import { useState, useEffect } from 'react';
import ArrowRightIcon from '../assets/icon/arrow-r.png';
import ArrowLeftIcon from '../assets/icon/Arrow.png';
import { Rating, RatingStar } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ConsultationCardSlider = () => {
    const navigate = useNavigate();

    // const cards = [
    //     { 
    //         id: 1, 
    //         name: 'Jovis Jocunda', 
    //         division: 'Software', 
    //         imgSrc: '../src/assets/technician/me1.jpg' 
    //     },
    //     { 
    //         id: 2, 
    //         name: 'Agus Bisana', 
    //         division: 'Software', 
    //         imgSrc: '../src/assets/technician/a.jpg' 
    //     },
    //     { 
    //         id: 3, 
    //         name: 'Gideon Aji', 
    //         division: 'Software', 
    //         imgSrc: '../src/assets/technician/g.jpg' 
    //     },
    //     { 
    //         id: 4, 
    //         name: 'Shaela', 
    //         division: 'Software', 
    //         imgSrc: '../src/assets/technician/s.jpg' 
    //     },
    // ];

    const [teknisi, setTeknisi] = useState([]);
      
    useEffect(() => {
        const fetchTeknisiData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/teknisi', {
            withCredentials: true,
            });
            setTeknisi(response.data.data);
        } catch (e) {
            console.error('Server error', e);
        }
    };
    fetchTeknisiData();
    }, []);

    const mimeType = 'image/jpeg';
      
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teknisi.length - itemsPerPage : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teknisi.length - itemsPerPage ? 0 : prevIndex + 1));
    };

    return (
        <>
        <div className="relative md:mx-52">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (150 / itemsPerPage)}%)` }}
                >
                    {teknisi.map((card) => (
                        <div key={card.Id_teknisi} className="md:w-[35%] w-full flex-shrink-0 px-4">
                            <div className="flex gap-2 rounded-md border border-blue-800 mt-2 mb-3 shadow-md w-full">
                                <img src={`data:${mimeType};base64,${card.imgteknisi}`} alt={card.nama_teknisi} className="w-28 h-28 mx-3 mt-3 md:mb-8 object-cover border border-blue-800 rounded-sm shadow-md"/>
                                <div className="pr-20 py-3">
                                    <h2 className="font-bold text-lg whitespace-nowrap overflow-ellipsis">{card.nama_teknisi}</h2>
                                    <p className="text-xs font-medium -mt-1 mb-2">{card.kategori}</p>
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

                                        <button onClick={() => navigate(`/consultation/booking/${key}`)} className="text-xs bg-blue-500 text-white px-3 py-0.5 rounded-md shadow-md mt-2">
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
                className="absolute top-1/2 right-0 transform -translate-y-1/2"
                onClick={handleNextClick}
            >
                <img src={ArrowRightIcon} alt="Next" className="w-8 h-8" />
            </button>

            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2"
                onClick={handlePrevClick}
            >
                <img src={ArrowLeftIcon} alt="Previous" className="w-8 h-8" />
            </button>
        </div>
        </>
        
    );
};

export default ConsultationCardSlider;
