import React, { FC } from 'react'
import { IProjectSectionCardData } from '../utils/Data';
import Link from 'next/link';
import Image from 'next/image';
import ProjectsCard from '../ui/ProjectsCard';

interface ProjectCardSectionProps {
  data: IProjectSectionCardData[];
}

const ProjectCardSection : FC<ProjectCardSectionProps> = ({ data }) => {
  return (
    <section className="grid gap-8 p-5 mt-5 md:p-0">
      <div className="text-xl font-medium text-zinc-200">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
        {data.map((card) => (
          <ProjectsCard
            key={card.id}
            project={card}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectCardSection
