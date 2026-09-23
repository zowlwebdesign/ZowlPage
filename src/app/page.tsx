import Splash from '@/components/Splash';
import Nav from '@/components/Nav';
import JourneyNav from '@/components/JourneyNav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Why from '@/components/Why';
import Process from '@/components/Process';
import Founder from '@/components/Founder';
import TechStrip from '@/components/TechStrip';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';
import Background3D from '@/components/Background3D';

export default function Page() {
  return (
    <>
      <ClientScripts />
      <Background3D />
      <div className="warpFlash" id="warpFlash" />
      <Splash />
      <Nav />
      <JourneyNav />
      <main id="main-content">
        <Hero />
        <Ticker />
        <Manifesto />
        <Services />
        <Projects />
        <Why />
        <Process />
        <Founder />
        <TechStrip />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
