export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Lancelot Studio</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Lancelot Studio is a one-person creative tech practice focused on designing and launching AI-native products and content. From diffusion pipelines to realtime video, we merge engineering with taste to deliver experiences that feel futuristic—and convert today.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-200">
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">GenAI Video & Image Pipelines</li>
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">Interactive Product Prototypes</li>
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">Creator & Influencer Collabs</li>
            <li className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">Go-to-market Content Systems</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm text-slate-200/90">
            <div className="p-3 rounded-lg bg-white/5">10+ Product Launches</div>
            <div className="p-3 rounded-lg bg-white/5">50M+ Creator Reach</div>
            <div className="p-3 rounded-lg bg-white/5">Trusted by Modern Brands</div>
          </div>
        </div>
      </div>
    </section>
  )
}
