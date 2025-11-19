import { useState } from 'react'

const sampleItems = [
  { id: 1, type: 'video', title: 'AI Fashion Lookbook', thumbnail: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=1400&auto=format&fit=crop', tag: 'AI Video' },
  { id: 2, type: 'image', title: 'Neon Metropolis', thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop', tag: 'Gen Image' },
  { id: 3, type: 'campaign', title: 'Creator Collab: Alpha Drop', thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop', tag: 'Influencer' },
  { id: 4, type: 'video', title: 'Product Hype Reel', thumbnail: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1400&auto=format&fit=crop', tag: 'AI Video' },
  { id: 5, type: 'image', title: 'Dreamscapes Series', thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop', tag: 'Gen Image' },
  { id: 6, type: 'campaign', title: 'Influencer Launch Kit', thumbnail: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1400&auto=format&fit=crop', tag: 'Influencer' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const filtered = sampleItems.filter(i => filter === 'all' ? true : (filter === 'video' ? i.type === 'video' : filter === 'image' ? i.type === 'image' : i.type === 'campaign'))

  return (
    <section id="portfolio" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">AI-generated videos, photoreal images, and creator-led launches for forward brands.</p>
          </div>
          <div className="flex gap-2">
            {['all','video','image','campaign'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-lg text-sm ${filter===f? 'bg-white text-slate-900' : 'bg-white/10 text-white'} transition`}>
                {f.charAt(0).toUpperCase()+f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <article key={item.id} className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10">
              <img src={item.thumbnail} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white ring-1 ring-white/20">{item.tag}</div>
                  <h3 className="mt-2 text-white font-semibold">{item.title}</h3>
                </div>
                <div className="text-white/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">View →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
