import { Rating, RatingStar } from "flowbite-react"

export default function CardTechnician(){
    const teknisi = [
        {
            name: 'Jovis Jocunda',
            role: 'Software',
            img: '../src/assets/technician/me1.jpg'
        },
        {
            name: 'Agus Bisana',
            role: 'Hardware',
            img: '../src/assets/technician/a.jpg'
        },
        {
            name: 'Gideon Aji',
            role: 'Networking',
            img: '../src/assets/technician/g.jpg'
        },
        {
            name: 'Shaela Mayselina',
            role: 'Cyber Security',
            img: '../src/assets/technician/s.jpg'
        },

    ]

    return(
        <>
        {teknisi.map((teksnisii)=>(
        <div class="flex flex-col items-center bg-white border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img class="object-fit w-24 rounded-t-lg h-24 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={teksnisii.img} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <div>
                    <h5 class="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-800 ">{teksnisii.name}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{teksnisii.role}</p>
                </div>
                <Rating>
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
                </Rating>
            <div className='mt-2 flex gap-x-2'>
                <button className='p-2 bg-blue-800 text-white w-20 rounded-md'>Call</button>
                <button className='p-2 bg-blue-600 text-white w-20 rounded-md'>Detail</button>
            </div>
            </div>
        </div>
        ))}
        </>
    )
}