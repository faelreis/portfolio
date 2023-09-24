import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { MarqueeLine } from "./components/MarqueeLine/MarqueeLine";
import { Preview } from "./components/Preview/Preview";
import { Skills } from "./components/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Preview />
      <About />
      <MarqueeLine />
      <Skills />
    </main>
  );
}
