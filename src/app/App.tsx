import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionVision } from './components/MissionVision';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MissionVision />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
