import React from 'react'

function ExperiencePreview1({ resumeInfo }) {
    // console.log(resumeInfo)
    return (
        <div className='px-4'>
            <h2 className='text-start font-bold text-sm my-1'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Professional Experience</h2>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.Experience?.map((Experience, index) => (
                <div key={index} className='my-1'>
                    <h2 className='text-sm font-bold'
                        style={{
                            color: resumeInfo?.themeColor
                        }}>{Experience?.title}</h2>
                    <h2 className='text-xs flex justify-between'>
                      <div className=' font-bold'>
                      {Experience?.companyName},
                        {Experience?.city},
                        {Experience?.state}
                      </div>
                        <span>{Experience?.startDate} To {Experience?.currentlyWorking ? 'Present' : Experience.endDate} </span>
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

export default ExperiencePreview1