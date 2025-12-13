'use client'
import FooterSection from '@/components/Footer'

export default function OlympiadPage() {
	return (
		<div className="relative min-h-screen overflow-hidden scroll-smooth py-12 px-4">
			<div className="absolute inset-0 pattern-dots text-ice-300/20 -z-10" />
			<main className="max-w-6xl mx-auto">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-4 text-lavender">
						<span className="gradient-text drop-shadow-lg">LOqUS</span>
					</h1>
					<p className="text-2xl font-heading font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
						Linguistics Olympiad by qUALMS at State
					</p>
					<p className="text-lg font-heading text-neutral-700 dark:text-neutral-300">
						February 7th, 2026 • Wells Hall, Michigan State University
					</p>
				</div>

				{/* Overview Card */}
				<div className="mb-12 p-8 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30">
					<h2 className="text-3xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b-2 border-lavender/30 pb-2">About LOqUS</h2>
					<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
						LOqUS is an in-person linguistics olympiad featuring two tracks: High School and Undergraduate. 
						Participants will compete in both group and individual exams, testing their knowledge across 
						various linguistic topics including phonology, morphology, syntax, and more.
					</p>
					<div className="flex flex-wrap gap-4">
						<a 
							href="mailto:eckertgu@msu.edu" 
							className="px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md font-heading font-semibold"
						>
							Contact to Register
						</a>
						<a 
							href="/loqus/rules"
							className="px-6 py-3 border-2 border-lavender text-lavender hover:bg-lavender/10 rounded-lg transition-all font-heading font-semibold"
						>
							View Rules & Guide
						</a>
						<a 
							href="mailto:eckertgu@msu.edu" 
							className="px-6 py-3 border-2 border-lavender text-lavender hover:bg-lavender/10 rounded-lg transition-all font-heading font-semibold"
						>
							Contact Us
						</a>
					</div>
				</div>

				{/* Competition Format */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Competition Format</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-2xl font-academicHeading font-bold mb-3 text-lavender tracking-tight border-b-2 border-lavender/30 pb-2">Group Exam</h3>
							<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 mb-3">
								8 hand-written questions to be solved in teams of 2 people
							</p>
							<ul className="text-base font-academic text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside">
								<li>Phonology (2 questions)</li>
								<li>Morphology (2 questions)</li>
								<li>Syntax (2 questions)</li>
								<li>Extra/Rotating Topic (2 questions)</li>
							</ul>
						</div>
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-2xl font-academicHeading font-bold mb-3 text-lavender tracking-tight border-b-2 border-lavender/30 pb-2">Individual Exam</h3>
							<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 mb-3">
								Multiple choice questions to be solved individually
							</p>
							<ul className="text-base font-academic text-neutral-700 dark:text-neutral-300 space-y-1">
								<li>High School: 45 MCQ</li>
								<li>Undergraduate: 60 MCQ</li>
								<li>Same time limit for both categories</li>
								<li>Questions cover all topics</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Schedule */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Competition Day Schedule</h2>
					<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
						<div className="space-y-6">
							<div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-4 border-b border-lavender/30">
								<div className="font-heading font-bold text-lavender text-lg sm:w-48 flex-shrink-0">10:00 AM - 10:30 AM</div>
								<div className="flex-1 font-academic text-neutral-800 dark:text-neutral-200 text-lg">Reception and student sorting</div>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-4 border-b border-lavender/30">
								<div className="font-heading font-bold text-lavender text-lg sm:w-48 flex-shrink-0">10:30 AM - 12:30 PM</div>
								<div className="flex-1 font-academic text-neutral-800 dark:text-neutral-200 text-lg">Group exam</div>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-4 border-b border-lavender/30">
								<div className="font-heading font-bold text-lavender text-lg sm:w-48 flex-shrink-0">12:30 PM - 2:00 PM</div>
								<div className="flex-1 font-academic text-neutral-800 dark:text-neutral-200 text-lg">Lunch (provided)</div>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-4 border-b border-lavender/30">
								<div className="font-heading font-bold text-lavender text-lg sm:w-48 flex-shrink-0">2:00 PM - 3:00 PM</div>
								<div className="flex-1 font-academic text-neutral-800 dark:text-neutral-200 text-lg">Individual exam</div>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center gap-3 pb-4 border-b border-lavender/30">
								<div className="font-heading font-bold text-lavender text-lg sm:w-48 flex-shrink-0">3:00 PM - 4:00 PM</div>
								<div className="flex-1 font-academic text-neutral-800 dark:text-neutral-200 text-lg">Break time</div>
							</div>
							<div className="flex flex-col sm:flex-row sm:items-center gap-3">
								<div className="font-heading font-bold text-lavender text-lg sm:w-48 flex-shrink-0">4:00 PM - 4:45 PM</div>
								<div className="flex-1 font-academic text-neutral-800 dark:text-neutral-200 text-lg">Award Ceremony and Closure</div>
							</div>
						</div>
					</div>
				</section>

				{/* Topics Covered */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Topics Covered</h2>
					<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
						<div className="mb-4">
							<h3 className="text-xl font-heading font-semibold mb-3 text-lavender">Core Topics (Every Year)</h3>
							<div className="flex flex-wrap gap-2">
								<span className="px-4 py-2 bg-lavender/10 text-lavender rounded-full font-heading font-medium">Phonology</span>
								<span className="px-4 py-2 bg-lavender/10 text-lavender rounded-full font-heading font-medium">Morphology</span>
								<span className="px-4 py-2 bg-lavender/10 text-lavender rounded-full font-heading font-medium">Syntax</span>
							</div>
						</div>
						<div>
							<h3 className="text-xl font-heading font-semibold mb-3 text-lavender">Rotating Topics</h3>
							<div className="flex flex-wrap gap-2">
								<span className="px-4 py-2 bg-ice-300/50 text-neutral-800 rounded-full font-heading font-medium">Child Language Acquisition</span>
								<span className="px-4 py-2 bg-ice-300/50 text-neutral-800 rounded-full font-heading font-medium">Sociolinguistics</span>
								<span className="px-4 py-2 bg-ice-300/50 text-neutral-800 rounded-full font-heading font-medium">Cognitive Science</span>
								<span className="px-4 py-2 bg-ice-300/50 text-neutral-800 rounded-full font-heading font-medium">Historical Linguistics</span>
								<span className="px-4 py-2 bg-ice-300/50 text-neutral-800 rounded-full font-heading font-medium">Semantics & Pragmatics</span>
							</div>
						</div>
					</div>
				</section>

				{/* Registration & Fees */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Registration & Fees</h2>
					<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
						<div className="mb-4">
							<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 mb-4">
								Registration fee: <span className="font-bold text-lavender">$20.00</span>
							</p>
							<p className="text-base font-academic text-neutral-700 dark:text-neutral-300">
								MSU students have the registration fee waived. Registration includes lunch, snacks, and drinks.
							</p>
						</div>
						<a 
							href="mailto:eckertgu@msu.edu" 
							className="inline-block px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md font-heading font-semibold"
						>
							Contact to Register
						</a>
					</div>
				</section>

				{/* Location */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Location</h2>
					<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
						<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 mb-2">
							<strong className="text-lavender">Wells Hall</strong>, Michigan State University
						</p>
						<p className="text-base font-academic text-neutral-700 dark:text-neutral-300">
							Rooms will be assigned based on registration numbers. Final room assignments will be sent to registered participants via email.
						</p>
					</div>
				</section>

				{/* Important Dates */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Important Dates</h2>
					<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
						<div className="space-y-3">
							<div className="flex flex-col sm:flex-row">
								<div className="font-heading font-bold text-midnight-800 sm:w-48 mb-1 sm:mb-0">December 3rd, 2025</div>
								<div className="flex-1 font-sans text-neutral-800 dark:text-neutral-200">Guide and Rules Handbook published</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="font-heading font-bold text-midnight-800 sm:w-48 mb-1 sm:mb-0">January 19th, 2026</div>
								<div className="flex-1 font-sans text-neutral-800 dark:text-neutral-200">Open applications for volunteering graders</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="font-heading font-bold text-midnight-800 sm:w-48 mb-1 sm:mb-0">February 7th, 2026</div>
								<div className="flex-1 font-heading font-bold text-lavender">COMPETITION DAY</div>
							</div>
						</div>
					</div>
				</section>

				{/* Contact */}
				<section className="mb-12">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">Questions?</h2>
					<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
						<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 mb-4">
							For questions about LOqUS, registration, or sponsorship opportunities, please contact:
						</p>
						<p className="text-xl font-heading font-semibold text-lavender">
							<a href="mailto:eckertgu@msu.edu" className="hover:underline">eckertgu@msu.edu</a>
						</p>
						<p className="text-base font-academic text-neutral-700 dark:text-neutral-300 mt-2">
							Eckert Roda, Guilherme - Event Coordinator
						</p>
					</div>
				</section>

				<FooterSection />
			</main>
		</div>
	);
}
