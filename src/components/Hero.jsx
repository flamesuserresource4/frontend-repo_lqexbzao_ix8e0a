import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm ring-1 ring-white/20">
            AI-driven products • Content • Influence
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Lancelot Studio
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200/90">
            We craft AI-native products, cinematic visuals, and creator collaborations that move culture and grow brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-slate-900/20">Explore work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 transition">Start a project</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950" />
    </section>
  )
}
