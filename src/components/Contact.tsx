import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

const branches = [
  {
    id: "ghod-dod",
    name: "Ghod Dod Rd Branch",
    map: "https://www.google.com/maps/place/HAPPY+GEMS+%26+JEWELLERS,+GHOD+DOD+BRANCH/@21.1746712,72.7965548,17z/data=!3m2!4b1!5s0x3be04dde123d5f01:0xf5c5a791b6adc33!4m6!3m5!1s0x3be04d972252d3ef:0x321595a777ee4352!8m2!3d21.1746712!4d72.7991297!16s%2Fg%2F1pzq4rv3v?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+91 95379 52202",
    whatsapp: "+91 95379 52202",
    email: "hapyecom.21@gmail.com",
    timing: "Monday – Sunday · 10:30 am – 8:30 pm",
    address:
      "HOUSE NO. 2, DREAM BUSINESS HOUSE, Ghod Dod Rd, opp. KOTAK BANK, Athwa, Surat, Gujarat 395007",
  },

  {
    id: "varachha",
    name: "Varachha Branch",
    map: "https://www.google.com/maps/place/Happy+Gems+%26+Jewellers/@21.2219784,72.830831,15z/data=!4m6!3m5!1s0x3be04f04a347988d:0x28c608d11a83641a!8m2!3d21.213149!4d72.8581708!16s%2Fg%2F11c7sx2wp6?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+91 95375 52202",
    whatsapp: "+91 95375 52202",
    email: "hapyecom.21@gmail.com",
    timing: "Monday – Sunday · 9:30 am – 8:30 pm",
    address:
      "54, Harirambapa Nagar, opp. Varachha Main Road, New Saktivijay Society, Urmi Society, Hirabaugh, Surat, Gujarat 395006",
  },

  {
    id: "katargam",
    name: "Katargam Branch",
    map: "https://www.google.com/maps/place/Happy+Gems+%26+Jewellers/@21.2306484,72.8199708,17z/data=!3m2!4b1!5s0x3be04eb980538cc3:0x8a286e3ff4ef9c3d!4m6!3m5!1s0x3be04f2d30f3b58f:0x8d8b123822a24e52!8m2!3d21.2306484!4d72.8225457!16s%2Fg%2F11f5t3t8wj?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+91 90816 22202",
    whatsapp: "+91 90816 22202",
    email: "hapyecom.21@gmail.com",
    timing: "Monday – Sunday · 10:00 am – 8:15 pm",
    address:
      "57-58, opp. Varachha Bank, Dabholi Char Rasta, Navjivan Society, Katargam, Surat, Gujarat 395004",
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
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            Visit the Atelier
          </p>

          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1]">
            Come, sit a while.
          </h2>

          <p className="mt-10 max-w-3xl mx-auto font-serif italic text-lg text-muted-foreground leading-relaxed">
            Our doors are open every day, by appointment or simply for tea.
            Visit any Happy Gems & Jewellers branch across Surat and experience
            timeless craftsmanship, heritage collections, and personalised
            jewellery guidance in a luxurious atmosphere.
          </p>

          {/* Branch Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={`group relative overflow-hidden px-7 py-4 rounded-full border transition-all duration-500 text-xs uppercase tracking-[0.28em] ${
                  activeBranch.id === branch.id
                    ? "bg-gradient-gold text-primary-foreground border-gold shadow-[0_0_40px_rgba(212,161,74,0.35)] scale-105"
                    : "border-gold/40 text-gold-deep hover:bg-gradient-gold hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(212,161,74,0.25)] hover:-translate-y-1"
                }`}
              >
                <span className="relative z-10">{branch.name}</span>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Map + Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map */}
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-gold/20 bg-white">
              <iframe
                title={activeBranch.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  activeBranch.address
                )}&output=embed`}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Detail Cards */}
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
                  value: activeBranch.timing,
                },

                {
                  Icon: Phone,
                  label: "Telephone",
                  value: activeBranch.phone,
                },

                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  value: activeBranch.whatsapp,
                },
              ].map((it) => (
                <div
                  key={it.label}
                  className="group relative overflow-hidden rounded-[1.8rem] bg-white/70 backdrop-blur-md border border-gold/20 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(212,161,74,0.12)] transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 via-transparent to-gold/10" />

                  <div className="relative z-10 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 shadow-lg">
                      <it.Icon
                        size={18}
                        className="text-primary-foreground"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                        {it.label}
                      </p>

                      <p className="mt-2 font-serif text-[1.02rem] leading-relaxed text-foreground">
                        {it.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-2 bg-white/75 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gold/20 flex flex-col gap-5 self-start"
          >
            <div>
              <h3 className="font-serif text-3xl">
                Request a Visit
              </h3>

              <p className="mt-3 text-sm text-muted-foreground font-serif italic leading-relaxed">
                Book a private appointment at{" "}
                <span className="text-gold-deep font-semibold">
                  {activeBranch.name}
                </span>{" "}
                and explore handcrafted jewellery with personalised assistance.
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

            <button className="mt-3 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] shine-sweep hover:shadow-[0_0_35px_rgba(212,161,74,0.35)] hover:-translate-y-1 transition-all duration-500">
              Send Request
            </button>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href={`tel:${activeBranch.phone}`}
                className="group inline-flex items-center justify-center gap-2 py-3 rounded-full border border-gold/30 text-xs uppercase tracking-[0.25em] hover:bg-gradient-gold hover:text-primary-foreground transition-all duration-500"
              >
                <Phone
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
                Call
              </a>

              <a
                href={`mailto:${activeBranch.email}`}
                className="group inline-flex items-center justify-center gap-2 py-3 rounded-full border border-gold/30 text-xs uppercase tracking-[0.25em] hover:bg-gradient-gold hover:text-primary-foreground transition-all duration-500"
              >
                <Mail
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
                Email
              </a>
            </div>

            {/* Branch Contact */}
            <div className="mt-4 rounded-[1.5rem] border border-gold/20 bg-gradient-to-br from-white to-gold/5 p-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
                Direct Contact
              </p>

              <div className="mt-3 space-y-2">
                <p className="font-serif text-lg text-foreground">
                  {activeBranch.phone}
                </p>

                <p className="font-serif text-base text-muted-foreground break-all">
                  {activeBranch.email}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...rest
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
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
