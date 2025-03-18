'use client';
export default function JoinUsSection() {
    return (
      <section className="mt-12 md:mt-16 p-4 md:p-8 bg-lavender/10 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl vibrant-heading mb-4 animate-slide-in-bottom">Join Our Mailing List</h2>
        <form className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 md:p-3 flex-1 border border-ice-300 rounded text-sm md:text-base"
          />
          <button type="submit" className="px-4 md:px-6 py-2 md:py-3 bg-lavender text-white rounded text-sm md:text-base hover:bg-lavender/80 transition-colors">
            Subscribe
          </button>
        </form>
      </section>
    );
}