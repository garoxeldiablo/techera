import React, { useState } from 'react';

export default function Payment() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    return (
        <>
            <button onClick={openModal} className="bg-blue-700 text-white py-2 px-4 rounded-lg">
                Open Payment Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700">&times;</button>
                        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">Payment</h1>
                        <hr className="border-blue-700 mb-6" />
                        <h2 className="text-lg font-semibold text-blue-700 mb-4">Choose payment method</h2>
                        <form>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                    <label className="flex items-center space-x-3">
                                        <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="text-gray-800">Debit Card</span>
                                    </label>
                                    <img src="visa-logo.png" alt="Visa" className="h-6" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                    <label className="flex items-center space-x-3">
                                        <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="text-gray-800">Gopay</span>
                                    </label>
                                    <img src="gopay-logo.png" alt="Gopay" className="h-6" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                    <label className="flex items-center space-x-3">
                                        <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="text-gray-800">Dana</span>
                                    </label>
                                    <img src="dana-logo.png" alt="Dana" className="h-6" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                                    <label className="flex items-center space-x-3">
                                        <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="text-gray-800">Qris</span>
                                    </label>
                                    <img src="qris-logo.png" alt="Qris" className="h-6" />
                                </div>
                            </div>
                            <hr className="border-blue-700 mb-6" />
                            <div className="flex justify-between items-center text-xl font-bold">
                                <span>Total</span>
                                <span>Rp 40.000</span>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-lg">Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
} 