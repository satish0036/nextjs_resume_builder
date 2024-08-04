import { ResumeInfoContext } from '../context/ResumeInfoContext'
import React, { useContext, useEffect } from 'react'
import PersonalDetailPreview1 from './preview/preview1/PersonalDetailPreview1'
import SummeryPreview1 from './preview/preview1/SummeryPreview1'
import ExperiencePreview1 from './preview/preview1/ExperiencePreview1'
import ProjectPreview1 from './preview/preview1/ProjectPreview1'
import EducationalPreview1 from './preview/preview1/EducationalPreview1'
import SkillsPreview1 from './preview/preview1/SkillsPreview1'


const ResumePreview1 = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)


  return (
    <div className=' '
      style={{
        borderColor: resumeInfo?.themeColor
      }}
    >
       <PersonalDetailPreview1 resumeInfo={resumeInfo} />
      
      {
        resumeInfo?.summery&&<SummeryPreview1 resumeInfo={resumeInfo} />
      }
      
      {
        resumeInfo?.skills.length!==0&& <SkillsPreview1 resumeInfo={resumeInfo} />
      }
      {
        resumeInfo?.Experience.length!==0 && <ExperiencePreview1 resumeInfo={resumeInfo} />
      }

      {
        resumeInfo?.Project.length!==0 && <ProjectPreview1 resumeInfo={resumeInfo} />
      }
      {
        resumeInfo?.education.length!==0 && <EducationalPreview1 resumeInfo={resumeInfo} />
      }

      
    </div>
  )
}

export default ResumePreview1