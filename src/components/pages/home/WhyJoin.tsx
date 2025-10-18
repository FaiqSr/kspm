import React from 'react';
import { FaGraduationCap, FaNetworkWired, FaChartLine, FaCertificate } from 'react-icons/fa';

const features = [
    {
        icon: <FaGraduationCap size={40} className="text-blue-600" />,
        title: "Edukasi Mendalam",
        description: "Belajar dari dasar hingga analisis fundamental dan teknikal yang komprehensif."
    },
    {
        icon: <FaNetworkWired size={40} className="text-blue-600" />,
        title: "Jaringan Luas (Networking)",
        description: "Terhubung dengan mahasiswa, alumni, dan para praktisi profesional dari industri."
    },
    {
        icon: <FaChartLine size={40} className="text-blue-600" />,
        title: "Pengalaman Praktis",
        description: "Ikuti kompetisi trading, studi kasus, bedah emiten, dan kunjungan perusahaan."
    },
    {
        icon: <FaCertificate size={40} className="text-blue-600" />,
        title: "Sertifikat & Portofolio",
        description: "Dapatkan sertifikat untuk setiap program dan bangun portofolio keahlian untuk CV-mu."
    },
];

const WhyJoin = () => {
    return (
        <section id="why-join" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Dapatkan Keunggulan untuk Masa Depanmu
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;