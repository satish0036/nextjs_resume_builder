import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/components/context/ResumeInfoContext'
import GlobalApi from '@/server_action/GlobalApi'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from "sonner"
import { useParams } from 'next/navigation'


const PersonalDetail = ({ enableNext }) => {
  const parms = useParams()
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [formData, setFormData] = useState()
  const [loading, setLoading] = useState(false)


  const handleInputChange = (e) => {
    enableNext(false)
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    })
    setFormData({
      ...formData,
      [name]: value
    })
  }


  const onSave = (e) => {
    // console.log(formData)
    // console.log(resumeInfo)
    setLoading(true)
    // console.log(parms?.resumeId)
    e.preventDefault()
    const data = {
      firstName: formData.firstName || resumeInfo.Details.firstName || '',
      lastName: formData.lastName || resumeInfo.Details.lastName || '',
      jobTitle: formData.jobTitle || resumeInfo.Details.jobTitle || '',
      address: formData.address || resumeInfo.Details.address || '',
      phone: formData.phone || resumeInfo.Details.phone || '',
      email: formData.email || resumeInfo.Details.email,
    };
    GlobalApi.UpdateResumeDetails(parms?.resumeId, data).then((res) => {
      console.log(res.data.message)
      enableNext(true)
      setLoading(false)
      toast("Personal Detais has been Updated😍", {
        description: new Date().toLocaleString(),
      });
    }, (err) => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input key="firstName" name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input key="lastName" name="lastName" required onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input key="jobTitle" name="jobTitle" required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange} />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <Input key="address"  name="address" required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <Input key="phone" name="phone" required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange} />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <Input key="email" name="email" required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange} />
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <Button type="submit"
            disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetail