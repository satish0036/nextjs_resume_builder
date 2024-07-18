import { ResumeInfoContext } from '../context/ResumeInfoContext'
import React, { useContext, useEffect } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
import ProjectPreview from './preview/ProjectPreview'

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
      {/* <summary></summary> */}
      <SummeryPreview resumeInfo={resumeInfo} />

      {/* experriance */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      <ProjectPreview resumeInfo={resumeInfo} />

      
      {/* education */}
      <EducationalPreview resumeInfo={resumeInfo} />

      {/* skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  )
}

export default ResumePreview