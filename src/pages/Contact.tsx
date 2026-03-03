import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-12">
            <div className="flex items-baseline gap-5 mb-14">
              <span className="font-body text-[11px] tracking-[0.3em] uppercase text-sage flex-shrink-0">
                Contact
              </span>
              <h2 className="font-display text-[clamp(28px,4vw,40px)]">
                Get in <em className="italic text-deep-sage">Touch</em>
              </h2>
              <div className="flex-1 h-px bg-border mb-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
              <div className="bg-card p-10">
                <form className="space-y-6">
                  <div>
                    <label className="eyebrow block mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border px-4 py-3 font-body text-[13px] text-foreground focus:outline-none focus:border-deep-sage transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-background border border-border px-4 py-3 font-body text-[13px] text-foreground focus:outline-none focus:border-deep-sage transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="eyebrow block mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-[13px] text-foreground focus:outline-none focus:border-deep-sage transition-colors resize-none"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-foreground text-primary-foreground font-display italic text-lg px-6 py-3 tracking-wide hover:bg-deep-sage transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-foreground text-primary-foreground p-10 flex flex-col justify-center">
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-primary-foreground/45 mb-4">
                  Reach Us
                </p>
                <h3 className="font-display text-[22px] text-primary-foreground mb-4">
                  We'd love to hear from you
                </h3>
                <p className="font-body text-[13px] leading-[1.85] text-primary-foreground/70 mb-6">
                  Whether you have questions about our blends, need help choosing
                  the right diffuser, or want to discuss wholesale — we're here.
                </p>
                <p className="font-body text-[13px] text-primary-foreground/70">
                  hello@naturestrail.com
                </p>
                <p className="font-body text-[10px] tracking-[0.1em] text-primary-foreground/45 mt-6">
                  Handcrafted · Small Batch · Pure
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
