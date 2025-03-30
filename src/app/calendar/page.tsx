'use client';
import React, { useState } from "react";
import CalendarSection from "@/components/CalendarSection";
import { div } from "framer-motion/client";

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <CalendarSection />
      </div>
    </div>
  );
}