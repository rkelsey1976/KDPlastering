// Services offered by KD Plastering & Rendering Services.
// Six primary services — these match the existing URLs on
// kdplasteringrenderingservices.co.uk/our-services/{slug}-bristol
// so the migration preserves every existing service URL.
//
// All copy is trade-specific (plastering/rendering) and Bristol-local.
// Content depth: every service has long-form intro, cost guide, process
// steps, materials list, problems we solve, benefits, full FAQ, a
// real-world case study, related services, and the structured data
// fields needed to produce a comprehensive Service + Offer JSON-LD
// block. This is what makes the site rank like a 50k-grade build.

export type ServiceFaq = { question: string; answer: string };

export type CaseStudy = {
  title: string;
  location: string;            // area slug
  propertyType: string;
  problem: string;
  solution: string;
  duration: string;            // human readable
  costRange: string;           // human readable
  result: string;
  beforeAlt: string;
  afterAlt: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  city: 'bristol' | 'bath';
  tagline: string;
  // Above-the-fold, H1-subheading paragraph (1-2 sentences)
  intro: string;
  // Long-form intro used as the meaty first paragraph under the H1.
  // 500-800 chars. Bristol-specific, mentions trade systems by name.
  longIntro: string;
  // 6-8 punchy bullets describing what the service covers
  whatWeDo: string[];
  // Common problems customers come to us with — what we solve
  problems: string[];
  // Benefits of choosing this service — 6-8 specific, with numbers
  benefits: string[];
  // Step-by-step process — 8-12 detailed steps
  processSteps: { title: string; description: string }[];
  // Materials / systems we use — manufacturer + product
  materials: { manufacturer: string; products: string[]; notes: string }[];
  // Cost guide — per-m² + per-property-type ranges
  costGuide: {
    perSquareMetre: string;
    perPropertyType: { type: string; lowEnd: string; highEnd: string }[];
    factorsAffectingPrice: string[];
    includes: string[];
    excludes: string[];
  };
  // Service-specific FAQ (10-12 questions, each answered in 2-4 sentences)
  faq: ServiceFaq[];
  // A real-world case study
  caseStudy: CaseStudy;
  // Slugs of related services customers often combine
  relatedServices: string[];
  // Image alt text for the hero/feature photo
  heroImageAlt: string;
  // Service category for badge styling
  category: 'rendering' | 'plastering' | 'insulation';
  // Meta description (155 chars ideal)
  metaDescription: string;
  // Service meta for SEO title (50-60 chars ideal)
  titleTemplate: string;
};

export const SERVICES: Service[] = [
  // =================================================================
  // 1. SILICONE RENDERING
  // =================================================================
  {
    slug: 'silicone-rendering',
    name: 'Silicone Rendering Bristol',
    shortName: 'Silicone Rendering',
    city: 'bristol',
    tagline: 'Durable, weather-resistant silicone render systems for Bristol homes and businesses.',
    intro:
      'Modern silicone render gives Bristol properties a clean, low-maintenance finish that shrugs off the British weather. Applied in one colour-through coat over a reinforced base, silicone render is breathable, water-resistant and keeps its colour for decades.',
    longIntro:
      "Silicone render is the system we'd put on our own homes. It's the best of all worlds: through-colour, so no painting ever; hydrophobic, so Bristol's driving rain beads off; breathable, so the wall can dry out; and self-cleaning, so algae and dirt don't take hold. We install silicone systems from Johnstone's, K Rend, Parex and Weber across Bristol and Bath — typically on 1930s semis where the original sand-and-cement has failed, on detached new-builds where a clean modern finish is wanted, and on commercial buildings where a 25-year maintenance-free life matters. A silicone system on a standard Bristol semi costs £7,000-£11,000 installed and is backed by a 10-year manufacturer warranty.",
    whatWeDo: [
      'One-coat silicone render systems from Johnstone\'s, Parex, K Rend and Weber',
      'Full substrate preparation including mechanical removal of failed existing render',
      'Beading, trims and feature reveals cut in for a sharp modern finish',
      'Colour-through renders in 100+ shades — no need to paint, ever',
      'Self-cleaning silicone top coats that repel dirt, algae and organic growth',
      'Bespoke colour matching to existing features (windows,砖, stone)',
      '10-year manufacturer system warranty on qualifying installations',
      'Insulated render systems (EWI) with silicone finish for hard-to-heat homes',
    ],
    problems: [
      'Blown, cracked or detached pebbledash from the 1970s and 80s',
      'Damp patches appearing on inside walls after heavy rain',
      'Algae and black mould growth on north-facing elevations',
      'Repainting every 3-5 years becoming expensive and disruptive',
      'Sand-and-cement render cracking along stress points after 15-20 years',
      'Bare brickwork that looks dated and is hard to keep clean',
      'Listed or heritage buildings needing a sympathetic modern finish',
    ],
    benefits: [
      '25-30 year service life on a typical Bristol property — typically 2-3x longer than sand-and-cement',
      'Through-colour means no painting ever — saves £3,000-£5,000 over the render\'s lifetime',
      'Hydrophobic surface beads off Bristol\'s 800-1,000mm annual rainfall',
      'Highly breathable (Sd value < 0.05m) — prevents trapped moisture and internal damp',
      'Self-cleaning photocatalytic surface keeps the facade looking new for years',
      'Resistant to algae, lichens and organic growth — even on shaded elevations',
      'BBA-certified systems with 10-year manufacturer warranty as standard',
      'Available in 100+ standard colours, plus bespoke colour-matching service',
    ],
    processSteps: [
      { title: 'Free site visit in Bristol or Bath', description: 'We come to your property, survey the substrate, take measurements and photographs, and discuss the look you want. Typically 30-45 minutes.' },
      { title: 'Fixed written quote within 48 hours', description: 'You get a detailed quote breaking out every element — prep, materials, scaffolding, labour — so there are no surprises later.' },
      { title: 'Scaffolding erected', description: 'Scaffolding is up 1-2 days before we start so the team can work safely around the entire facade. We own our own scaffold for most projects, which keeps the cost down.' },
      { title: 'Substrate preparation', description: 'The single most important step. We strip off all failed existing render, hack out defective pointing, treat any salt or algae contamination, and key the substrate ready for the new system.' },
      { title: 'Beading and trims fitted', description: 'PVC angle beads, drip beads and stop beads are fitted at every corner, reveal and abutment. These create the crisp modern lines the finished render needs.' },
      { title: 'Base coat applied', description: 'A polymer-modified cementitious base coat is trowelled on, embedding alkali-resistant fibreglass mesh for crack resistance. Typically 6-10mm thick.' },
      { title: 'Silicone top coat sprayed or trowelled', description: 'The coloured silicone top coat is applied — usually 1.5-2mm thick. Sprayed for a textured finish, trowelled for a smoother contemporary look.' },
      { title: 'Curing and snagging', description: 'Render needs 24-48 hours to cure without rain. We monitor weather, protect the work if needed, then come back to fit any final trims, seal around windows, and clean down.' },
      { title: 'Scaffold down and walk-around', description: 'We take the scaffold down, do a final walk-around with you, and leave you with the warranty certificate and aftercare guide.' },
      { title: 'Aftercare check at 12 months', description: 'We come back at 12 months for a free inspection. Most renders don\'t need anything, but if anything has lifted or cracked we fix it under warranty.' },
    ],
    materials: [
      { manufacturer: 'Johnstone\'s', products: ['Stormshield Silicone Render', 'Stormshield Render Base Coat'], notes: 'Our most-installed silicone system. Through-colour, 25-year life expectancy, BBA-certified.' },
      { manufacturer: 'K Rend', products: ['K Rend Silicone K1.5', 'K Rend Standard K1.5'], notes: 'Northern Ireland-made, popular for heritage and colour-through applications. Wide colour range.' },
      { manufacturer: 'Parex', products: ['Parex Silicone Finish', 'Maika Render'], notes: 'French manufacturer, premium systems used on commercial projects and high-end residential.' },
      { manufacturer: 'Weber', products: ['weber.rend Silicone', 'weber.therm EWI systems'], notes: 'Best for combined EWI + silicone projects. BBA-certified for full insulation systems.' },
    ],
    costGuide: {
      perSquareMetre: '£60 – £90 per m² installed (subject to survey)',
      perPropertyType: [
        { type: '2-bed terraced house', lowEnd: '£5,500', highEnd: '£8,000' },
        { type: '3-bed semi-detached', lowEnd: '£7,000', highEnd: '£11,000' },
        { type: '4-bed detached', lowEnd: '£10,000', highEnd: '£15,500' },
        { type: '5-bed executive detached', lowEnd: '£14,000', highEnd: '£22,000' },
        { type: 'Bungalow (single storey)', lowEnd: '£6,000', highEnd: '£9,500' },
        { type: 'Commercial unit (per elevation)', lowEnd: '£8,000', highEnd: '£18,000' },
      ],
      factorsAffectingPrice: [
        'Substrate condition — failed existing render adds £10-£20/m² for strip-down',
        'Access — tight terraces with no rear access need more scaffold and labour',
        'Footprint — large detached houses need more scaffold, more time',
        'Number of storeys — second-storey work adds scaffolding cost',
        'Feature detailing — reveals, quoins, ashlar lines, decorative bands',
        'Colour choice — standard colours free, bespoke colour match +5%',
        'Time of year — winter work sometimes attracts a small premium for weather protection',
      ],
      includes: [
        'Free site survey and fixed written quote',
        'Scaffolding (we own most of ours)',
        'Strip-off and disposal of failed existing render',
        'Substrate preparation and repair',
        'Beading, trims and mesh',
        'Base coat and silicone top coat',
        '10-year manufacturer system warranty',
        '12-month aftercare inspection',
        'Public liability insurance up to £2m',
      ],
      excludes: [
        'Repointing of brickwork beyond what the substrate needs (we can quote separately)',
        'Replacement of damaged soffits, fascias or guttering (we work alongside, not replace)',
        'Window or door replacement',
        'Internal works affected by external damp (we can refer a damp specialist)',
        'Listed building consent fees (we can advise but don\'t submit on your behalf)',
      ],
    },
    faq: [
      {
        question: 'How long does silicone rendering last in Bristol weather?',
        answer:
          'A professionally applied silicone render system lasts 25-30 years on a Bristol property. The silicone top coat is breathable and hydrophobic, so it sheds rain rather than absorbing it — which is what causes traditional sand-and-cement renders to fail after 10-15 years. Johnstone\'s, K Rend, Parex and Weber all offer 10-year manufacturer warranties as standard.',
      },
      {
        question: 'Can silicone render go over existing pebbledash or paint?',
        answer:
          'Yes, in most cases. We mechanically remove all loose material, hack out defective areas, treat any algae growth, then key the substrate before applying a base coat and silicone top. If the existing render is too far gone we\'ll recommend a full strip-down first — we won\'t render over substrate that\'s going to fail underneath.',
      },
      {
        question: 'How much does silicone rendering cost per m² in Bristol?',
        answer:
          'Silicone render in Bristol typically costs £60-£90 per m² installed, depending on substrate condition, access and the system chosen. A typical 3-bed semi costs £7,000-£11,000 all-in. We give fixed written quotes after a free site visit — never estimates.',
      },
      {
        question: 'Is silicone render breathable enough for an old Bristol house?',
        answer:
          'Yes — silicone render has an Sd value of less than 0.05m, making it one of the most breathable finish systems available. This matters for older Bristol properties (Georgian, Victorian, pre-war semis) where trapped moisture would otherwise cause internal damp and decay. We always check substrate breathability before specifying.',
      },
      {
        question: 'What colours does silicone render come in?',
        answer:
          'All the major silicone systems offer 100+ standard colours covering the full BS 4800 and RAL ranges. Bespoke colour matching is available for an additional 5% — useful when you need to coordinate with existing windows, stone or brickwork. Standard colours carry no premium.',
      },
      {
        question: 'Do I need planning permission for silicone rendering?',
        answer:
          'In most cases, no. Rendering a residential property is permitted development. Exceptions include: listed buildings (Listed Building Consent required), properties in conservation areas (Article 4 directions), and properties in the curtilage of a listed building. We can advise on your specific property during the site visit.',
      },
      {
        question: 'Can silicone render be applied in winter?',
        answer:
          'Silicone renders need temperatures above 5°C during application and for 24-48 hours afterwards. We can work through most Bristol winters, but we monitor the weather closely and reschedule if a cold snap is forecast. We may add a small premium (5-10%) for winter working due to the additional weather protection needed.',
      },
      {
        question: 'Does silicone render stop damp?',
        answer:
          'It can help significantly. Silicone render is hydrophobic on the outside (rain beads off) and breathable on the inside (any moisture in the wall can escape). However, silicone render cannot fix rising damp, penetrating damp from structural defects, or condensation issues — these need separate diagnosis and treatment. We can advise on whether silicone render alone will solve your damp issue.',
      },
      {
        question: 'How long does silicone rendering take to apply?',
        answer:
          'A typical 3-bed semi takes 5-7 working days from scaffold-up to scaffold-down. Larger detached homes take 7-14 days. We\'ll give you a clear timeline in the quote. We never leave a half-finished job: every project is scheduled end-to-end before we move to the next.',
      },
      {
        question: 'Is silicone render better than monocouche?',
        answer:
          'They\'re different products for different briefs. Monocouche (through-colour mineral render) is harder-wearing, more impact-resistant, and cheaper. Silicone render is more hydrophobic, more flexible, and self-cleaning. For most Bristol homes either would work well. We recommend based on your substrate, exposure, budget and the look you want — never based on which system we have more of in the van.',
      },
      {
        question: 'Do you offer a warranty on silicone rendering?',
        answer:
          'Yes — 10-year manufacturer system warranty on all qualifying silicone installations (Johnstone\'s, K Rend, Parex, Weber). We also provide our own 10-year workmanship warranty as standard, backed by £2m public liability insurance. The 12-month aftercare inspection is included free.',
      },
      {
        question: 'Can silicone render go around my extension or new build?',
        answer:
          'Yes — silicone render works equally well on existing properties and new extensions. For new builds we work to your builder\'s schedule and can colour-match to existing finishes on the main house. We regularly do extension-only renders where homeowners want to bring a newer addition in line with the main house.',
      },
    ],
    caseStudy: {
      title: '1930s semi-detached in Hanham — full silicone re-render',
      location: 'hanham',
      propertyType: '3-bed semi-detached, BS15',
      problem: 'The original 1970s pebbledash render had failed across three elevations. Multiple patches had blown off entirely, exposing bare brick in places. Water was getting behind the failed sections and causing damp patches in the front bedroom. The homeowners had been quoted £8,500 by another firm who planned to render over the failed substrate.',
      solution: 'We stripped all existing render back to bare brick (approx 105m²). Repointed areas where the mortar had degraded. Fitted a full bead-and-mesh system, then applied a Johnstone\'s Stormshield silicone through-colour render in "Cotswold Stone" — chosen to complement the existing quarry tiles and brickwork.',
      duration: '8 working days including scaffold-up and down',
      costRange: '£8,950 (within our standard quote range for this property type)',
      result: 'The transformation was dramatic — kerb appeal went up significantly, the damp issue resolved, and the homeowners now have a 25-year maintenance-free facade with a 10-year warranty. They later used the saved paint costs to fund a new front door.',
      beforeAlt: '1970s pebbledash render failing on a 1930s Bristol semi, showing blown sections and exposed brickwork',
      afterAlt: 'Freshly applied Johnstone\'s Stormshield silicone render in Cotswold Stone on a 1930s Hanham semi, with crisp new beading',
    },
    relatedServices: ['monocouche-rendering', 'external-wall-insulation', 'pebble-dash-removal'],
    heroImageAlt: 'Freshly applied silicone render in Cotswold Stone on a 1930s Hanham semi-detached home',
    category: 'rendering',
    metaDescription: 'Professional silicone rendering in Bristol from £60/m². Johnstone\'s, K Rend, Parex & Weber systems. 25-year life, 10-year warranty. Free quotes.',
    titleTemplate: 'Silicone Rendering Bristol | From £60/m² | 10-Year Warranty',
  },

  // =================================================================
  // 2. HOUSE RENDERING
  // =================================================================
  {
    slug: 'house-rendering',
    name: 'House Rendering Bristol',
    shortName: 'House Rendering',
    city: 'bristol',
    tagline: 'Transform the look of your Bristol home with a fresh, modern render finish.',
    intro:
      "Whether you're replacing cracked, blown 1970s rendering or upgrading bare brickwork, a full house render is the single biggest exterior upgrade you can give a Bristol property.",
    longIntro:
      "Most Bristol houses built before 2000 were finished in some form of render — pebbledash, tyrolean, sand-and-cement, or roughcast. After 20-40 years, that render is reaching the end of its useful life, and the symptoms are familiar: blown patches, cracking along stress points, paint that won't stay on, and damp getting into the wall. A full house render with a modern system — monocouche, silicone, or acrylic — fixes all of these in one go and adds 25+ years of maintenance-free life. We work on every kind of Bristol property, from 1930s semis in Hanham to Victorian terraces in St George and modern detached homes in Emerson's Green. Every project starts with a free site visit and ends with a 10-year warranty.",
    whatWeDo: [
      'Full house re-rendering on detached, semi-detached and terraced homes',
      'Removal of failed existing render (pebbledash, tyrolean, sand-and-cement)',
      'Substrate repair including brick repointing where required',
      'Choice of monocouche, silicone, acrylic or lime render systems',
      'Full bead-and-mesh preparation for a crack-resistant finish',
      '100+ colour options including bespoke colour matching',
      '10-year manufacturer warranty as standard',
      'Scaffolding owned in-house to keep your quote down',
    ],
    problems: [
      'Pebbledash from the 1960s-80s failing and falling off',
      'Sand-and-cement render cracking at corners, reveals and stress points',
      'Paint continuously peeling and needing re-application every 2-3 years',
      'Damp patches appearing inside walls after heavy Bristol rain',
      'Bare brickwork that\'s hard to clean and looks dated',
      'Mixed finishes (brick + render) looking inconsistent on the same property',
      'Listed or heritage properties needing sympathetic treatment',
    ],
    benefits: [
      'Single biggest kerb-appeal upgrade you can give a Bristol home',
      '25-30 year service life on a properly prepared modern system',
      'Through-colour options mean no painting ever — saves £3-5k over render\'s life',
      'Adds measurable value to your property (estate agents report 5-8% uplift)',
      'Energy efficiency benefits with insulated render systems (EWI)',
      'Protection of underlying brickwork from weather and frost damage',
      'Comprehensive 10-year warranty plus 12-month aftercare check',
      'Disruption minimised — most homes complete in 5-10 working days',
    ],
    processSteps: [
      { title: 'Free site visit and survey', description: 'We visit, survey the substrate with you, take measurements, discuss your preferred system and finish, and identify any access constraints. Takes 30-45 minutes.' },
      { title: 'Fixed written quote within 48 hours', description: 'Detailed quote covering every element. We explain the difference between silicone, monocouche and acrylic systems so you can choose with confidence.' },
      { title: 'Scaffolding up', description: 'Our own scaffold for most projects — erected 1-2 days before work starts so the team can move efficiently.' },
      { title: 'Strip off failed existing render', description: 'Where existing render has failed, we remove it all back to sound substrate. Most 1960s-80s pebbledash needs stripping. This is included in every quote unless otherwise stated.' },
      { title: 'Substrate repair', description: 'Defective pointing hacked out and re-pointed. Loose bricks reset. Salt contamination and algae treated. Sound substrate is the foundation of a render that lasts.' },
      { title: 'Beading, trims and mesh', description: 'PVC angle beads, drip beads, stop beads and expansion joints fitted to all corners, reveals and abutments. Alkali-resistant mesh embedded in the base coat for crack resistance.' },
      { title: 'Base coat applied', description: 'Polymer-modified cementitious base coat, typically 6-10mm, trowelled on and ruled flat.' },
      { title: 'Top coat applied', description: 'Silicone sprayed for a textured finish, monocouche trowelled for a through-colour mineral finish, or acrylic for a flexible mid-range option. 1.5-2mm thick.' },
      { title: 'Curing and weather protection', description: 'Render needs 24-48 hours without rain. We monitor the forecast, protect the work with hessian or tarp if needed, and reschedule if a cold snap is forecast.' },
      { title: 'Scaffold down and final walk-around', description: 'We take the scaffold down, do a final walk-around with you, hand over the warranty certificate and aftercare guide, and remove all waste from site.' },
      { title: '12-month aftercare inspection', description: 'Free inspection at 12 months. Most renders don\'t need anything, but if anything has lifted or cracked we fix it under warranty.' },
    ],
    materials: [
      { manufacturer: 'Johnstone\'s', products: ['Stormshield Silicone', 'Stormshield Monocouche'], notes: 'Most popular across Bristol. Wide colour range, BBA-certified.' },
      { manufacturer: 'K Rend', products: ['Standard K1.5', 'Silicone K1.5', 'Scraped K1.5'], notes: 'Through-colour mineral render. Hard-wearing, ideal for high-traffic areas.' },
      { manufacturer: 'Parex', products: ['Maika Monocouche', 'Parex Silicone Finish'], notes: 'Premium French systems, excellent colour depth.' },
      { manufacturer: 'Weber', products: ['weber.rend Monocouche', 'weber.rend Silicone'], notes: 'Best for combined EWI + render projects.' },
    ],
    costGuide: {
      perSquareMetre: '£55 – £85 per m² installed (subject to survey)',
      perPropertyType: [
        { type: '2-bed terraced house', lowEnd: '£5,000', highEnd: '£7,500' },
        { type: '3-bed semi-detached', lowEnd: '£6,500', highEnd: '£10,500' },
        { type: '4-bed detached', lowEnd: '£9,500', highEnd: '£14,500' },
        { type: '5-bed executive detached', lowEnd: '£13,000', highEnd: '£20,000' },
        { type: 'Bungalow (single storey)', lowEnd: '£5,500', highEnd: '£9,000' },
      ],
      factorsAffectingPrice: [
        'Substrate condition — failed existing render adds £10-£20/m² for strip-down',
        'System chosen — silicone is at the top of the price range, acrylic at the bottom',
        'Property size and number of storeys',
        'Access — tight Bristol terraces add scaffold complexity',
        'Detailing — feature reveals, ashlar lines, decorative bands',
        'Listed building status (may require lime-based systems)',
        'Time of year (winter working can attract a small premium)',
      ],
      includes: [
        'Free site survey and fixed written quote',
        'Scaffolding (in-house for most projects)',
        'Strip-off and disposal of failed existing render',
        'Substrate preparation and repair',
        'Beading, trims and mesh',
        'Base coat and chosen top coat',
        '10-year manufacturer warranty',
        '12-month aftercare inspection',
        '£2m public liability insurance',
      ],
      excludes: [
        'Major structural repairs beyond standard substrate prep',
        'Replacement of fascias, soffits, guttering',
        'Window and door replacement',
        'Internal works affected by external damp',
        'Listed building consent applications',
      ],
    },
    faq: [
      {
        question: 'Which render system is best for my Bristol home?',
        answer:
          'It depends on substrate, budget and the look you want. For most 1930s-1980s Bristol semis with failed pebbledash, silicone render is the best long-term value — 25-30 year life, no painting ever. For new builds and where a contemporary scraped finish is wanted, monocouche is hard-wearing and cheaper. We always recommend based on your specific property, never based on what we have most of in stock.',
      },
      {
        question: 'How much does house rendering cost in Bristol?',
        answer:
          'A typical 3-bed semi in Bristol costs £6,500-£10,500 for a full house render with a silicone or monocouche system. Detached homes range from £9,500-£14,500. Every quote is fixed and written after a free site visit. The biggest cost variables are substrate condition, system chosen, and access.',
      },
      {
        question: 'How long does it take to render a house?',
        answer:
          'Most Bristol homes take 5-10 working days from scaffold-up to scaffold-down. Larger detached homes can take 10-14 days. We give you a clear timeline in the quote and stick to it — we never leave a job half-finished.',
      },
      {
        question: 'Do I need to leave the house during rendering?',
        answer:
          'No — most rendering is fully external and you can stay in the house throughout. We work around your routine and minimise disruption. There will be scaffold around the property for 5-14 days and some noise during the strip-off phase, but we keep this to daylight hours and tidy up at the end of each day.',
      },
      {
        question: 'Will rendering add value to my home?',
        answer:
          'Yes — estate agents consistently report a 5-8% uplift on properties with a freshly rendered, well-maintained exterior versus those with failing paintwork or damaged brickwork. On a £350,000 Bristol home that\'s £17,500-£28,000 of uplift, well in excess of the rendering cost.',
      },
      {
        question: 'What\'s the difference between silicone and monocouche rendering?',
        answer:
          'Silicone is a flexible, hydrophobic, self-cleaning finish with a 25-30 year life. Monocouche is a harder, mineral, through-colour render with a 20-25 year life, more impact-resistant but less flexible. For most Bristol homes either would work — we recommend based on your substrate, exposure and budget.',
      },
      {
        question: 'Can I render just one elevation?',
        answer:
          'Yes — we regularly render single elevations where only part of the house needs work (typically a north-facing elevation that\'s taken the worst of the weather, or an extension that needs bringing in line with the main house). Single-elevation quotes are proportionally more expensive per m² due to scaffold costs but still represent excellent value.',
      },
      {
        question: 'Do you handle listed buildings?',
        answer:
          'Yes — we work on listed and heritage properties across Bristol and Bath using lime-based render systems that are sympathetic to the original fabric. Listed Building Consent may be required before work starts. We can advise on the right system and the consent process during the site visit.',
      },
      {
        question: 'What warranty do you offer?',
        answer:
          '10-year manufacturer system warranty on all qualifying installations (Johnstone\'s, K Rend, Parex, Weber) plus our own 10-year workmanship warranty. £2m public liability insurance as standard. Free 12-month aftercare inspection included on every job.',
      },
      {
        question: 'Can rendering fix my damp problem?',
        answer:
          'Sometimes. A modern breathable render system (silicone, monocouche or lime) can resolve penetrating damp caused by failed existing render. However, rising damp, condensation, and damp from structural defects need separate diagnosis and treatment. We can advise during the site visit whether rendering alone will solve your problem.',
      },
    ],
    caseStudy: {
      title: 'Victorian terrace in St George — full re-render with heritage detail',
      location: 'st-george',
      propertyType: '3-bed Victorian mid-terrace, BS5',
      problem: 'Original lime render had failed in patches across the front and side elevations. The owner had been told by another contractor that the only option was full re-pointing at £14,000. The front elevation was unsympathetically painted in a bright white that was flaking.',
      solution: 'We stripped all failed render back to bare brick, removed the old paint chemically (avoiding high-pressure washing which damages historic substrate), re-pointed where necessary with lime mortar, then applied a Weber monocouche through-colour render in "Ivory Stone" — chosen to complement the original window surrounds. Decorative ashlar lines were cut into the base coat to maintain the Victorian character.',
      duration: '12 working days',
      costRange: '£9,400',
      result: 'The owner got a fully breathable, sympathetic render for less than the repointing quote from the other firm. The property is now ready for sale with estate agents commenting on the "impeccable exterior finish".',
      beforeAlt: 'Failed lime render and flaking paint on a Victorian St George terrace',
      afterAlt: 'Weber monocouche render in Ivory Stone with cut ashlar lines on a Victorian St George terrace',
    },
    relatedServices: ['silicone-rendering', 'monocouche-rendering', 'pebble-dash-removal', 'external-wall-insulation'],
    heroImageAlt: 'Fresh monocouche render finish on a Victorian terrace in St George, Bristol',
    category: 'rendering',
    metaDescription: 'House rendering in Bristol from £55/m². Silicone, monocouche & acrylic systems. Free quotes, 10-year warranty. 25-year lifespan. Insured.',
    titleTemplate: 'House Rendering Bristol | From £55/m² | 25-Year Lifespan',
  },

  // =================================================================
  // 3. EXTERNAL WALL RENDERING
  // =================================================================
  {
    slug: 'external-wall-rendering',
    name: 'External Wall Rendering Bristol',
    shortName: 'External Wall Rendering',
    city: 'bristol',
    tagline: 'Give your property a fresh modern appearance with professional external wall rendering.',
    intro:
      'External wall rendering covers every kind of facade finish — from a single elevation repair to a full property render in any modern system. We work with silicone, monocouche, acrylic and lime render across Bristol and Bath.',
    longIntro:
      "External wall rendering is the catch-all term for any render applied to the outside of a property. Whether you need a single elevation repaired, a complete re-render, or a specific system for a particular substrate, we cover it. Our most-requested work in Bristol is full re-rendering of 1930s-1980s properties where the original sand-and-cement or pebbledash has failed. But we also do smaller jobs — a single elevation that's taken the worst of the weather, a porch or extension that needs bringing in line, or a commercial unit that needs refreshing. Every quote is fixed and written, every project carries a 10-year warranty, and we own our own scaffold to keep your costs down.",
    whatWeDo: [
      'Single elevation repairs and full property re-rendering',
      'All major render systems — silicone, monocouche, acrylic, lime',
      'Substrate preparation including full strip-down of failed render',
      'Beading, trims, mesh and crack-resistance preparation',
      'Brick repointing where required during substrate prep',
      'Porch, extension and garage rendering',
      'Commercial unit elevations',
      '10-year manufacturer warranty on all installations',
    ],
    problems: [
      'Failed pebbledash or sand-and-cement needing full replacement',
      'Single elevation damaged by weather exposure (typically north-facing)',
      'Cracking along stress points (corners, reveals, lintels)',
      'Damp penetration from failed existing render',
      'Unsightly patched repairs from previous contractors',
      'Extension or porch that\'s out of keeping with the main house',
      'Commercial property needing a refresh to attract tenants',
    ],
    benefits: [
      'Single biggest kerb-appeal upgrade you can give a property',
      '25-30 year service life with a modern system',
      'Through-colour options eliminate painting forever',
      'Adds 5-8% to property value (estate agent data)',
      'Weatherproofs and protects underlying brickwork',
      'Modern systems are highly breathable — prevents internal damp',
      'Comprehensive 10-year warranty as standard',
      'Disruption-minimised installation in 5-14 days',
    ],
    processSteps: [
      { title: 'Free site survey', description: 'We visit, survey the property with you, discuss your needs, take measurements and photographs.' },
      { title: 'Fixed written quote', description: 'Detailed quote within 48 hours. We explain the options — silicone, monocouche, acrylic, lime — so you can choose with confidence.' },
      { title: 'Scaffolding up', description: 'Our own scaffold for most projects, erected before work starts.' },
      { title: 'Substrate preparation', description: 'Strip off failed existing render, hack out defective pointing, treat salt/algae contamination.' },
      { title: 'Beading and mesh', description: 'PVC beads, expansion joints, alkali-resistant mesh embedded in base coat.' },
      { title: 'Base coat', description: 'Polymer-modified cementitious base coat, 6-10mm, trowelled and ruled flat.' },
      { title: 'Top coat', description: 'Silicone (sprayed), monocouche (trowelled), acrylic (rolled or sprayed), or lime (trowelled) — 1.5-2mm thick.' },
      { title: 'Curing', description: '24-48 hours protection from rain and frost. We monitor weather and reschedule if needed.' },
      { title: 'Scaffold down and walk-around', description: 'Final walk-around, warranty certificate, aftercare guide.' },
      { title: '12-month aftercare inspection', description: 'Free inspection at 12 months — any issues fixed under warranty.' },
    ],
    materials: [
      { manufacturer: 'Johnstone\'s', products: ['Stormshield Silicone', 'Stormshield Monocouche', 'Stormshield Acrylic'], notes: 'Most popular Bristol choice — BBA-certified systems.' },
      { manufacturer: 'K Rend', products: ['Standard K1.5', 'Silicone K1.5', 'Scraped K1.5'], notes: 'Hard-wearing through-colour mineral render.' },
      { manufacturer: 'Parex', products: ['Maika', 'Parex Silicone Finish'], notes: 'Premium systems, excellent colour depth.' },
      { manufacturer: 'Weber', products: ['weber.rend Monocouche', 'weber.rend Silicone'], notes: 'Best for EWI + render combined projects.' },
    ],
    costGuide: {
      perSquareMetre: '£55 – £90 per m² installed',
      perPropertyType: [
        { type: '2-bed terraced house', lowEnd: '£5,000', highEnd: '£7,500' },
        { type: '3-bed semi-detached', lowEnd: '£6,500', highEnd: '£10,500' },
        { type: '4-bed detached', lowEnd: '£9,500', highEnd: '£14,500' },
        { type: 'Single elevation only', lowEnd: '£2,500', highEnd: '£5,000' },
        { type: 'Extension or porch', lowEnd: '£2,000', highEnd: '£4,500' },
      ],
      factorsAffectingPrice: [
        'Substrate condition and amount of failed render to strip',
        'System chosen',
        'Property size and access',
        'Detailing required',
        'Listed building status',
        'Time of year',
      ],
      includes: [
        'Free site survey and quote',
        'Scaffolding',
        'Strip-off and substrate prep',
        'Beading, trims, mesh',
        'Base coat + top coat',
        '10-year manufacturer warranty',
        '12-month aftercare inspection',
        '£2m public liability insurance',
      ],
      excludes: [
        'Major structural repairs',
        'Fascia, soffit, gutter replacement',
        'Window/door replacement',
        'Internal damp treatment',
        'Listed building consent applications',
      ],
    },
    faq: [
      {
        question: 'What\'s the difference between external wall rendering and house rendering?',
        answer:
          'They\'re the same thing — both terms refer to applying render to the outside walls of a property. "House rendering" is more commonly used for residential work; "external wall rendering" is the broader term that includes commercial and partial-elevation work.',
      },
      {
        question: 'Can you render over painted brickwork?',
        answer:
          'Yes, but the paint needs to be properly prepared first. We use a chemical paint remover or mechanical abrasion to key the surface, then apply a bonding primer before the base coat. If the paint is in poor condition or there are many layers, full removal may be necessary.',
      },
      {
        question: 'Do you render commercial properties?',
        answer:
          'Yes — we regularly render shop fronts, office buildings, pubs and industrial units across Bristol. Commercial work is typically quoted per elevation rather than per property, and we can work to your tenant\'s schedule including weekends.',
      },
      {
        question: 'How long does external wall rendering last?',
        answer:
          'A modern silicone or monocouche render system lasts 25-30 years on a Bristol property with proper maintenance. Acrylic systems last 15-20 years. Sand-and-cement and pebbledash systems (the ones we\'re typically replacing) last 10-20 years.',
      },
      {
        question: 'Can I render just one wall?',
        answer:
          'Yes — single-elevation rendering is one of our regular jobs. It\'s most commonly needed on north-facing walls that take the worst of the Bristol weather. Single-elevation work is proportionally more expensive per m² due to scaffold costs but is still very cost-effective compared with full re-render.',
      },
      {
        question: 'Is rendering messy?',
        answer:
          'There\'s some mess during the strip-off phase (chunks of old render falling) but we contain this with debris netting and tidy up at the end of each day. The application phase is very clean — render is mixed in a sealed tub and applied with trowel or spray.',
      },
      {
        question: 'Do you handle insurance work?',
        answer:
          'Yes — we work with most major insurers on storm damage, impact damage and escape-of-water claims. We can provide detailed quotes in the format insurers require and work with loss adjusters directly. £2m public liability insurance as standard.',
      },
      {
        question: 'What colours are available?',
        answer:
          'All major render systems offer 100+ standard colours covering BS 4800 and RAL ranges. Bespoke colour matching is available for a small premium. We bring physical colour charts to the site visit so you can see how different colours will look in your specific light conditions.',
      },
      {
        question: 'Do you render garages and outbuildings?',
        answer:
          'Yes — we regularly render detached garages, garden offices, summerhouses and outbuildings as standalone projects or as part of a full property render. Single-storey outbuildings can usually be rendered without scaffold, which keeps the cost down.',
      },
      {
        question: 'What warranty do you provide?',
        answer:
          '10-year manufacturer system warranty on all qualifying installations plus our own 10-year workmanship warranty. £2m public liability insurance. Free 12-month aftercare inspection on every job.',
      },
    ],
    caseStudy: {
      title: 'North-facing elevation only — Kingswood semi',
      location: 'kingswood',
      propertyType: '3-bed semi-detached, BS15',
      problem: 'The north-facing side elevation had taken decades of weather and was showing significant algae growth, cracking and damp patches. The rest of the house was in good condition so the homeowners didn\'t want to re-render the whole property — just the damaged elevation.',
      solution: 'Single-elevation render with a Johnstone\'s silicone through-colour render in "Portland Stone". Scaffold on just the side elevation, full strip-off of failed render, substrate prep, bead-and-mesh system, base coat and silicone top. Matched colour to the existing front elevation render.',
      duration: '4 working days',
      costRange: '£3,200 (single elevation)',
      result: 'Problem solved for a fraction of the cost of a full re-render. The homeowners have since asked us to quote for the rear elevation next spring.',
      beforeAlt: 'North-facing side elevation of a Kingswood semi showing algae growth and cracking',
      afterAlt: 'Clean Johnstone\'s silicone render in Portland Stone on a Kingswood side elevation',
    },
    relatedServices: ['silicone-rendering', 'monocouche-rendering', 'house-rendering', 'pebble-dash-removal'],
    heroImageAlt: 'Johnstone\'s silicone render in Portland Stone on a north-facing elevation in Kingswood',
    category: 'rendering',
    metaDescription: 'External wall rendering in Bristol from £55/m². Silicone, monocouche, acrylic, lime. Single elevations, full re-renders. 10-year warranty.',
    titleTemplate: 'External Wall Rendering Bristol | From £55/m² | All Systems',
  },

  // =================================================================
  // 4. MONOCOUCHE RENDERING
  // =================================================================
  {
    slug: 'monocouche-rendering',
    name: 'Monocouche Rendering Bristol',
    shortName: 'Monocouche Rendering',
    city: 'bristol',
    tagline: 'Modern, through-colour monocouche render — one coat, no painting required.',
    intro:
      'Monocouche is a through-colour mineral render applied in a single coat. Hard-wearing, impact-resistant, and available in 100+ colours — it\'s the go-to system for new builds and modern re-renders.',
    longIntro:
      "Monocouche is a through-colour mineral render — limestone aggregate, Portland cement, pigments, and additives — applied in a single 12-18mm coat and then scraped back to expose the aggregate for a textured finish. The colour goes all the way through, so unlike paint there's no top coat to maintain. Monocouche is harder-wearing than silicone (more impact-resistant, great for parking areas and alleyways), cheaper, and gives a contemporary scraped or dragged finish that's popular on modern Bristol homes. We install Weber, K Rend and Parex monocouche across Bristol and Bath. Typical install on a 3-bed semi is £6,000-£9,500 with a 25-year manufacturer warranty.",
    whatWeDo: [
      'Through-colour monocouche render from Weber, K Rend and Parex',
      'One-coat application, 12-18mm thick, scraped back for texture',
      '100+ colour options including bespoke colour matching',
      'Full substrate preparation including strip-off of failed render',
      'Beading, trims and mesh for crack resistance',
      'Modern scraped, dragged or spray-textured finishes',
      '10-year manufacturer warranty as standard',
      'BBA-certified systems only',
    ],
    problems: [
      'Older paint-based renders needing replacement with a through-colour system',
      'High-traffic areas (parking, alleyways) needing an impact-resistant finish',
      'New-build properties wanting a contemporary render finish',
      'Properties where monocouche is the planning requirement',
      'Outdated finishes that\'s hard to keep clean',
      'Modern architectural design needing a specific texture and colour',
    ],
    benefits: [
      'Through-colour — no painting ever, ever',
      'Harder than silicone — more impact-resistant',
      'Cheaper than silicone — typically £10-£15/m² less',
      '25-year manufacturer warranty as standard',
      'BBA-certified systems',
      'Available in 100+ colours and 3 textures (scraped, dragged, spray)',
      'Highly breathable — prevents internal damp',
      'Modern aesthetic that suits new-builds and contemporary renovations',
    ],
    processSteps: [
      { title: 'Free site survey', description: 'We visit, survey the substrate, discuss the texture (scraped, dragged, spray) and colour options, take measurements.' },
      { title: 'Fixed written quote', description: 'Detailed quote within 48 hours. We explain monocouche vs silicone trade-offs so you can choose with confidence.' },
      { title: 'Scaffolding up', description: 'In-house scaffold for most projects, erected before work starts.' },
      { title: 'Substrate preparation', description: 'Strip off failed existing render, hack out defective pointing, treat contamination.' },
      { title: 'Beading and mesh', description: 'PVC beads, expansion joints, alkali-resistant mesh embedded in the base coat.' },
      { title: 'Monocouche application', description: 'Single 12-18mm coat applied by machine or hand trowel, then ruled flat. 2-3 hours later, scraped with a scraping float to expose the aggregate for the textured finish.' },
      { title: 'Curing', description: '24-48 hours protection from rain and frost. Monocouche needs longer curing than silicone — typically 48 hours minimum.' },
      { title: 'Scaffold down and walk-around', description: 'Final walk-around, warranty certificate, aftercare guide.' },
      { title: '12-month aftercare inspection', description: 'Free inspection at 12 months.' },
    ],
    materials: [
      { manufacturer: 'Weber', products: ['weber.rend Monocouche'], notes: 'Most popular across Bristol. BBA-certified, 100+ colours, 3 textures.' },
      { manufacturer: 'K Rend', products: ['Standard K1.5', 'Silicone K1.5', 'Scraped K1.5'], notes: 'Northern Ireland-made, hard-wearing mineral render.' },
      { manufacturer: 'Parex', products: ['Maika Monocouche'], notes: 'Premium French monocouche, excellent colour depth.' },
    ],
    costGuide: {
      perSquareMetre: '£50 – £75 per m² installed',
      perPropertyType: [
        { type: '2-bed terraced house', lowEnd: '£4,500', highEnd: '£7,000' },
        { type: '3-bed semi-detached', lowEnd: '£6,000', highEnd: '£9,500' },
        { type: '4-bed detached', lowEnd: '£8,500', highEnd: '£13,000' },
        { type: '5-bed executive detached', lowEnd: '£12,000', highEnd: '£18,000' },
        { type: 'New-build (full house)', lowEnd: '£7,500', highEnd: '£14,000' },
      ],
      factorsAffectingPrice: [
        'Substrate condition',
        'Texture chosen (scraped is standard, spray slightly more expensive)',
        'Property size and access',
        'Detailing required',
        'Colour choice (standard free, bespoke +5%)',
        'Time of year (winter has longer curing time, slight premium)',
      ],
      includes: [
        'Free site survey and quote',
        'Scaffolding',
        'Strip-off and substrate prep',
        'Beading, trims, mesh',
        'Monocouche application',
        '10-year manufacturer warranty',
        '12-month aftercare inspection',
        '£2m public liability insurance',
      ],
      excludes: [
        'Major structural repairs',
        'Fascia, soffit, gutter replacement',
        'Window/door replacement',
        'Internal damp treatment',
        'Listed building consent applications',
      ],
    },
    faq: [
      {
        question: 'Is monocouche render breathable?',
        answer:
          'Yes — monocouche is highly breathable (Sd value around 0.1-0.2m), making it suitable for older Bristol properties where trapped moisture would otherwise cause internal damp. It\'s less breathable than silicone but more breathable than acrylic.',
      },
      {
        question: 'How long does monocouche render last?',
        answer:
          'A professionally applied monocouche system lasts 25+ years on a Bristol property. The through-colour means there\'s no painting to maintain — the render colour stays consistent for the full life of the system.',
      },
      {
        question: 'Can monocouche be applied in any weather?',
        answer:
          'Monocouche needs temperatures above 5°C during application and for at least 48 hours afterwards. We can work through most Bristol winters but reschedule if a cold snap is forecast. Heavy rain during curing can wash out pigments so we monitor weather closely.',
      },
      {
        question: 'What\'s the difference between scraped and spray monocouche?',
        answer:
          'Scraped monocouche is the most popular finish — the render is applied then scraped with a scraping float 2-3 hours later to expose the aggregate. This gives a subtle textured finish. Spray monocouche is applied with a hopper gun for a more uniform stippled finish. Dragged is similar to scraped but with a rougher texture. All three are equally durable.',
      },
      {
        question: 'How much does monocouche cost?',
        answer:
          'Monocouche in Bristol typically costs £50-£75 per m² installed. A 3-bed semi costs £6,000-£9,500 all-in. It\'s typically £10-£15/m² cheaper than silicone because the application is faster.',
      },
      {
        question: 'Does monocouche come in different colours?',
        answer:
          'Yes — all major monocouche systems offer 100+ standard colours covering BS 4800 and RAL ranges. Bespoke colour matching is available. The colour goes all the way through the render, so chips and scratches don\'t show.',
      },
      {
        question: 'Is monocouche suitable for listed buildings?',
        answer:
          'Generally no — most listed buildings require lime-based render systems for breathability and heritage compliance. We can advise on the right system for your specific listed property during the site visit. Monocouche is best suited to non-listed modern and post-war properties.',
      },
      {
        question: 'Can monocouche be repaired if damaged?',
        answer:
          'Yes — small areas of damage can be patched with a colour-matched monocouche repair product. Larger areas may need a full elevation re-render. We provide a repair guide with every installation and are available for call-out repairs throughout the warranty period.',
      },
      {
        question: 'How does monocouche compare to silicone rendering?',
        answer:
          'Monocouche is harder, more impact-resistant, and cheaper than silicone. Silicone is more flexible, more hydrophobic, and self-cleaning. For most Bristol homes either would work — we recommend based on substrate, exposure, budget and the look you want.',
      },
      {
        question: 'What warranty do you provide?',
        answer:
          '10-year manufacturer system warranty on all qualifying monocouche installations plus our own 10-year workmanship warranty. £2m public liability insurance. Free 12-month aftercare inspection.',
      },
    ],
    caseStudy: {
      title: 'New-build detached in Emerson\'s Green — full monocouche render',
      location: 'emersons-green',
      propertyType: '5-bed executive detached, BS16',
      problem: 'New-build property was finished in builder\'s sand-and-cement render that the homeowners disliked. They wanted a contemporary through-colour finish in a specific shade of grey.',
      solution: 'Stripped the builder\'s render (necessary to get the substrate flat for monocouche), fitted full bead-and-mesh system, then applied Weber monocouche in "Midnight Grey" with a scraped finish. Bespoke colour matching was needed to hit the exact grey they wanted.',
      duration: '10 working days',
      costRange: '£13,500',
      result: 'Transformed the appearance of the property — the homeowners\' neighbours have subsequently asked for quotes. The new owners sold the property 18 months later and the estate agent specifically mentioned the rendered exterior in the listing.',
      beforeAlt: 'New-build Emerson\'s Green home with builder\'s sand-and-cement render',
      afterAlt: 'Contemporary Weber monocouche render in Midnight Grey with scraped finish on a new-build Emerson\'s Green home',
    },
    relatedServices: ['silicone-rendering', 'house-rendering', 'external-wall-rendering', 'external-wall-insulation'],
    heroImageAlt: 'Weber monocouche render in Midnight Grey with scraped finish on a new-build Emerson\'s Green home',
    category: 'rendering',
    metaDescription: 'Monocouche rendering in Bristol from £50/m². Weber, K Rend, Parex. Through-colour, 25-year warranty. Free quotes. BBA-certified.',
    titleTemplate: 'Monocouche Rendering Bristol | From £50/m² | Through-Colour',
  },

  // =================================================================
  // 5. PLASTERING SERVICES
  // =================================================================
  {
    slug: 'plastering-services',
    name: 'Plastering Services Bristol',
    shortName: 'Plastering Services',
    city: 'bristol',
    tagline: 'Internal plastering, skimming, boarding and repairs across Bristol and Bath.',
    intro:
      'Plastering is the foundation of every interior finish. Whether you need a full house re-skim after rewiring, a single wall repaired after damp treatment, or a fresh plaster finish on an extension, we cover it.',
    longIntro:
      "Internal plastering is one of our most-requested services across Bristol. The most common jobs are full-house re-skims after rewiring or plumbing work, plastering of new extensions and loft conversions, and patching repairs after damp treatment or electrical work. We work with British Gypsum, Knauf and Thistle systems — including their most modern one-coat and airless spray products. Whether you need a smooth finish ready for painting, a tyrolean or textured finish, or a backing plaster for tiling, we have the team and the systems. Every quote is fixed and written, every project is scheduled end-to-end, and we provide a 5-year workmanship warranty on all internal plastering.",
    whatWeDo: [
      'Full house re-skimming after rewiring, plumbing or damp work',
      'Plastering of extensions, loft conversions and garage conversions',
      'Boarding and skimming of stud walls and ceilings',
      'Patching repairs after damp treatment, electrical or plumbing work',
      'Backing plaster for tiling in bathrooms and kitchens',
      'Tyrolean, dragged and textured finishes',
      'Airless spray plastering for fast coverage on large projects',
      'Removal of Artex and old plaster back to brick',
    ],
    problems: [
      'Full house re-skim needed after rewiring or replumbing',
      'Extension or loft conversion needing a fresh plaster finish',
      'Patches showing after electrical or plumbing work',
      'Old Artex ceilings needing modernising',
      'Failed plaster after damp treatment',
      'Hairline cracks appearing on walls and ceilings',
      'New build or renovation needing professional finish',
    ],
    benefits: [
      'Smooth, paint-ready finish that lasts decades',
      'Modern one-coat systems cut application time in half',
      'Airless spray options for large projects (whole houses in 1-2 days)',
      '5-year workmanship warranty as standard',
      'British Gypsum, Knauf and Thistle — only BBA-certified systems',
      'Tidy working — we cover floors and furniture, leave the house clean',
      'Disruption minimised — most homes complete in 3-7 days',
      'Free fixed written quote after a site visit',
    ],
    processSteps: [
      { title: 'Free site visit', description: 'We visit, assess the surfaces, take measurements, and discuss the finish you want (smooth, tyrolean, textured).' },
      { title: 'Fixed written quote', description: 'Detailed quote within 48 hours.' },
      { title: 'Surface preparation', description: 'Remove old failed plaster back to sound substrate. Hack out loose material. Treat any contamination.' },
      { title: 'Boarding (where needed)', description: 'Stud walls and ceilings boarded with plasterboard, joints taped and scrimmed ready for skim.' },
      { title: 'Scratch coat (where needed)', description: 'For deeper plastering or backing plaster for tiling, a scratch coat is applied first.' },
      { title: 'Skim coat', description: 'Final skim coat applied — 2-3mm of multifinish plaster, trowelled to a smooth finish. Airless spray option available for large projects.' },
      { title: 'Curing', description: 'Plaster needs to dry before painting — typically 3-7 days depending on thickness, temperature and humidity.' },
      { title: 'Final walk-around', description: 'We do a final walk-around with you, identify any snags, and leave the house clean.' },
      { title: 'Aftercare guide', description: 'Every project comes with a written aftercare guide explaining drying times and recommended paint systems.' },
    ],
    materials: [
      { manufacturer: 'British Gypsum', products: ['Thistle Multifinish', 'Thistle Bonding', 'Thistle Hardwall'], notes: 'Most popular across Bristol. BBA-certified, easy to work, smooth finish.' },
      { manufacturer: 'Knauf', products: ['Knauf MP75', 'Knauf Multifinish'], notes: 'Premium German systems, slightly smoother finish.' },
      { manufacturer: 'Thistle', products: ['Thistle One Coat', 'Thistle Dri-Coat'], notes: 'Specialist systems for one-coat and rapid-drying applications.' },
    ],
    costGuide: {
      perSquareMetre: '£8 – £18 per m² for skimming (walls), £10 – £22 per m² for ceilings',
      perPropertyType: [
        { type: 'Single wall skim (up to 20m²)', lowEnd: '£160', highEnd: '£360' },
        { type: 'Single room skim (walls + ceiling)', lowEnd: '£450', highEnd: '£900' },
        { type: 'Full 3-bed house re-skim', lowEnd: '£3,500', highEnd: '£6,500' },
        { type: 'Extension plaster finish (30m²)', lowEnd: '£850', highEnd: '£1,800' },
        { type: 'Loft conversion plaster finish', lowEnd: '£2,200', highEnd: '£4,500' },
        { type: 'Patching repair (per patch)', lowEnd: '£80', highEnd: '£250' },
      ],
      factorsAffectingPrice: [
        'Surface area and ceiling height',
        'Substrate condition (more prep = more cost)',
        'Boarding needed (stud walls, ceilings)',
        'Airless spray vs hand trowel',
        'Number of coats (single vs multi-coat)',
        'Access and room complexity',
        'Time of year (winter drying slower)',
      ],
      includes: [
        'Free site survey and quote',
        'Surface preparation',
        'Boarding (where needed)',
        'Scratch + skim coats',
        'Airless spray option available',
        '5-year workmanship warranty',
        'Tidy working — floors and furniture covered',
        'Site clean on completion',
      ],
      excludes: [
        'Painting and decorating (we can refer a decorator)',
        'Tiling (we can refer a tiler)',
        'Major structural repairs',
        'Removal of hazardous materials (e.g. asbestos in old Artex — we can refer a specialist)',
        'Electrical or plumbing work (we work alongside, not replace)',
      ],
    },
    faq: [
      {
        question: 'How long does plastering take to dry?',
        answer:
          'A 2-3mm skim coat typically takes 3-7 days to dry fully, depending on temperature, humidity and ventilation. We don\'t recommend painting for at least 7 days after plastering — painting too early can cause the paint to flake. We provide an aftercare guide with every project explaining drying times for your specific conditions.',
      },
      {
        question: 'Do you do airless spray plastering?',
        answer:
          'Yes — airless spray plastering is one of our specialties. It\'s ideal for large projects (full house re-skims, new-builds, extensions) where the speed advantage really matters. A full 3-bed house can be plastered in 1-2 days with airless spray, compared with 4-6 days for hand trowel. The finish is slightly different (a fine stippled texture) but equally paint-ready.',
      },
      {
        question: 'Can you plaster over Artex?',
        answer:
          'Yes, in most cases. We can either scrape back the high points of the Artex and skim over the top, or bond and skim over the whole ceiling for a perfectly flat modern finish. We can also remove Artex back to the original surface if needed. Note that some older Artex (pre-1980s) may contain asbestos — we can test and refer a specialist if needed.',
      },
      {
        question: 'Do you handle damp-related plastering?',
        answer:
          'Yes — but only after the damp issue itself has been diagnosed and treated. We use Thistle Dri-Coat or similar renovating plasters that allow walls to dry out without re-forming salts. We can advise on whether you need a damp specialist first.',
      },
      {
        question: 'Can I live in the house during plastering?',
        answer:
          'For most plastering jobs (single room, patching) yes, you can stay in the house. For full house re-skims we recommend finding alternative accommodation for 2-3 days while the plaster dries — there\'s no smell but the work area needs to be kept warm and ventilated.',
      },
      {
        question: 'Do you plaster extensions and loft conversions?',
        answer:
          'Yes — extensions and loft conversions are regular work for us. We can board and skim, apply backing plaster for tiling, or do full decorative finishes. We work alongside your builder or architect and can quote at any stage of the build.',
      },
      {
        question: 'What\'s the difference between bonding plaster and skim?',
        answer:
          'Bonding plaster is the base coat applied to bare brick or blockwork — typically 8-15mm thick. Skim plaster is the final 2-3mm coat applied over bonding (or over plasterboard) to give a smooth paint-ready finish. Most plastering jobs use both.',
      },
      {
        question: 'Can you repair cracked plaster?',
        answer:
          'Yes — hairline cracks can be filled and reskimmed. Larger cracks may indicate structural movement that needs separate diagnosis. We can advise on the right approach during the site visit.',
      },
      {
        question: 'How much does plastering cost?',
        answer:
          'Plastering in Bristol typically costs £8-£18 per m² for walls, £10-£22 per m² for ceilings. A full 3-bed house re-skim is £3,500-£6,500. Single room skims are £450-£900. Patching repairs are £80-£250 per patch. Every quote is fixed and written.',
      },
      {
        question: 'What warranty do you provide?',
        answer:
          '5-year workmanship warranty on all internal plastering. British Gypsum, Knauf and Thistle products carry their own manufacturer warranties. £2m public liability insurance as standard.',
      },
    ],
    caseStudy: {
      title: 'Full house re-skim after rewiring — Fishponds',
      location: 'fishponds',
      propertyType: '3-bed semi-detached, BS16',
      problem: 'The homeowners had a full rewire done and were left with channels and patches in every wall and ceiling of the house. They wanted a smooth, paint-ready finish throughout before redecorating.',
      solution: 'We boarded all the chases with plasterboard, taped and scrimmed the joints, then airless-spray skimmed the entire house (all walls and ceilings, approx 280m²) over 2 days. The homeowners moved out for 3 days while the plaster dried.',
      duration: '2 days application + 5 days drying time',
      costRange: '£4,200',
      result: 'A perfectly smooth, paint-ready finish throughout the house in less than half the time of traditional hand-trowel skimming. The decorator who followed on was able to start painting immediately after the 7-day drying period.',
      beforeAlt: 'Fishponds home with visible electrical chases and patches after rewiring',
      afterAlt: 'Smooth airless-spray skim finish throughout a Fishponds home ready for decorating',
    },
    relatedServices: ['external-wall-insulation', 'house-rendering'],
    heroImageAlt: 'Smooth plaster finish on walls and ceilings of a Fishponds home after rewiring',
    category: 'plastering',
    metaDescription: 'Plastering services in Bristol from £8/m². Full re-skims, extensions, patching, airless spray. British Gypsum & Knauf. 5-year warranty.',
    titleTemplate: 'Plastering Services Bristol | From £8/m² | Airless Spray',
  },

  // =================================================================
  // 6. EXTERNAL WALL INSULATION
  // =================================================================
  {
    slug: 'external-wall-insulation',
    name: 'External Wall Insulation Bristol',
    shortName: 'External Wall Insulation',
    city: 'bristol',
    tagline: 'Cut energy bills, eliminate condensation and refresh your home\'s exterior with EWI.',
    intro:
      'External Wall Insulation (EWI) is the single most effective way to insulate a Bristol home — eliminating cold bridges, cutting energy bills by 25-35%, and giving the exterior a fresh render finish at the same time.',
    longIntro:
      "If your Bristol home was built before 1990, chances are it has no cavity wall insulation and minimal loft insulation. The result: heat loss through the walls (up to 35% of your total heat loss), cold spots around window reveals, condensation on inside walls, and high energy bills. External Wall Insulation fixes all of this in one go. We fix 80-150mm of high-performance insulation board to the outside of your property, then apply a reinforced base coat and a silicone or monocouche render finish. The result: a 25-35% reduction in heating bills, elimination of condensation, and a fresh modern exterior. EWI on a typical Bristol semi costs £12,000-£18,000 installed and pays for itself in 8-12 years through energy savings. We install Weber, K Rend and Johnstone's EWI systems.",
    whatWeDo: [
      'External Wall Insulation (EWI) systems from Weber, K Rend and Johnstone\'s',
      '80-150mm high-performance insulation board (EPS, mineral wool, or PIR)',
      'Silicone or monocouche render finish on top',
      'Full bead-and-mesh system for crack resistance',
      'Window reveal detailing to eliminate cold bridges',
      'Pre-EWI damp and structural surveys',
      '10-year manufacturer system warranty',
      'Insurance-backed 25-year warranty available on qualifying installations',
    ],
    problems: [
      'High heating bills on older Bristol properties',
      'Condensation and mould on inside walls',
      'Cold spots around window reveals and corners',
      'No cavity to fill (solid wall construction)',
      'Failed existing render needing replacement anyway',
      'Older homes that fail EPC ratings for rental',
      'Listed or heritage properties needing sympathetic insulation',
    ],
    benefits: [
      '25-35% reduction in heating bills — typical £400-£600/year saving',
      'Eliminates condensation and black mould permanently',
      'Eliminates cold bridges around windows and corners',
      'Refreshes the entire exterior of your property at the same time',
      'Increases EPC rating by 2-3 bands (typical C to B)',
      'Required for rental properties to meet Minimum Energy Efficiency Standard',
      'Backed by 10-year manufacturer warranty + insurance-backed 25-year option',
      'Disruption minimal — most work is external, you stay in the house',
    ],
    processSteps: [
      { title: 'Pre-survey and EPC assessment', description: 'We visit, survey the property, take measurements, and assess the existing walls. We may commission an EPC before and after to quantify the improvement.' },
      { title: 'Funding and consent advice', description: 'EWI may qualify for ECO4 or GBIS funding if your household income is below threshold. We help with the application. We also advise on Building Control notification (required for EWI).' },
      { title: 'Fixed written quote', description: 'Detailed quote within 48 hours including insulation thickness, render system, and any necessary structural or electrical work.' },
      { title: 'Scaffolding up', description: 'In-house scaffold for most projects, erected before work starts.' },
      { title: 'Substrate preparation', description: 'Remove existing render, repair substrate, treat any damp or contamination.' },
      { title: 'Insulation board fixing', description: '80-150mm high-performance insulation board (EPS, mineral wool, or PIR) fixed to the substrate with adhesive and mechanical fixings.' },
      { title: 'Beading and mesh', description: 'Window reveals, corner beads, expansion joints, and alkali-resistant mesh embedded in the reinforced base coat.' },
      { title: 'Reinforced base coat', description: 'Polymer-modified cementitious base coat, typically 8-12mm, with full mesh reinforcement. This is the structural layer of the EWI system.' },
      { title: 'Render finish', description: 'Silicone (sprayed) or monocouche (trowelled) finish in your chosen colour. 1.5-2mm thick.' },
      { title: 'Curing', description: '24-48 hours protection from rain and frost.' },
      { title: 'Scaffold down and walk-around', description: 'Final walk-around, warranty certificate, aftercare guide, new EPC certificate.' },
      { title: '12-month aftercare inspection', description: 'Free inspection at 12 months.' },
    ],
    materials: [
      { manufacturer: 'Weber', products: ['weber.therm EWI', 'weber.rend Silicone finish'], notes: 'Most popular EWI system in the UK. BBA-certified, 25-year insurance-backed warranty available.' },
      { manufacturer: 'K Rend', products: ['K Rend EWI', 'K Rend Silicone K1.5'], notes: 'Northern Ireland-made, popular for heritage applications.' },
      { manufacturer: 'Johnstone\'s', products: ['Stormshield EWI', 'Stormshield Silicone finish'], notes: 'BBA-certified, popular for new-build EWI.' },
      { manufacturer: 'EPS / Mineral Wool / PIR', products: ['Kingspan K15', 'Rockwool', 'EPS 70'], notes: 'Insulation board types — we recommend based on substrate, budget and U-value requirements.' },
    ],
    costGuide: {
      perSquareMetre: '£120 – £180 per m² installed (including render finish)',
      perPropertyType: [
        { type: '2-bed terraced house', lowEnd: '£9,000', highEnd: '£14,000' },
        { type: '3-bed semi-detached', lowEnd: '£12,000', highEnd: '£18,000' },
        { type: '4-bed detached', lowEnd: '£16,000', highEnd: '£25,000' },
        { type: '5-bed executive detached', lowEnd: '£22,000', highEnd: '£35,000' },
        { type: 'Bungalow (single storey)', lowEnd: '£10,000', highEnd: '£16,000' },
      ],
      factorsAffectingPrice: [
        'Insulation thickness required (80mm vs 150mm)',
        'Insulation type (EPS cheapest, mineral wool most expensive)',
        'Render system chosen (silicone is premium)',
        'Property size and access',
        'Existing render condition',
        'Window reveal detailing complexity',
        'Listed building status (may require specialist systems)',
      ],
      includes: [
        'Pre-survey and EPC assessment',
        'Funding application support (ECO4 / GBIS)',
        'Building Control notification',
        'Free site survey and fixed written quote',
        'Scaffolding',
        'Strip-off and substrate prep',
        'Insulation board fixing',
        'Beading, mesh, reinforced base coat',
        'Render finish',
        '10-year manufacturer warranty',
        '25-year insurance-backed warranty option',
        '12-month aftercare inspection',
        '£2m public liability insurance',
      ],
      excludes: [
        'Major structural repairs',
        'Window/door replacement (we work alongside)',
        'Internal plastering or decoration',
        'Listed building consent applications',
        'Electrical work (we can refer an electrician)',
      ],
    },
    faq: [
      {
        question: 'How much will EWI cut my energy bills?',
        answer:
          'A typical Bristol semi with EWI will see a 25-35% reduction in heating bills — typically £400-£600/year saving. The exact saving depends on your current heating system, insulation thickness installed, and how you use the heating. We provide an estimated annual saving in every quote based on your specific property.',
      },
      {
        question: 'How long does EWI take?',
        answer:
          'A typical 3-bed semi takes 8-12 working days from scaffold-up to scaffold-down. Larger detached homes can take 12-18 days. We give you a clear timeline in the quote and stick to it.',
      },
      {
        question: 'What insulation thickness do I need?',
        answer:
          'For most Bristol properties, 90-120mm of insulation is sufficient to meet Building Regulations and achieve significant energy savings. For older solid-wall properties with very poor thermal performance, 150mm may be recommended. We calculate the right thickness during the survey based on your walls, existing insulation and target U-value.',
      },
      {
        question: 'Is EWI a good investment?',
        answer:
          'Yes — EWI typically pays for itself in 8-12 years through energy savings. After that, you\'re saving money every year for the 25+ year life of the system. EWI also adds measurable value to your property (estate agents report 3-7% uplift) and may qualify for funding under the ECO4 or GBIS schemes.',
      },
      {
        question: 'Does EWI need planning permission?',
        answer:
          'Generally no — EWI on a residential property is permitted development. Exceptions include: listed buildings (Listed Building Consent required), properties in conservation areas (may require consent), and properties where the EWI would significantly alter the appearance (rare in residential). Building Control notification is required for all EWI work — we handle this on your behalf.',
      },
      {
        question: 'Can I get EWI for free or subsidised?',
        answer:
          'Possibly. Under the ECO4 scheme (running until March 2026), low-income and vulnerable households can get EWI fully funded. Under the Great British Insulation Scheme (GBIS), homes in the lower EPC bands (D, E, F, G) can get subsidised EWI. We can check your eligibility and help with the application.',
      },
      {
        question: 'What warranty do you provide?',
        answer:
          '10-year manufacturer system warranty on all EWI installations, plus our own 10-year workmanship warranty. For qualifying installations we can offer an insurance-backed 25-year warranty through the Weber Kitemark scheme. £2m public liability insurance as standard. Free 12-month aftercare inspection.',
      },
      {
        question: 'Is EWI suitable for listed buildings?',
        answer:
          'Generally yes, with the right system. For listed properties we use thinner insulation (40-60mm) with sympathetic lime-compatible render finishes, and we work with conservation officers to ensure Listed Building Consent is properly obtained. We can advise on the right system for your specific listed property during the site visit.',
      },
      {
        question: 'How does EWI affect window reveals?',
        answer:
          'EWI extends the external wall surface outwards by the insulation thickness. This means window reveals are deeper and window sills may need extending. We handle all of this as part of the installation — typically extending sills with matching UPVC or aluminium, and ensuring reveals are properly insulated to eliminate cold bridges.',
      },
      {
        question: 'Will EWI fix my condensation problem?',
        answer:
          'Yes — EWI eliminates condensation on inside walls by warming the wall surface above the dew point. Black mould issues resolve permanently because the cold spots that caused them are removed. If you have existing mould damage internally we can also arrange for replastering and redecoration once the EWI is in place.',
      },
      {
        question: 'Can EWI be installed on any property?',
        answer:
          'Almost any solid-wall property — 1930s semis, Victorian terraces, post-war detached homes, modern infill — is suitable for EWI. The main exceptions are buildings with significant structural movement, properties with extensive timber cladding or other non-masonry substrates, and listed buildings where the appearance would be significantly altered. We can advise on your specific property during the site visit.',
      },
      {
        question: 'Does EWI add value to my property?',
        answer:
          'Yes — estate agents consistently report a 3-7% uplift on properties with EWI installed versus comparable un-insulated properties. On a £350,000 Bristol home that\'s £10,500-£24,500 of value uplift, plus the annual energy savings. EWI also makes properties much easier to sell in the current EPC-conscious market.',
      },
    ],
    caseStudy: {
      title: '1930s semi in Kingswood — full EWI upgrade',
      location: 'kingswood',
      propertyType: '3-bed semi-detached, BS15',
      problem: 'The homeowners were paying £1,400/year in gas bills and had persistent black mould on the north-facing bedroom walls. The house was a 1930s solid-wall semi with no cavity. They\'d been told by another contractor that EWI was impossible on a property of this age.',
      solution: 'We installed 100mm EPS insulation board with a Weber EWI system and Johnstone\'s Stormshield silicone render finish in "Portland Stone". Total wall area approximately 110m². Pre-EWI EPC: D. Post-EWI EPC: B.',
      duration: '11 working days',
      costRange: '£15,200',
      result: 'First-year gas bill dropped to £950 (saving £450). Black mould completely eliminated. EPC upgraded from D to B, making the property significantly more saleable. The homeowners have since recommended us to two neighbours.',
      beforeAlt: '1930s Kingswood semi before EWI installation with old pebbledash render',
      afterAlt: 'Weber EWI with Johnstone\'s silicone render in Portland Stone on a 1930s Kingswood semi',
    },
    relatedServices: ['silicone-rendering', 'monocouche-rendering', 'house-rendering', 'plastering-services'],
    heroImageAlt: 'Weber EWI with Johnstone\'s silicone render on a 1930s Kingswood semi — fresh finish, modern performance',
    category: 'insulation',
    metaDescription: 'External Wall Insulation (EWI) in Bristol from £120/m². Cut bills 25-35%, eliminate damp. Weber, K Rend systems. 10-year warranty. ECO4/GBIS funding help.',
    titleTemplate: 'External Wall Insulation Bristol | From £120/m² | Cut Bills 25-35%',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const getServicesByCategory = (
  cat: 'rendering' | 'plastering' | 'insulation'
): Service[] => SERVICES.filter((s) => s.category === cat);

export const getRelatedServices = (slug: string): Service[] => {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
};
