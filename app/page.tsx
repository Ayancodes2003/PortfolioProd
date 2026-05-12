import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  return (
    <main className="bg-transparent text-[#ededed] min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <SectionTransition>
        <Skills />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <Experience />
      </SectionTransition>
      <SectionTransition>
        <Manifesto />
      </SectionTransition>
      <Footer />
    </main>
  );
}