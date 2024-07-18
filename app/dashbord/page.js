'use client';

import AddResume from '@/components/dashbord/AddResume';
import ResumeCardItem from '@/components/dashbord/ResumeCardItem';
import GlobalApi from '@/server_action/GlobalApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Dashbord = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resumeList, setResumeList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        router.push('/auth/signin'); // Redirect to login if user is not found
      }
      setLoading(false);
    };

    if (typeof window !== 'undefined') {
      fetchUser();
    }
  }, [router]);

  useEffect(() => {
    if (user) {
      GetResumeList();
    }
  }, [user]);

  const GetResumeList = () => {
    const data = {
      userEmail: user?.data?.data?.username,
    };
    GlobalApi.GetUserResumes(data).then(
      (res) => {
        setResumeList(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  if (loading) {
    return <div className=' min-h-[90vh] flex justify-center items-center'>Loading...</div>; // Show a loading state while checking user
  }

  if (!user) {
    return null; // Return null if no user to avoid rendering the rest of the component
  }

  return (
    <>
      <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-2xl'>My Resume</h2>
        <p>Start creating resume</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5'>
          <AddResume />
          {resumeList.length > 0 &&
            resumeList.map((resume, index) => (
              <ResumeCardItem resume={resume} key={index} refreshData={GetResumeList} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashbord;
