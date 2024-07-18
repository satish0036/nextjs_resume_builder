import { ResumeInfoContext } from '../context/ResumeInfoContext' 
import React, { useContext, useEffect } from 'react'
import PersonalDetailPreview1 from './preview/preview1/PersonalDetailPreview1'
import SummeryPreview1 from './preview/preview1/SummeryPreview1'
import ExperiencePreview1 from './preview/preview1/ExperiencePreview1'
import ProjectPreview1 from './preview/preview1/ProjectPreview1'
import EducationalPreview1 from './preview/preview1/EducationalPreview1'
import SkillsPreview1 from './preview/preview1/SkillsPreview1'


const ResumePreview1 = () => {
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  

  return (
    <div className=' '
    style={{
        borderColor:resumeInfo?.themeColor 
    }}
    
    >
      {/* personal <details></details> */}

      <PersonalDetailPreview1 resumeInfo={resumeInfo} />
      {/* <summary></summary> */}

      <SummeryPreview1 resumeInfo={resumeInfo} />

         {/* skills */}
         <SkillsPreview1 resumeInfo={resumeInfo} />

      {/* experriance */}
      <ExperiencePreview1 resumeInfo={resumeInfo} />
      <ProjectPreview1 resumeInfo={resumeInfo} />

      
      {/* education */}
      <EducationalPreview1 resumeInfo={resumeInfo} />

   
    </div>
  )
}

export default ResumePreview1