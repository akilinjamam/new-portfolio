import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchDeleteBlogData, fetchDeleteProjectData, fetchDeleteSkilData, fetchGetBlogData, fetchGetExpData, fetchGetProjectData, fetchGetSkilData, fetchPostBlogData, fetchPostProjectData, fetchPostSkillData, fetchUpdateBlogData, fetchUpdateExpData, fetchUpdateProjectData, fetchUpdateSkillData } from '../../fetchData/fetchData';
export const usePostProjectData = (refetch) => {
    const {mutate: addProject, error, isError, isPending} = useMutation({
        queryKey: ['fetchPostProjectData'],
        mutationFn: (data) => fetchPostProjectData(data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert('project added successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {addProject, isError, error, isPending}
};


export const useUpdateProjectData = (refetch) => {
    const {mutate: updateProject, error, isError, isPending} = useMutation({
        queryKey: ['fetchUpdateProjectData'],
        mutationFn: (data) => fetchUpdateProjectData(data.id, data.data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert('project updated successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {updateProject, isError, error, isPending}
};
export const useDeleteProjectData = (refetch) => {
    const {mutate: deleteProject, error, isError, isPending} = useMutation({
        queryKey: ['fetchDeleteProjectData'],
        mutationFn: (id) => fetchDeleteProjectData(id),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                refetch()
                alert('deleted successfully')
            } else {
                alert("something went wrong")
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {deleteProject, isError, error, isPending}
};
export const useUpdateExpData = (refetch) => {
    const {mutate: updateExp, error, isError, isPending} = useMutation({
        queryKey: ['fetchUpdateExpData'],
        mutationFn: (data) => fetchUpdateExpData(data?.id, data?.data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                refetch()
                alert('updated successfully')
            } else {
                alert("something went wrong")
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {updateExp, isError, error, isPending}
};
export const useGetProjectData = () => {

    const { data, refetch, isLoading, error } = useQuery({ queryKey: ['fetchGetProjectData'], queryFn: () => fetchGetProjectData() })
    const projectData = data;

    return { projectData, isLoading, error, refetch }
};
export const useGetExptData = () => {

    const { data, refetch, isLoading, error } = useQuery({ queryKey: ['fetchGetExpData'], queryFn: () => fetchGetExpData() })
    const expData = data;

    return { expData, isLoading, error, refetch }
};


export const usePostSkillData = (refetch) => {
    const {mutate: addSkill, error, isError, isPending} = useMutation({
        queryKey: ['fetchPostSkillData'],
        mutationFn: (data) => fetchPostSkillData(data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert('skill added successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {addSkill, isError, error, isPending}
};


export const useUpdateSkillData = (refetch) => {
    const {mutate: updateSkill, error, isError, isPending} = useMutation({
        queryKey: ['fetchUpdateSkillData'],
        mutationFn: (data) => fetchUpdateSkillData(data?.id, data?.data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert(' skill updated successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {updateSkill, isError, error, isPending}
};



export const useDeleteSkillData = (refetch) => {
    const {mutate: deleteSkill, error, isError, isPending} = useMutation({
        queryKey: ['fetchDeleteSkillData'],
        mutationFn: (id) => fetchDeleteSkilData(id),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert('skill deleted successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {deleteSkill, isError, error, isPending}
};


export const useGetSkillData = () => {

    const { data, refetch, isLoading, error } = useQuery({ queryKey: ['fetchGetSkillData'], queryFn: () => fetchGetSkilData() })
    const skillData = data;

    return { skillData, isLoading, error, refetch }
};




export const usePostBlogData = (refetch) => {
    const {mutate: addBlog, error, isError, isPending} = useMutation({
        queryKey: ['fetchPostBlogData'],
        mutationFn: (data) => fetchPostBlogData(data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert('blog added successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {addBlog, isError, error, isPending}
};


export const useUpdateBlogData = (refetch) => {
    const {mutate: updateblog, error, isError, isPending} = useMutation({
        queryKey: ['fetchUpdateBlogData'],
        mutationFn: (data) => fetchUpdateBlogData(data?.id, data?.data),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert(' skill updated successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {updateblog, isError, error, isPending}
};



export const useDeleteBlogData = (refetch) => {
    const {mutate: deleteBlog, error, isError, isPending} = useMutation({
        queryKey: ['fetchDeleteBlogData'],
        mutationFn: (id) => fetchDeleteBlogData(id),
        onSuccess: (data) => {
            console.log(data)
            if (data?.success) {
                alert('blog deleted successfully')
                refetch()
            } else {
                alert(data)
            }
        },
        onError: (error) => {
            alert(error.response?.data?.errorMessage)
        }
    })

    return {deleteBlog, isError, error, isPending}
};


export const useGetBlogData = () => {

    const { data, refetch, isLoading, error } = useQuery({ queryKey: ['fetchGetBlogData'], queryFn: () => fetchGetBlogData() })
    const blogData = data;

    return { blogData, isLoading, error, refetch }
};