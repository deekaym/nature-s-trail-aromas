const reviews = [
  {
    name: "Sarah M.",
    blend: "Peaceful Forest",
    text: "This blend has completely transformed my evening routine. The cedarwood and lavender combination is incredibly calming — like bringing the forest indoors.",
    rating: 5,
  },
  {
    name: "James K.",
    blend: "Misty Mountain",
    text: "Crisp and invigorating. I use it every morning in my diffuser and it sets the tone for the entire day. The quality is unmatched.",
    rating: 5,
  },
  {
    name: "Olivia R.",
    blend: "Sunset Trail",
    text: "The warm spice notes are gorgeous. It fills my home with the most comforting scent — like a hug in a bottle. Already on my second order.",
    rating: 5,
  },
  {
    name: "David P.",
    blend: "Gift Set",
    text: "Bought the trio as a gift for my partner and she was thrilled. The packaging is beautiful and the scents are pure and natural.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-12">
        {/* Section header */}
        <div className="flex items-baseline gap-5 mb-14">
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-sage flex-shrink-0">
            03
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,40px)]">
            What people <em className="italic text-deep-sage">say</em>
          </h2>
          <div className="flex-1 h-px bg-border mb-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`p-8 ${i === 0 ? "bg-foreground text-primary-foreground" : "bg-card"}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <span
                    key={s}
                    className={`text-xs ${i === 0 ? "text-primary-foreground/60" : "text-deep-sage"}`}
                  >
                    ✦
                  </span>
                ))}
              </div>

              <p
                className={`font-body text-[13px] leading-[1.85] mb-6 ${
                  i === 0 ? "text-primary-foreground/75" : "text-soft-ink"
                }`}
              >
                "{review.text}"
              </p>

              <div>
                <p
                  className={`font-display text-[16px] ${
                    i === 0 ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {review.name}
                </p>
                <p
                  className={`font-body text-[10px] tracking-[0.15em] uppercase mt-1 ${
                    i === 0 ? "text-primary-foreground/40" : "text-muted-foreground"
                  }`}
                >
                  {review.blend}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
