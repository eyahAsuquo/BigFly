import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const heroImg = "https://images.pexels.com/photos/36823725/pexels-photo-36823725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000";
const aboutImg = "https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600";
const factoryImg = "https://images.pexels.com/photos/30990849/pexels-photo-30990849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600";
const workersImg = "https://images.pexels.com/photos/14804687/pexels-photo-14804687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600";

const services = [
  {
    title: "Plastic Injection Molding",
    desc: "High-precision molding for consumer, industrial and packaging applications with rapid tooling turnaround.",
    icon: "M12 3v18M3 12h18",
  },
  {
    title: "Metal Fabrication",
    desc: "Laser cutting, bending, welding and finishing for steel, aluminum and stainless components.",
    icon: "M4 20l16-16M4 4l16 16",
  },
  {
    title: "Packaging Solutions",
    desc: "Custom rigid and flexible packaging designed for protection, shelf appeal and sustainability.",
    icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    title: "Custom Manufacturing",
    desc: "End-to-end product development from prototyping to full-scale production.",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z",
  },
  {
    title: "Assembly & Kitting",
    desc: "Efficient assembly lines with strict QC for electronics, hardware and consumer goods.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Quality Assurance",
    desc: "ISO-aligned processes, in-line inspection and full traceability for every batch.",
    icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
  },
];

const industries = [
  "Food & Beverage",
  "Pharmaceuticals",
  "Consumer Goods",
  "Agriculture",
  "Construction",
  "Automotive",
  "Electronics",
  "Logistics",
];

const stats = [
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Production Capacity", value: 2.5, suffix: "M+", sub: "units / month" },
  { label: "Clients Served", value: 350, suffix: "+" },
  { label: "On-Time Delivery", value: 98, suffix: "%" },
];

const testimonials = [
  {
    name: "Chinwe Okafor",
    role: "Operations Director, AgroFresh Ltd",
    quote: "Big Fly transformed our packaging line. Lead times dropped by 40% and quality is consistently excellent.",
  },
  {
    name: "Emeka Nwosu",
    role: "Founder, BuildPro Nigeria",
    quote: "Their metal fabrication team delivered precision parts for our modular housing project ahead of schedule.",
  },
  {
    name: "Aisha Bello",
    role: "Procurement Manager, Vita Drinks",
    quote: "Reliable, transparent and innovative. Big Fly is now our go-to manufacturing partner.",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="bg-[#020617] text-slate-100 antialiased selection:bg-amber-400/20">
      {/* Noise texture */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20">
              <img src="/images/logo.svg" alt="Big Fly" width={40} height={40} loading="eager" decoding="async" className="h-full w-full object-contain p-1.5 mix-blend-luminosity" />
            </div>
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-white">BIG FLY</div>
              <div className="text-[10px] uppercase tracking-widest text-amber-300/80">Manufacturing Co. Ltd</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {["About", "Services", "Capabilities", "Industries", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
              Get Quote
            </a>
            <a href="tel:+2348030000000" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:translate-y-[-1px] hover:bg-amber-300">
              Call Now
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden rounded-xl bg-white/10 p-2.5 text-white">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden border-t border-white/10 bg-slate-950">
              <div className="space-y-1 px-6 py-4">
                {["About", "Services", "Capabilities", "Industries", "Contact"].map(item => (
                  <a key={item} onClick={() => setMobileOpen(false)} href={`#${item.toLowerCase()}`} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">{item}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative isolate overflow-hidden pt-28">
        <motion.div style={{ y }} className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Factory" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/85 to-[#020617]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.15),transparent_60%)]" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                Made in Aba • Exporting Across Africa
              </div>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Precision Manufacturing. <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Built for Scale.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Big Fly Manufacturing Company Limited is Nigeria's trusted partner for plastic molding, metal fabrication, packaging and custom production. From prototype to millions of units — we deliver quality, speed and reliability.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="group relative overflow-hidden rounded-2xl bg-amber-400 px-7 py-4 text-base font-bold text-slate-900 shadow-2xl shadow-amber-500/30 transition hover:translate-y-[-2px]">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <svg className="transition-transform group-hover:translate-x-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-400 opacity-0 transition group-hover:opacity-100" />
                </a>
                <a href="#services" className="rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/5">
                  Explore Services
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-3xl font-black text-white">{s.value}{s.suffix}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ opacity }} className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <img src={factoryImg} alt="Factory floor" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-80 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl">
                    <div className="text-sm font-semibold text-amber-300">ISO-Aligned Quality Systems</div>
                    <p className="mt-1 text-sm text-slate-300">Real-time QC, full traceability, and zero-defect targets across all lines.</p>
                  </div>
                </div>
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
      </section>

      {/* Logo strip */}
      <section className="border-y border-white/10 bg-slate-950/50 py-8 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500">Trusted by leading brands across Nigeria & West Africa</p>
          <div className="mt-6 grid grid-cols-2 items-center gap-8 opacity-60 sm:grid-cols-4 lg:grid-cols-6">
            {["NESTLÉ", "DANGOTE", "UNILEVER", "PZ CUSSONS", "CHI", "BUA"].map(b => (
              <div key={b} className="text-center text-lg font-black tracking-wider text-slate-600">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-2xl" />
              <img src={aboutImg} alt="About" loading="lazy" decoding="async" className="relative rounded-[2rem] border border-white/10 shadow-2xl" />
              <div className="absolute -bottom-8 -right-8 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-xl backdrop-blur lg:block">
                <div className="text-5xl font-black text-amber-400">15+</div>
                <div className="text-sm text-slate-300">Years building Nigeria's manufacturing future</div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-amber-200 ring-1 ring-inset ring-white/10">About Big Fly</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Engineering excellence from Aba to the world.</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Founded in Aba, Abia State, Big Fly Manufacturing Company Limited combines deep local expertise with global standards. We operate state-of-the-art facilities for injection molding, metalworking, packaging and assembly — serving FMCG, pharma, construction and industrial clients.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  { title: "End-to-End", desc: "Design, tooling, production & logistics under one roof." },
                  { title: "Speed", desc: "Rapid prototyping to mass production in weeks, not months." },
                  { title: "Quality", desc: "In-process checks, lab testing & compliance documentation." },
                  { title: "Sustainability", desc: "Recycled materials, energy-efficient lines & waste reduction." },
                ].map(f => (
                  <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5">
                    <div className="text-base font-semibold text-white">{f.title}</div>
                    <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-t border-white/10 bg-slate-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Full-service manufacturing</h2>
            <p className="mt-4 text-lg text-slate-400">From concept to container — we scale with you.</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 transition hover:border-amber-400/40">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-amber-500/10 blur-2xl transition group-hover:bg-amber-500/20" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-300"><path d={s.icon} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-amber-300 transition group-hover:gap-2">
                  Learn more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Capabilities that deliver.</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-400">Modern equipment, skilled technicians and lean processes ensure consistent output at competitive costs.</p>

              <div className="mt-10 space-y-4">
                {[
                  { k: "Injection Molding", v: "80 – 650 ton machines, multi-cavity tools" },
                  { k: "Metal Fabrication", v: "Laser cutting up to 20mm, CNC bending & welding" },
                  { k: "Printing & Labeling", v: "Offset, flexo & digital for packaging" },
                  { k: "Assembly Lines", v: "Semi-automated lines with poka-yoke" },
                  { k: "Tool Room", v: "In-house mold maintenance & rapid repairs" },
                ].map(item => (
                  <div key={item.k} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <div>
                      <div className="font-semibold text-white">{item.k}</div>
                      <div className="text-sm text-slate-400">{item.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={workersImg} alt="Workers" loading="lazy" decoding="async" className="h-full w-full rounded-[2rem] border border-white/10 object-cover" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                {["ISO-aligned", "24/7 Ops", "Export Ready"].map(t => (
                  <div key={t} className="rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-y border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-2xl font-bold text-white">Industries we serve</h3>
            <div className="flex flex-wrap gap-3">
              {industries.map(i => (
                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{i}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black text-white sm:text-5xl">From idea to delivery</h2>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-400/0 via-amber-400/40 to-amber-400/0 lg:block" />
            <div className="space-y-12">
              {[
                { step: "01", title: "Discover & Design", desc: "We review specs, propose materials and create DFM feedback." },
                { step: "02", title: "Prototype & Validate", desc: "Rapid prototypes, functional testing and client approval." },
                { step: "03", title: "Tooling & Pilot", desc: "Tool build, first-off samples and process validation." },
                { step: "04", title: "Scale & Deliver", desc: "Mass production, QC, packaging and logistics coordination." },
              ].map((p, i) => (
                <div key={p.step} className={`relative grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
                      <div className="text-6xl font-black text-white/5">{p.step}</div>
                      <h4 className="mt-2 text-2xl font-bold text-white">{p.title}</h4>
                      <p className="mt-2 text-slate-400">{p.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/10 bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-black text-white">What clients say</h2>
              <p className="mt-4 text-slate-400">Partnerships built on performance and trust.</p>
            </div>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
                  <div className="text-5xl text-amber-400/30">“</div>
                  <p className="mt-2 text-xl leading-relaxed text-slate-200">{testimonials[activeTestimonial].quote}</p>
                  <div className="mt-6">
                    <div className="font-semibold text-white">{testimonials[activeTestimonial].name}</div>
                    <div className="text-sm text-slate-400">{testimonials[activeTestimonial].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8 bg-amber-400' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-400/30 bg-gradient-to-br from-amber-500 to-orange-600 p-12 text-center shadow-2xl shadow-amber-500/20 sm:p-16">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Ready to manufacture with confidence?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-900/80">Send us your specs today. Get a detailed quote and DFM feedback within 48 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="rounded-2xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl transition hover:translate-y-[-2px]">Request a Quote</a>
              <a href="mailto:info@bigflymfg.com" className="rounded-2xl border-2 border-slate-900/20 bg-white/20 px-8 py-4 text-base font-bold text-slate-900 backdrop-blur transition hover:bg-white/30">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-slate-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black text-white sm:text-5xl">Let's build together</h2>
              <p className="mt-4 text-lg text-slate-400">Tell us about your project. Our engineering team will respond within 1 business day.</p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-300"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Head Office & Factory</div>
                    <div className="text-slate-400">Industrial Layout, Aba, Abia State, Nigeria</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-300"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-slate-400">+234 803 000 0000 • +234 809 000 0000</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-slate-400">info@bigflymfg.com • sales@bigflymfg.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-2">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=5.1127263,7.3383519&z=14&output=embed"
                  className="h-64 w-full rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-500/10 to-orange-600/10 blur-2xl" />
              <form onSubmit={handleSubmit} className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 shadow-2xl">
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-slate-300">Full Name</label>
                      <input required value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none ring-amber-400/30 focus:border-amber-400/50 focus:ring-4" placeholder="Ada Okoro" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300">Work Email</label>
                      <input required type="email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none ring-amber-400/30 focus:border-amber-400/50 focus:ring-4" placeholder="ada@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Company</label>
                    <input value={formState.company} onChange={e => setFormState({ ...formState, company: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none ring-amber-400/30 focus:border-amber-400/50 focus:ring-4" placeholder="Company Ltd" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300">Project Details</label>
                    <textarea required rows={5} value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none ring-amber-400/30 focus:border-amber-400/50 focus:ring-4" placeholder="Tell us about materials, quantities, timeline..." />
                  </div>
                  <button type="submit" className="group relative overflow-hidden rounded-2xl bg-amber-400 px-6 py-4 text-base font-bold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:translate-y-[-1px]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Request
                      <svg className="transition-transform group-hover:translate-x-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {submitted && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                        Thanks! Our team will reach out shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy. We never share your data.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#010409] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500" />
                <div>
                  <div className="font-bold text-white">BIG FLY MANUFACTURING</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Company Limited</div>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm text-slate-400">Precision manufacturing from Aba, Nigeria. Building quality products for Africa and beyond.</p>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-200">Company</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {["About", "Capabilities", "Sustainability", "Careers"].map(l => <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-200">Services</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {["Injection Molding", "Metal Fabrication", "Packaging", "Assembly"].map(l => <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-200">Connect</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>info@bigflymfg.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
            <div>© {new Date().getFullYear()} Big Fly Manufacturing Company Limited. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy</a>
              <a href="#" className="hover:text-slate-300">Terms</a>
              <a href="#" className="hover:text-slate-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
