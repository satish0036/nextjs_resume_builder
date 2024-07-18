import axios from "axios";
const BACKEND_API =process.env.NEXT_PUBLIC_BACKEND_URL

const axiosClient=axios.create({
    baseURL:BACKEND_API,
    
    // headers:{
    //     "Content-Type":'application/json',
    //     "Authorization":`Bearer ${API_KEY}`
    // }
})

const CreatenewResume=(data)=>axiosClient.post("resume/addresume",data)

const GetUserResumesByResumeId= (resumeId) => {
  const params = {
    resumeId: resumeId.resumeId
  };
  // console.log("GetUserResumesByResumeId",params);
  return axiosClient.get("resume/getUserResumesByResumeId", {params});
};

const GetUserResumes = (userEmail) => {
    const params = {
      userEmail: userEmail.userEmail
    };
    return axiosClient.get("resume/getUserResumes", {params});
  };

const UpdateResumeDetails=(id,data)=>{
    const data1 = {
        firstName: data.firstName,
        lastName:data?.lastName,
        jobTitle:data?.jobTitle,
        address:data.address,
        phone:data.phone,
        email:data.email,
        resumeId:id

      };
    return axiosClient.put("resume/updateResumeDetails", data1)
}

const UpdateResumeSummary=(id,data)=>{
  const data1 = {
     
      summary:data.summary,
      resumeId:id

    };
  return axiosClient.put("resume/updateResumeSummary", data1)
}

const UpdateExperienceDetails = (resumeId, data) => {
  const updatedData = data.map((experience,index) => ({
    ...experience,
    resumeId: resumeId,
    expId: resumeId+index,
  }));
  return axiosClient.put("resume/updateExperienceDetails", updatedData);
};


const UpdateProjectDetails = (resumeId, data) => {
  const updatedData = data.map((project,index) => ({
    ...project,
    resumeId: resumeId,
    projectId: resumeId+index,
  }));
  return axiosClient.put("resume/updateProjectDetails", updatedData);
};



const UpdateEducationDetails = (resumeId, data) => {
  const updatedData = data.map((education,index) => ({
    ...education,
    resumeId: resumeId,
    eduId: resumeId+index,
  }));
  return axiosClient.put("resume/updateEducationDetails", updatedData);
};


const UpdateSkillDetail = (resumeId, data) => {
  const updatedData = data.map((education,index) => ({
    ...education,
    resumeId: resumeId,
    skillId: resumeId+index,
  }));
  return axiosClient.put("resume/updateSkillDetails", updatedData);
};



const GetResumeById=(data)=>{
  const params = {
    resumeId: data
  };
  return axiosClient.get("resume/getResumeById", {params});
}


const DeleteResumeById=(data)=>{
  const params = {
    resumeId: data
  };
  console.log(params)
  return axiosClient.get("resume/deleteResumeById", {params});

}


const UpdateTheme=(id,data)=>{
  const data2={...data,  resumeId: id}
return axiosClient.put("resume/updateTheme", data2)

}


const AddUser=(data)=>{
    console.log(data)
  
    return axiosClient.post("auth/addUser",data)
}
const UserSignIn=(data)=>{
    return axiosClient.post("auth/userSignIn",data)
}



export default{
    CreatenewResume,
    GetUserResumes,
    UpdateResumeDetails,
    UpdateResumeSummary,
    UpdateExperienceDetails,
    UpdateProjectDetails,
    UpdateEducationDetails,
    GetResumeById,
    UpdateSkillDetail,
    DeleteResumeById,
    UpdateTheme,
    GetUserResumesByResumeId,
    AddUser,
    UserSignIn,
}