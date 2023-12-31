import { About } from "./components/About/About";
import { BackgroundVideo } from "./components/BackgroundVideo/BackgroundVideo";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { MarqueeLine } from "./components/MarqueeLine/MarqueeLine";
import { Preview } from "./components/Preview/Preview";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

export default function Home() {
  return (
    <main>
      <BackgroundVideo />
      <Header />
      <Hero />
      <Preview />
      <About />
      <MarqueeLine />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
