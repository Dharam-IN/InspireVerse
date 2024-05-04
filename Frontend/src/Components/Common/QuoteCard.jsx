import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegCopy } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const QuoteCard = ({quote, author}) => {

    const [copy, setCopy] = useState(false)

    const handleCopy = ()=>{
        navigator.clipboard.writeText(quote)
        setCopy(true)
        setTimeout(() => setCopy(false), 2000)
    }

  return (
    <>
      <div className="p-6 bg-white h-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">-- {author}</h5>
        <div className='flex items-start'>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-[80%]">{quote}</p>
            <button className='flex items-center rounded-lg dark:bg-[#DFD0B8] dark:text-[#153448] gap-3 bg-[#153448] text-white px-3 py-2' onClick={handleCopy}><b>{copy ? "Copied" : "Copy"}</b>  <FaRegCopy /></button>
        </div>
        <Link to="#" className="inline-flex items-center px-3 gap-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span>Read more</span>
            <FaExternalLinkAlt />
        </Link>
    </div>
    </>
  )
}

export default QuoteCard
