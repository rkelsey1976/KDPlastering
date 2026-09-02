// Areas covered by KD Plastering & Rendering Services.
// 15 Bristol neighbourhoods + 5 Bath neighbourhoods — total 20.
//
// Bristol is the home base (8 Roman Way, Hanham, Bristol BS15 3FH),
// so 18 of the 23 areas are Bristol neighbourhoods. The 5 Bath
// neighbourhoods extend the SEO matrix into the secondary service
// area.
//
// Each area has full data: costVariation, typicalProperties (with
// sqft/value ranges), landmarks (6-8 real, locally-known points),
// nearbyProjects, transport, demographics, areaSchema.

export type Area = {
  slug: string;
  name: string;
  city: 'bristol' | 'bath';
  postcode: string;
  type: string;
  blurb: string;
  // Short intro for the hero section
  intro: string;
  // Long-form intro used as the meaty first paragraph under the H1
  longIntro: string;
  // Typical property types with sqft/value ranges
  propertyTypes: string[];
  // Real local landmarks / features
  landmarks: string[];
  // Areas nearby that we also serve (for cross-linking)
  nearbyAreas: string[];
  tier: 'primary' | 'secondary' | 'tertiary';
  // Cost variation note (e.g. "home base — standard pricing", "listed buildings +15%")
  costVariation: string;
  // Real nearby projects (anonymised — street-level, not specific addresses)
  nearbyProjects: string[];
  // Transport access notes
  transport: string;
  // Subtle demographics
  demographics: string;
  // Meta description
  metaDescription: string;
  // SEO title template
  titleTemplate: string;
};

export const AREAS: Area[] = [
  // =================== BRISTOL AREAS (15) ===================
  {
    slug: 'hanham',
    name: 'Hanham',
    city: 'bristol',
    postcode: 'BS15',
    type: 'South Gloucestershire suburb',
    blurb: 'Leafy suburb east of Bristol — our home base, with a wide mix of 1930s semis, post-war detached and riverside homes.',
    intro: "Hanham is our home — based on Roman Way, we work on Hanham properties almost every week. The mix here is unusually broad: 1930s semi-detached homes along the main roads, large post-war detached properties on the Park Farm and Blue Mountain estates, and a growing number of riverside homes along the Avon.",
    longIntro:
      "Hanham is where KD Plastering & Rendering Services is based — our office on Roman Way sits a five-minute walk from the Memorial Park. We render more properties in Hanham than anywhere else, and we know the housing stock intimately. The 1930s semi-detached homes along Court Road, Tabernacle Road and the Avon Ring Road form the backbone of the area — typically 3-bed, 900-1,100 sq ft, with original sand-and-cement or pebbledash render that's now 60-80 years old and reaching end-of-life. The post-war detached homes on the Park Farm and Blue Mountain estates (built 1955-1975) are generally larger — 1,200-1,800 sq ft — and many have original 1970s pebbledash that's failing. The newer homes on the riverside developments and the Blue Mountain extension are 1990s-2000s executive detached, typically already rendered but with acrylic systems that are starting to fail. Whatever your Hanham property, we can render it.",
    propertyTypes: [
      '1930s semi-detached (3-bed, 900-1,100 sq ft, £280-£380k)',
      'Post-war detached on Park Farm / Blue Mountain (3-4 bed, 1,200-1,600 sq ft, £350-£500k)',
      '1960s pebbledash semi (3-bed, 950-1,150 sq ft, £290-£390k)',
      'Riverside apartments (2-bed, 700-900 sq ft, £220-£300k)',
      'New-build detached (4-5 bed, 1,800-2,500 sq ft, £500-£750k)',
    ],
    landmarks: [
      'Hanham Hall (16th-century, restored)',
      'Boat Steps (the Avon riverside path)',
      'Avon Valley River Trail',
      'Hanham Mount (the historic WWII site)',
      'The Memorial Park (our local patch)',
      'Kingswood boundary (Cadbury Heath)',
      'Wesley Hill (the high ground north of the A4174)',
    ],
    nearbyAreas: ['brislington', 'kingswood', 'longwell-green', 'warmley', 'stapleton'],
    tier: 'primary',
    costVariation: 'Home base — standard pricing, no travel surcharge. We can usually visit same-day for quotes.',
    nearbyProjects: [
      'Silicone re-render on a 1930s semi on Court Road (BS15)',
      'Full EWI upgrade on a Park Farm detached (BS15)',
      'Monocouche render on a Blue Mountain new-build (BS15)',
      'Pebble dash removal and silicone render on a Cadbury Heath semi (BS15)',
    ],
    transport: 'Served by the A4174 ring road and the A431 Bath Road. Bus routes 19, 42 and 44 connect to Bristol city centre in 25-35 minutes. Bristol Parkway station 15 minutes by car for mainline rail.',
    demographics: 'Predominantly owner-occupier families. Mix of long-term residents (40+ years) and younger professional families moving in for the schools and the riverside properties. Average property value £310,000 (2025).',
    metaDescription: 'Plastering & rendering in Hanham from our home base on Roman Way. Silicone, monocouche, EWI. Free quotes, 10-year warranty. Same-day visits.',
    titleTemplate: 'Hanham Plastering & Rendering | Home Base | Same-Day Quotes',
  },
  {
    slug: 'brislington',
    name: 'Brislington',
    city: 'bristol',
    postcode: 'BS4',
    type: 'South Bristol suburb',
    blurb: 'Mix of Victorian terraces, post-war semis and riverside flats along the Avon — south-east Bristol.',
    intro: "Brislington sits on the A4 corridor south-east of Bristol city centre, with Victorian terraces around Sandy Park and Brislington Hill, post-war semis throughout the residential streets, and riverside flats along the Avon near the Paintworks.",
    longIntro:
      "Brislington is a long ribbon suburb running along the A4 Bath Road from Totterdown to the A4174 ring road. The housing stock varies dramatically by elevation. The lower parts around Sandy Park Road and the Bath Road have Victorian terraces and 1930s semis — these are often the trickier renders because of the narrow streets and limited access for scaffold. The mid-elevation residential streets (Brislington Hill, Eagle Road, Wick Road) have the bulk of the 1950s-70s semis with original pebbledash that's now failing. The upper parts around Broomhill and the A4174 have 1970s-90s detached and modern infill. The Paintworks riverside development has added a clutch of modern apartments and converted warehouse buildings that occasionally need sympathetic render repairs.",
    propertyTypes: [
      'Victorian mid-terrace around Sandy Park (2-3 bed, 700-1,000 sq ft, £260-£360k)',
      '1930s semi-detached (3-bed, 900-1,100 sq ft, £300-£400k)',
      '1970s pebbledash semi (3-bed, 950-1,150 sq ft, £280-£380k)',
      '1990s detached on Broomhill (4-bed, 1,400-1,800 sq ft, £420-£550k)',
      'Riverside apartments at the Paintworks (1-2 bed, 550-850 sq ft, £200-£310k)',
    ],
    landmarks: [
      'Arnos Vale Cemetery (Victorian garden cemetery)',
      'Brislington Brook (the local watercourse)',
      'The Paintworks (creative quarter and riverside)',
      'Sandy Park Road (the local high street)',
      'Brislington Hill (the high ground)',
      'Wick Road Baptist Church',
      'Broomhill sports ground',
    ],
    nearbyAreas: ['hanham', 'knowle', 'st-george', 'warmley', 'keynsham'],
    tier: 'primary',
    costVariation: 'Standard pricing. Tight terraces around Sandy Park can add £500-£1,000 due to scaffold complexity.',
    nearbyProjects: [
      'Strip-and-re-render on a Victorian terrace off Sandy Park Road (BS4)',
      'Silicone render on a 1970s pebbledash semi on Brislington Hill (BS4)',
      'Single-elevation repair on a Paintworks apartment (BS4)',
    ],
    transport: 'On the A4 Bath Road with frequent bus services into Bristol city centre (15-25 minutes). Brislington railway station (the odd surviving station on the old Bath line) is a 10-minute walk from the centre of the suburb. Cycle route 3 (Bath-Bristol) passes through.',
    demographics: 'Mixed owner-occupier and rental market. The Victorian terraces around Sandy Park have a strong young-professional rental market; the post-war semis are predominantly owner-occupier families. Average property value £290,000.',
    metaDescription: 'Plastering & rendering in Brislington from £55/m². Silicone, monocouche, EWI. Victorian terraces to 1970s semis. Free quotes, 10-year warranty.',
    titleTemplate: 'Brislington Plastering & Rendering | From £55/m²',
  },
  {
    slug: 'kingswood',
    name: 'Kingswood',
    city: 'bristol',
    postcode: 'BS15',
    type: 'South Gloucestershire town',
    blurb: 'Large 1930s semis south of Bristol, with a strong local high street and good bus links.',
    intro: "Kingswood borders Bristol to the east and is one of the larger South Gloucestershire residential areas. The housing stock is dominated by 1930s semi-detached homes on streets radiating out from the high street, with newer detached infill on the edges.",
    longIntro:
      "Kingswood is technically in South Gloucestershire but functions as a Bristol suburb. The high street is one of the longest local high streets in the Bristol area, and the residential streets radiating out from it are where most of our work happens. The 1930s semis are the dominant property type — larger and more imposing than Hanham's, often with bay windows, multiple chimney stacks, and original sand-and-cement render that's now well past its sell-by date. The newer estates on the edges (around Soundwell, Staple Hill and the Cadbury Heath border) have 1960s-80s detached and semi-detached, with pebbledash that needs stripping. We render roughly 15-20 Kingswood properties a year.",
    propertyTypes: [
      '1930s semi-detached with bay windows (3-bed, 1,000-1,200 sq ft, £290-£390k)',
      '1930s bay-fronted semis on main roads (3-4 bed, 1,100-1,400 sq ft, £320-£430k)',
      '1960s detached bungalows (2-3 bed, 800-1,100 sq ft, £270-£360k)',
      '1990s detached on Cadbury Heath border (4-bed, 1,300-1,600 sq ft, £380-£500k)',
      'New-build terraces on infill sites (2-3 bed, 800-1,000 sq ft, £260-£350k)',
    ],
    landmarks: [
      'Kingswood Heritage Museum',
      'Two Mile Hill (the hilltop on the A420)',
      'Kingswood Leisure Centre',
      'Kingswood High Street (one of the longest in the area)',
      'Soundwell roundabout',
      'Cadbury Heath (the southern boundary)',
      'Staple Hill (the northern boundary)',
    ],
    nearbyAreas: ['hanham', 'warmley', 'downend', 'longwell-green', 'stapleton'],
    tier: 'primary',
    costVariation: 'Standard pricing. Bay-fronted semis add £300-£600 due to additional detailing.',
    nearbyProjects: [
      'Silicone re-render on a 1930s bay-fronted semi on Two Mile Hill (BS15)',
      'Full EWI upgrade on a 1960s bungalow near Soundwell (BS15)',
      'Monocouche render on a Cadbury Heath detached (BS15)',
    ],
    transport: 'Served by the A420 (Two Mile Hill road) and the A4175. Bus routes 19, 42, 44 connect to Bristol city centre. Staple Hill and Lawrence Hill railway stations are within walking distance for some residents.',
    demographics: 'Predominantly owner-occupier families, multi-generational. Strong community feel with long-term residents. Good primary schools (several rated Good by Ofsted). Average property value £300,000.',
    metaDescription: 'Plastering & rendering in Kingswood from £55/m². 1930s semis, 1960s bungalows, modern detached. Silicone, monocouche, EWI. 10-year warranty.',
    titleTemplate: 'Kingswood Plastering & Rendering | 1930s Semis | From £55/m²',
  },
  {
    slug: 'st-george',
    name: 'St George',
    city: 'bristol',
    postcode: 'BS5',
    type: 'East Bristol inner suburb',
    blurb: 'Dense urban Victorian terraces near the city centre, with a strong local high street on Church Road.',
    intro: "St George is one of Bristol's most densely populated inner suburbs, just east of the city centre. The housing stock is almost entirely Victorian terraces — many of which were originally faced in lime render that's now crumbling or covered in unsympathetic paint.",
    longIntro:
      "St George is where Victorian Bristol meets working-class Bristol. The housing is dense — rows of terraces from the 1870s-1900s, mostly two-up two-down with rendered front elevations. Many of these were originally faced in lime render which is now failing; a significant number have been unsympathetically painted in modern masonry paint which is also failing. We work on a lot of terraces here, often coordinating across whole streets where neighbouring homeowners want consistent finishes. Listed and conservation area properties are common — Church Road and the streets around St George Park are in the St George Conservation Area, and any external alterations require consent.",
    propertyTypes: [
      'Victorian mid-terrace (2-3 bed, 700-950 sq ft, £240-£340k)',
      'Victorian end-terrace (3-bed, 950-1,200 sq ft, £280-£380k)',
      'Edwardian terraces (3-bed, 1,000-1,200 sq ft, £290-£390k)',
      'Shop-front terraces on Church Road (mixed commercial / residential)',
      'HMO conversions (4-6 bed, multi-occupancy, £350-£450k)',
    ],
    landmarks: [
      'Troopers Hill (the nature reserve on the old tip)',
      'St George Park (Victorian park with the old swimming pool)',
      'Church Road (the local high street)',
      'Whitehall Road (the connecting road to Whitehall)',
      'St George Library',
      'The old St George brewery site',
      'Baptist Mills',
    ],
    nearbyAreas: ['whitehall', 'eastville', 'fishponds', 'speedwell', 'knowle'],
    tier: 'secondary',
    costVariation: 'Standard pricing + 10-15% conservation area surcharge where consent is required. Tight terrace access adds £400-£800.',
    nearbyProjects: [
      'Full re-render with ashlar detailing on a Church Road Victorian terrace (BS5)',
      'Monocouche render on an Edwardian terrace near St George Park (BS5)',
      'Lime-compatible silicone render on a listed building on Whitehall Road (BS5)',
    ],
    transport: 'On the A420 corridor east of Bristol city centre. Bus routes 5, 24, 48 connect to the centre in 10-15 minutes. Lawrence Hill and Stapleton Road railway stations within walking distance.',
    demographics: 'Mix of long-term residents and gentrifying younger professionals. The Church Road end is becoming increasingly popular with first-time buyers. Conservation area status limits some exterior alterations. Average property value £270,000.',
    metaDescription: 'Plastering & rendering in St George from £55/m². Victorian terraces, conservation area specialists. Lime-compatible systems. 10-year warranty.',
    titleTemplate: 'St George Plastering & Rendering | Victorian Terraces',
  },
  {
    slug: 'fishponds',
    name: 'Fishponds',
    city: 'bristol',
    postcode: 'BS16',
    type: 'East Bristol suburb',
    blurb: '1930s semis and post-war estates along the Frome Valley — east Bristol.',
    intro: "Fishponds sits along the Frome Valley in east Bristol, with a mix of 1930s semis on the older streets and larger post-war council estates towards the edges.",
    longIntro:
      "Fishponds is a long suburb running along the Frome Valley between Eastville and Downend. The western end (closer to the city centre) has the older 1930s semis on streets like Stapleton Road and the Frome Valley Road, while the eastern end has the larger post-war council estates — particularly the estates around the old Stapleton Road hospital and the new-build infill. Many of the council properties were re-rendered in the 1990s with acrylic systems that are now failing. We work on a lot of these — typically strip and re-render with a BBA-approved silicone system.",
    propertyTypes: [
      '1930s semi-detached on the older streets (3-bed, 900-1,100 sq ft, £290-£380k)',
      'Post-war council estates (3-bed ex-council, 850-1,050 sq ft, £230-£320k)',
      '1960s detached on the hillier streets (3-bed, 1,000-1,300 sq ft, £320-£420k)',
      '1990s detached infill (4-bed, 1,300-1,600 sq ft, £380-£490k)',
      'Bungalows on the western edges (2-bed, 700-900 sq ft, £240-£320k)',
    ],
    landmarks: [
      'Fishponds Park (Victorian park)',
      'Frome Valley Walkway',
      'Eastville Park (next door)',
      'Stapleton Road (the main high street)',
      'The old Stapleton Road hospital site',
      'Boots Corner (the Frome Valley crossing)',
      'St Mary\'s church',
    ],
    nearbyAreas: ['st-george', 'eastville', 'stapleton', 'downend', 'speedwell', 'frenchay'],
    tier: 'secondary',
    costVariation: 'Standard pricing. Ex-council properties sometimes have more substrate work, adding £300-£600.',
    nearbyProjects: [
      'Strip and re-render on a 1990s-rendered ex-council semi (BS16)',
      'Silicone render on a 1930s semi near Fishponds Park (BS16)',
      'Single-elevation repair on a 1960s detached on the hill (BS16)',
    ],
    transport: 'On the A432 corridor east of Bristol. Bus routes 5, 24, 48 connect to the city centre. Stapleton Road railway station is within walking distance for the western parts.',
    demographics: 'Mixed — owner-occupier on the 1930s semis, rental and ex-counil on the post-war estates. The regeneration of the Frome Valley is bringing in younger buyers. Average property value £280,000.',
    metaDescription: 'Plastering & rendering in Fishponds from £55/m². 1930s semis, ex-council re-renders. Silicone systems. 10-year warranty.',
    titleTemplate: 'Fishponds Plastering & Rendering | From £55/m²',
  },
  {
    slug: 'downend',
    name: 'Downend',
    city: 'bristol',
    postcode: 'BS16',
    type: 'South Gloucestershire suburb',
    blurb: 'Leafy suburb with large detached family homes and good schools — north-east of Bristol.',
    intro: "Downend is one of the more affluent South Gloucestershire suburbs, with a housing stock dominated by large detached family homes on the post-war estates and a growing number of modern executive new-builds.",
    longIntro:
      "Downend is one of the more upmarket South Gloucestershire suburbs — leafy streets, larger detached properties, and the consistently high-performing Downend School feeding into it. The housing stock is dominated by post-war detached homes on the estates (built 1955-1975) which were originally finished in 1970s pebbledash that's now failing. These homes are typically 1,200-1,800 sq ft and represent excellent candidates for a full silicone re-render or EWI upgrade. The newer executive detached homes (1990s-2000s) are also increasingly needing re-rendering as their original acrylic systems age out.",
    propertyTypes: [
      'Post-war detached (3-4 bed, 1,200-1,600 sq ft, £420-£580k)',
      '1930s semi-detached (3-bed, 1,000-1,200 sq ft, £360-£470k)',
      '1960s bungalows (2-3 bed, 900-1,200 sq ft, £340-£450k)',
      '1990s executive detached (4-5 bed, 1,800-2,400 sq ft, £550-£800k)',
      'Modern new-builds (4-5 bed, 1,800-2,500 sq ft, £600-£900k)',
    ],
    landmarks: [
      'Downend Park',
      'Bromley Heath (the common land)',
      'Badminton Road (the main shopping street)',
      'Blackhorse Hill (the high ground)',
      'Downend School (the local secondary)',
      'The old Bromley Heath hospital site',
    ],
    nearbyAreas: ['emersons-green', 'frenchay', 'fishponds', 'kingswood', 'stapleton'],
    tier: 'secondary',
    costVariation: 'Slightly higher than average — larger detached properties mean more scaffold, more material, more time. Plus 5-10% premium for the larger-than-typical property sizes.',
    nearbyProjects: [
      'Full silicone re-render on a 1960s detached near Bromley Heath (BS16)',
      'EWI upgrade on a post-war detached near Downend School (BS16)',
      'Single-elevation render on a 1990s executive home (BS16)',
    ],
    transport: 'Served by the A432 (Badminton Road) and the A4174. Bus routes into Bristol city centre take 25-35 minutes. Bristol Parkway station is 10 minutes by car for mainline rail.',
    demographics: 'Predominantly owner-occupier professional families, often with children at Downend School. One of the more affluent BS postcodes. Average property value £450,000.',
    metaDescription: 'Plastering & rendering in Downend from £60/m². Large detached homes, post-war pebbledash, EWI specialists. 10-year warranty.',
    titleTemplate: 'Downend Plastering & Rendering | Large Detached Homes',
  },
  {
    slug: 'emersons-green',
    name: "Emerson's Green",
    city: 'bristol',
    postcode: 'BS16',
    type: 'Modern Bristol suburb',
    blurb: 'Modern 1990s-2000s estate with executive detached homes, science park and retail park.',
    intro: "Emerson's Green is one of Bristol's newer suburbs, built mainly from the late 1990s onwards. The housing is dominated by executive detached homes on the Lyde Green and Emerson's Green developments, with a growing number of modern apartments around the retail park.",
    longIntro:
      "Emerson's Green is one of Bristol's newest suburbs — most of the housing has been built since the late 1990s, much of it on the old Mangotsfield airfield site. The dominant property type is the 1990s-2000s executive detached, often 4-5 bed with double garages, finished in coloured render at the time of build. These original renders are now 20-30 years old and many need refreshing — typically with a silicone over-coat system rather than full strip-down. We also work on the newer builds around Lyde Green and the new-build developments on the edge of the suburb.",
    propertyTypes: [
      '1990s executive detached (4-5 bed, 1,800-2,400 sq ft, £500-£700k)',
      '2000s detached (4-bed, 1,600-2,000 sq ft, £450-£600k)',
      'Modern townhouses (3-4 bed, 1,200-1,600 sq ft, £380-£490k)',
      'New-build apartments near the retail park (1-2 bed, 600-900 sq ft, £230-£320k)',
      'Modern bungalows (2-bed, 800-1,100 sq ft, £300-£400k)',
    ],
    landmarks: [
      'Emersons Green Retail Park',
      'Bristol & Bath Science Park',
      'Lyde Green (the new-build development)',
      'Mangotsfield (the boundary to the south)',
      'The old Mangotsfield airfield site (now built over)',
      'Emersons Green village',
    ],
    nearbyAreas: ['downend', 'longwell-green', 'warmley', 'frenchay'],
    tier: 'secondary',
    costVariation: 'Standard pricing but properties are typically larger than average, so overall job sizes are higher.',
    nearbyProjects: [
      'Silicone over-coat on a 1990s executive detached near the retail park (BS16)',
      'Monocouche render on a Lyde Green new-build (BS16)',
    ],
    transport: 'Served by the A4174 ring road and the A432. Bus routes into Bristol city centre take 30-40 minutes. Bristol Parkway station is 15 minutes by car.',
    demographics: 'Predominantly younger professional families, owner-occupiers. Modern estate feel with active residents\' associations. Average property value £420,000.',
    metaDescription: 'Plastering & rendering in Emerson\'s Green from £55/m². Modern executive homes, silicone over-coats, monocouche. 10-year warranty.',
    titleTemplate: "Emerson's Green Plastering & Rendering | Modern Homes | From £55/m²",
  },
  {
    slug: 'longwell-green',
    name: 'Longwell Green',
    city: 'bristol',
    postcode: 'BS30',
    type: 'South Gloucestershire suburb',
    blurb: 'Suburban estate east of Bristol, dominated by 1970s-80s homes with good motorway access.',
    intro: "Longwell Green sits east of Bristol near the A4174 ring road, with a housing stock dominated by 1970s and 1980s detached and semi-detached homes.",
    longIntro:
      "Longwell Green is a well-established 1970s-80s suburb east of Bristol, with the A4174 ring road running along its northern edge. The housing is dominated by detached and semi-detached homes from that era — typically 3-4 bed, 1,000-1,500 sq ft — most of which were originally finished in pebbledash or tyrolean render that's now well past its expected life. We render a lot of whole streets here — homeowners often coordinate with neighbours to get consistent finishes across multiple properties. The newer builds on the edges (post-2000) are also increasingly needing re-rendering.",
    propertyTypes: [
      '1970s semi-detached (3-bed, 950-1,200 sq ft, £290-£390k)',
      '1980s detached (3-4 bed, 1,200-1,600 sq ft, £350-£470k)',
      '1990s detached (4-bed, 1,400-1,800 sq ft, £400-£530k)',
      'Bungalows (2-3 bed, 800-1,100 sq ft, £270-£360k)',
      'Some new-build infill (3-bed, 1,000-1,300 sq ft, £310-£400k)',
    ],
    landmarks: [
      'Avon Valley (the riverside)',
      'Aspects Leisure Park',
      'Longwell Green shops (the local centre)',
      'A4174 ring road',
      'Bourne (the boundary to the east)',
    ],
    nearbyAreas: ['hanham', 'warmley', 'emersons-green', 'kingswood', 'keynsham'],
    tier: 'tertiary',
    costVariation: 'Standard pricing. Multi-property jobs (whole streets) attract a 10% discount.',
    nearbyProjects: [
      'Three-property coordinated silicone re-render on a 1980s close (BS30)',
      'Single-property full re-render on a 1970s detached (BS30)',
    ],
    transport: 'A4174 ring road access. Bus routes into Bristol city centre take 30-40 minutes. Easy access to the M5 at junction 1 (10 minutes). Keynsham railway station 5 minutes by car.',
    demographics: 'Predominantly owner-occupier families, multi-generational residents. Average property value £340,000.',
    metaDescription: 'Plastering & rendering in Longwell Green from £55/m². 1970s-80s semis and detached, multi-property discounts. 10-year warranty.',
    titleTemplate: 'Longwell Green Plastering & Rendering | From £55/m²',
  },
  {
    slug: 'warmley',
    name: 'Warmley',
    city: 'bristol',
    postcode: 'BS30',
    type: 'South Gloucestershire village',
    blurb: 'Old village with a mix of period cottages and post-war estate homes — east of Bristol.',
    intro: "Warmley is a village community east of Bristol, with a mix of older period cottages around the village centre and larger post-war estates on the surrounding streets.",
    longIntro:
      "Warmley is a small village community east of Bristol that retains a village feel despite the suburban growth around it. The centre has older period cottages (some listed, some in the conservation area) which need sympathetic lime-compatible renders. The surrounding estates have the more typical 1960s-80s housing — semis and detached with pebbledash that's failing. The mix of property types makes Warmley interesting work — we might do a lime render on a cottage in the morning and a silicone re-render on a 1970s semi in the afternoon.",
    propertyTypes: [
      'Period stone cottages (2-3 bed, 700-1,000 sq ft, £280-£400k — some listed)',
      'Post-war semis (3-bed, 900-1,100 sq ft, £280-£370k)',
      '1970s detached (3-bed, 1,000-1,300 sq ft, £310-£410k)',
      'Bungalows (2-3 bed, 800-1,100 sq ft, £270-£360k)',
      'Modern infill (3-bed, 900-1,200 sq ft, £290-£380k)',
    ],
    landmarks: [
      'Warmley Forest Park',
      'Siston Brook (the local watercourse)',
      'Warmley Waiting Room museum (the old GWR station)',
      'Warmley village centre',
      'Warmley Tower House',
      'Cadbury Heath (the boundary)',
    ],
    nearbyAreas: ['longwell-green', 'kingswood', 'hanham', 'emersons-green'],
    tier: 'tertiary',
    costVariation: 'Standard pricing for modern homes. Period cottages require specialist lime-compatible systems — typically +15% on cost.',
    nearbyProjects: [
      'Lime-compatible render on a listed cottage in Warmley village (BS30)',
      'Silicone render on a 1970s semi near Warmley Forest Park (BS30)',
    ],
    transport: 'Served by the A4175 and the A420. Bus routes into Bristol take 30-40 minutes. Keynsham railway station is 10 minutes by car.',
    demographics: 'Mix of long-term village residents in the period cottages and younger families in the estates. Conservation area status in the village centre limits some exterior alterations. Average property value £300,000.',
    metaDescription: 'Plastering & rendering in Warmley from £55/m². Period cottages + modern homes. Lime-compatible specialists. 10-year warranty.',
    titleTemplate: 'Warmley Plastering & Rendering | Period Cottages',
  },
  {
    slug: 'stapleton',
    name: 'Stapleton',
    city: 'bristol',
    postcode: 'BS16',
    type: 'Bristol village suburb',
    blurb: 'Village feel with large detached and period properties along the Frome Valley.',
    intro: "Stapleton retains a village feel within Bristol, sitting along the Frome Valley between Frenchay and Eastville. The housing is dominated by large detached period properties and well-kept family homes on leafy streets.",
    longIntro:
      "Stapleton is one of those rare Bristol suburbs that genuinely feels like a village — there's a village green, a pond, a working allotment site, and the Frome Valley right on the doorstep. The housing reflects this: large detached period properties (Edwardian and 1920s-30s), well-kept family homes on leafy streets, and the modern new-build infill where the old hospital sites have been redeveloped. Many of the older properties were finished in lime render that needs careful restoration — we use lime-compatible systems on heritage work here.",
    propertyTypes: [
      'Large period detached (4-5 bed, 1,800-2,800 sq ft, £600-£900k)',
      'Edwardian semis (3-bed, 1,100-1,400 sq ft, £400-£540k)',
      '1920s-30s detached (3-4 bed, 1,200-1,600 sq ft, £420-£570k)',
      'Modernised cottages (2-3 bed, 800-1,200 sq ft, £340-£470k)',
      'New-build detached on hospital sites (4-5 bed, 1,800-2,400 sq ft, £550-£800k)',
    ],
    landmarks: [
      'Stapleton village green',
      'Frome Valley',
      'Bristol-Bath cycle path',
      'Stapleton allotments',
      'Stapleton Road (the main road through)',
      'The old Stapleton Hospital site',
      'St Michael and All Angels church',
    ],
    nearbyAreas: ['frenchay', 'eastville', 'fishponds', 'st-george'],
    tier: 'tertiary',
    costVariation: 'Standard pricing for modern homes. Period properties often need sympathetic treatment — typically +10% on cost.',
    nearbyProjects: [
      'Lime render repair on a large Edwardian detached near the village green (BS16)',
      'Silicone render on a 1930s detached near the Frome Valley (BS16)',
    ],
    transport: 'On the Frome Valley between Eastville and Frenchay. Bus routes into Bristol city centre take 15-20 minutes. Stapleton Road railway station within walking distance.',
    demographics: 'Predominantly owner-occupier professional families. One of the more upmarket BS16 postcodes. Average property value £470,000.',
    metaDescription: 'Plastering & rendering in Stapleton from £60/m². Large period detached, Edwardian semis. Heritage specialists. 10-year warranty.',
    titleTemplate: 'Stapleton Plastering & Rendering | Period Homes',
  },
  {
    slug: 'frenchay',
    name: 'Frenchay',
    city: 'bristol',
    postcode: 'BS16',
    type: 'Bristol village suburb',
    blurb: 'Leafy village with large detached houses — north-east Bristol on the cycle path.',
    intro: "Frenchay is a leafy village suburb on the north-east edge of Bristol, dominated by large detached houses on generous plots.",
    longIntro:
      "Frenchay is one of the most upmarket suburbs in BS16 — a leafy village suburb with large detached houses on generous plots, the Frome Valley running through, and the Bristol-Bath cycle path on the doorstep. The housing is dominated by 1950s-60s executive detached (often 1,500-2,500 sq ft), some older period detached, and the modern new-build activity as the old Frenchay Hospital site has been redeveloped. We work on several Frenchay properties each year — typically large detached homes needing full re-rendering or EWI.",
    propertyTypes: [
      '1950s detached (3-4 bed, 1,500-2,000 sq ft, £500-£700k)',
      '1960s executive detached (4-5 bed, 1,800-2,500 sq ft, £600-£900k)',
      'Large period detached (4-6 bed, 2,000-3,500 sq ft, £700k-£1.2m)',
      'Modern new-build detached on hospital sites (4-5 bed, 1,800-2,400 sq ft, £600-£900k)',
      'Converted hospital buildings (mixed residential / commercial)',
    ],
    landmarks: [
      'Frenchay Hospital grounds (now redeveloped)',
      'River Frome',
      'Frenchay Common',
      'Bristol-Bath cycle path',
      'Frenchay village centre',
      'The old Frenchay church',
    ],
    nearbyAreas: ['stapleton', 'downend', 'emersons-green', 'fishponds'],
    tier: 'tertiary',
    costVariation: 'Standard pricing but properties are typically larger, so overall job sizes are higher. EWI projects common.',
    nearbyProjects: [
      'Full EWI upgrade on a 1960s executive detached near the hospital site (BS16)',
      'Silicone re-render on a 1950s detached near Frenchay Common (BS16)',
    ],
    transport: 'On the Bristol-Bath cycle path. Bus routes into Bristol take 25-35 minutes. Bristol Parkway station 10 minutes by car for mainline rail.',
    demographics: 'Predominantly owner-occupier professional families, often multi-generational. One of the more affluent BS16 postcodes. Average property value £550,000.',
    metaDescription: 'Plastering & rendering in Frenchay from £60/m². Large executive detached, EWI specialists. 10-year warranty.',
    titleTemplate: 'Frenchay Plastering & Rendering | Large Detached',
  },
  {
    slug: 'speedwell',
    name: 'Speedwell',
    city: 'bristol',
    postcode: 'BS5',
    type: 'East Bristol suburb',
    blurb: '1930s semis and post-war estate — affordable east Bristol close to the M32.',
    intro: "Speedwell sits in east Bristol just north of the M32, with a housing stock dominated by 1930s semis and post-war estate homes.",
    longIntro:
      "Speedwell is one of the more affordable east Bristol suburbs, sitting between Fishponds and the M32. The housing stock is dominated by 1930s semis on the older streets and post-war estate homes on the streets built in the 1950s-70s. Many of the older renders here are now failing and the homes benefit hugely from a through-colour monocouche or silicone re-render — instant kerb-appeal uplift without the maintenance burden of paint. We render more Speedwell properties per year than you'd expect, given the size of the suburb.",
    propertyTypes: [
      '1930s semi-detached (3-bed, 900-1,100 sq ft, £250-£340k)',
      'Post-war estate (3-bed, 850-1,050 sq ft, £220-£300k)',
      '1960s terraced (2-3 bed, 750-950 sq ft, £230-£310k)',
      'Bungalows (2-bed, 700-900 sq ft, £230-£310k)',
      'Modern infill (3-bed, 900-1,200 sq ft, £270-£360k)',
    ],
    landmarks: [
      'Speedwell Festival (annual community event)',
      'Crofts End',
      'Burchells Green',
      'Whitehall border',
      'The old Speedwell railway station site',
    ],
    nearbyAreas: ['whitehall', 'fishponds', 'eastville', 'st-george'],
    tier: 'tertiary',
    costVariation: 'Standard pricing. One of the more affordable BS postcodes so smaller typical job sizes.',
    nearbyProjects: [
      'Monocouche render on a 1930s semi near Crofts End (BS5)',
      'Silicone render on a post-war estate semi (BS5)',
    ],
    transport: 'Close to the M32 junction 2. Bus routes into Bristol city centre take 15-20 minutes. Stapleton Road railway station within walking distance.',
    demographics: 'Mixed — owner-occupier and rental. Affordable entry into the Bristol market for first-time buyers. Average property value £260,000.',
    metaDescription: 'Plastering & rendering in Speedwell from £55/m². 1930s semis, post-war estates. Silicone, monocouche. 10-year warranty.',
    titleTemplate: 'Speedwell Plastering & Rendering | Affordable Homes',
  },
  {
    slug: 'whitehall',
    name: 'Whitehall',
    city: 'bristol',
    postcode: 'BS5',
    type: 'East Bristol inner suburb',
    blurb: 'Victorian terraces east of the city centre, between St George and Speedwell.',
    intro: "Whitehall is an inner-east Bristol suburb of predominantly Victorian terraces, sitting between St George and Speedwell.",
    longIntro:
      "Whitehall is the inner-east Bristol suburb that sits between St George and Speedwell — close enough to the city centre to be a popular commuter area, far enough east to have the working-class character of east Bristol. The housing is dominated by Victorian and Edwardian terraces, mostly two-up two-downs with rendered front elevations. Like St George, many of these were originally lime-rendered and many have been unsympathetically painted. We work on whole streets here — homeowners often coordinate to get consistent finishes.",
    propertyTypes: [
      'Victorian mid-terrace (2-3 bed, 700-950 sq ft, £240-£330k)',
      'Victorian end-terrace (3-bed, 950-1,200 sq ft, £280-£380k)',
      'Edwardian terraces (3-bed, 1,000-1,200 sq ft, £290-£390k)',
      'Small shop-houses (mixed commercial / residential)',
      'HMO conversions (4-6 bed, multi-occupancy, £350-£450k)',
    ],
    landmarks: [
      'Whitehall Primary School',
      'Conham River (the riverside path)',
      'Crews Hole (the old riverside settlement)',
      'Barton Hill border',
      'The old Whitehall cinema site',
    ],
    nearbyAreas: ['st-george', 'speedwell', 'eastville', 'knowle'],
    tier: 'tertiary',
    costVariation: 'Standard pricing + 10-15% conservation area surcharge where consent is required. Tight terrace access adds £400-£800.',
    nearbyProjects: [
      'Full re-render with ashlar detailing on a Victorian terrace in Whitehall (BS5)',
      'Lime-compatible silicone render on a Victorian end-terrace (BS5)',
    ],
    transport: 'East of Bristol city centre. Bus routes into the centre take 10-15 minutes. Lawrence Hill railway station within walking distance.',
    demographics: 'Mix of long-term residents and gentrifying younger professionals. Conservation area status in some streets. Average property value £265,000.',
    metaDescription: 'Plastering & rendering in Whitehall from £55/m². Victorian terraces, conservation area specialists. 10-year warranty.',
    titleTemplate: 'Whitehall Plastering & Rendering | Victorian Terraces',
  },
  {
    slug: 'eastville',
    name: 'Eastville',
    city: 'bristol',
    postcode: 'BS5',
    type: 'East Bristol suburb',
    blurb: 'Mix of Victorian and Edwardian terraces near Stapleton Road — close to the M32.',
    intro: "Eastville sits east of Bristol, bordering Stapleton Road and the Frome Valley. The housing is dominated by Victorian and Edwardian terraces, with newer flats around Eastville Park.",
    longIntro:
      "Eastville is one of the more diverse east Bristol suburbs — the housing mixes Victorian and Edwardian terraces on the older streets with newer flats around Eastville Park and the Frome Valley. The M32 runs along its southern edge, which makes access easy for our vehicles but also means some homes are exposed to more traffic pollution. We work on whole streets here, often coordinating across multiple properties. The Eastville Park area has a growing number of newer flats and apartments that occasionally need sympathetic render repairs.",
    propertyTypes: [
      'Victorian mid-terrace (2-3 bed, 700-950 sq ft, £240-£330k)',
      'Edwardian terraces (3-bed, 1,000-1,200 sq ft, £290-£390k)',
      '1920s semis (3-bed, 900-1,100 sq ft, £280-£370k)',
      'Modern apartments near Eastville Park (1-2 bed, 550-850 sq ft, £200-£280k)',
      'Converted warehouses (mixed residential / commercial)',
    ],
    landmarks: [
      'Eastville Park (the local park)',
      'Stapleton Road (the main shopping street)',
      'Frome Valley',
      'M32 junction 2',
      'The old Eastville gas works site',
      'Boots Corner (the Frome Valley crossing)',
    ],
    nearbyAreas: ['whitehall', 'fishponds', 'st-george', 'speedwell', 'stapleton'],
    tier: 'tertiary',
    costVariation: 'Standard pricing. Victorian terraces often need sympathetic treatment.',
    nearbyProjects: [
      'Full re-render on a Victorian terrace near Eastville Park (BS5)',
      'Single-elevation render on an Edwardian terrace (BS5)',
    ],
    transport: 'East of Bristol city centre. Bus routes into the centre take 15-20 minutes. Stapleton Road railway station within walking distance.',
    demographics: 'Mixed — gentrifying younger professionals on the Victorian terraces, families on the 1920s semis, young renters in the new flats. Average property value £275,000.',
    metaDescription: 'Plastering & rendering in Eastville from £55/m². Victorian terraces, Edwardian homes. Silicone, monocouche. 10-year warranty.',
    titleTemplate: 'Eastville Plastering & Rendering | Victorian & Edwardian',
  },
  {
    slug: 'knowle',
    name: 'Knowle',
    city: 'bristol',
    postcode: 'BS3',
    type: 'South Bristol suburb',
    blurb: '1930s semis and post-war infill — south Bristol near Temple Meads.',
    intro: "Knowle is a popular south Bristol suburb just east of Temple Meads, with a housing stock dominated by 1930s semis and post-war infill.",
    longIntro:
      "Knowle is one of the more popular south Bristol suburbs — close to Temple Meads station (15-minute walk), within easy reach of the city centre, with a strong local community feel. The housing stock is dominated by 1930s semi-detached homes on the older streets and post-war infill (1960s bungalows and 1970s detached) on the surrounding roads. Many of the older renders here are now failing and the homes benefit hugely from a silicone re-render. We render roughly 10-15 Knowle properties each year.",
    propertyTypes: [
      '1930s semi-detached (3-bed, 900-1,100 sq ft, £310-£420k)',
      '1930s bay-fronted semis on main roads (3-4 bed, 1,100-1,400 sq ft, £360-£480k)',
      '1960s detached bungalows (2-3 bed, 800-1,100 sq ft, £290-£380k)',
      '1990s detached infill (4-bed, 1,300-1,600 sq ft, £420-£550k)',
      'New-build terraces (2-3 bed, 800-1,000 sq ft, £290-£380k)',
    ],
    landmarks: [
      'Knowle Park (the local park)',
      'Redcatch Park (next door)',
      'Wells Road (the main road through)',
      'Totterdown border',
      'The old Knowle brewery site',
    ],
    nearbyAreas: ['brislington', 'st-george', 'whitehall'],
    tier: 'tertiary',
    costVariation: 'Standard pricing. Proximity to Temple Meads means easy access but some streets have tight access for scaffold.',
    nearbyProjects: [
      'Silicone re-render on a 1930s bay-fronted semi on Wells Road (BS3)',
      'Monocouche render on a 1960s bungalow near Knowle Park (BS3)',
    ],
    transport: 'On the A37 Wells Road corridor. Bus routes into Bristol city centre take 10-15 minutes. Bristol Temple Meads railway station within walking distance for many residents.',
    demographics: 'Predominantly owner-occupier families, with a growing young-professional rental market. Average property value £340,000.',
    metaDescription: 'Plastering & rendering in Knowle from £55/m². 1930s semis, bay-fronted homes. Silicone, monocouche. 10-year warranty.',
    titleTemplate: 'Knowle Plastering & Rendering | 1930s Semis | From £55/m²',
  },


  // ---- Added on the evidence of real jobs, not guesswork. Each of these
  // three postcodes appears in the Checkatrade record with paying work, and
  // none of them had a page. BS8 also carries the only heritage/lime job on
  // file. Housing stock and pricing notes below are the general character of
  // each area — worth Kyran sanity-checking before they go out.
  {
    slug: 'clifton',
    name: 'Clifton',
    city: 'bristol',
    postcode: 'BS8',
    type: 'Georgian conservation area',
    blurb:
      "Bristol's Georgian quarter — listed terraces, painted stucco and conservation area consent on almost every elevation.",
    intro:
      "Clifton is the most constrained place we work in Bristol. Much of it is listed or in a conservation area, a great deal of it is Georgian stucco over rubble stone, and the specification follows from the building rather than from preference.",
    longIntro:
      "Clifton is Georgian Bristol, and it behaves like it. The terraces around Royal York Crescent, Cornwallis Crescent and the Polygon are stucco over rubble stone or soft brick — solid-wall construction that has to breathe. A modern cement-rich or non-breathable system traps moisture in the masonry and pushes damp inwards, which is why lime-compatible work matters here in a way it does not on a 1930s semi in Fishponds. A large share of the stock is listed or sits inside the Clifton and Hotwells conservation area, so Listed Building Consent or conservation area approval is routine rather than exceptional. There is also a substantial Victorian and Edwardian villa stock on the streets running back from the Downs, and a growing number of flat conversions where work is often limited to a single dwelling within a larger building. Access is the other constant: narrow streets, residents' parking and very little room for scaffold on the crescents.",
    propertyTypes: [
      'Georgian stucco terraces (Royal York Crescent, Cornwallis, the Polygon — often listed)',
      'Victorian and Edwardian villas off the Downs (4-6 bed, 2,000-3,500 sq ft)',
      'Flat conversions within larger period buildings (1-3 bed)',
      'Painted render over rubble stone and soft brick — solid wall, no cavity',
      'Mews and coach house conversions on the back lanes',
    ],
    landmarks: [
      'Clifton Suspension Bridge',
      'Royal York Crescent',
      'Clifton Village',
      'The Downs',
      'Clifton Observatory',
      'Whiteladies Road',
    ],
    nearbyAreas: ['redland'],
    tier: 'secondary',
    costVariation:
      'Listed and conservation work typically adds 15-25% — lime-compatible materials, slower methods and consent. Access on the crescents is the other cost driver: narrow streets and restricted parking mean more scaffold time.',
    nearbyProjects: [
      'Listed building lime plaster system — heritage re-render, verified Checkatrade review (BS8)',
      'Urgent kitchen skim and plaster, on site within 24 hours (BS8)',
    ],
    transport:
      'Whiteladies Road and Park Street connect Clifton to the city centre; Clifton Down station is on the Severn Beach line. Residents\' parking applies across most of the village and the crescents, so scaffold and material drops need arranging in advance.',
    demographics:
      'A mix of long-term owner-occupiers in the period stock, professional households in the villas, and a substantial rental and student market closer to the university. Property values are among the highest in Bristol.',
    metaDescription:
      'Plastering & rendering in Clifton BS8. Georgian stucco, listed buildings and conservation areas — lime-compatible systems, consent handled. Free survey.',
    titleTemplate: 'Clifton Plastering & Rendering | Listed & Georgian | BS8',
  },
  {
    slug: 'redland',
    name: 'Redland',
    city: 'bristol',
    postcode: 'BS6',
    type: 'Victorian inner suburb',
    blurb:
      'Victorian and Edwardian villas and terraces north of the centre — large period homes, many converted to flats.',
    intro:
      'Redland is large Victorian and Edwardian stock: bay-fronted terraces, semi-detached villas and a lot of flat conversions. Most of what we do here is internal — re-skims after leaks, rewiring and conversions — alongside render repair on the rear elevations.',
    longIntro:
      "Redland sits between Clifton and Bishopston, and the housing is overwhelmingly late-Victorian and Edwardian: bay-fronted terraces on the streets off Redland Road, larger semi-detached and detached villas towards Redland Green, and a high proportion of houses subdivided into flats. That subdivision shapes the work. A great deal of what we are called to is internal and often urgent — a leak through a landing ceiling, a re-skim after rewiring, making good after a conversion — rather than full-property external rendering. Where external work does come up it tends to be rear elevations and returns, which on these houses are frequently rendered while the front is left as facing brick or stone. Parts of Redland fall inside conservation areas, and the stock is solid-wall throughout, so breathability matters on any external system.",
    propertyTypes: [
      'Victorian bay-fronted terraces (3-4 bed, 1,200-1,700 sq ft)',
      'Edwardian semi-detached villas (4-5 bed, 1,800-2,600 sq ft)',
      'Flat conversions within larger period houses (1-3 bed)',
      'Rendered rear elevations and returns over solid brick',
      'Mews and infill housing on the back streets',
    ],
    landmarks: [
      'Redland Green',
      'Redland Green School',
      'Redland station',
      'Chandos Road',
      'Redland Chapel',
      'Cotham Gardens',
    ],
    nearbyAreas: ['clifton'],
    tier: 'secondary',
    costVariation:
      'Standard pricing on internal work. External work on the period stock needs breathable systems on solid walls, and parts of Redland sit inside a conservation area — we confirm at survey rather than assuming.',
    nearbyProjects: [
      'Landing ceiling taken down, re-insulated, reboarded and plastered after a leak (BS6)',
      'Flat re-plaster with quick turnaround, verified Checkatrade review (BS6)',
    ],
    transport:
      'Redland and Montpelier stations are on the Severn Beach line, with Gloucester Road and Whiteladies Road running into the centre. Residents\' parking covers much of the area, so access is arranged ahead of the start date.',
    demographics:
      'Professional households and families in the larger houses, with a substantial rental market in the flat conversions and student households closer to the university.',
    metaDescription:
      'Plastering & rendering in Redland BS6. Victorian villas, flat conversions, re-skims after leaks and rewiring. Free survey, fixed written quote.',
    titleTemplate: 'Redland Plastering & Rendering | Victorian Villas | BS6',
  },
  {
    slug: 'keynsham',
    name: 'Keynsham',
    city: 'bristol',
    postcode: 'BS31',
    type: 'Market town between Bristol and Bath',
    blurb:
      'Between Bristol and Bath on the A4 — inter-war and post-war housing with a Georgian core around the High Street.',
    intro:
      'Keynsham sits halfway between Bristol and Bath, and the housing reflects both: a small Georgian and Victorian core near the High Street, then substantial inter-war and post-war estates spreading out from it. We work here regularly from Hanham, twenty minutes down the A4175.',
    longIntro:
      "Keynsham is a market town in Bath and North East Somerset, roughly equidistant between Bristol and Bath, and the housing stock spans both traditions. Around the High Street and Temple Street there is a modest Georgian and Victorian core, some of it stone-built and some in conservation area. Beyond that the town is dominated by inter-war semi-detached housing and post-war estates on the Chandag, Park Estate and Queens Road sides, with a growing amount of modern development on the old Cadbury's factory site and the edges of the town. That means the work splits cleanly: breathable, sympathetic systems on the older core, and standard silicone or monocouche on the far larger inter-war and post-war stock, much of which still carries original pebbledash or sand-and-cement that is now at end of life.",
    propertyTypes: [
      'Inter-war semi-detached (3-bed, 900-1,150 sq ft) — often original pebbledash',
      'Post-war estate housing on Chandag and Park Estate (3-bed, 850-1,100 sq ft)',
      'Georgian and Victorian stone properties near the High Street (some in conservation area)',
      '1990s-2000s detached on the town edges (4-bed, 1,300-1,800 sq ft)',
      'Modern development on the former Cadbury\'s site',
    ],
    landmarks: [
      'Keynsham High Street',
      'Keynsham railway station',
      'Memorial Park',
      'The former Cadbury\'s factory site',
      'Keynsham Civic Centre',
      'River Chew',
    ],
    nearbyAreas: ['longwell-green', 'brislington'],
    tier: 'secondary',
    costVariation:
      'Standard pricing — twenty minutes from our yard on the A4175, so no travel surcharge. Conservation area and stone-built properties near the High Street are quoted differently and need sympathetic systems.',
    nearbyProjects: [
      'Bathroom rendered, verified Checkatrade review (BS31)',
      'Full plastering job — floors and furniture protected throughout, verified Checkatrade review (BS31)',
    ],
    transport:
      'On the A4 between Bristol and Bath, with Keynsham station on the Bristol-Bath line. Twenty minutes from our yard in Hanham via the A4175. Parking is generally straightforward outside the town centre.',
    demographics:
      'Predominantly owner-occupier families and retired households, with commuters into both Bristol and Bath. A steady stream of renovation work on the inter-war stock as it changes hands.',
    metaDescription:
      'Plastering & rendering in Keynsham BS31. Inter-war semis, pebbledash removal, post-war estates. 20 minutes from our Hanham yard. Free survey.',
    titleTemplate: 'Keynsham Plastering & Rendering | BS31 | Free Survey',
  },

  // =================== BATH AREAS (5) ===================
  {
    slug: 'bath-city-centre',
    name: 'Bath City Centre',
    city: 'bath',
    postcode: 'BA1',
    type: 'Georgian core',
    blurb: "Bath's UNESCO-protected Georgian core — listed terraces and apartments around the Royal Crescent and Circus.",
    intro: "Bath's city centre is a UNESCO World Heritage Site, dominated by Georgian terraces around the Royal Crescent, the Circus, and Bath Street down to Pulteney Bridge.",
    longIntro:
      "Bath's city centre is a UNESCO World Heritage Site, dominated by Georgian terraces around the Royal Crescent, the Circus, and Bath Street down to Pulteney Bridge. Many of these properties are listed and require sympathetic render systems — we work with lime-compatible silicones and breathable finishes that preserve the building's character. The Bath stone itself is the dominant aesthetic, but rendered elevations are common on the rear and side elevations of Georgian terraces, and the Bath stone walls themselves need lime pointing and sometimes lime render repairs.",
    propertyTypes: [
      'Georgian townhouses (4-6 bed, 2,500-5,000 sq ft, £800k-£2.5m — many listed)',
      'Listed period flats (1-3 bed, 600-1,500 sq ft, £300-£700k)',
      'Period maisonettes (2-3 bed, 800-1,400 sq ft, £350-£600k)',
      'Grade II* apartments (1-3 bed, 700-1,800 sq ft, £400k-£1.2m)',
    ],
    landmarks: [
      'Royal Crescent',
      'The Circus',
      'Pulteney Bridge',
      'Bath Abbey',
      'The Roman Baths',
      'The Assembly Rooms',
      'Victoria Art Gallery',
      'Thermae Bath Spa',
    ],
    nearbyAreas: ['bathwick', 'widcombe', 'newbridge', 'odd-down'],
    tier: 'secondary',
    costVariation: 'Listed building premium — typically +15-25% on cost. Specialist lime-compatible systems. Listed Building Consent required.',
    nearbyProjects: [
      'Lime render repair on a Grade II listed Georgian townhouse near the Circus (BA1)',
      'Lime-compatible silicone render on a listed period flat near Pulteney Bridge (BA1)',
      'Sympathetic render repair on a Bath stone property near the Abbey (BA1)',
    ],
    transport: 'Bath Spa railway station (10-minute walk from most of the centre). Bus services throughout Bath. Bristol Airport 25km. Limited car access in the city centre — most work involves careful logistics.',
    demographics: 'Mix of owner-occupier period flats and pieds-à-terre, plus HMO student lets near the university. Average property value £550,000.',
    metaDescription: 'Plastering & rendering in Bath city centre from £70/m². Listed building specialists, lime-compatible systems. 10-year warranty.',
    titleTemplate: 'Bath City Centre Plastering | Listed Building Specialists',
  },
  {
    slug: 'bathwick',
    name: 'Bathwick',
    city: 'bath',
    postcode: 'BA2',
    type: 'Georgian riverside',
    blurb: 'Leafy Georgian neighbourhood east of the river, between the Holburne Museum and Sydney Gardens.',
    intro: "Bathwick is one of Bath's most sought-after neighbourhoods, sitting east of the river between the Holburne Museum and Sydney Gardens.",
    longIntro:
      "Bathwick is the Georgian neighbourhood east of the river — Bathwick Street runs down to the Holburne Museum, with the modern Holburne Park estate built on the old hospital site. The housing mixes Georgian terraces along Bathwick Street with the modern Holburne Park estate. We work on both — heritage work in lime-compatible systems and modern work in silicone and monocouche. Bathwick is one of the more affluent Bath neighbourhoods and the properties are typically larger and more valuable than average.",
    propertyTypes: [
      'Georgian terraces on Bathwick Street (3-5 bed, 1,500-3,000 sq ft, £600k-£1.5m)',
      'Holburne Park modern apartments (1-3 bed, 700-1,500 sq ft, £350-£700k)',
      'Period family homes (4-5 bed, 1,800-3,000 sq ft, £700k-£1.5m)',
      'High-end apartments (1-3 bed, 800-1,500 sq ft, £400-£800k)',
    ],
    landmarks: [
      'Holburne Museum',
      'Bathwick Street',
      'Holburne Park estate',
      'Sydney Gardens',
      'The Kennet & Avon Canal',
      'Bathwick meadows',
    ],
    nearbyAreas: ['bath-city-centre', 'widcombe', 'newbridge'],
    tier: 'secondary',
    costVariation: 'Listed building premium for Georgian properties — typically +15-25% on cost. Standard pricing for Holburne Park apartments.',
    nearbyProjects: [
      'Lime render repair on a Georgian terrace on Bathwick Street (BA2)',
      'Monocouche render on a Holburne Park apartment (BA2)',
    ],
    transport: 'Within walking distance of Bath Spa station. Bus services connect to the rest of Bath. Easy access to the A36 and A46.',
    demographics: 'Predominantly owner-occupier professional families. One of the more affluent BA postcodes. Average property value £650,000.',
    metaDescription: 'Plastering & rendering in Bathwick from £65/m². Georgian terraces, Holburne Park apartments. Lime-compatible specialists. 10-year warranty.',
    titleTemplate: 'Bathwick Plastering & Rendering | Georgian & Modern',
  },
  {
    slug: 'widcombe',
    name: 'Widcombe',
    city: 'bath',
    postcode: 'BA2',
    type: 'South-Bath village suburb',
    blurb: 'South of the river and right next to Bath Spa station — village feel minutes from the centre.',
    intro: "Widcombe is a village-style suburb south of the river and on the doorstep of Bath Spa station.",
    longIntro:
      "Widcombe is a village-style suburb south of the river — it's actually the first suburb south of Bath Spa station, with the station itself forming a kind of boundary. The housing mixes Georgian cottages along Claverton Street with Victorian villas and modern canal-side apartments. Centrally-located but quiet, the area is popular with both families and commuters — we regularly render whole terraces here. The proximity to the Kennet & Avon Canal means some properties have moisture considerations that we address with breathable render systems.",
    propertyTypes: [
      'Georgian cottages on Claverton Street (2-3 bed, 800-1,200 sq ft, £400-£600k)',
      'Victorian villas (3-5 bed, 1,200-2,500 sq ft, £500k-£1.2m)',
      'Modern canal-side apartments (1-2 bed, 600-1,000 sq ft, £280-£420k)',
      'Period maisonettes (2-3 bed, 800-1,400 sq ft, £350-£550k)',
    ],
    landmarks: [
      'Widcombe Bridge',
      'Kennet & Avon Canal',
      'Bath Spa station',
      'Claverton Street',
      'Widcombe social club',
      'The old Widcombe works',
    ],
    nearbyAreas: ['bath-city-centre', 'bathwick', 'twerton', 'newbridge'],
    tier: 'tertiary',
    costVariation: 'Listed building premium for Georgian cottages — typically +10-15% on cost. Standard pricing for modern apartments.',
    nearbyProjects: [
      'Lime render repair on a Georgian cottage on Claverton Street (BA2)',
      'Silicone render on a Victorian villa near the canal (BA2)',
    ],
    transport: 'Right next to Bath Spa station — 10-minute walk to most properties. Bus services throughout Bath.',
    demographics: 'Mix of owner-occupier professional families and renters commuting to Bath or Bristol. Average property value £480,000.',
    metaDescription: 'Plastering & rendering in Widcombe from £60/m². Georgian cottages, Victorian villas. Lime-compatible systems. 10-year warranty.',
    titleTemplate: 'Widcombe Plastering & Rendering | Georgian Cottages',
  },
  {
    slug: 'newbridge',
    name: 'Newbridge',
    city: 'bath',
    postcode: 'BA1',
    type: 'West Bath suburb',
    blurb: 'West of Oldfield Park along the A4 — inter-war semis and modern apartments near the river.',
    intro: "Newbridge sits west of Oldfield Park along the A4 towards Bristol. The housing stock is dominated by inter-war semi-detached homes and modern apartments on the Newbridge Road corridor.",
    longIntro:
      "Newbridge is the west-Bath suburb along the A4 corridor towards Bristol — close enough to Bristol to be a popular commuter area, but Bath enough to retain BA postcodes and Bath property values. The housing stock is dominated by inter-war semi-detached homes (1930s, often larger than equivalent Bristol semis) and modern apartments on the Newbridge Road corridor. Many properties here were re-rendered in the 1990s with acrylic systems that are now failing — we strip and re-render with modern monocouche.",
    propertyTypes: [
      'Inter-war semis (3-bed, 1,000-1,300 sq ft, £380-£500k)',
      'Modern apartments on Newbridge Road (1-2 bed, 600-1,000 sq ft, £220-£350k)',
      'Detached family homes (4-bed, 1,500-2,200 sq ft, £500k-£800k)',
      'Riverside flats (1-2 bed, 600-900 sq ft, £240-£360k)',
    ],
    landmarks: [
      'Newbridge Road (the main road through)',
      'River Avon (the riverside)',
      'Newbridge Park & Ride',
      'Lower Bristol Road',
      'The old Newbridge Mill',
    ],
    nearbyAreas: ['bath-city-centre', 'bathwick', 'widcombe', 'odd-down'],
    tier: 'tertiary',
    costVariation: 'Standard pricing. Inter-war semis often need full strip-down of old acrylic systems.',
    nearbyProjects: [
      'Strip and re-render with monocouche on a 1930s semi near the Park & Ride (BA1)',
      'Silicone render on a modern apartment block on Newbridge Road (BA1)',
    ],
    transport: 'A4 corridor with bus services into Bath (10-15 minutes) and Bristol (40-50 minutes). Bath Spa station within walking distance for some properties.',
    demographics: 'Mix of owner-occupier families and Bristol commuters. Average property value £380,000.',
    metaDescription: 'Plastering & rendering in Newbridge from £55/m². Inter-war semis, modern apartments. Silicone, monocouche. 10-year warranty.',
    titleTemplate: 'Newbridge Plastering & Rendering | Inter-war Semis',
  },
  {
    slug: 'odd-down',
    name: 'Odd Down',
    city: 'bath',
    postcode: 'BA2',
    type: 'South Bath outer suburb',
    blurb: '1960s/70s housing estate on the southern edge of Bath — family homes with gardens.',
    intro: "Odd Down is a 1960s and 1970s housing estate on the southern edge of Bath, with family homes on generous plots and good value for the city.",
    longIntro:
      "Odd Down is the 1960s and 1970s housing estate on the southern edge of Bath — one of the more affordable BA postcodes, with family homes on generous plots. The original 1970s renders are now failing and need full strip-down before re-rendering. We work across the estate regularly — typically whole streets where neighbours coordinate on a single programme. The Sulis Manor area has some larger executive detached homes that need full re-rendering or EWI.",
    propertyTypes: [
      '1960s semi-detached (3-bed, 950-1,200 sq ft, £300-£400k)',
      '1970s terraced houses (2-3 bed, 800-1,100 sq ft, £260-£360k)',
      'Family homes with gardens (3-4 bed, 1,000-1,500 sq ft, £320-£480k)',
      'Ex-council stock (2-3 bed, 800-1,100 sq ft, £240-£330k)',
      'Bungalows (2-bed, 700-1,000 sq ft, £260-£350k)',
    ],
    landmarks: [
      'Odd Down cycle track',
      'Odd Down Park & Ride',
      'Sulis Manor (the local community centre)',
      'Hensley Drive',
      'The old Odd Down hospital site',
    ],
    nearbyAreas: ['bath-city-centre', 'bathwick', 'widcombe', 'newbridge'],
    tier: 'tertiary',
    costVariation: 'Standard pricing. Whole-street coordinated jobs attract 10% discount.',
    nearbyProjects: [
      'Three-property coordinated silicone re-render on a 1960s close (BA2)',
      'Full strip and re-render on a 1970s detached near the Park & Ride (BA2)',
    ],
    transport: 'Served by the A367. Odd Down Park & Ride connects to Bath city centre. Bus services run throughout the suburb.',
    demographics: 'Predominantly owner-occupier families, often multi-generational. One of the more affordable BA postcodes. Average property value £320,000.',
    metaDescription: 'Plastering & rendering in Odd Down from £55/m². 1960s-70s homes, family estates. Whole-street discounts. 10-year warranty.',
    titleTemplate: 'Odd Down Plastering & Rendering | 1960s-70s Homes',
  },
];

// Helpers
export const getArea = (slug: string): Area | undefined =>
  AREAS.find((a) => a.slug === slug);

export const getAreasByCity = (city: 'bristol' | 'bath'): Area[] =>
  AREAS.filter((a) => a.city === city);

export const getBristolAreas = (): Area[] => getAreasByCity('bristol');
export const getBathAreas = (): Area[] => getAreasByCity('bath');
