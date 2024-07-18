import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import GlobalApi from '@/server_action/GlobalApi';
// import { useUser } from '@clerk/clerk-react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';


const AddResume = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState();
    const [loading, setLoading] = useState(false);
    // const { user } = useUser();
    // const navigate = useNavigate();
    const router=useRouter()
    const handleCreate = () => {
        setLoading(true)
        const uuid = uuidv4();
        const data = {
            
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.data?.data?.username,
                userName: user?.data?.data?.name
            
        }
        console.log(data)
        GlobalApi.CreatenewResume(data).then((res) => {
            console.log( "responce of create resume",res)
            if (res) {
                setLoading(false)
                router.push("/dashbord/resume/"+res.data.data.resumeId +"/edit")
            }
        }, (err) => {
            setLoading(false)
        })
    }
    return (
        <div>
            <div onClick={() => setOpenDialog(true)} className=' p-12 py-24 border h-72
      
                flex items-center justify-center bg-secondary rounded-lg
                hover:scale-105  transition-all hover:shadow-lg '>
                <PlusSquare />
            </div>
            <Dialog open={openDialog}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle >Create new Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add a title for your new Resume</p>
                            <Input onChange={(e) => setResumeTitle(e.target.value)} className="my-2" placeholder="Full Stack " />

                        </DialogDescription>
                        <div className=' flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancle</Button>
                            <Button disabled={!resumeTitle || loading}
                                onClick={handleCreate} >
                                {loading ? <Loader2 className=' animate-spin' /> : "Create"}
                            </Button>

                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume