'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    { question: "Apakah saya harus dari jurusan Ekonomi/Bisnis untuk bergabung?", answer: "Tentu tidak! Kami percaya bahwa literasi investasi adalah untuk semua orang. Kami membuka pintu selebar-lebarnya untuk mahasiswa dari seluruh jurusan dan akan membimbingmu dari dasar." },
    { question: "Apakah saya harus sudah punya modal untuk berinvestasi?", answer: "Tidak sama sekali. Fokus utama kami adalah edukasi. Kamu akan belajar banyak hal, termasuk berlatih dengan akun demo (virtual) sebelum terjun dengan modal sungguhan." },
    { question: "Apa saja syarat untuk mendaftar?", answer: "Kamu adalah mahasiswa aktif [Nama Universitas Anda], memiliki komitmen untuk mengikuti program, dan punya rasa ingin tahu yang tinggi. Itu saja!" },
];

const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => (
    <div className="border-b">
        <button onClick={() => toggleFAQ(index)} className="w-full text-left py-4 flex justify-between items-center focus:outline-none">
            <span className="text-lg font-medium text-gray-800">{faq.question}</span>
            {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-500" />}
        </button>
        {isOpen && <div className="pb-4 pr-8 text-gray-600">{faq.answer}</div>}
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Masih Ragu? Kami Jawab Keraguanmu
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} isOpen={openIndex === index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;