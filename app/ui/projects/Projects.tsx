import Image from 'next/image'
import projectslist from './ProjectsList';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='absolute top-[150px] z-[2]'>
        <div className="flex justify-center flex-wrap gap-[85px] hover:cursor-pointer">
            {projectslist.map((project, id) => (
                <Link href={project.url} target='__blank' key={id} className="w-[383px] rounded-lg border border-neon shadow-neon">
                      <div className="relative w-full h-0 pb-[83.54%] rounded-t-lg overflow-hidden">
                        <Image
                            src={project.img}
                            alt={project.title}
                            layout="fill"
                            className='object-cover'
                        />
                    </div>
                    <div className='relative p-4 bg-[#03001417] backdrop-blur-md rounded-b-lg h-fill'>
                        <h2 className='text-sm font-semibold text-white text-center'>
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