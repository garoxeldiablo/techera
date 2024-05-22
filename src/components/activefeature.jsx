export default function ActiveFeature(){
    const activeFeature = [
        {
            name: 'Jovis Jocunda',
            role: 'Software',
            img: '../src/assets/technician/me1.jpg',
            feature: 'Live chat'
        },
    ]

    return(
        <>
        {activeFeature.map((active)=>(
        <div class="flex bg-white border rounded-lg shadow md:flex-row md:max-w-xl">
            <img class="object-fit w-24 rounded-t-lg h-24 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={active.img} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <div>
                    <h5 class="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-800 ">{active.name}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{active.role}</p>
                </div>
                <h5 class="mb-2 md:text-xl text-xl font-bold tracking-tight text-gray-500 ">{active.feature}</h5>
                <div className='gap-x-2'>
                <button className='p-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md'>Live Chat</button>
                </div>
            </div>
        </div>
        ))}
        </>
    )
}