import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import Hglt1 from '../assets/Image (1).png';
import Hglt2 from '../assets/Rectangle 6 (1).png';
import Hglt3 from '../assets/Rectangle 6.png';

const projectData = [
    {
        id: 1,
        image: Hglt1,
        title: 'Surfing',
        description: 'Best Hawaiian islands for surfing.',
    },
    {
        id: 2,
        image: Hglt2,
        title: 'Hula',
        description: 'Try it yourself.',
    },
    {
        id: 3,
        image: Hglt3,
        title: 'Vulcanoes',
        description: 'Volcanic conditions can change at any time.',
    },
];

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full p-4 justify-center'>
                <div className='pb-8'>
                    <p className='text-2xl inline border-b-2 hover:text-gray-400 font-bold'>Highlights</p>
                </div>
                <div className='grid gap-4 md:grid-cols-3 rounded-lg'>
                    {projectData.map(({ id, image, title, description }) => (
                        <div key={id} className="shadow-lg group shadow-[#808080] container rounded-md flex flex-col items-start mx-auto p-4">
                            <div
                                style={{
                                    backgroundImage: `url('${image}')`,
                                    height: '205px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                className='w-full rounded-md mb-4'>
                            </div>
                            <h3 className='text-xl text-left font-bold mb-2'>{title}</h3>
                            <p className='text-gray-600 text-left flex items-center justify-between w-full'>
                                {description}
                                <span className="ml-2 bg-gray-200 text-primaryGreen rounded-full p-2">
                                    <MdArrowForward className="h-4 w-4" />
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
