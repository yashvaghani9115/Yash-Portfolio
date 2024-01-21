import { FC } from 'react';
import TechCard from './ui/TechCard';
import { backend, database, frontend } from './utils/Data';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
        Skills
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TechCard
          title="Frontend"
          tech={frontend}
        />
        <TechCard
          title="Backend"
          tech={backend}
        />
        <TechCard
          title="Database"
          tech={database}
        />
      </div>
    </div>
  );
};

export default TechStack;
