export default function Services() {
  const services = [
    {
      title: 'AI Product Creation',
      desc: 'From concept to prototype to launch. We design and ship AI-native products that solve real problems and feel delightful.',
      points: ['Product strategy', 'UX & interaction', 'MVP build', 'Model + API integration'],
    },
    {
      title: 'Content Generation',
      desc: 'Cinematic, on-brand content generated with state-of-the-art models and custom tooling.',
      points: ['Video & image pipelines', 'Brand style tuning', 'Batch content systems', 'Realtime visuals'],
    },
    {
      title: 'Influencer Collaboration',
      desc: 'Creator-led campaigns that blend product storytelling with reach and authenticity.',
      points: ['Creator sourcing', 'Collab concepts', 'Launch kits', 'Performance tracking'],
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Partner with a studio that ships—combining AI expertise, creative direction, and growth instincts.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10 p-6">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-200 text-sm">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
