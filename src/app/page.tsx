export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-heading font-bold text-center mb-8 animate-fade-in">
          <span className="gradient-text drop-shadow-md">Welcome to qUALMS</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-midnight-700">
              Latest Research
            </h3>
            <p className="text-midnight-500">
              Explore our cutting-edge linguistic studies...
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-midnight-700">
              Upcoming Events
            </h3>
            <p className="text-midnight-500">
              Join our next symposium on language evolution...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
