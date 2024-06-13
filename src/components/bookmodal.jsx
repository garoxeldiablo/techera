// src/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const products = [
    {
        id : 1,
        product : "Live Chat", 
        desc : "Diskusi langsung dengan teknisi melalui chat dari techera",
        price : "IDR 20.000",
        list : [
                "Diskusi sampai masalah selesai",
                "Room chat aman",
                "Bebas pilih teknisi"
        ]
    },
    {
        id : 2,
        product : "Face to Face", 
        desc : "Berkonsultasi langsung via Zoom Meeting agar diskusi lebih optimal",
        price : "IDR 30.000",
        list : [
                "Diskusi sampai masalah selesai",
                "Tanggal dan jam fleksibel",
                "Bebas pilih teknisi"
        ]
    },
    {
        id : 3,
        product : "Remote", 
        desc : "Teknisi akan mengendalikan dan memperbaiki perangkat Anda lewat kendali jarak jauh",
        price : "IDR 45.000",
        list : [
                "Proses dapat dilihat secara real-time",
                "apa ya enaknya?",
                "Bebas pilih teknisi"
        ]
    }
  ]

  return (
    <div className="md:fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <section className="bg-white rounded-md mt-14">
        <div className="py-6 px-4 mx-auto max-w-screen-xl lg:px-6">
            
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {products.map((prod)=> (
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
                    <h3 className="mb-4 text-xl font-semibold">{prod.product}</h3>
                    <p className="font-light text-gray-500 sm:text-lg ">{prod.desc}</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-3xl font-extrabold">{prod.price}</span>
                        <span className="text-gray-500 dark:text-gray-400">/session</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        {prod.list.map((ls)=> 
                            <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span>{ls}</span>
                        </li>
                        )}
                    </ul>
                    <a href="/cart" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in">Get started</a>
                </div>
                ))}

            </div>
            <div className='flex justify-center'>
                <button onClick={onClose} className="mt-3 border-b-2 border-white hover:border-gray-600 text-gray-600 px-4 py-2 mr-2 transition ease-in">Cancel</button>
            </div>
        </div>
        </section>
    </div>
  );
};

export default Modal;
