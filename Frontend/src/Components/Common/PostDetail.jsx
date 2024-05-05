import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegCopy } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const styles = {
  purpleBorder: {
    boxShadow: '4px 4px 1px #DFD0B8',
  },
  blackBorder: {
    boxShadow: '4px 4px 1px rgb(0, 0, 0)',
  },
  violetBackground: {
    backgroundColor: '#DFD0B8',
  },
};

const PostDetail = () => {
    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
    const [copy, setCopy] = useState(false)
    const [post, setPost] = useState();

    const handleCopy = ()=>{
        navigator.clipboard.writeText(post.quote)
        setCopy(true)
        setTimeout(() => setCopy(false), 2000)
    }

    const {id} = useParams();

    useEffect(() => {
        axios.get(`${BACKEND_URI}/api/v1/post/${id}`, {
            withCredentials: true
          }).then((data) => {
            // console.log(data)
            setPost(data.data.post)
          }).catch((error) => {
            console.log(error)
          })
      
    }, [])

    console.log(post)

  return (
    <div className='p-16 dark:bg-[#153448]'> 
      <div className="relative">
        <button
          className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] text-light border border-black uppercase"
          style={{ ...styles.blackBorder, ...styles.violetBackground, fontWeight: 'bold' }}
        >
          {post && `${post.category}`}
        </button>
        {post && <>
            <div className="p-8 border border-[#DFD0B8] flex justify-between" style={styles.purpleBorder}>
                <div>
                    <div className='dark:text-white'>
                        <b className='text-xl'>Quote :-</b>
                        <p>
                            {post.quote}
                        </p>
                    </div>
                    <div className='mt-5 dark:text-white'>
                        <b className='text-xl'>Author :-</b>
                        <p>
                            {post.author}
                        </p>
                    </div>
                    <div className='mt-5 dark:text-white'>
                        <b className='text-xl'>Category :-</b>
                        <p>
                            {post.category}
                        </p>
                    </div>
                    <div className='mt-5 dark:text-white'>
                        <b className='text-xl'>Language :-</b>
                        <p>
                            {post.language}
                        </p>
                    </div>
                </div>
                <div>
                    <button className='flex items-center rounded-lg dark:bg-[#DFD0B8] dark:text-[#153448] gap-3 bg-[#153448] text-white px-3 py-2' onClick={handleCopy}><b>{copy ? "Copied" : "Copy"}</b>  <FaRegCopy /></button>
                </div>
                </div>
        </>}
      </div>
    </div>
  );
};

export default PostDetail;
