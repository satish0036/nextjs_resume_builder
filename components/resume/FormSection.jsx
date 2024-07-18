import React, { useEffect, useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutDashboard } from 'lucide-react'
import Summery from './forms/Summery'
import Experience from './forms/Experience'
import Education from './forms/Education'
import Skills from './forms/Skills'
import ThemeColor from './ThemeColor'
import ThemeLayout from './ThemeLayout'
import GlobalApi from '@/server_action/GlobalApi'
import Project from './forms/Project'
import { useParams, useRouter } from 'next/navigation'

const FormSection = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [enableNext, setEnableNext] = useState(true)
  const [resumeName, setResumeName] = useState("")
  const { resumeId } = useParams()
  const router = useRouter()


  useEffect(() => {
    if (activeIndex === 7) {
      router.push(`/my-resume/${resumeId}/view`);
    }
  }, [activeIndex, resumeId, router]);


  useEffect(() => {
    const data = {
      resumeId: resumeId
    }
    GlobalApi.GetUserResumesByResumeId(data).then((res) => {
      // console.log(res)
      setResumeName(res.data?.data?.title)
    }, (err) => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <div className=' flex flex-wrap gap-2 justify-between'>
        <Button variant="outline" className=" flex gap-2 " size="sm"> {resumeName}</Button>

        <ThemeColor />
        <ThemeLayout />

        <div className=' flex gap-2'>
          {activeIndex > 1 && <Button onClick={() => setActiveIndex(activeIndex - 1)} ><ArrowLeft /></Button>}
          <Button disabled={!enableNext} className="flex gap-2" onClick={() => setActiveIndex(activeIndex + 1)} >Next <ArrowRight /></Button>
        </div>
      </div>

      {activeIndex === 1 && <PersonalDetail enableNext={(v) => setEnableNext(v)} />}


      {activeIndex === 2 && <Summery enableNext={(v) => setEnableNext(v)} />}

      {activeIndex === 3 && <Experience enableNext={(v) => setEnableNext(v)} />}

      {activeIndex === 4 && <Project enableNext={(v) => setEnableNext(v)} />}

      {activeIndex === 5 && <Education enableNext={(v) => setEnableNext(v)} />}

      {activeIndex === 6 && <Skills enableNext={(v) => setEnableNext(v)} />}


    </div>
  )
}

export default FormSection