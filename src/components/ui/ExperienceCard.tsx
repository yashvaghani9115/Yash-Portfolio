import React, { FC } from 'react'
import { IExperienceData } from '../utils/Data'
import Link from 'next/link'

interface ExperienceCardProps {
  experience: IExperienceData
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Link target="_blank" href={experience.href || '/'}>
      <div className="flex flex-col overflow-hidden gap-3 bg-cardPrimary text-zinc-800 rounded-lg overflow-ellipsis relative h-full">
        <div className='absolute top-0 right-0 bg-btnHighlight text-highlight border-rounded'>
          <div className='flex m-1 p-1 text-xs text-font-semibold '>
            <span className='flex'> {experience.startDate} - </span>
            <span className='flex ms-1'> {experience.endDate} </span>
          </div>
        </div>
        <div className="flex flex-col text-highlight px-4 py-2 h-auto">
          <h2 className='flex font-bold text-lg'>{experience.role}</h2>
          <div className="flex font-semibold text-s">{experience.companyName}</div>
          <div className="flex text-green-500 text-s mb-2 mt-0">{experience.techStack}</div>
          <div
            className="flex text-xs"
            dangerouslySetInnerHTML={{
              __html: experience.description.replace(/\n/g, '<br />'),
            }}
          />
        </div>
      </div>
    </Link>
  )
}

export default ExperienceCard
