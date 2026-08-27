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
  tel: '01174094116',
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
