import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { DomainsAchievements } from './components/sections/DomainsAchievements';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background-dark min-h-screen text-gray-200 font-sans selection:bg-primary-500/30">
      {/* Cyber Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] cyber-gradient origin-left z-50 shadow-[0_0_15px_var(--color-primary-500)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <DomainsAchievements />
        <Experience />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default App;
