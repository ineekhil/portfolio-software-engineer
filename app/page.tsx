import { CallToAction } from "@/components/sections/call-to-action";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ImpactStats } from "@/components/sections/impact-stats";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Villain } from "@/components/sections/villain";

export default function HomePage() {
  return (
    <>
      <Villain />
      <ImpactStats />
      <FeaturedProjects />
      <SkillsPreview />
      <ExperiencePreview />
      <CallToAction />
    </>
  );
}
