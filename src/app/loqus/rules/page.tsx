'use client'
import FooterSection from '@/components/Footer'
import Link from 'next/link'

export default function LOqUSRulesPage() {
	return (
		<div className="relative min-h-screen overflow-hidden scroll-smooth py-12 px-4">
			<div className="absolute inset-0 pattern-dots text-ice-300/20 -z-10" />
			<main className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
						<Link 
							href="/loqus"
							className="inline-flex items-center text-lavender hover:text-lavender/80 font-heading font-medium"
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
							Back to LOqUS
						</Link>
						<a
							href="/loqus/loqus-rules.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-4 py-2 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md font-heading font-semibold whitespace-nowrap"
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
							Download PDF
						</a>
					</div>
				</div>

				{/* Introduction */}
				<section className="mb-10 p-8 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">1. Introduction</h2>
					<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
						LOqUS, or the Linguistics Olympiad by qUALMS at State, is the Michigan State University Linguistics Olympiad event. 
						It is broken down into two exams over the course of one day. There are two different "leagues", one for high schoolers and one for undergraduates.
					</p>
					<div className="bg-lavender/10 border-l-4 border-lavender p-6 rounded-lg">
						<p className="text-lg font-academic font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
							The most general rules are that <span className="text-lavender font-bold">NO outside help is permitted</span> for the exam.
						</p>
						<div className="space-y-2 text-base font-academic text-neutral-800 dark:text-neutral-200">
							<p>
								In the first exam, working in small, pre-registered groups is allowed, but nobody may access the internet, books, or any other source that is not their own knowledge.
							</p>
							<p>
								In the second exam, working in groups is not allowed, and outside help is still not permitted.
							</p>
							<p className="font-semibold">
								The LOqUS staff reserve the right to grade any exams as a 0 if they believe you or your team to be cheating.
							</p>
						</div>
					</div>
				</section>

				{/* Group Exam */}
				<section className="mb-10 p-8 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">2. The Group Exam</h2>
					<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 leading-relaxed">
						The first exam is the <span className="font-semibold text-lavender">2 hour long group exam</span>. In groups of two or three, which must be made as part of the registration process, 
						you will answer short-answer and long-answer questions related to data analysis in the fields of Phonetics and Phonology, Morphology, Syntax, 
						and an undisclosed fourth category in the General Subjects List at the end of the document.
					</p>
				</section>

				{/* Individual Exam */}
				<section className="mb-10 p-8 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">3. The Individual Exam</h2>
					<p className="text-lg font-academic text-neutral-800 dark:text-neutral-200 leading-relaxed">
						The second exam is the <span className="font-semibold text-lavender">1 hour long individual exam</span>. As this suggests, you may not rely on your teammates to help you. 
						It will consist of multiple choice and limited short-answer questions, with any category in the General Subjects List being allowed content for the exam.
					</p>
				</section>

				{/* General Subjects List */}
				<section className="mb-10">
					<h2 className="text-3xl font-heading font-semibold mb-6 text-neutral-900 dark:text-neutral-100 uppercase">4. The General Subjects List</h2>
					<div className="bg-ice-300/30 border border-ice-300/50 rounded-lg p-4 mb-8">
						<p className="text-sm font-academic font-semibold text-neutral-700 dark:text-neutral-300">
							Note: Items with a <span className="text-lavender font-bold">(*)</span> will not be tested in the high schooler league.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Phonetics and Phonology */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Phonetics and Phonology</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>The International Phonetic Alphabet</li>
								<li>Environment-Based Rules</li>
								<li>Rule Interaction <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Neutralization <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Feature Theory</li>
								<li>Language Games</li>
							</ul>
						</div>

						{/* Morphology */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Morphology</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>Morpheme Types</li>
								<li>Reduplication</li>
								<li>Templatic</li>
								<li>Regular Morpheme Segmentation</li>
								<li>Morphophonology <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Morphosyntax <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Compounds</li>
								<li>Language Games</li>
							</ul>
						</div>

						{/* Syntax */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Syntax</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>Trees</li>
								<li>Ambiguities</li>
								<li>Movement</li>
								<li>Head-Initial vs Head-Final Structures</li>
								<li>Verb Movement <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Binding <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
							</ul>
						</div>

						{/* Semantics and Pragmatics */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Semantics and Pragmatics</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>Assertions</li>
								<li>Entailments</li>
								<li>Presuppositions</li>
								<li>Implicatures</li>
								<li>Quantifiers</li>
								<li>Negation</li>
								<li>Gricean Maxims</li>
								<li>Degrees</li>
								<li>Events <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Theories of Meaning <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
							</ul>
						</div>

						{/* Child Language Acquisition */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Child Language Acquisition</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>Word Learning</li>
								<li>Morphological Development</li>
								<li>Syntactic Development</li>
								<li>Language Emergents</li>
								<li>Pronouns and Reflexives <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Properties of Child-Directed Speech</li>
								<li>Questions <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Syllabic Development</li>
							</ul>
						</div>

						{/* Sociolinguistics */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Sociolinguistics</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>Code-Switching</li>
								<li>Language and Power</li>
								<li>Borrowings</li>
								<li>Relation of Class, Ethnicity, and Gender to Language</li>
								<li>Regional Variations in Phonology, Morphology, and Syntax</li>
							</ul>
						</div>

						{/* Historical Linguistics */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Historical Linguistics</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>Sound Changes</li>
								<li>Morphological Changes</li>
								<li>Syntactic Changes</li>
								<li>Shifts <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Borrowing</li>
								<li>Creoles and Pidgins</li>
								<li>Language Families</li>
								<li>Language Death <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
							</ul>
						</div>

						{/* Cognitive Science */}
						<div className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30">
							<h3 className="text-xl font-academicHeading font-bold mb-4 text-lavender tracking-tight border-b border-lavender/30 pb-2">Cognitive Science</h3>
							<ul className="space-y-2 font-academic text-base text-neutral-800 dark:text-neutral-200">
								<li>The Structure of the Brain</li>
								<li>Modularity of Mind</li>
								<li>Signing</li>
								<li>Animal Communication <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
								<li>Aphasia</li>
								<li>Dyslexia and Dysgraphia</li>
								<li>Computational Linguistics <span className="text-neutral-600 dark:text-neutral-400">(*)</span></li>
							</ul>
						</div>
					</div>
				</section>

				<div className="text-center mb-8">
					<Link
						href="/loqus"
						className="inline-block px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md font-heading font-semibold"
					>
						Back to LOqUS
					</Link>
				</div>

				<FooterSection />
			</main>
		</div>
	);
}

