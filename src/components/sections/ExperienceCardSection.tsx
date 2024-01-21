import React, { FC } from 'react'
import { IExperienceData } from '../utils/Data'
import ExperienceCard from '../ui/ExperienceCard'

interface ExperienceCardSectionProps {
    data : IExperienceData[]
}

const ExperienceCardSection: FC<ExperienceCardSectionProps> = ({ data}) => {
  return (
    <section className="grid gap-8 p-5 mt-5 md:p-0">
      <div className="text-xl font-medium text-zinc-200">Professional Experience</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl::grid-cols-2 gap-5">
        {data.map((card) => (
          <ExperienceCard
            key={card.id}
            experience={card}
          />
        ))}
      </div>
    </section>
  )
}

export default ExperienceCardSection
