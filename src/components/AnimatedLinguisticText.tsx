'use client';
import React, { useState, useEffect } from "react";

interface Phrase {
  text: string;
  fontClass: string;
}

const phrases: Phrase[] = [
  { text: "Linguistics", fontClass: "font-sans" },
  { text: "语言学", fontClass: "font-heading" }, // Chinese
  { text: "भाषाविज्ञान", fontClass: "font-mono" }, // Hindi
  { text: "Lingüística", fontClass: "font-heading" }, // Spanish
  { text: "Linguistique", fontClass: "font-sans" }, // French
  { text: "اللُغَوِيَات", fontClass: "font-heading" }, // Arabic
  { text: "ভাষাবিজ্ঞান", fontClass: "font-mono" }, // Bengali
  { text: "Linguística", fontClass: "font-heading" }, // Portuguese
  { text: "Лингвистика", fontClass: "font-sans" }, // Russian
  { text: "لسانیات", fontClass: "font-mono" }, // Urdu
];

const AnimatedLinguisticText: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-block w-64 text-center truncate">
            <span
                className={`${phrases[index].fontClass} font-medium text-ice-100 transition-opacity duration-300 ease-in-out`}
            >
                {phrases[index].text}
            </span>
        </div>
    );
};
  
export default AnimatedLinguisticText;
