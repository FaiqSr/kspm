import React from 'react';

const CallToAction = () => {
    return (
        <section id="join" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Siap Memulai Perjalanan Investasimu?
                </h2>
                <p className="text-lg mb-8">
                    Pendaftaran dibuka hingga <strong>[Tanggal Akhir Pendaftaran]</strong>. Jangan lewatkan kesempatan emas ini!
                </p>
                <a href="#" className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition duration-300">
                    DAFTAR SEKARANG!
                </a>
            </div>
        </section>
    );
};

export default CallToAction;