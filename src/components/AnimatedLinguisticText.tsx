'use client';
import React, { useState, useEffect } from "react";

interface Phrase {
  text: string;
  language: string;
  fontClass: string;
}

const phrases: Phrase[] = [
  { text: "Linguistics", language: "en", fontClass: "font-sans" },
  { text: "语言学", language: "zh", fontClass: "font-chinese" },
  { text: "भाषाविज्ञान", language: "hi", fontClass: "font-hindi" },
  { text: "Lingüística", language: "es", fontClass: "font-spanish" },
  { text: "Linguistique", language: "fr", fontClass: "font-french" },
  { text: "اللُغَوِيَات", language: "ar", fontClass: "font-arabic" },
  { text: "ভাষাবিজ্ঞান", language: "bn", fontClass: "font-bengali" },
  { text: "Linguística", language: "pt", fontClass: "font-portuguese" },
  { text: "Лингвистика", language: "ru", fontClass: "font-russian" },
  { text: "لسانیات", language: "ur", fontClass: "font-urdu" },
];

const AnimatedLinguisticText: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const currentPhrase = phrases[phraseIndex].text;
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(80);
        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setTypingSpeed(150);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTypingSpeed(1500); 
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(80);
          }, 1500);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed, mounted]);

  if (!mounted) return null;

  const currentPhrase = phrases[phraseIndex];
  const isRTL = ["ar", "ur"].includes(currentPhrase.language);

  return (
    <div className="animated-linguistic-text inline-block w-32 text-center h-6">
      <span
        lang={currentPhrase.language}
        dir={isRTL ? "rtl" : "ltr"}
        className={`${currentPhrase.fontClass} font-medium text-ice-100`}
      >
        {displayText}
        <span className="inline-block w-0.5 h-5 bg-lavender ml-0.5 animate-blink align-middle"></span>
      </span>
    </div>
  );
};

export default AnimatedLinguisticText;
