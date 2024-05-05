import React, { useContext, useEffect, useState } from 'react';
import { isAuthorizedContext } from '../../contexts/UserContext.jsx';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import PostCard from './PostCard.jsx';

const MyProfile = () => {

  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

  const { isAuthorized, setisAuthorized, user, setUser } = useContext(isAuthorizedContext);
  const [myProfile, setMyProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BACKEND_URI}/api/v1/user/myprofile`, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then((response) => {
      setMyProfile(response.data.myProfile);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(myProfile)
  console.log(user)

  return (
    <>
      <div className="flex items-center flex-col w-full h-full p-[16px] bg-cover dark:bg-gray-900">
        {/* Background and profile */}
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover border"
        >
          <span class="absolute left-1/2 transform -translate-x-1/2 w-full text-center -translate-y-1/2 md:text-7xl text-4xl top-1/2 opacity-30 text-transparent" style={{"-webkit-text-stroke": "3px #de8b8b"}}>User - Profile</span>

          <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-[#153448] p-1">
            {/* <img
              className="h-full w-full rounded-full object-contain"
              src="/logo.png"
              alt=""
            /> */}
            <h5 className='text-white text-5xl'>{user && user.name.charAt(0)}</h5>
          </div>
        </div>
  
        {/* Name and position */}
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-navy-700 text-xl font-bold dark:text-white">
            {user && user.name}
          </h4>
          <h5 className="text-base font-normal text-gray-600">{user && user.role}</h5>
        </div>
  
        {/* Post followers */}
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
              {myProfile.length}
            </h4>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
              9.7K
            </h4>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
              434
            </h4>
            <p className="text-sm font-normal text-gray-600">Following</p>
          </div>
        </div>
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <section className="bg-white dark:bg-gray-900">
            <div className="py-5 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your Posts</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                </div> 
                <div className="grid gap-8 lg:grid-cols-2">
                    {myProfile.map((data) => {
                      return(
                        <PostCard category={data.category} date={data.postDate} quote={data.quote} user={user.name} />
                      )
                    })}
                </div>  
            </div>
        </section>

      <Toaster/>
    </>
  );
}

export default MyProfile;
