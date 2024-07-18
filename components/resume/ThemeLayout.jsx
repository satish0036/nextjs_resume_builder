import React, { useContext, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import { ResumeInfoContext } from '../context/ResumeInfoContext' 
import GlobalApi from '@/server_action/GlobalApi'
import { toast } from 'sonner'
import { useParams } from 'next/navigation'

function ThemeLayout() {
  const colors = [
    "Default", "Satish Ka resume ",
  ]

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [selectedColor, setSelectedColor] = useState("#13354f");
  const { resumeId } = useParams();
  const onColorSelect = (color) => {
    setSelectedColor(color)
    setResumeInfo({
      ...resumeInfo,
      themeLayout: color
    });
    const data = {
  
        themeLayout: color,
        themeColor:resumeInfo.themeColor
      
    }
    GlobalApi.UpdateTheme(resumeId, data).then(resp => {
      console.log(resp?.data?.message);
      toast('Theme Layout Updated')
    })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm"
          className="flex gap-2" > <LayoutGrid /> Theme Layout</Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className='mb-2 text-sm font-bold'>Select Theme Layout</h2>
        <div className='grid grid-cols-2 gap-3'>
          {colors.map((item, index) => (
            <div
            key={index}
              onClick={() => onColorSelect(item)} className=' cursor-pointer'>
                {item}

            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ThemeLayout