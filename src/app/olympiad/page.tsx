import React from "react";

export default function OlympiadPage() {
	return (
		<main className="max-w-4xl mx-auto py-12 px-6">
			{/* Featured header panel — concise public summary */}
			<div className="mb-8">
				<div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
					<h1 className="text-3xl font-semibold text-lavender mb-3">In‑Person Exams & Olympiad — Feb 2026</h1>
					<p className="text-gray-700 leading-relaxed mb-4">We will host two exam tracks (High School and Undergraduate). Registration and general event details are available below; final logistics are sent to registered participants.</p>
					<div className="flex flex-wrap gap-3">
						<a href="/register" className="px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">Register / Volunteer</a>
						<a href="mailto:syrockia@msu.edu" className="px-6 py-3 border-2 border-ice-300/50 text-neutral-800 rounded-lg transition-all">Contact Secretary</a>
					</div>
				</div>
			</div>

 			{/* Detailed sections (kept content, adjusted spacing) */}
			<section className="mb-8">
				<h2 className="text-3xl font-semibold text-ice-800/70 mb-4">Overview</h2>
				<p className="text-lg text-neutral-800 mb-2">An in-person olympiad and written exams designed for high school and undergraduate participants. The public site lists registration and general info; registered participants will receive final schedules and room assignments.</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold text-ice-800/70 mb-3">How to Participate</h2>
				<p className="text-neutral-800 mb-2">Sign up on the registration page. Eligibility, format, and any required materials will be listed there. If you have questions about eligibility, contact the Secretary.</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold text-ice-800/70 mb-3">Support & Sponsorship</h2>
				<p className="text-neutral-800 mb-2">We welcome sponsors and in-kind support. Please reach out to the Secretary to discuss sponsorship opportunities; budget details are handled internally.</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold text-ice-800/70 mb-3">Contact & Next Steps</h2>
				<ul className="list-disc list-inside text-neutral-800">
					<li>Registration page will list exact dates, times, and locations when available.</li>
					<li>Registered participants will receive final logistics via email.</li>
					<li>Questions or sponsorship inquiries: <a className="text-lavender underline" href="mailto:syrockia@msu.edu">syrockia@msu.edu</a> (Club Secretary).</li>
				</ul>
			</section>
 		</main>
 	);
}
