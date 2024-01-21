import React, { FC } from 'react'
import { ITechStackData } from '../utils/Data';
import { cn } from '../utils/utils';

interface TechCardProps {
    title: string;
    tech: ITechStackData[];
  }
  
const TechCard: FC<TechCardProps> = ({ title, tech}) => {

  return (
    <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
      <div className="text-primary font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              'rounded-md bg-body text-xs text-primary p-2',item.color
            )}
          >
            {item.tech}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechCard
