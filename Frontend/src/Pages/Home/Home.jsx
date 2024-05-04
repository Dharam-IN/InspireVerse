import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { isAuthorizedContext } from '../../contexts/UserContext';
import QuoteCard from '../../Components/Common/QuoteCard';
import HeroSection from '../../Components/Common/HeroSection';

const Home = () => {

  const BACKENDURI = import.meta.env.VITE_BACKEND_URI;

  const {quotesData, setQuotesData} = useContext(isAuthorizedContext)
  console.log(quotesData)
  useEffect(() => {
    const FetchUser = async () => {
      const res = await axios.get(`${BACKENDURI}/api/v1/post/getallposts`);
      // console.log(res)
      setQuotesData(res.data)
    }

    FetchUser();
  }, [])

  return (
    <>
      {/* Hero Section */}

      <HeroSection/>

      <section className='py-5'>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4">
            {
              quotesData.map((data) => {
                return(
                  <>
                    <div className="md:w-[48%]">
                      <QuoteCard quote={data.quote} author={data.author}/>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home