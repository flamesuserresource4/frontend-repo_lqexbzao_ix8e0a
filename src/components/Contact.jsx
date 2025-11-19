import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    try {
      setStatus('loading')
      // In this demo, we just simulate success.
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      form.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something brilliant</h2>
          <p className="mt-3 text-slate-300 max-w-xl">Tell us about your product idea, content needs, or launch plans. We’ll reply within 24 hours.</p>
          <div className="mt-6 flex gap-4 text-slate-200">
            <a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
            <a href="mailto:hello@lancelot.studio" className="hover:text-white">hello@lancelot.studio</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input required name="name" className="mt-1 w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300">Message</label>
            <textarea required name="message" rows="5" className="mt-1 w-full rounded-lg bg-slate-900/80 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell us about your project..." />
          </div>
          <button disabled={status==='loading'} className="mt-6 w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-medium">
            {status==='loading' ? 'Sending…' : status==='success' ? 'Sent! We will be in touch.' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
