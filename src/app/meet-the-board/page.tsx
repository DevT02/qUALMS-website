'use client';
import Image from 'next/image';
export default function MeetTheEboard() {
    const eboardMembers = [
      { name: "Ankith Ram Mohan", role: "President", image: "/members/ankith.png", fav_word: "ಅಯ್ಯೋ", alt: "Picture of Ankith"  },
      { name: "E. Sophia Normandin", role: "Vice President", image: "/members/sophia.png", fav_word: "tisquismiquis", alt: "Picture of Sophia" },
      { name: "Ezekiel Brown", role: "Secretary", image: "/members/eze.png", fav_word: "противоположний", alt: "Picture of Ezekiel" },
      { name: "Shashwat Krishna", role: "Treasurer", image: "/members/shashwat.png", fav_word: "je ne sais quoi", alt: "Picture of Shashwat" },
      { name: "Lyle", role: "Designer", image: "/members/lyle.png", alt: "Picture of Lyle" },
      { name: "Devansh Tayal", role: "Tech/IT", image: "/members/devansh.jpg", alt: "Picture of Devansh" },

      // Add additional members...
    ];
  
    const committeeMembers = [
      { name: "Malosza Syrocki", role: "Member", image: "/members/malosza.png", fav_word: "bajo-bajo", alt: "Picture of Malosza"  },
      { name: "Guilherme Eckert Roda", role: "Member", image: "/members/gui.jpeg", alt: "Picture of Guilherme"  },
      // Add additional members...
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Meet the Board</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {eboardMembers.map((member) => (
          <div key={member.name} className="card p-4">
            <Image src={member.image} alt={member.name} width={300} height={300}
              className="w-full h-auto rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-midnight-500">{member.role}</p>
            {member.fav_word && (
              <span className="text-base">
                Favorite Word: {member.fav_word}
              </span>
            )}
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
              {member.fav_word && <span className="text-base">Favorite Word: {member.fav_word}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }
  