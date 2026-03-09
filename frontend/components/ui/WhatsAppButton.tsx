interface WhatsAppButtonProps {
  href:       string;
  label:      string;
  className?: string;
}

export default function WhatsAppButton({
  href,
  label,
  className = 'btn btn-primary',
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={`Contactar por WhatsApp: ${label}`}
    >
      {label}
    </a>
  );
}