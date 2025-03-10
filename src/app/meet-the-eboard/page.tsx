'use client';
export default function MeetTheEboard() {
    const eboardMembers = [
      { name: "idk", role: "President", image: "/members/alice.jpg" },
      { name: "idk", role: "Vice President", image: "/members/bob.jpg" },
      // Add additional members...
    ];
  
    const committeeMembers = [
      { name: "idk", role: "Committee Lead", image: "/committee/carol.jpg" },
      { name: "idk", role: "Member", image: "/committee/dave.jpg" },
      // Add additional members...
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Meet the Eboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {eboardMembers.map((member) => (
            <div key={member.name} className="card p-4">
              <img src={member.image} alt={member.name} className="w-full h-auto rounded" />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-midnight-500">{member.role}</p>
            </div>
          ))}
        </div>
  
        <h2 className="text-3xl font-bold mt-16 mb-8">Conference Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {committeeMembers.map((member) => (
            <div key={member.name} className="card p-4">
              <img src={member.image} alt={member.name} className="w-full h-auto rounded" />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-midnight-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  