import React, { FC } from 'react'
import { IProjectSectionCardData } from '../utils/Data'
import Link from 'next/link'
import Image from 'next/image';

interface ProjectsCardProps {
    project : IProjectSectionCardData
}

const ProjectsCard : FC<ProjectsCardProps> = ({ project}) => {
  return (
    
    <Link target="_blank" href={project.href || '/'}>
      <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
        <Image
          src={`/projects/${project.imageUrl}`}
          alt="spotify"
          width={700}
          height={700}
          className="aspect-video object-cover"
        />
        <div className="flex flex-col px-4 py-2 h-24">
          <div className="flex font-bold">{project.title}</div>
          <div className="flex text-info text-xs">{project.techStack}</div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectsCard
