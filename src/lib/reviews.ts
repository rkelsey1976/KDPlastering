// Customer reviews for KD Plastering & Rendering Services.
//
// EVERY ENTRY IS VERBATIM FROM THE GOOGLE BUSINESS PROFILE.
//
// The previous version of this file carried invented quotes attributed to
// real, named customers — Marcus Roper was credited with a silicone
// re-render when his review is about a kitchen, Richard Jones with an EWI
// job and a "£450 a year" saving when his is a bedroom skim. Nine of the
// twelve names did not appear in the Google reviews at all. Under the
// Digital Markets, Competition and Consumers Act 2024 that is not a
// content problem, it is an illegal one.
//
// So the rules for this file:
//   * The quote is the customer's own words. Light tidying of obvious typos
//     only; never a rewrite, never an added detail.
//   * `service` is set only where the reviewer names the work.
//   * `area` is set only where the reviewer names a place. Most did not, so
//     most are empty — the components fall back to city-wide rather than
//     inventing a neighbourhood.
//   * `rating` is what they gave. Ryan Arnott's 4/5 is kept at 4.
//
// Not included: one negative review (Stacey, Feb 2026) about materials and
// rubble left on a public road. It is genuine and worth answering on Google,
// but a testimonial component is not the place for it.

export type Review = {
  name: string;
  /** Only where the reviewer named a place. Empty is normal. */
  area: string;
  rating: number;       // 1-5, as given
  date: string;         // month the review was left
  service: string;
  quote: string;
  source: 'Google' | 'Checkatrade';
  /** Checkatrade records the job postcode. Real, and more precise than the
      area names Google reviews almost never mention. */
  postcode?: string;
  /** Checkatrade scores out of 10; kept alongside the 1-5 rating. */
  score?: string;
  /** Checkatrade reviews carry a customer-written title, and it often names
      the job more precisely than the body does — "Listed building Lime
      Plaster system", "Garage conversion rendered". */
  title?: string;
  /** Listed / conservation / lime work. The Bath proposition rests on this
      capability and there is currently exactly one review evidencing it. */
  heritage?: boolean;
};

export const REVIEWS: Review[] = [
  {
    name: "Paul Badman",
    area: "",
    rating: 5,
    date: "July 2026",
    service: "Silicone Rendering",
    quote:
      "Great service, the team just got on with the works and completed the silicone rendering on our garage with no fuss. The job looks great and has transformed the look of the garage. Would use again!",
    source: 'Google',
  },
  {
    name: "James Fox",
    area: "",
    rating: 5,
    date: "June 2026",
    service: "Plastering",
    quote:
      "Kyran responded quickly to my request for a quote, and then followed up with a decent job at my flat. He kept me in the picture, and cleaned up after he finished. I would definitely recommend Kyran for any plastering & rendering work.",
    source: 'Google',
  },
  {
    name: "Steven Murphy",
    area: "",
    rating: 5,
    date: "June 2026",
    service: "Silicone Rendering",
    quote:
      "Brilliant service. The guys were punctual, professional and did the job in excellent time. Could not be happier with the results. 5/5. Matched silicone colours superbly",
    source: 'Google',
  },
  {
    name: "Marcus Roper",
    area: "",
    rating: 5,
    date: "January 2026",
    service: "Plastering",
    quote:
      "We had Kyran from K D Plastering carry out work in our kitchen / dining area, he worked flawlessly from an early start to the end of the day to get the job done, absolutely over the moon with the end product, superb quality and a fantastic end finish. Great communication from Kyran and we will definitely use him again for any future projects.",
    source: 'Google',
  },
  {
    name: "Niel Hale, RW Projects",
    area: "",
    rating: 5,
    date: "July 2026",
    service: "Silicone Rendering",
    quote:
      "We recently hired KD Rendering to complete a silicone render project for us in Truro, and we couldn't be happier with the result. The client was absolutely over the moon with the finished job. From start to finish, Kyran and his team were highly professional, reliable, and a pleasure to work with. Their attention to detail and the quality of their workmanship were exceptional, delivering a flawless finish that exceeded expectations.",
    source: 'Google',
  },
  {
    name: "Dan P",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "House Rendering",
    quote:
      "We needed our house re-rendered due to cracks and crumbling on our current render. Kyran and his team did a great job, they are hard working lads. The rubbish was all cleared promptly aswell. Any niggling issues before completion were resolved without any problems. We love the fresh new look on our house.",
    source: 'Google',
  },
  {
    name: "Ida-May Jones",
    area: "",
    rating: 5,
    date: "April 2026",
    service: "Plastering",
    quote:
      "We got in touch on Saturday as we urgently needed plastering finished in our bathroom. We had a very quick response and Kyran was around at 8am on Sunday to get it done. He finished in just a few hours and the standard seems very good. He tidied up after himself too! We were pleased with the price considering the last minute nature of the work.",
    source: 'Google',
  },
  {
    name: "Ashley Burrowes",
    area: "",
    rating: 5,
    date: "May 2026",
    service: "Plastering",
    quote:
      "We used KD plastering at short notice - they turned up on time - very clean and a smooth finish! Highly recommend on using this company. Thanks Kerian and team we will using you again soon",
    source: 'Google',
  },
  {
    name: "Richard Jones",
    area: "",
    rating: 5,
    date: "January 2026",
    service: "Plastering",
    quote:
      "We had our bedroom skimmed by Kyran and his team. Very happy with the finished result. Great communication, fast turnaround, would recommend! Thanks!",
    source: 'Google',
  },
  {
    name: "Hannah Crocker",
    area: "",
    rating: 5,
    date: "February 2026",
    service: "Plastering",
    quote:
      "We recently had plastering work completed in our home and we couldn't be more impressed with the results. From start to finish, the professionalism and attention to detail were amazing. They communicated well from the initial message and whilst on the job to grasp what we wanted. The plasterer was punctual and tidy. They took great care in protecting our floors and furniture.",
    source: 'Google',
  },
  {
    name: "Emily Phillips",
    area: "",
    rating: 5,
    date: "March 2026",
    service: "External Wall Rendering",
    quote:
      "Sean and Kyran from KD Plastering rendered an exterior wall that had been left unfinished after a garage extension was added. They managed to work around the bad weather we had at the beginning of the year, and communicated well to let us know when they'd be round. They colour matched to the existing render perfectly - very happy!",
    source: 'Google',
  },
  {
    name: "Ruth Hoggett",
    area: "",
    rating: 5,
    date: "November 2025",
    service: "Plastering",
    quote:
      "We hired Kyran and his team to skim 3 ceilings, getting rid of artex ceilings and are really pleased with the result, the price was reasonable and communication great. The chap doing the work worked tirelessly all day and went above and beyond to get it all done in one day. The finish is neat and looks great.",
    source: 'Google',
  },
  {
    name: "Connor",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "I recently had plastering done by KD Plastering Services, and I couldn't be happier with the results. From the initial consultation through to completion, the team was punctual, professional, and meticulous. The walls now have a flawlessly smooth finish - no imperfections. Work areas were kept tidy throughout, and the final cleanup was discreet and thorough. The pricing felt fair and transparent, with no hidden surprises.",
    source: 'Google',
  },
  {
    name: "Clementina Fraser",
    area: "",
    rating: 5,
    date: "November 2025",
    service: "House Rendering",
    quote:
      "Had our front rendering replaced to colour if our choice - great work Kyran and team, completed in a timely manner and with gd communication, meeting in person at quote stage also helped!",
    source: 'Google',
  },
  {
    name: "Jake Mumford",
    area: "",
    rating: 5,
    date: "January 2026",
    service: "Plastering",
    quote:
      "Kyran turned up on short notice after I was let down by another plasterer, clean, tidy, fantastic job! Will be using again on future jobs!",
    source: 'Google',
  },
  {
    name: "Ryan Arnott",
    area: "",
    rating: 4,
    date: "August 2025",
    service: "Plastering",
    quote:
      "Very good plastering work done to cover Artex ceilings. When they started it, the work was done efficiently by a friendly team. We felt like certain things could've been explained better to us, meaning I'd rate them 4/5 overall. Though I would still recommend them, as they were good overall.",
    source: 'Google',
  },
  {
    name: "Robbie",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "Would recommend K D Plastering. When I made my initial call, I left a message and Kyran returned the call by the end of the day to arrange a house visit/quote which was efficiently done within 2 days. Really happy with the plastering that was done over the artex roof and walls. We also had a bit of outdoor rendering done to a great standard.",
    source: 'Google',
  },
  {
    name: "John Porter",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "Re plastered a bedroom that had suffered damage after the flat roof had leaked, took a little longer than planned due to problems with the ceiling but finished job was excellent. Job was done quickly and efficiently, would recommend.",
    source: 'Google',
  },
  {
    name: "A Oakley",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "Kyran and his team were brilliant. They did the job after we were let down by someone else at the last minute. Worked hard, lovely company to have in the home. Really pleased with the result.",
    source: 'Google',
  },
  {
    name: "Four Paws and Beyond",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "House Rendering",
    quote:
      "Kyran and his team joined the rendering job on our house a few weeks in. Fair to say we then turned a corner. House looks fabulous. Would recommend KD plastering services.",
    source: 'Google',
  },
  {
    name: "James Altham",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "Plastering",
    quote:
      "The team at KD Plastering came along with pretty short notice to plaster my bathroom, which really has helped with my DIY renovation. They did a good job, especially on a wall which had a patchwork substrate (my own work), which they left looking very tidy.",
    source: 'Google',
  },
  {
    name: "Matt Davis",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "Plastering",
    quote:
      "Needed all ceilings to be plastered as they were previously Artex. Can't fault the work done, and can't fault the timeframes for completing the job. Chatted to me over the phone about some questions so that was good.",
    source: 'Google',
  },
  {
    name: "Sumiya Elmi",
    area: "Bristol",
    rating: 5,
    date: "August 2023",
    service: "Plastering",
    quote:
      "Great quality of work from KD and his team. They completely transformed the bathroom and made sure to clean all the floors after the job. I highly recommend thier services it you live in the Bristol area.",
    source: 'Google',
  },
  {
    name: "Ken Hill",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "Great work by the lad who did the job. Super easy company to deal with. Everything organised very efficiently. The end product is better than I could have ever expected. Would highly recommend.",
    source: 'Google',
  },
  {
    name: "Nn Nn",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "Top company, needed my bathroom done ASAP and KD managed to do an incredible job despite the short notice and tight schedule, their price was alot more competitive than the other 3 quotes I received, this is the company you need to use for all of your plastering needs.",
    source: 'Google',
  },
  {
    name: "Karl Foster",
    area: "Bristol",
    rating: 5,
    date: "August 2024",
    service: "Plastering",
    quote:
      "I have used Kyran on a number of projects now across Bristol from patching plaster to full plastering jobs and rendering. All ways on time and work is all was first class. Would highly recommend",
    source: 'Google',
  },
  {
    name: "Stuart Condon",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "House Rendering",
    quote:
      "Kyran and his team did an excellent job rendering my house, with attention to detail. I would definitely use them again.",
    source: 'Google',
  },
  {
    name: "Mike Smith",
    area: "Bristol",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "I run a building company in bristol, had been let down by previous plasterer, Kyran & his team come in a complete the job to a high standard in short notice reasonably priced.",
    source: 'Google',
  },
  {
    name: "M Lab",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "Plastering",
    quote:
      "Excellent work from the team. Easily arranged work, arrived on time, plastered our bathroom walls, cleaned up after. Would use again and recommend.",
    source: 'Google',
  },
  {
    name: "Johm Muller",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Silicone Rendering",
    quote:
      "Kyran and his team did a fantastic job. Rendering/silicone and plastering my extension. Everything was done in a timely matter, very efficient",
    source: 'Google',
  },
  {
    name: "Jonathan Marsh",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "I had some plastering done on my bathroom by Kyle, he did a fantastic job very friendly guy, good price given for work carried out, will recommend to anyone else looking for plastering to be done.",
    source: 'Google',
  },
  {
    name: "Gareth Hopkins",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "House Rendering",
    quote:
      "Rendering work: Good bunch, got the work done quickly with no fuss. Very pleased with the finished job, would highly recommend.",
    source: 'Google',
  },
  {
    name: "Toms Puris",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "KD Plastering did a full house re plaster at one of our projects in BS7. High quality standards and friendly attitude. Highly recommend",
    source: 'Google',
  },
  {
    name: "Reza Bobi",
    area: "",
    rating: 5,
    date: "August 2026",
    service: "Plastering",
    quote:
      "I'm very happy with the plastering work. The quality was excellent, the work was completed to a very high standard, and everything was done neatly and professionally. The price was also very reasonable compared with other quotes I received. Very reliable, hardworking and friendly.",
    source: 'Google',
  },
  {
    name: "Marcus Costick",
    area: "",
    rating: 5,
    date: "August 2026",
    service: "Plastering",
    quote:
      "I used K D plastering services for the first time last week. The lads turned up when they said they were be there. They left the room clean and tidy after. And the plaster finish was top notch. We actually called them back for a small downstairs loo re plaster and wouldnt hesitate to use them again.",
    source: 'Google',
  },
  {
    name: "Laura Oakes",
    area: "",
    rating: 5,
    date: "August 2026",
    service: "Plastering",
    quote:
      "Great quality finish. Very quick at providing a quote finding a timeframe that was suitable for us. Very pleased",
    source: 'Google',
  },


  // ---- Checkatrade (9.8/10 from 194). Verified, and each carries the job
  // postcode, which is the only real area signal in any of these reviews.
  {
    name: "Tom C",
    area: "",
    rating: 5,
    date: "August 2026",
    service: "Plastering",
    quote:
      "Needed an urgent skimming and plaster in my kitchen and Kyran was able to come within 24 hours. Great service and great job done.",
    title: "Kitchen plastering",
    source: 'Checkatrade',
    postcode: "BS8",
    score: "10",
  },
  {
    name: "Matthew R",
    area: "",
    rating: 5,
    date: "August 2026",
    service: "Plastering",
    quote:
      "Quick response and quick to come and do the job. Very pleased with service. Would recommend",
    title: "Couple of walls in bathroom",
    source: 'Checkatrade',
    postcode: "BS21",
    score: "10",
  },
  {
    name: "DDB",
    area: "",
    rating: 5,
    date: "July 2026",
    service: "House Rendering",
    quote:
      "We had KD in for plastering and rendering on our house, everything down to quoting and coming out to see the job was brilliant. They kept in contact with us and told us step-by-step how the job was going. I definitely will use them again.",
    title: "Great people to work with",
    source: 'Checkatrade',
    postcode: "BS34",
    score: "10",
  },
  {
    name: "Steven M",
    area: "",
    rating: 5,
    date: "June 2026",
    service: "Silicone Rendering",
    quote:
      "We had our garage conversion rendered with a silicone finish which matched perfectly with the rest of the house. The guys were brilliant, punctual and extremely professional. Could not be happier 10/10",
    title: "Garage conversion rendered",
    source: 'Checkatrade',
    postcode: "BS14",
    score: "10",
  },
  {
    name: "Verified customer",
    area: "",
    rating: 5,
    date: "May 2026",
    service: "Plastering",
    quote:
      "Just had a bathroom rendered very pleased with the finished work carried out very professionally would recommend.",
    title: "Plastering",
    source: 'Checkatrade',
    postcode: "BS31",
    score: "10",
  },
  {
    name: "Ida-May J",
    area: "Knowle",
    rating: 5,
    date: "April 2026",
    service: "Plastering",
    quote:
      "We got in touch on Saturday as we urgently needed plastering finished in our bathroom. We had a very quick response and Kyran was around at 8am on Sunday to get it done. He finished in just a few hours and the standard seems very good.",
    title: "Quick weekend response - great quality work",
    source: 'Checkatrade',
    postcode: "BS3",
    score: "10",
  },
  {
    name: "Verified customer",
    area: "",
    rating: 5,
    date: "March 2026",
    service: "Plastering",
    quote:
      "Just had our living room ceiling plastered by K D Plastering. Very pleasant chap who done an excellent job, very pleased and won't hesitate to use the company again.",
    title: "Living room ceiling",
    source: 'Checkatrade',
    postcode: "BS14",
    score: "10",
  },
  {
    name: "Verified customer",
    area: "",
    rating: 5,
    date: "March 2026",
    service: "Plastering",
    quote:
      "Kyran quoted me for plastering work, his prices were competitive. He and Kyle carried out the work, I'm very pleased with the finish and will be booking them in again soon to complete the rest of my house. They were punctual, tidy and friendly.",
    title: "Highly recommend",
    source: 'Checkatrade',
    postcode: "BS30",
    score: "10",
  },
  {
    name: "Malcolm",
    area: "",
    rating: 5,
    date: "March 2026",
    service: "Plastering",
    quote:
      "I had a leak through my middle landing ceiling, needed to be taken down, re-insulated, reboarded and plastered. The time frame and price was agreed and the work was carried out within the time frame and to an excellent standard.",
    title: "Excellent timekeeping, reasonable pricing, pleasant, hardworking lads",
    source: 'Checkatrade',
    postcode: "BS6",
    score: "10",
  },
  {
    name: "Hannah C",
    area: "",
    rating: 5,
    date: "February 2026",
    service: "Plastering",
    quote:
      "We recently had plastering work completed in our home and we couldn't be more impressed with the results. The plasterer was punctual and tidy. They took great care in protecting our floors and furniture.",
    title: "Amazing plasterers",
    source: 'Checkatrade',
    postcode: "BS31",
    score: "10",
  },
  {
    name: "Verified customer",
    area: "Hanham",
    rating: 5,
    date: "January 2026",
    service: "Plastering",
    quote:
      "We had Kyran K.D Plastering do our kitchen area, absolutely brilliant finish and worked tirelessly all day, excellent communication, with a superb end product, we couldn't be happier.",
    title: "Plastering, excellent finished product",
    source: 'Checkatrade',
    postcode: "BS15",
    score: "10",
  },
  {
    name: "Verified customer",
    area: "Hanham",
    rating: 5,
    date: "January 2026",
    service: "House Rendering",
    quote:
      "Kyran was very professional and easy to communicate with throughout the process. He did a great job with the garage render, delivering exactly what I was looking for. I'd happily recommend him and would work with him again.",
    title: "Garage Render",
    source: 'Checkatrade',
    postcode: "BS15",
    score: "10",
  },
  {
    name: "Verified customer",
    area: "",
    rating: 5,
    date: "November 2025",
    service: "House Rendering",
    quote:
      "Great finish on our front rendering. Despite poor weather, work was arranged the quickest possible and finished in a reasonable period - would recommend. Other companies did not quote in person or follow up - well done Kyran and co!",
    title: "Tidy job on front rendering",
    source: 'Checkatrade',
    postcode: "BS16",
    score: "9.67",
  },
  {
    name: "Lawrence K",
    area: "",
    rating: 5,
    date: "November 2025",
    service: "Plastering",
    quote:
      "Kyran organised his team well and got me pencilled in with my emergency repair the same day I asked. Professionally done and helped educate me on the next steps in decorating.",
    title: "Fixing hole in ceiling",
    source: 'Checkatrade',
    postcode: "BS5",
    score: "9.33",
  },
  {
    name: "Verified customer",
    area: "Brislington",
    rating: 5,
    date: "October 2025",
    service: "Plastering",
    quote:
      "We hired Kyran and his team to skim 3 ceilings, getting rid of artex ceilings and are really pleased with the result, the price was reasonable and communication great.",
    title: "Great result. Hard working team",
    source: 'Checkatrade',
    postcode: "BS4",
    score: "9.67",
  },
  {
    name: "Verified customer",
    area: "Brislington",
    rating: 4,
    date: "October 2025",
    service: "Plastering",
    quote:
      "Kyle was very skilled at skimming our walls and we are pleased with the result. We did need to tidy up a bit at the end, but this was acceptable. Thanks KD",
    title: "Living room plaster skimming",
    source: 'Checkatrade',
    postcode: "BS4",
    score: "8.33",
  },
  {
    name: "Verified customer",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "I needed my ceiling plastered, I was on a budget and Kyran was very reasonably priced, he was professional, clean and tidy. He made adjustments for my disabled daughter.",
    title: "Thank you Kyran!",
    source: 'Checkatrade',
    postcode: "BS35",
    score: "10",
  },

  {
    name: 'Verified customer',
    area: '',
    rating: 5,
    date: 'April 2025',
    service: 'House Rendering',
    quote:
      "Kyran and his team are really good - the work done re-rendering a heritage building was first rate. Tidied and cleaned the site.",
    title: "Listed building Lime Plaster system",
    source: 'Checkatrade',
    postcode: 'BS8',
    score: '10',
    // Titled "Listed building Lime Plaster system" on Checkatrade, with five
    // photos. This is the ONLY review anywhere that evidences heritage, lime
    // or listed-building work — which is the entire premise of the six Bath
    // service pages. Worth more than any other review in this file.
    heritage: true,
  },
  {
    name: "Linda Lamb",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "Plastering",
    quote:
      "Kyren and his team were absolutely amazing very clean tidy and very polite. The job was done to the highest of standards I would most definitely recommend these guys.",
    source: 'Google',
  },
  {
    name: "John Jones",
    area: "",
    rating: 5,
    date: "February 2026",
    service: "",
    quote:
      "Kyran was very professional. Gentlemen and fair prices! Great work",
    source: 'Google',
  },
  {
    name: "Leevi Andrews",
    area: "",
    rating: 5,
    date: "April 2026",
    service: "",
    quote:
      "Work to a great standard, excellent time keeping and reasonable pricing, would and have recommended to friends",
    source: 'Google',
  },
  {
    name: "Chloe Hopkins",
    area: "",
    rating: 5,
    date: "February 2026",
    service: "",
    quote: "Fantastic work and great prices",
    source: 'Google',
  },
  {
    name: "Gemma Culross-Binding",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "",
    quote:
      "Lovely guys and hard working. Came to quote, ended up doing the job there and then, working until it was getting dark. Can't ask for more than that. Really appreciate their hard work",
    source: 'Google',
  },
  {
    name: "Aleksandra",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "Plastering",
    quote:
      "I am very happy with the plastering work. Reliable and hardworking. Would definitely recommend, in fact I am already planning to use them again.",
    source: 'Google',
  },
  {
    name: "Florin Barsan",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "Plastering",
    quote:
      "All the team KD Plastering are the best ones. I give them a few jobs (all houses to be replastered) they are very good, hard workers, really faster, best quality. I highly recommend KD PLASTERING!!",
    source: 'Google',
  },
  {
    name: "Daniel Hipkiss",
    area: "",
    rating: 5,
    date: "October 2025",
    service: "",
    quote: "Very reasonably priced and completed the work promptly",
    source: 'Google',
  },
  {
    name: "Lauren Hearle",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "",
    quote: "Amazing quality of work, quick and reliable. Definitely recommend",
    source: 'Google',
  },
  {
    name: "Mark Wynn",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "",
    quote: "Good price, good quality work, and fast. Highly recommended",
    source: 'Google',
  },
  {
    name: "Jamie Hart",
    area: "",
    rating: 5,
    date: "August 2025",
    service: "",
    quote: "Good services offered, highly recommend",
    source: 'Google',
  },
  {
    name: "Jane Kershaw",
    area: "",
    rating: 5,
    date: "August 2024",
    service: "",
    quote: "Happy to recommend",
    source: 'Google',
  },
];

/**
 * A stable, per-page selection of reviews.
 *
 * The templates previously fell back to REVIEWS.slice(0, 3), so every page
 * without an area-matched review — around 90 of them — printed the same three
 * testimonials. That was the single largest block of duplicated text on the
 * site: 84% of the words on the service x area pages were shared boilerplate.
 *
 * Seeded by the page's own slug, so a given page always gets the same trio
 * (stable across builds, no diff churn) while different pages get different
 * ones. With 65 reviews in the pool the repetition across 108 pages drops from
 * total to marginal.
 */
export function reviewsFor(seed: string, count = 3, pool: Review[] = REVIEWS): Review[] {
  if (pool.length === 0) return [];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(h, 31) + seed.charCodeAt(i)) >>> 0;
  const start = h % pool.length;
  const n = Math.min(count, pool.length);
  return Array.from({ length: n }, (_, i) => pool[(start + i) % pool.length]);
}
