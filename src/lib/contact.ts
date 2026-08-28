// Single source of truth for how people reach KD.
//
// The landline is the number on every page. WhatsApp is separate: wa.me
// links only work against a mobile number that is actually registered on
// WhatsApp, and a landline will not do — the link resolves to a dead
// "phone number shared via url is invalid" page.
//
// Until the real mobile is set here, the WhatsApp button does not render.
// That is deliberate: a chat button that opens an error is worse than no
// chat button.

export const PHONE = {
  /** Dial string, no spaces. */
  tel: '+441174094116',
  /** How it is written on the page. */
  display: '0117 409 4116',
  /** E.164, for schema.org. */
  international: '+441174094116',
};

/** The mobile. Not shown on the site — it is the WhatsApp line. */
export const MOBILE = {
  tel: '07961114662',
  display: '07961 114662',
  international: '+447961114662',
};

/**
 * KD's WhatsApp mobile in international format, digits only, no '+'.
 * e.g. '447700900123' for 07700 900123.
 *
 * From the GBP blueprint's second listed number, +44 7961 114662.
 * Leave empty to hide the button.
 */
export const WHATSAPP_NUMBER = '447961114662';

/** Prefilled first message. Keep it short — it is editable before sending. */
export const WHATSAPP_MESSAGE =
  "Hi KD Plastering — I'd like a quote for my property.";

export const whatsappHref = (message: string = WHATSAPP_MESSAGE) =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : null;


/**
 * Profiles that are demonstrably the same business, for schema.org `sameAs`.
 *
 * This is how Google consolidates the entity: the site, the Google Business
 * Profile, Checkatrade and the rest are one business rather than several
 * loosely-similar ones. It matters more than usual here because the name is
 * currently inconsistent across those properties — Companies House has
 * "K D Plastering Services Ltd", the GBP shows the same, Checkatrade has
 * "K D Plastering & Rendering", and the site trades as "KD Plastering &
 * Rendering Services".
 *
 * Only add a URL you have opened and confirmed. A sameAs pointing at a 404
 * is worse than no sameAs — it asserts a relationship to a page that is not
 * there, which is the opposite of what the property is for.
 */
export const COMPANY = {
  legalName: 'K D Plastering Services Ltd',
  number: '10957221',
  /** Incorporated 11 September 2017 (Companies House). Kyran traded before
      that, which is why the site says "since 2014" — the two are not in
      conflict, but only the incorporation date belongs in schema. */
  incorporated: '2017-09-11',
};

export const PROFILES: string[] = [
  // Checkatrade — 9.8/10 from 194 reviews. The /trades/ segment matters;
  // Google's breadcrumb display omits it, which is not the real URL.
  'https://www.checkatrade.com/trades/kdplasteringservices',

  // MyBuilder — 4.7 from 51 reviews. Supplied by Richard; MyBuilder returns
  // 403 to automated requests so it could not be machine-checked here.
  'https://www.mybuilder.com/profile/kd_plastering',

  // Verified 200, "KDplastering | Bristol". The ?locale=en_GB parameter is
  // dropped — sameAs wants the canonical profile URL, not a localised view.
  'https://www.facebook.com/kdplasterin/',

  // Verified 200, "K D Plastering Services Ltd (@kd.plastering)".
  'https://www.instagram.com/kd.plastering/',

  // Verified 200, "K D Plastering Services (@kd_plastering)". x.com, not
  // twitter.com: both resolve, but x.com is canonical now.
  'https://x.com/kd_plastering',

  // Companies House. An authoritative third-party confirmation of the legal
  // entity, which is worth more for entity consolidation than any social.
  'https://find-and-update.company-information.service.gov.uk/company/10957221',

  // Yell. Behind Cloudflare, so it returns 403 to automated checks — but the
  // slug carries the exact registered name, which is why this is safe to
  // include where the MyJobQuote listing was not.
  'https://www.yell.com/biz/k-d-plastering-services-ltd-bristol-10624874/',

  // Directory listing. Auto-generated rather than claimed, but it carries
  // the correct NAP — Roman Way and BS15 both appear on the page — so it is
  // a genuine citation rather than a stray.
  'https://www.mylocalservices.co.uk/K+D+Plastering+Services+Ltd-Bristol-3202160.html',

  // NOT added: https://www.myjobquote.co.uk/t/kds-plastering-1
  // The page names "Kds plastering" and carries no phone, postcode or
  // street. Nothing on it ties to this business, and "KDS Plastering" is a
  // plausible different trader. A sameAs pointing at someone else's profile
  // tells Google they are the same entity, which is worse than omitting it.
  // Add only if Richard confirms the listing is his.

  // Google Business Profile. CID derived from the hex pair in the Maps place
  // URL (0x...:0x37c462a6f47ea1af). The maps.app.goo.gl short link and the
  // share.google link both resolve to the same entity, /g/11tn9dr2fx, so this
  // is confirmed three ways. The CID form is used rather than the place URL
  // because the latter carries session parameters that change per share.
  'https://maps.google.com/?cid=4018445236727357871',
  // from the listing's Share option. The most valuable one still missing.
];
