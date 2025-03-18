'use client';
import React, { useState } from "react";
import CalendarSection from "@/components/CalendarSection";
import { div } from "framer-motion/client";

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-8 px-12">
      <div className="max-w-5xl mx-auto">
        <CalendarSection />
      </div>
    </div>
  );
}