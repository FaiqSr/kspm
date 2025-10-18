import React from 'react';
import Image from 'next/image';

const programs = [
    { title: "Sekolah Pasar Modal (SPM)", description: "Program fundamental bagi anggota baru untuk memahami A-Z dunia pasar modal, bekerja sama dengan BEI.", image: "/program-1.jpg" },
    { title: "Diskusi & Analisis Rutin", description: "Forum mingguan untuk membahas isu pasar terkini, menganalisis saham potensial, dan berbagi strategi.", image: "/program-2.jpg" },
    { title: "Seminar & Workshop", description: "Mengundang para ahli—analis saham, manajer investasi, hingga direktur—untuk berbagi ilmu.", image: "/program-3.jpg" },
    { title: "Kunjungan Perusahaan", description: "Mengunjungi kantor perusahaan sekuritas dan emiten untuk melihat langsung cara kerja industri.", image: "/program-4.jpg" },
]

const Programs = () => {
    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Program Unggulan Kami
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">Aktivitas yang Mengasah Kemampuanmu.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-48 w-full">
                                <Image src={program.image} alt={program.title} layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                                <p className="text-gray-700">{program.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;