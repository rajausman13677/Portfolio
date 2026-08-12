import StatusTicker from "./components/StatusTicker";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import PainPoints   from "./components/PainPoints";
import MidCTA       from "./components/MidCTA";
import Results      from "./components/Results";
import Services     from "./components/Services";
import About        from "./components/About";
import LatestWork   from "./components/LatestWork";
import ClosingCTA   from "./components/ClosingCTA";
import Footer       from "./components/Footer";

export default function Home() {
  return (
    <main>
      <StatusTicker />
      <Navbar />
      <Hero />
      <PainPoints />
      <MidCTA />
      <Results />
      <Services />
      <About />
      <LatestWork />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
