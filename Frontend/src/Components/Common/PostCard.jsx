import React, { useState } from 'react';
import { MdOutlineCategory } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const PostCard = ({ category, date, quote, user, posturl, postAllData }) => {
    console.log(user)
    const postDate = new Date(date);
    const BACKENDURI = import.meta.env.VITE_BACKEND_URI;

    const [postData, setPostData] = useState({
        quote: postAllData.quote,
        category: "",
        author: postAllData.author,
        subCategory: "",
        language: postAllData.language,
    });

    const postChange = (e) => {
        const { name, value } = e.target;
        setPostData(() => {
            return {
                ...postData,
                [name]: value,
            };
        });
    };

    const handlePostUpdate = async (e) => {
        e.preventDefault();

        try {
            const { quote, category, author, subCategory, language } = postData;
            console.log("dkdk")

            const res = await axios.put(
                `${BACKENDURI}/api/v1/post/update/${posturl}`,
                { quote, category, author, subCategory, language, },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                }
            );
            console.log(res)
            if (res.data.success == true) {

                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(`An error occurred: ${error}`);
        }
    };

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

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const categoriesData = {
        "Motivation": [
            "Perseverance",
            "Success",
            "Self-discipline",
            "Ambition",
            "Strength"
        ],
        "Love": [
            "Romantic",
            "Unconditional love",
            "Heartbreak",
            "Long-distance",
            "Friendship"
        ],
        "Inspiration": [
            "Creativity",
            "Dreams",
            "Hope",
            "Courage",
            "Wisdom"
        ],
        "Life": [
            "Happiness",
            "Change",
            "Growth",
            "Purpose",
            "Gratitude"
        ],
        "Wisdom": [
            "Knowledge",
            "Experience",
            "Learning",
            "Truth",
            "Perspective"
        ],
        "Humor": [
            "Wit",
            "Sarcasm",
            "Satire",
            "Irony",
            "Playfulness"
        ],
        "Shayari": [
            "Love Shayari",
            "Sad Shayari",
            "Friendship Shayari",
            "Inspirational Shayari",
            "Life Shayari"
        ]
    };

    const [subCategorysel, setSubCategorysel] = useState('')

    const handleselectCategory = (e) => {
        setSubCategorysel(e.target.value)
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
                        <button onClick={toggleModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <FaRegEdit className='mr-3 text-[15px]' />
                            Update
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

            {/* UPDATE POPUP */}
            {/* Main modal */}
            {showModal && (
                <div
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="relative p-4 w-full md:w-[50%]">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 px-8 pb-5">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update this Post
                                </h3>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <RxCross2 className='text-black text-xl' />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={handlePostUpdate}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div>
                                        <label htmlFor="postQuote" className="text-gray-600 mb-2 block dark:text-[#fff]">
                                            Quotes
                                        </label>
                                        <input
                                            type="text"
                                            id="postQuote"
                                            value={postData.quote}
                                            onChange={postChange}
                                            name="quote"
                                            placeholder="Enter Your Quote"
                                            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#153448]"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="postCategory"
                                            className="text-gray-600 mb-2 block dark:text-[#fff]"
                                        >
                                            Select Category
                                        </label>
                                        <select
                                            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#153448]"
                                            required
                                            id="postCategory"
                                            value={postData.category}
                                            name="category"
                                            onChange={(e) => { postChange(e), handleselectCategory(e) }}
                                        >
                                            <option value="">Select Category</option>
                                            {
                                                Object.keys(categoriesData).map((category, index) => {
                                                    return (
                                                        <option value={category} key={index}>{category}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="author"
                                            className="text-gray-600 mb-2 block dark:text-[#fff]"
                                        >
                                            Enter Author Name
                                        </label>
                                        <input
                                            type="text"
                                            value={postData.author}
                                            name="author"
                                            onChange={postChange}
                                            id="author"
                                            placeholder="Enter Author name"
                                            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#153448]"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="postSubCategory"
                                            className="text-gray-600 mb-2 block dark:text-[#fff]"
                                        >
                                            Sub Category
                                        </label>
                                        <select
                                            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#153448]"
                                            required
                                            id="postSubCategory"
                                            value={postData.subCategory}
                                            name="subCategory"
                                            onChange={postChange}
                                        >
                                            <option value="">Select Category</option>
                                            {subCategorysel &&
                                                categoriesData[subCategorysel].map((subCategory) => {
                                                    return (
                                                        <option value={subCategory} key={subCategory}>{subCategory}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="postLanguage"
                                        className="text-gray-600 mb-2 block dark:text-[#fff]"
                                    >
                                        Language
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#153448]"
                                        required
                                        id="postLanguage"
                                        value={postData.language}
                                        name="language"
                                        onChange={postChange}
                                    >
                                        <option value="">Quote Language</option>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#153448] text-white rounded-md mt-4 hover:bg-[#153448] dark:bg-[#DFD0B8] dark:text-[#153448]"
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Toaster />
        </>
    );
};

export default PostCard;
