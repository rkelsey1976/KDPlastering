// Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver — not Google).
//
// Usage:
//   node scripts/indexnow.mjs                 # submit every URL in the live sitemap
//   node scripts/indexnow.mjs <url> [<url>…]  # submit only the URLs given
//
// The key file must already be live at:
//   https://www.kdplasteringrenderingservices.co.uk/<KEY>.txt
//
// IndexNow expects only changed URLs in normal use. A full-sitemap submit is
// for one-off events — a migration, a mass content change — not routine.

const HOST = 'www.kdplasteringrenderingservices.co.uk';
const KEY = 'edf9d6242fa37d7cbcb97e32cd581f54';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP = `https://${HOST}/sitemap-0.xml`;
const BATCH = 10000; // IndexNow hard limit per request

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const body = await res.text();
  // 200 = accepted, 202 = accepted pending key validation.
  console.log(`  ${res.status} ${res.statusText}${body ? ` — ${body.trim()}` : ''}`);
  if (![200, 202].includes(res.status)) process.exitCode = 1;
}

const args = process.argv.slice(2);
const urls = args.length ? args : await urlsFromSitemap();

if (!urls.length) {
  console.error('No URLs to submit.');
  process.exit(1);
}

console.log(`Submitting ${urls.length} URL(s) to IndexNow as ${HOST}`);
for (let i = 0; i < urls.length; i += BATCH) {
  const chunk = urls.slice(i, i + BATCH);
  console.log(`batch ${i / BATCH + 1} (${chunk.length} URLs):`);
  await submit(chunk);
}
