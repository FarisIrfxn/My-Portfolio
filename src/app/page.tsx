import Hero from '@/components/sections/Hero';
import ChatSection from '@/components/sections/ChatSection';
import Expertise from '@/components/sections/Expertise';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <ChatSection />
      <Expertise />
      <TechStack />
      <Experience />
      <Achievements />
      <ProjectsPreview />
      <Contact />
    </main>
  );
}
