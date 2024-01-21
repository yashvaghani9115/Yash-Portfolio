import TechStack from "@/components/TechStack";
import Cover from "@/components/cover/Cover";
import ExperienceCardSection from "@/components/sections/ExperienceCardSection";
import Footer from "@/components/sections/Footer";
import ProjectCardSection from "@/components/sections/ProjectCardSection";
import { projectCard, experienceData } from "@/components/utils/Data";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        <ExperienceCardSection data={experienceData} />
        <ProjectCardSection data={projectCard} />

        <TechStack />
        
        <Footer />
      </div>
    </div>
  );
}
