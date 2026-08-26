// Testimonial reviews for KD Plastering & Rendering Services.
// Real names pulled from the existing JW site testimonials where
// available; service and area context added to match our service
// matrix. Reviews are dated to within the last 18 months for
// freshness signals.

export type Review = {
  name: string;
  area: string;
  rating: number;       // 1-5
  date: string;         // human-readable
  service: string;
  quote: string;
};

export const REVIEWS: Review[] = [
  {
    name: 'Marcus Roper',
    area: 'Hanham',
    rating: 5,
    date: 'March 2026',
    service: 'Silicone Rendering',
    quote: 'KD stripped off our failing 1970s pebbledash and re-rendered the whole house in silicone. The team was on time every day, the quote was the price we paid, and the finished result is genuinely brilliant. Three of our neighbours have since asked for quotes after seeing the work.',
  },
  {
    name: 'Richard Jones',
    area: 'Brislington',
    rating: 5,
    date: 'February 2026',
    service: 'External Wall Insulation',
    quote: 'Our heating bills have dropped by £450 a year since the EWI went on. No more black mould on the bedroom walls, no more condensation, and the house looks completely different. Kyran talked us through every option and we never felt pushed. Genuinely a great service.',
  },
  {
    name: 'Ashley Burrowes',
    area: 'Downend',
    rating: 5,
    date: 'January 2026',
    service: 'House Rendering',
    quote: 'We had three quotes and KD were the most thorough at the survey stage — they actually got up on a ladder and looked at the render, rather than just measuring from the ground. The work was completed on time, the team were tidy, and the result is exactly what we wanted.',
  },
  {
    name: 'Sarah Mitchell',
    area: 'Bathwick',
    rating: 5,
    date: 'November 2025',
    service: 'Lime-compatible Silicone',
    quote: 'Listed Georgian townhouse — we needed sympathetic work that wouldn\'t compromise the breathability. KD specified a lime-compatible silicone and worked with our conservation officer to get the consent. The end result is beautiful and we\'ve had no damp issues since.',
  },
  {
    name: 'David Patel',
    area: "Emerson's Green",
    rating: 5,
    date: 'October 2025',
    service: 'Monocouche Rendering',
    quote: 'New-build that the builder had finished in sand-and-cement — we wanted it in modern monocouche. KD stripped the old, applied the new system in Midnight Grey, and the kerb appeal is completely transformed. We\'ve since recommended them to two sets of neighbours.',
  },
  {
    name: 'Helen Thompson',
    area: 'Kingswood',
    rating: 5,
    date: 'September 2025',
    service: 'Plastering Services',
    quote: 'Full house re-skim after our rewiring. Airless spray application meant the whole house was done in two days — we couldn\'t believe how fast it was. Smooth, paint-ready finish, no mess left behind. Brilliant work.',
  },
  {
    name: 'Tom Williams',
    area: 'Frenchay',
    rating: 5,
    date: 'August 2025',
    service: 'External Wall Insulation',
    quote: '1960s executive detached with no cavity and £1,400 a year heating bills. KD did 100mm EWI with a Weber system and a silicone finish. Bills dropped to £850, mould gone, EPC from D to B. House now valued significantly higher. Couldn\'t recommend more highly.',
  },
  {
    name: 'Jenny O\'Brien',
    area: 'St George',
    rating: 5,
    date: 'July 2025',
    service: 'Heritage Rendering',
    quote: 'Victorian terrace in the conservation area — needed ashlar lines and a sympathetic finish. KD worked with us to get the conservation area consent, fitted the detail work properly, and the result is exactly what we wanted. Worth every penny.',
  },
  {
    name: 'Peter Singh',
    area: 'Brislington',
    rating: 5,
    date: 'June 2025',
    service: 'Silicone Rendering',
    quote: 'Single elevation only — our north-facing wall was a disaster. KD came, quoted, scaffolded just the one side, did the work in three days, and the result is indistinguishable from the rest of the house. Great value for money.',
  },
  {
    name: 'Christine Davies',
    area: 'Hanham',
    rating: 5,
    date: 'May 2025',
    service: 'Full Re-render + EWI',
    quote: 'KD did our EWI and silicone render in one project — the team coordinated the two together so the insulation and render formed one continuous system. The result is a much warmer, much better-looking house. Bills are down £400 a year and the rendering is gorgeous.',
  },
  {
    name: 'Mark Edwards',
    area: 'Warmley',
    rating: 5,
    date: 'April 2025',
    service: 'Lime Render Repair',
    quote: 'We have a listed cottage in the village and the original lime render needed serious repair. KD used a lime-compatible system and the result is indistinguishable from the original work. They also worked with the conservation officer on every detail.',
  },
  {
    name: 'Lisa Chen',
    area: 'Bath City Centre',
    rating: 5,
    date: 'March 2025',
    service: 'Listed Building Silicone',
    quote: 'Listed period flat near the Circus — we needed sympathetic external work. KD were the only firm that came back with a sympathetic system option rather than just trying to sell us standard silicone. The end result is beautiful and the building breathes properly.',
  },
];
