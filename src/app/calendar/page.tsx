'use client';
import React, { useState } from "react";
import CalendarSection from "@/components/CalendarSection";
import { div } from "framer-motion/client";

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Calendar</h1>
        <CalendarSection />
      </div>
    </div>
  );
}