import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Separator />
      <AboutSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ExperienceSection />
      <Separator />
      <ProjectsSection />
      <Separator />
      <ContactSection />
    </main>
  );
}
