import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import QueEsZonaFest from './components/QueEsZonaFest';
import Packages from './components/Packages';
import Scalability from './components/Scalability';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <InfoSection />
      <QueEsZonaFest />
      <Scalability/>
      <Packages />
    </main>
  );
}