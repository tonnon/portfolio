import Image from 'next/image'
import projectslist from './ProjectsList';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='absolute top-[150px] z-[2] left-0 flex flex-col items-center justify-center'>
        <div className='flex flex-col md:flex-row gap-10 px-10 hover:cursor-pointer'>
        {projectslist.map((project, id) => (
            <Link href={project.url} target='__blank' key={id} className="w-full h-full rounded-lg border border-neon shadow-neon">
                <Image
                    src={project.img}
                    alt={project.title}
                    width={240}
                    height={320}
                    className='w-full object-contain rounded-t-lg'
                />
                <div className='relative p-4'>
                    <h2 className='text-1xl font-semibold text-white text-center'>
                        {project.title}
                    </h2>
                </div>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Projects