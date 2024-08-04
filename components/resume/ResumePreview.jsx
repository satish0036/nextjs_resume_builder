import { ResumeInfoContext } from '../context/ResumeInfoContext'
import React, { useContext, useEffect } from 'react'
import PersonalDetailPreview from './preview/preview0/PersonalDetailPreview'
import SummeryPreview from './preview/preview0/SummeryPreview'
import ExperiencePreview from './preview/preview0/ExperiencePreview'
import EducationalPreview from './preview/preview0/EducationalPreview'
import SkillsPreview from './preview/preview0/SkillsPreview'
import ProjectPreview from './preview/preview0/ProjectPreview'

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)


  return (
    <div className=''
      // style={{
      //   borderColor: resumeInfo?.themeColor
      // }}
      >
      {/* personal <details></details> */}

     





      <PersonalDetailPreview resumeInfo={resumeInfo} />
     {
        resumeInfo?.summery&&<SummeryPreview resumeInfo={resumeInfo} />
      }
      
      
      {
        resumeInfo?.Experience.length!==0 && <ExperiencePreview resumeInfo={resumeInfo} />
      }

      {
        resumeInfo?.Project.length!==0 && <ProjectPreview resumeInfo={resumeInfo} />
      }
      {
        resumeInfo?.education.length!==0 && <EducationalPreview resumeInfo={resumeInfo} />
      }
      {
        resumeInfo?.skills.length!==0&& <SkillsPreview resumeInfo={resumeInfo} />
      }

    </div>
  )
}

export default ResumePreview