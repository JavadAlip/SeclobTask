import React from 'react';
import { MdArrowForward } from 'react-icons/md'; // Arrow icon from react-icons

const categories = ['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'];

const Categories = () => {
    return (
        <div name='projects' className='w-full md:h-screen mt-16 sm:mt-0'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full p-4 justify-center'>
                <div className='pb-8'>
                    <p className='text-2xl inline border-b-4 hover:text-gray-400 font-bold'>Categories</p>
                </div>
                <div className='grid gap-4 md:grid-cols-2'>
                    <div className="space-y-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center bg-white p-4 rounded-md shadow hover:bg-gray-100 cursor-pointer"
                            >
                                <span className="text-lg font-medium">{category}</span>
                                <span className="text-teal-500">
                                    <MdArrowForward size={24} />
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-white p-20 rounded-md shadow hover:bg-gray-100 cursor-pointer">
                            <span className="text-lg font-medium"></span>
                            <span className="text-teal-500">
                                <MdArrowForward size={24} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
