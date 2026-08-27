// Per-combination copy for the service × neighbourhood pages.
//
// WHY THIS FILE EXISTS
// Those pages are built from area data plus service data, so two pages that
// share an area differ only by the service name — measured at 95% identical,
// which reads as doorway pages. This is the one place for copy that is true
// of *this service* in *this area* and nowhere else.
//
// HOW TO FILL IT IN
// Two or three sentences per entry, in Kyran's voice. The specifics carry it:
// the substrate, the typical property here, what actually fails locally,
// access and scaffold. For example:
//
//   'silicone-rendering/eastville':
//     "Eastville's Victorian terraces were mostly rendered in sand-and-cement " +
//     "in the 1970s, and that's what fails first on the north-facing gables. " +
//     "We strip back to brick, repoint, then apply silicone over a mesh base. " +
//     "The terraces are tight for scaffold, so we work one elevation at a time.",
//
// Leave an entry as '' and the page omits the block — nothing breaks, the page
// is just less distinct until the copy arrives.
//
// Regenerate (keeps existing copy):  node scripts/gen-notes.mjs
// Check what's outstanding:          node scripts/notes-coverage.mjs

export const SERVICE_AREA_NOTES: Record<string, string> = {
  // ---------- Silicone Rendering ----------
  'silicone-rendering/hanham': '',                                                                                                                                                                                                                       // Hanham
  'silicone-rendering/brislington': '',                // Brislington
  'silicone-rendering/kingswood': '',                  // Kingswood
  'silicone-rendering/st-george': '',                  // St George
  'silicone-rendering/fishponds': '',                  // Fishponds
  'silicone-rendering/downend': '',                    // Downend
  'silicone-rendering/emersons-green': '',             // Emerson's Green
  'silicone-rendering/longwell-green': '',             // Longwell Green
  'silicone-rendering/warmley': '',                    // Warmley
  'silicone-rendering/stapleton': '',                  // Stapleton
  'silicone-rendering/frenchay': '',                   // Frenchay
  'silicone-rendering/speedwell': '',                  // Speedwell
  'silicone-rendering/whitehall': '',                  // Whitehall
  'silicone-rendering/eastville': '',                  // Eastville
  'silicone-rendering/knowle': '',                     // Knowle

  // ---------- House Rendering ----------
  'house-rendering/hanham': '',                        // Hanham
  'house-rendering/brislington': '',                   // Brislington
  'house-rendering/kingswood': '',                     // Kingswood
  'house-rendering/st-george': '',                     // St George
  'house-rendering/fishponds': '',                     // Fishponds
  'house-rendering/downend': '',                       // Downend
  'house-rendering/emersons-green': '',                // Emerson's Green
  'house-rendering/longwell-green': '',                // Longwell Green
  'house-rendering/warmley': '',                       // Warmley
  'house-rendering/stapleton': '',                     // Stapleton
  'house-rendering/frenchay': '',                      // Frenchay
  'house-rendering/speedwell': '',                     // Speedwell
  'house-rendering/whitehall': '',                     // Whitehall
  'house-rendering/eastville': '',                     // Eastville
  'house-rendering/knowle': '',                        // Knowle

  // ---------- External Wall Rendering ----------
  'external-wall-rendering/hanham': '',                // Hanham
  'external-wall-rendering/brislington': '',           // Brislington
  'external-wall-rendering/kingswood': '',             // Kingswood
  'external-wall-rendering/st-george': '',             // St George
  'external-wall-rendering/fishponds': '',             // Fishponds
  'external-wall-rendering/downend': '',               // Downend
  'external-wall-rendering/emersons-green': '',        // Emerson's Green
  'external-wall-rendering/longwell-green': '',        // Longwell Green
  'external-wall-rendering/warmley': '',               // Warmley
  'external-wall-rendering/stapleton': '',             // Stapleton
  'external-wall-rendering/frenchay': '',              // Frenchay
  'external-wall-rendering/speedwell': '',             // Speedwell
  'external-wall-rendering/whitehall': '',             // Whitehall
  'external-wall-rendering/eastville': '',             // Eastville
  'external-wall-rendering/knowle': '',                // Knowle

  // ---------- Monocouche Rendering ----------
  'monocouche-rendering/hanham': '',                   // Hanham
  'monocouche-rendering/brislington': '',              // Brislington
  'monocouche-rendering/kingswood': '',                // Kingswood
  'monocouche-rendering/st-george': '',                // St George
  'monocouche-rendering/fishponds': '',                // Fishponds
  'monocouche-rendering/downend': '',                  // Downend
  'monocouche-rendering/emersons-green': '',           // Emerson's Green
  'monocouche-rendering/longwell-green': '',           // Longwell Green
  'monocouche-rendering/warmley': '',                  // Warmley
  'monocouche-rendering/stapleton': '',                // Stapleton
  'monocouche-rendering/frenchay': '',                 // Frenchay
  'monocouche-rendering/speedwell': '',                // Speedwell
  'monocouche-rendering/whitehall': '',                // Whitehall
  'monocouche-rendering/eastville': '',                // Eastville
  'monocouche-rendering/knowle': '',                   // Knowle

  // ---------- Plastering Services ----------
  'plastering-services/hanham': '',                    // Hanham
  'plastering-services/brislington': '',               // Brislington
  'plastering-services/kingswood': '',                 // Kingswood
  'plastering-services/st-george': '',                 // St George
  'plastering-services/fishponds': '',                 // Fishponds
  'plastering-services/downend': '',                   // Downend
  'plastering-services/emersons-green': '',            // Emerson's Green
  'plastering-services/longwell-green': '',            // Longwell Green
  'plastering-services/warmley': '',                   // Warmley
  'plastering-services/stapleton': '',                 // Stapleton
  'plastering-services/frenchay': '',                  // Frenchay
  'plastering-services/speedwell': '',                 // Speedwell
  'plastering-services/whitehall': '',                 // Whitehall
  'plastering-services/eastville': '',                 // Eastville
  'plastering-services/knowle': '',                    // Knowle

  // ---------- External Wall Insulation ----------
  'external-wall-insulation/hanham': '',               // Hanham
  'external-wall-insulation/brislington': '',          // Brislington
  'external-wall-insulation/kingswood': '',            // Kingswood
  'external-wall-insulation/st-george': '',            // St George
  'external-wall-insulation/fishponds': '',            // Fishponds
  'external-wall-insulation/downend': '',              // Downend
  'external-wall-insulation/emersons-green': '',       // Emerson's Green
  'external-wall-insulation/longwell-green': '',       // Longwell Green
  'external-wall-insulation/warmley': '',              // Warmley
  'external-wall-insulation/stapleton': '',            // Stapleton
  'external-wall-insulation/frenchay': '',             // Frenchay
  'external-wall-insulation/speedwell': '',            // Speedwell
  'external-wall-insulation/whitehall': '',            // Whitehall
  'external-wall-insulation/eastville': '',            // Eastville
  'external-wall-insulation/knowle': '',               // Knowle
};

export const getNote = (service: string, area: string): string =>
  SERVICE_AREA_NOTES[`${service}/${area}`] ?? '';
