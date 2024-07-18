import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '../context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from '@/server_action/AIModal';
import { toast } from 'sonner';
const PROMPT = 'project name: {positionTitle}, about project: {aboutProject}, Basedd on project name and about project give me 3  bullet points to add in  project section of my resume , give me result in HTML tags'
function RichTextEditorForProject({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    const [loading, setLoading] = useState(false);
    const GenerateSummeryFromAI = async () => {

        if (!resumeInfo?.Project[index]?.projectName || !resumeInfo?.Project[index]?.aboutProject) {
            toast('Please Add Project Name and About Project to get Responce');
            return;
        }
        setLoading(true)
        let prompt = PROMPT.replace('{positionTitle}', resumeInfo.Project[index].projectName);
        prompt = PROMPT.replace('{aboutProject}', resumeInfo.Project[index].aboutProject);
        const result = await AIChatSession.sendMessage(prompt);
        console.log(result.response.text());
        const resp = result.response.text()
        setValue(resp.replace('[', '').replace(']', ''));
        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between my-2 flex-wrap gap-2'>
                <label className='text-xs'>Summery</label>
                <Button variant="outline" size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary">
                    {loading ?
                        <LoaderCircle className='animate-spin' /> :
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={(e) => {
                    setValue(e.target.value);
                    onRichTextEditorChange(e)
                }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />


                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditorForProject