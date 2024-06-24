import React from 'react';

const Payment = ({ isOpen, onClose, onPaymentSuccess }) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    onPaymentSuccess();
  }

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Pembayaran
        </h1>
        <hr className="border-blue-700 mb-6" />
        <h2 className="text-lg font-semibold text-blue-700 mb-4">
          Pilih Metode Pembayaran
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-800">Debit Card</span>
              </label>
              <img src="..\..\assets\icon\dc.svg" alt="Visa" className="h-6" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-800">Gopay</span>
              </label>
              <img src="..\..\assets\icon\gopay.svg" alt="Visa" className="h-6" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-800">Dana</span>
              </label>
              <img src="..\..\assets\icon\dana.svg" alt="Visa" className="h-6" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-800">Qris</span>
              </label>
              <img src="..\..\assets\icon\qris.svg" alt="Visa" className="h-6" />
            </div>
          </div>
          <hr className="border-blue-700 mb-6" />
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span>Rp 40.000</span>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Bayar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
