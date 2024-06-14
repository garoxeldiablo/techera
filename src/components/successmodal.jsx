import React from 'react';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative text-center">
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <img src="src\assets\icon\payment.svg" alt="Pembayaran Berhasil" className="mx-auto mb-4 h-24" />
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Pembayaran Berhasil!</h1>
        <p className="text-gray-700 mb-6">Anda bisa memulai konsultasi.</p>
        <button
          className="bg-blue-700 text-white py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Kembali
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
