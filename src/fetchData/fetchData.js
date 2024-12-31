import axios from "axios";
const url = 'https://new-portfolio-server-puce.vercel.app/api'
export const fetchGetProjectData = async () => {
    try {
        const result = await axios.get(`${url}/projects`)
        return result?.data;
    } catch (error) {
        return error
    }
}


export const fetchPostProjectData = async (data) => {
    try {
        const result = await axios.post(`${url}/projects/create-project`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}

export const fetchDeleteProjectData = async (id) => {
    try {
        const result = await axios.delete(`${url}/projects/${id}`)
        return result?.data;
    } catch (error) {
        return error
    }
}


export const fetchUpdateProjectData = async (id, data) => {
    try {
        const result = await axios.patch(`${url}/projects/${id}`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}

export const fetchGetExpData = async () => {
    try {
        const result = await axios.get(`${url}/exp`)
        return result?.data;
    } catch (error) {
        return error
    }
}
export const fetchUpdateExpData = async (id, data) => {
    try {
        const result = await axios.patch(`${url}/exp/${id}`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}
export const fetchGetSkilData = async () => {
    try {
        const result = await axios.get(`${url}/skills`)
        return result?.data;
    } catch (error) {
        return error
    }
}


export const fetchUpdateSkillData = async (id, data) => {
    try {
        const result = await axios.patch(`${url}/skills/${id}`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}
export const fetchDeleteSkilData = async (id) => {
    try {
        const result = await axios.delete(`${url}/skills/${id}`)
        return result?.data;
    } catch (error) {
        return error
    }
}


export const fetchPostSkillData = async (data) => {
    try {
        const result = await axios.post(`${url}/skills/create-skill`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}

export const fetchGetBlogData = async () => {
    try {
        const result = await axios.get(`${url}/blogs`)
        return result?.data;
    } catch (error) {
        return error
    }
}


export const fetchUpdateBlogData = async (id, data) => {
    try {
        const result = await axios.patch(`${url}/blogs/${id}`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}
export const fetchDeleteBlogData = async (id) => {
    try {
        const result = await axios.delete(`${url}/blogs/${id}`)
        return result?.data;
    } catch (error) {
        return error
    }
}


export const fetchPostBlogData = async (data) => {
    try {
        const result = await axios.post(`${url}/blogs/create-blog`, data)
        return result?.data;
    } catch (error) {
        return error
    }
}