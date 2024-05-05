import React, { useState } from 'react';
import { MdOutlineCategory } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const PostCard = ({ category, date, quote, user, posturl }) => {
    const postDate = new Date(date);
    const BACKENDURI = import.meta.env.VITE_BACKEND_URI;

    const [delmessage, setDelMessage] = useState();
    const [deleted, setDeleted] = useState(false); // State to track deletion status

    // Extract day, month, and year
    const day = postDate.getDate();
    const month = postDate.getMonth() + 1;
    const year = postDate.getFullYear();

    const DeletePost = async () => {
        try {
            const response = await axios.delete(`${BACKENDURI}/api/v1/post/delete/${posturl}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response);
            toast.success(response.data.message);
            // Update UI state to reflect deletion
            setDeleted(true);
        } catch (error) {
            console.log(error);
        }
    };

    // Render nothing if post is deleted
    if (deleted) {
        return null;
    }

    return (
        <>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <MdOutlineCategory className='mr-2' />
                        {category}
                    </span>
                    <span className="text-sm">{day}/{month}/{year}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{quote}</h2>
                <div className='flex flex-row mb-3 gap-3'>
                    <div>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <FaRegEdit className='mr-3 text-[15px]' />
                            Edit
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={DeletePost} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <MdDeleteForever className='mr-3 text-[15px]' />
                            Delete
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className='dark:!border-navy-700 flex h-[40px] w-[40px] items-center justify-center rounded-full border-[4px] border-white bg-[#153448] p-1'>
                            <h5 className='text-white text-xl uppercase'>{user && user.charAt(0)}</h5>
                        </div>
                        <span className="font-medium dark:text-white">
                            {user}
                        </span>
                    </div>
                    <a href="#" className="inline-flex items-center font-medium dark:text-white text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <FaArrowRightLong className='ml-2' />
                    </a>
                </div>
            </article>

            <Toaster />
        </>
    );
};

export default PostCard;
