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
    mapLink: "https://maps.app.goo.gl/7jtcW5SA48r6owEA7",
    phone: "+91 90816 22202",
    whatsapp: "919081622202",
    email: "hapyecom.21@gmail.com",
    open: "Monday – Sunday · 10:00 AM – 8:15 PM",
    address:
      "57-58, Opp. Varachha Bank, Dabholi Char Rasta, Navjivan Society, Katargam, Surat, Gujarat 395004",
  },

  {
    id: "varachha",
    name: "Varachha Branch",
    map: "https://maps.google.com/maps?q=21.213149,72.8581708&z=15&output=embed",
    mapLink: "https://maps.app.goo.gl/WMXmgJhdUDxBB899A",
    phone: "+91 95375 52202",
    whatsapp: "919537552202",
    email: "hapyecom.21@gmail.com",
    open: "Monday – Sunday · 9:30 AM – 8:30 PM",
    address:
      "54, Harirambapa Nagar, Opp. Varachha Main Road, New Saktivijay Society, Urmi Society, Hirabaugh, Surat, Gujarat 395006",
  },

  {
    id: "ghoddod",
    name: "Ghod Dod Rd Branch",
    map: "https://maps.google.com/maps?q=21.1746712,72.7991297&z=15&output=embed",
    mapLink: "https://maps.app.goo.gl/zSUUAsY3rX5Zx6BU6",
    phone: "+91 95379 52202",
    whatsapp: "919537952202",
    email: "hapyecom.21@gmail.com",
    open: "Monday – Sunday · 10:30 AM – 8:30 PM",
    address:
      "House No. 2, Dream Business House, Ghod Dod Rd, Opp. Kotak Bank, Athwa, Surat, Gujarat 395007",
  },
];

export function Contact() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-ivory overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-gradient-gold opacity-10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.45em] uppercase text-gold-deep font-medium">
            Visit the Atelier
          </p>

          <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none text-foreground">
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
              className={`group relative overflow-hidden px-8 py-3 rounded-full text-xs uppercase tracking-[0.3em] transition-all duration-500 border backdrop-blur-xl ${
                activeBranch.id === branch.id
                  ? "bg-gradient-gold text-black border-gold shadow-[0_0_35px_rgba(212,157,63,0.35)]"
                  : "bg-white/40 border-gold/30 text-gold-deep hover:bg-gold hover:text-black hover:border-gold hover:shadow-[0_0_30px_rgba(212,157,63,0.25)]"
              }`}
            >
              <span className="relative z-10">{branch.name}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-3 space-y-7">
            {/* MAP */}
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.12)] border border-gold/20 bg-white">
              <iframe
                title={activeBranch.name}
                src={activeBranch.map}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />

              {/* Map Button */}
              <a
                href={activeBranch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="absolute top-5 left-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/95 backdrop-blur-md text-black text-sm font-medium shadow-xl hover:bg-gold hover:text-black transition-all duration-300"
              >
                Open in Maps
                <ExternalLink size={15} />
              </a>

              {/* Active Branch Tag */}
              <div className="absolute bottom-5 left-5 px-5 py-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  Current Branch
                </p>

                <h4 className="mt-1 text-white font-serif text-lg">
                  {activeBranch.name}
                </h4>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  Icon: MapPin,
                  label: "Showroom",
                  value: activeBranch.address,
                },
                {
                  Icon: Clock,
                  label: "Open Hours",
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
                  className="group glass rounded-[2rem] p-6 flex gap-4 border border-gold/20 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-lg">
                    <it.Icon size={20} className="text-black" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold-deep font-semibold">
                      {it.label}
                    </p>

                    <p className="mt-3 font-serif text-[15px] leading-relaxed text-foreground break-words">
                      {it.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-2 glass rounded-[2.2rem] p-8 bg-white/60 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-gold/20 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-serif text-3xl text-foreground">
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
              label="Phone Number"
              type="tel"
              placeholder="+91 98765 43210"
            />

            <Field
              label="Email Address"
              type="email"
              placeholder="you@email.com"
            />

            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us what you are looking for..."
                className="mt-3 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-3 font-serif text-base resize-none placeholder:text-muted-foreground/70"
              />
            </div>

            {/* Submit */}
            <button className="mt-2 px-7 py-4 rounded-full bg-gradient-gold text-black text-xs uppercase tracking-[0.3em] font-semibold hover:shadow-[0_0_40px_rgba(212,157,63,0.45)] transition-all duration-500 hover:scale-[1.02]">
              Send Request
            </button>

            {/* Contact Buttons */}
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

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${activeBranch.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-3 py-4 rounded-full bg-[#111111] text-white text-xs uppercase tracking-[0.28em] hover:bg-gold hover:text-black transition-all duration-500"
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
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
        {label}
      </label>

      <input
        {...rest}
        className="mt-3 w-full bg-transparent border-b border-gold/40 focus:border-gold outline-none py-3 font-serif text-base placeholder:text-muted-foreground/70 transition-all duration-300"
      />
    </div>
  );
}
