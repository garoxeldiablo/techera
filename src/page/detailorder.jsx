import NavbarClient from "../components/navbarclient";
import { Card } from "flowbite-react";
import { Rating, RatingStar } from "flowbite-react";
import Footer from "../components/footer";

export default function DetailOrder(){
    return(
        <>
            <NavbarClient/>
            <div className="relative main-content md:px-14 px-4 top-24">

                {/* detail order */}
                <div className="md:flex">
                    <div className="md:w-1/2 m-6">
                        <h3 className="text-2xl text-blue-800 mb-2">Order Item</h3>
                        <div className="h-1 bg-blue-700 w-full my-2"/>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Produk
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tanggal Pesan
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Harga
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status Pembayaran
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Live Chat
                                        </th>
                                        <td class="px-6 py-4">
                                            24-05-2024
                                        </td>
                                        <td class="px-6 py-4">
                                            Rp 20.000,00
                                        </td>
                                        <td class="px-6 py-4">
                                            Pending
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="my-2 md:ml-2 md:mt-8 px-3 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Pembayaran</button>
                    </div>
                    <div className="md:w-1/2 m-6">
                        <h3 className="text-2xl text-blue-800 mb-2">Teknisi</h3>
                        <div className="h-1 bg-blue-700 w-full my-2"/>
                        <div class="relative md:flex flex-row-reverse overflow-x-auto justify-around items-center">
                            <div>
                                <img
                                    className="Ellipse118 w-36 h-36 rounded-full border-4 border-blue-800 mt-5"
                                    src="../src/assets/technician/me1.jpg"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl text-gray-700 mb-2">Jovis Jocunda</h3>
                                <p className="text-gray-700">Medan, Sumatera Utara Indonesia</p>
                                <p className="text-gray-700">Jadwal konsultasi : Jumat, 24 Mei 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* history */}
                <div className="m-6">
                    <h3 className="text-2xl text-blue-800 mb-2">Transaksi</h3>
                    <div className="h-1 bg-blue-700 w-full my-2"/>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        #Id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tanggal Pesan
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Tanggal Konsultasi
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Hasil
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Teknisi
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Harga
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Deskripsi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        002212
                                    </th>
                                    <td class="px-6 py-4">
                                        18-05-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        20-05-2024
                                    </td>
                                    <td class="px-6 py-4">
                                        Sukses
                                    </td>
                                    <td class="px-6 py-4">
                                        Selesai
                                    </td>
                                    <td class="px-6 py-4">
                                        Agus Bisana
                                    </td>
                                    <td class="px-6 py-4">
                                        Rp 20.000,00
                                    </td>
                                    <td class="px-6 py-4">
                                        Baterai bermasalah,
                                        silahkan perbaikan lebih
                                        lanjut di tempat servis
                                        terdekat.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Active feature */}
                <div className="m-6 mb-36">
                        <h3 className="text-2xl text-blue-800 mb-2">Fitur Aktif</h3>
                        <div className="h-1 bg-blue-700 w-full my-2"/>
                        <div>
                            <div className='md:mt-4 md:flex justify-between'>
                                <div className='gap-x-4'>
                                    <Card className="max-w-sm border-4 border-blue-800" imgSrc="../src/assets/technician/a.jpg" horizontal>
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Agus Bisana
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Hardware
                                        </p>
                                        <Rating>
                                        <RatingStar />
                                        <RatingStar />
                                        <RatingStar />
                                        <RatingStar />
                                        <RatingStar filled={false} />
                                        </Rating>
                                        <div className='gap-x-2'>
                                            <button className='p-2 bg-blue-800 text-white rounded-md'>Live Chat</button>
                                        </div>
                                    </Card>
                                </div>
                                <div>
                                    <div>
                                        <button className='w-20 m-2 p-2 bg-blue-800 hover:bg-blue-700 text-white rounded-sm'>Selesai</button>
                                    </div>
                                    <div>
                                        <button className='w-20 m-2 p-2 bg-gray-500 hover:bg-slate-600 text-white rounded-sm'>Gagal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    )
}