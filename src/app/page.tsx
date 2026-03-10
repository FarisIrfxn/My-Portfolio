import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import ProjectsPreview from '@/components/sections/ProjectsPreview';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsPreview />
      <Skills />
      <Experience />
      <Achievements />
    </main>
  );
}
