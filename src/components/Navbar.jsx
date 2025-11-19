import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-slate-900/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-fuchsia-500 shadow-lg" />
          <span className="text-white font-semibold tracking-tight">Lancelot Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">Let’s talk</a>
        </nav>
        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-4 top-3 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">Menu</span>
            <button onClick={() => setOpen(false)} className="text-slate-200">
              <X />
            </button>
          </div>
          <div className="mt-3 grid">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-3 py-2 rounded-lg bg-white/10 text-white text-center">Let’s talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
