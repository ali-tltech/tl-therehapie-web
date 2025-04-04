import axiosInstance from "../axios/axiosInstance"

export const newsLetter = async(email)=>{
    const response = await axiosInstance.post('/newsletter',{email:email})
    console.log(response)
    return response
}

export const contact = async(contactData)=>{
    const response = await axiosInstance.post('/contact',contactData)
    return response
}