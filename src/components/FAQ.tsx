import { useState } from "react";

const faqs = [
  {
    question: "What are your essential oil blends made from?",
    answer:
      "All Nature's Trail blends are 100% pure, therapeutic-grade essential oils sourced from single-origin botanicals. We never use synthetic fragrances, carrier oils, or additives. Each blend is formulated for use in ultrasonic and nebulising diffusers.",
  },
  {
    question: "How do I use the blends with a diffuser?",
    answer:
      "Add 3–5 drops of your chosen blend to your diffuser's water reservoir. Our blends are optimised for ultrasonic diffusers, but also work beautifully with nebulising and reed diffusers. A single 15 mL bottle provides approximately 250 drops.",
  },
  {
    question: "Do you offer a gift set?",
    answer:
      "Yes! Our curated gift set includes all three signature blends — Misty Mountain, Peaceful Forest, and Sunset Trail — in a beautiful kraft box with botanical tissue wrapping. It makes a perfect gift for anyone who loves natural aromatherapy.",
  },
  {
    question: "Are your products cruelty-free and vegan?",
    answer:
      "Absolutely. All Nature's Trail products are cruelty-free, vegan, and never tested on animals. Our packaging is made from recycled and recyclable materials wherever possible.",
  },
  {
    question: "What is your shipping and return policy?",
    answer:
      "We offer free shipping on all orders. Orders are dispatched within 1–2 business days. If you're not completely satisfied, we accept returns within 30 days of purchase for a full refund.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-12">
        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-14">
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-sage flex-shrink-0">
            04
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)]">
            Frequently <em className="italic text-deep-sage">Asked</em>
          </h2>
          <div className="flex-1 h-px bg-border mb-1" />
        </div>

        <div className="max-w-2xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <h3 className="font-display text-[18px] pr-8 group-hover:text-deep-sage transition-colors">
                  {faq.question}
                </h3>
                <span
                  className={`font-body text-[18px] text-sage flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="font-body text-[13px] leading-[1.85] text-soft-ink">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
