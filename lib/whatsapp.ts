export const WHATSAPP_PHONE_NUMBER = "+505XXXXXXXX";

export const WHATSAPP_PREFILLED_MESSAGE =
  "Hi, I'd like to book a massage in Popoyo. I'm staying at [location]. Do you have availability for [date/time]?";

export function getWhatsAppUrl(message = WHATSAPP_PREFILLED_MESSAGE) {
  const phone = WHATSAPP_PHONE_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
