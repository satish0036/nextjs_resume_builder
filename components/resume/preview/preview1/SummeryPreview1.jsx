import React from 'react'

function SummeryPreview1({ resumeInfo }) {
  return (
    <>

      <div className=' px-4 '>
        <h2 className=' text-start font-bold text-sm my-1'
          style={{
            color: resumeInfo?.themeColor
          }}
        >Summary</h2>
        <hr style={{
          borderColor: resumeInfo?.themeColor
        }} />
        <p className='text-xs'>
          {resumeInfo?.summery}
        </p>
      </div>
    </>

  )
}

export default SummeryPreview1