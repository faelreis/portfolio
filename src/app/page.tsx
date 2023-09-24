import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Preview } from "./components/Preview/Preview";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Preview />
      <About />
    </main>
  );
}
