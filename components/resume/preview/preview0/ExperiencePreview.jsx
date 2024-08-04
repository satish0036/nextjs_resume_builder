import { DateFormatter } from '@/components/utility/dateFormatter'
import React from 'react'

function ExperiencePreview({ resumeInfo }) {
    // console.log(resumeInfo)
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Professional Experience</h2>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.Experience?.map((Experience, index) => (
                <div key={index} className='my-5'>
                    <h2 className='text-sm font-bold'
                        style={{
                            color: resumeInfo?.themeColor
                        }}>{Experience?.title}</h2>
                    <h2 className='text-xs flex justify-between'>{Experience?.companyName},
                        {Experience?.city},
                        {Experience?.state}
                        <span> <DateFormatter startDate={Experience?.startDate} endDate={Experience?.endDate} /></span>

                        {/* <span>{Experience?.startDate} To {Experience?.currentlyWorking?'Present':Experience.endDate} </span> */}
                    </h2>
                    {/* <p className='text-xs my-2'>
                    {Experience.workSummery}
                </p> */}
                    <div className='text-xs my-2' dangerouslySetInnerHTML={{ __html: Experience?.workSummery }} />
                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview