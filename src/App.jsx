import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Certifications from './components/Certifications'
import Projects      from './components/Projects'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import Background    from './components/Background'

function App() {
  return (
    <>
      {/* Animated canvas background — fixed, behind everything */}
      <Background />

      <Navbar />

      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Contact />
        <div className="divider" />
      </main>

      <Footer />
    </>
  )
}

export default App
