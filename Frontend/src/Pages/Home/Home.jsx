import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { isAuthorizedContext } from '../../contexts/UserContext';
import QuoteCard from '../../Components/Common/QuoteCard';
import HeroSection from '../../Components/Common/HeroSection';

const Home = () => {

  const BACKENDURI = import.meta.env.VITE_BACKEND_URI;

  const {quotesData, setQuotesData} = useContext(isAuthorizedContext)
  const [uniqueCategories, setUniqueCategories] = useState([])

  console.log(quotesData)
  useEffect(() => {
    const FetchUser = async () => {
      const res = await axios.get(`${BACKENDURI}/api/v1/post/getallposts`);
      // console.log(res)
      setQuotesData(res.data)
    }

    FetchUser();
  }, [])

  useEffect(() => {
    const categories = new Set(quotesData.map(data => data.category));
    const uniqueCategoriesArray = Array.from(categories)
    setUniqueCategories(uniqueCategoriesArray)
  }, [quotesData])

  return (
    <>
      {/* Hero Section */}

      <HeroSection/>

      <section className='py-5 dark:bg-[#153448]'>
        <div className="container mx-auto px-8">
          <div className="">
          {/* <div className="flex flex-wrap gap-4"> */}
            {
              uniqueCategories != [] && uniqueCategories.map((data, index) => {
                return(
                  <>
                    <h2 className='text-3xl font-bold mt-[40px] dark:text-white'>{data}</h2>
                    <hr className='mb-3 mt-3 bg-[#153448] dark:bg-[#DFD0B8] h-[2px]'/>
                    <div className="flex flex-wrap gap-4 gap-y-8 justify-between">
                    {
                      quotesData.filter((item) => item.category == data).map(filterItems => {
                        return(
                          <>
                            <div className="md:w-[49%]">
                              <QuoteCard quote={filterItems.quote} author={filterItems.author} postUrl={filterItems._id}/>
                            </div>
                          </>
                        )
                      })
                    }
                    </div>
                  </>
                )
              })
            }
            
            
            
            {/* {
              quotesData.map((data) => {
                return(
                  <>
                    <div className="md:w-[48%]">
                      <QuoteCard quote={data.quote} author={data.author}/>
                    </div>
                  </>
                )
              })
            } */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home