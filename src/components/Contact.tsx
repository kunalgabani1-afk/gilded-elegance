import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ExternalLink,
} from "lucide-react";

const branches = [
  {
    id: "katargam",
    name: "Katargam Branch",
    map: "https://maps.google.com/maps?q=21.2306484,72.8225457&z=15&output=embed",
    mapLink:
      "https://www.google.com/maps/place/Happy+Gems+%26+Jewellers/@21.2306484,72.8199708,17z",
    phone: "+91 90816 22202",
    whatsapp: "+919081622202",
    email: "hapyecom.21@gmail.com",
    open: "Monday – Sunday · 10 am – 8:15 pm",
    address:
      "57-58, opp. Varachha Bank, Dabholi Char Rasta, Navjivan Society, Katargam, Surat, Gujarat 395004",
  },

  {
    id: "varachha",
    name: "Varachha Branch",
    map: "https://maps.google.com/maps?q=21.213149,72.8581708&z=15&output=embed",
    mapLink:
      "https://www.google.com/maps/place/Happy+Gems+%26+Jewellers/@21.2219784,72.830831,15z",
    phone: "+91 95375 52202",
    whatsapp: "+919537552202",
    email: "hapyecom.21@gmail.com",
    open: "Monday – Sunday · 9:30 am – 8:30 pm",
    address:
      "54, Harirambapa Nagar, opp. Varachha Main Road, New Saktivijay Society, Urmi Society, Hirabaugh, Surat, Gujarat 395006",
  },

  {
    id: "ghoddod",
    name: "Ghod Dod Rd Branch",
    map: "https://maps.google.com/maps?q=21.1746712,72.7991297&z=15&output=embed",
    mapLink:
      "https://www.google.com/maps/place/HAPPY+GEMS+%26+JEWELLERS,+GHOD+DOD+BRANCH/@21.1746712,72.7965548,17z",
    phone: "+91 95379 52202",
    whatsapp: "+919537952202",
    email: "hapyecom.21@gmail.com",
    open: "Monday – Sunday · 10:30 am – 8:30 pm",
    address:
      "HOUSE NO. 2, DREAM BUSINESS HOUSE, Ghod Dod Rd, opp. KOTAK BANK, Athwa, Surat, Gujarat 395007",
  },
];

export function Contact() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-ivory overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-gold opacity-10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            Visit the Atelier
          </p>

          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">
            Come, sit a while.
          </h2>

          <p className="mt-8 max-w-2xl mx-auto font-serif italic text-lg text-muted-foreground leading-relaxed">
            Our doors are open every day, by appointment or simply for tea.
            Visit your nearest Happy Gems & Jewellers branch in Surat and
            experience timeless craftsmanship in person.
          </p>
        </div>

        {/* Branch Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch)}
              className={`relative overflow-hidden px-7 py-3 rounded-full text-xs uppercase tracking-[0.28em] transition-all duration-500 border ${
                activeBranch.id === branch.id
                  ? "bg-gradient-gold text-black border-gold shadow-[0_0_35px_rgba(212,157,63,0.35)]"
                  : "border-gold/40 text-gold-deep hover:bg-gold hover:text-black hover:border-gold hover:shadow-[0_0_30px_rgba(212,157,63,0.25)]"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Map + Info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-luxe border border-gold/30">
              <iframe
                title="Happy Gems & Jewellers"
                src={activeBranch.map}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />

              <a
                href={activeBranch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="absolute top-5 left-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-sm font-medium shadow-lg hover:bg-gold hover:text-black transition-all duration-300"
              >
                Open in Maps
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  Icon: MapPin,
                  label: "Showroom",
                  value: activeBranch.address,
                },
                {
                  Icon: Clock,
                  label: "Open",
                  value: activeBranch.open,
                },
                {
                  Icon: Phone,
                  label: "Telephone",
                  value: activeBranch.phone,
                },
                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  value: activeBranch.phone,
                },
              ].map((it) => (
                <div
                  key={it.label}
                  className="glass rounded-3xl p-6 flex gap-4 border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 shadow-lg">
                    <it.Icon size={18} className="text-black" />
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.32em] uppercase text-gold-deep">
                      {it.label}
                    </p>

                    <p className="mt-2 font-serif text-[15px] leading-relaxed text-foreground">
                      {it.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-2 glass rounded-[2rem] p-8 shadow-luxe flex flex-col gap-5 self-start border border-gold/20"
          >
            <div>
              <h3 className="font-serif text-3xl">
                Request a Visit
              </h3>

              <p className="mt-3 text-sm text-muted-foreground font-serif italic leading-relaxed">
                Select your preferred branch and our team will get in touch
                shortly.
              </p>
            </div>

            <Field
              label="Your Name"
              type="text"
              placeholder="Aanya Sharma"
            />

            <Field
              label="Phone"
              type="tel"
              placeholder="+91 ..."
            />

            <Field
              label="Email"
              type="email"
              placeholder="you@email.com"
            />

            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us what you are looking for..."
                className="mt-2 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 font-serif text-base resize-none"
              />
            </div>

            <button className="mt-2 px-7 py-4 rounded-full bg-gradient-gold text-black text-xs uppercase tracking-[0.3em] shine-sweep hover:shadow-[0_0_35px_rgba(212,157,63,0.45)] transition-all duration-500 hover:scale-[1.02]">
              Send Request
            </button>

            <div className="flex gap-3 mt-1">
              <a
                href={`tel:${activeBranch.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-gold/40 text-xs uppercase tracking-[0.25em] text-gold-deep hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Phone size={14} />
                Call
              </a>

              <a
                href={`mailto:${activeBranch.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-gold/40 text-xs uppercase tracking-[0.25em] text-gold-deep hover:bg-gold hover:text-black transition-all duration-300"
              >
                <Mail size={14} />
                Email
              </a>
            </div>

            <a
              href={`https://wa.me/${activeBranch.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-3 py-4 rounded-full bg-[#1d1d1d] text-white text-xs uppercase tracking-[0.28em] hover:bg-gold hover:text-black transition-all duration-500"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </label>

      <input
        {...rest}
        className="mt-2 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-2 font-serif text-base"
      />
    </div>
  );
}
