import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Lancelot Studio — AI-driven products, content, and creator collaborations.</p>
      </footer>
    </div>
  )
}

export default App
