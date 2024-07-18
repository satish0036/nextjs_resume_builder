"use client"
import React, { useEffect, useState } from 'react'

import FormSection from '@/components/resume/FormSection';
import ResumePreview from '@/components/resume/ResumePreview';
import { ResumeInfoContext } from '@/components/context/ResumeInfoContext';
// import dummy from '@/data/dummy';
import GlobalApi from '@/server_action/GlobalApi';
import ResumePreview1 from '@/components/resume/ResumePreview1';
import { useParams } from 'next/navigation';

const EditResume = () => {
    const { resumeId } = useParams();

    const [resumeInfo, setResumeInfo] = useState()
    useEffect(() => {
        // setResumeInfo(dummy)
        getResumeInfo()
    }, [])

    

    const getResumeInfo = async () => {
        try {
            const resp = await GlobalApi.GetResumeById(resumeId);
            // console.log("got all resume data ")
            console.log(resp.data.message)
            setResumeInfo(resp.data.data)
        }
        catch (err) {
            console.log("got err in responce ")
            console.log(err)

        }
    }
    // console.log(resumeId)
    // console.log(resumeInfo)
    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div className=' grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                <FormSection />
            
                {
                    resumeInfo?.themeLayout === "Default" &&
                    <div className='shadow-lg h-full py-4 px-8  border-t-[20px]'
                        style={{  borderColor: resumeInfo?.themeColor}}>
                        <ResumePreview />
                    </div>
                }
                {
                    resumeInfo?.themeLayout !== "Default" &&
                    <div className='shadow-lg h-full'
                        style={{borderColor: resumeInfo?.themeColor}} >
                        <ResumePreview1 />
                    </div>
                }

          
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default EditResume