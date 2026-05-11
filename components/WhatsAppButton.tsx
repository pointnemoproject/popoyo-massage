import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  children?: React.ReactNode;
  className?: string;
  message?: string;
  variant?: "primary" | "secondary" | "sticky";
};

const variants = {
  primary:
    "bg-palm-800 text-white shadow-soft hover:bg-palm-900 focus-visible:outline-palm-800",
  secondary:
    "border border-palm-800/20 bg-white text-palm-900 hover:border-palm-800/40 hover:bg-sand-50 focus-visible:outline-palm-800",
  sticky:
    "bg-palm-800 text-white shadow-[0_16px_40px_rgba(24,51,45,0.28)] hover:bg-palm-900 focus-visible:outline-white",
};

export function WhatsAppButton({
  children = "Book on WhatsApp",
  className = "",
  message,
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      aria-label="Book a massage on WhatsApp"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      href={getWhatsAppUrl(message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
