import React from 'react';
import { MdArrowForward } from 'react-icons/md'; 
import guideImg from '../assets/Ellipse 10.png'

const categories = ['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'];

const Categories = () => {
    return (
        <div name='projects' className='w-full md:h-screen mt-16 sm:mt-0 bg-bgcategory'>
            <div className='max-w-[1000px] mx-auto flex flex-col h-full w-full p-4 justify-center'>
                {/* Category Section */}
                <div className='grid gap-4 md:grid-cols-2'>
                    {/* Categories List */}
                    <div className="space-y-4">
                        <h1 className='font-bold inline border-b-2 text-2xl'>Categories</h1>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center bg-white p-4 rounded-md shadow hover:bg-gray-100 cursor-pointer">
                                <span className="text-lg font-medium">{category}</span>
                                <span className="text-teal-500">
                                    <MdArrowForward size={24} />
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Travel Guide Section */}
                    <div className="space-y-4">
                        <h1 className="font-bold inline border-b-2 text-2xl">Travel Guide</h1>
                        <div className="flex justify-between items-center bg-white p-8 rounded-md shadow hover:bg-gray-100 cursor-pointer">
                            {/* Guide Information */}
                            <div>
                                <p className="text-3xl font-bold">Hadwin Malone</p>
                                <p className="text-gray-500">Guide since 2012</p>
                                <button className="mt-4 px-6 py-2 border border-primaryGreen text-primaryGreen rounded hover:bg-primaryGreen hover:text-white">
                                    Contact
                                </button>
                            </div>
                            {/* Guide Image */}
                            <div>
                                <img className="rounded-full w-32 h-32 object-cover" src={guideImg} alt="Guide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
