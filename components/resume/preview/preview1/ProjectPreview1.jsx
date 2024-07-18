import React from 'react'

function ProjectPreview1({resumeInfo}) {
    // console.log(resumeInfo)
  return (
    <div className=' px-4'>
        <h2 className='text-start font-bold text-sm my-1'
        style={{
            color:resumeInfo?.themeColor
        }}
        >Project</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor
        }} />

        {resumeInfo?.Project?.map((Project,index)=>(
            <div key={index} className='my-0'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:resumeInfo?.themeColor
                }}>{Project?.projectName}</h2>
                <h2 className='text-xs flex justify-between'>{Project?.aboutProject}, 
               
                <span>{Project?.startDate} To {Project?.currentlyWorking?'Present':Project.endDate} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {Project.projectSummery}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:Project?.projectSummery}} />
            </div>
        ))}
    </div>
  )
}

export default ProjectPreview1