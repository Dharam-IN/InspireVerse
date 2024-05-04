import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { isAuthorizedContext } from "../../contexts/UserContext";


const CreatePost = () => {
  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

  const navigate = useNavigate();
  const { isAuthorized, user } = useContext(isAuthorizedContext);
  console.log(user, isAuthorized)

  const [postData, setPostData] = useState({
    quote: "",
    category: "",
    author: "",
    subCategory: "",
    language: "",
  });
  console.log(postData)
  const postChange = (e) => {
    const { name, value } = e.target;
    setPostData(() => {
      return {
        ...postData,
        [name]: value,
      };
    });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { quote, category, author, subCategory, language } = postData;
  
      const res = await axios.post(
        `${BACKEND_URI}/api/v1/post/post`,
        {quote, category, author, subCategory, language,},
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      );

      if(res.data.statuscode == 201){

        toast.success(res.data.message);
        setPostData({
          quote: "",
          category: "",
          subCategory: "",
          author: "",
          language: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(`An error occurred: ${error}`);
    }
  };

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Author")) {
      // if (false) {
      toast.error("You Don't have access this resourse");
      navigate("/");
    }
  }, [isAuthorized, user, navigate]);


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
  // console.log(subCategorysel)

  return (
    <>
      <div className="bg-white shadow-md p-6 dark:bg-[#153448]">
        <div className="container mx-auto">
          <h3 className="text-2xl text-center font-bold mb-4 text-[#153448] dark:text-[#fff]">
            Post New Post
          </h3>
          <form onSubmit={handlePostSubmit}>
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
                  onChange={(e) => {postChange(e), handleselectCategory(e)}}
                >
                  <option value="">Select Category</option>
                  {
                    Object.keys(categoriesData).map((category, index) => {
                      return(
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
                      return(
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
              Post
            </button>
          </form>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default CreatePost;