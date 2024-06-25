import Image from 'next/image'
import projectslist from './ProjectsList';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='absolute top-[150px] z-[2]'>
        <div className="flex justify-center flex-wrap gap-[71px] hover:cursor-pointer px-[50px]">
        {projectslist.map((project, id) => (
            <Link href={project.url} target='__blank' key={id} className="w-[383px] h-full rounded-lg border border-neon shadow-neon">
                <Image
                    src={project.img}
                    alt={project.title}
                    width={240}
                    height={320}
                    className='w-full object-contain rounded-t-lg'
                />
                <div className='relative p-4 bg-[#03001417] backdrop-blur-md rounded-b-lg'>
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