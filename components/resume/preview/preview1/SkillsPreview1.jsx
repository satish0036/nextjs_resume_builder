import { Button } from '@/components/ui/button'
import React from 'react'

function SkillsPreview1({ resumeInfo }) {
    return (
        <div className='px-4'>
            <h2 className='text-start font-bold text-sm my-1'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Skills</h2>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            <div className=' flex flex-wrap gap-3 my-3'>
                {resumeInfo?.skills.map((skill, index) => (
                    <div key={index} className='flex items-center justify-between'>
                    
                        <Button className='h-9' style={{
                            background: resumeInfo?.themeColor
                        }}>{skill.name} </Button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPreview1