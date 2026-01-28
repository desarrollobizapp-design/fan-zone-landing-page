import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import QueEsZonaFest from './components/QueEsZonaFest';
import Packages from './components/Packages';
import Scalability from './components/Scalability';
import VideoExperience from './components/VideoExperience';
import { Reveal } from "./components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen ">

      <Hero />
      <VideoExperience />
      <InfoSection />    
      <QueEsZonaFest />
      <Scalability/>
      <Packages />

    </main>
  );
}