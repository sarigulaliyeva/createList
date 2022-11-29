import axios from "axios";

export const api=axios.create({
    baseURL: 'https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood'
})

export const getUsers=async()=>{
    const response=await api.get()
    return response.data
}
