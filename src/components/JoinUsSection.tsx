'use client';
export default function JoinUsSection() {
    return (
      <section className="mt-16 p-8 bg-lavender/10 rounded-lg shadow-md">
        <h2 className="text-2xl vibrant-heading mb-4 animate-slide-in-bottom">Join Us</h2>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 flex-1 border border-ice-300 rounded"
          />
          <button type="submit" className="px-6 py-3 bg-lavender text-white rounded">
            Subscribe
          </button>
        </form>
        <div className="mt-6">
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            className="inline-block px-6 py-3 bg-midnight-700 text-ice-100 rounded"
          >
            Join our Discord
          </a>
        </div>
      </section>
    );
}
  