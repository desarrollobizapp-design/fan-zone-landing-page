import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import QueEsZonaFest from './components/QueEsZonaFest';
import Packages from './components/Packages';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <InfoSection />
      <QueEsZonaFest />
      <Packages />

    </main>
  );
}