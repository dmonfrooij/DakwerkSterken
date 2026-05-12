import { useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { trackEvent } from "../utils/analytics";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageDraft, setMessageDraft] = useState(
    "Hallo, ik heb een vraag over dakwerkzaamheden en wil graag een offerte aanvragen."
  );

  const phone = "31613027782";

  const quickReplies = useMemo(
    () => [
      "Ik wil graag een offerte aanvragen.",
      "Ik heb een vraag over PVC of TPO dakbedekking.",
      "Ik wil graag advies over renovatie van mijn dak.",
      "Ik heb een algemene vraag over jullie diensten.",
    ],
    []
  );

  const openWhatsApp = () => {
    const text = messageDraft.trim() || quickReplies[0];
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    trackEvent("contact_click", {
      method: "whatsapp",
      location: isOpen ? "chat_widget" : "floating_button",
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleWidget = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    trackEvent("contact_click", {
      method: "whatsapp_widget_toggle",
      location: "floating_button",
      open: nextOpen,
    });
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8">
      {isOpen && (
        <div className="w-[320px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl mb-3">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div>
              <p className="font-semibold leading-tight">Dakwerk Sterken</p>
              <p className="text-xs text-green-50">Meestal reactie binnen 24 uur</p>
            </div>
            <button
              type="button"
              onClick={toggleWidget}
              aria-label="Sluit WhatsApp chat"
              className="rounded-full p-1 hover:bg-black/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 space-y-3">
            <div className="inline-block rounded-2xl rounded-tl-sm bg-white dark:bg-gray-600 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 shadow-sm">
              Hallo! Waar kunnen we u mee helpen?
            </div>

            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => {
                    setMessageDraft(reply);
                    trackEvent("contact_click", {
                      method: "whatsapp_quick_reply",
                      location: "chat_widget",
                    });
                  }}
                  className="rounded-full border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-200 hover:border-green-500 hover:text-green-700 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            <textarea
              value={messageDraft}
              onChange={(e) => setMessageDraft(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:border-green-600 focus:outline-none"
              placeholder="Typ hier uw bericht"
            />

            <button
              type="button"
              onClick={openWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 font-semibold text-white hover:brightness-95 transition"
            >
              <Send className="h-4 w-4" />
              Open WhatsApp chat
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Open WhatsApp chat"
        onClick={toggleWidget}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        {isOpen ? <X className="h-7 w-7 text-white" /> : <MessageCircle className="h-7 w-7 text-white" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;

