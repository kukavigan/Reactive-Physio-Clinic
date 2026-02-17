import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/38345274352?text=Përshëndetje%20Reactive%20Physio%2C%20dua%20të%20rezervoj%20një%20termin."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
