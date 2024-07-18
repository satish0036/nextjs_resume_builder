import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import RichTextEditorForProject from '../RichTextEditForProject'
import { ResumeInfoContext } from '@/components/context/ResumeInfoContext'
import GlobalApi from '@/server_action/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import { useParams } from 'next/navigation'

const formField = {
    projectName: '',
    aboutProject: '',
    startDate: '',
    endDate: '',
    projectSummery: '',

}
function Project() {
    const [projectList, setProjectList] = useState([]);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const params = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        resumeInfo?.Project?.length > 0 && setProjectList(resumeInfo?.Project)

    }, [])

    const handleChange = (index, event) => {
        const newEntries = projectList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        // console.log(newEntries)
        setProjectList(newEntries);
    }

    const AddNewProject = () => {
        setProjectList([...projectList, {
            projectName: '',
            aboutProject: '',
            startDate: '',
            endDate: '',
            projectSummery: '',
        }])
    }

    const RemoveProject = () => {
        setProjectList(projectList => projectList.slice(0, -1))
    }

    const handleRichTextEditor = (e, name, index) => {
        const newEntries = projectList.slice();
        newEntries[index][name] = e.target.value;

        setProjectList(newEntries);
    }

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            Project: projectList
        });

    }, [projectList]);


    const onSave = () => {
        setLoading(true)

        const data = projectList.map(({ id, ...rest }) => rest)
        // console.log(data)


        GlobalApi.UpdateProjectDetails(params?.resumeId, data).then(res => {
            console.log(res?.data?.message);
            setLoading(false);
            toast('Project updated 😍')
        }, (error) => {
            console.log(error)
            setLoading(false);
        })

    }
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Project</h2>
                <p>Add Your Project</p>
                <div>
                    {projectList.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-xs'>Project Name</label>
                                    <Input name="projectName"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.projectName}
                                    />
                                </div>
                                <div>
                                    <label className='text-xs'>About Project</label>
                                    <Input name="aboutProject"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.aboutProject} />
                                </div>
                                {/* <div>
                                    <label className='text-xs'>City</label>
                                    <Input name="city"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.city} />
                                </div>
                                <div>
                                    <label className='text-xs'>State</label>
                                    <Input name="state"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.state}
                                    />
                                </div> */}
                                <div>
                                    <label className='text-xs'>Start Date</label>
                                    <Input type="date"
                                        name="startDate"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.startDate} />
                                </div>
                                <div>
                                    <label className='text-xs'>End Date</label>
                                    <Input type="date" name="endDate"
                                        onChange={(event) => handleChange(index, event)}
                                        defaultValue={item?.endDate}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    {/* Work Summery  */}
                                    <RichTextEditorForProject
                                        index={index}
                                        defaultValue={item?.projectSummery}
                                        onRichTextEditorChange={(event) => handleRichTextEditor(event, 'projectSummery', index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between flex-wrap gap-2'>
                    <div className='flex gap-2 flex-wrap'>
                        <Button variant="outline" onClick={AddNewProject} className="text-primary"> + Add More Project</Button>
                        <Button variant="outline" onClick={RemoveProject} className="text-primary"> - Remove</Button>

                    </div>
                    <Button disabled={loading} onClick={() => onSave()}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Project