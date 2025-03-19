interface MsulcEvent {
  id: number;
  title: string;
  date: string;
  keynoteSpeaker: string | null;
  details: string | null;
}

const msulcEvents: MsulcEvent[] = [
  {
    id: 2019,
    title: "MSULC 2019",
    date: "Friday, April 12, 2019",
    keynoteSpeaker: "Adam Liter",
    details: "MSU graduate, PhD student at the University of Maryland"
  },
  {
    id: 2018,
    title: "MSULC 2018",
    date: "Friday, April 20, 2018",
    keynoteSpeaker: "Mina Hirzel",
    details: "MSU graduate, PhD student at the University of Maryland, College Park"
  },
  {
    id: 2017,
    title: "MSULC 2017",
    date: "Friday, April 21, 2017",
    keynoteSpeaker: "Haley Farkas",
    details: "MSU graduate, PhD student at Northwestern University"
  },
  {
    id: 2016,
    title: "MSULC 2016",
    date: "Friday, April 15, 2016",
    keynoteSpeaker: "Chris O'Brien",
    details: "MSU graduate, PhD candidate at Department of Linguistics and Philosophy at MIT"
  },
  {
    id: 2015,
    title: "MSULC 2015",
    date: "Friday, April 17, 2015",
    keynoteSpeaker: "Chris Heffner",
    details: "MSU graduate, PhD candidate at University of Maryland, College Park"
  },
  {
    id: 2014,
    title: "MSULC 2014",
    date: "Friday, April 11, 2014",
    keynoteSpeaker: "Karl DeVries",
    details: "2010 MSU graduate, then 3rd year PhD student at University of California, Santa Cruz"
  },
  {
    id: 2013,
    title: "MSULC 2013",
    date: "Friday, April 5, 2013",
    keynoteSpeaker: "Megan Sutton",
    details: "2009 MSU graduate, then 4th year PhD student at the University of Maryland, College Park"
  },
  {
    id: 2012,
    title: "MSULC 2012",
    date: "Friday, April 20, 2012",
    keynoteSpeaker: "Peter Klecha",
    details: "2007 MSU graduate, then 5th year PhD student at the University of Chicago"
  },
  {
    id: 2011,
    title: "MSULC 2011",
    date: "Friday, April 22, 2011",
    keynoteSpeaker: null,
    details: null
  },
  {
    id: 2010,
    title: "MSULC 2010",
    date: "Friday, April 23, 2010",
    keynoteSpeaker: null,
    details: null
  }
];

export default function Timeline() {
  return (
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {msulcEvents.map((event, idx) => {
        let isLeft = idx % 2 == 0;
        return (
          <li key={event.id}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className={`${isLeft ? "timeline-start md:text-end" : "timeline-end md:text-start"} mb-10 max-w-sm`}>
              <time className="font-mono italic">{event.date}</time>
              <div className="text-lg font-black">{event.title}</div>
              {event.keynoteSpeaker && (
                <p>{event.keynoteSpeaker}</p>
              )}
              {event.details && (
                <p>{event.details}</p>
              )}
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  )
  
}