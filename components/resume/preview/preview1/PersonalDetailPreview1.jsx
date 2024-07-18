import React from 'react'

const PersonalDetailPreview1 = ({ resumeInfo }) => {
    return (
        <>
            <div className=' flex  justify-between items-center py-10 px-4 text-white '
            style={{ background: resumeInfo?.themeColor ||"#13354f" }}
            >
                <div className='flex flex-col justify-start text-sm'>
                    <h2 className='font-normal '
                        >{resumeInfo?.phone}</h2>
                    <h2 className='font-normal '
                        >{resumeInfo?.email}
                    </h2>
                    <h2 className='text-start font-normal '
                        >{resumeInfo?.address}
                    </h2>

                </div>
                <div>
                    <h2 className='font-semibold text-xl text-center' >
                        {resumeInfo?.firstName} {resumeInfo?.lastName}
                    </h2>
                    <h2 className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}
                    </h2>

                </div>



            </div>
            {/* <hr className='border-[1.5px] my-2'
                style={{
                    borderColor: resumeInfo?.themeColor
                }}
            /> */}
        </>
    )
}

export default PersonalDetailPreview1