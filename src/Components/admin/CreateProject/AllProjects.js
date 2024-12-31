import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useDeleteProjectData, useGetProjectData } from '../../fetch-middleware-data/useFetchData.jsx'


const AllProjects = () => {

    const { projectData, refetch, isLoading } = useGetProjectData();

    const { deleteProject } = useDeleteProjectData(refetch)

    console.log(projectData?.data);

    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure to delete this item');

        if (confirm) {
            deleteProject(id)
        }

    }

    useEffect(() => {
        refetch()
    }, [refetch, projectData])

    return (
        <div>
            <div style={{ width: '100%', height: '50px', borderBottom: '3px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to="/controll-panel/create-project"><p style={{ cursor: 'pointer' }}>Create Project</p></Link>
                <br />
            </div>
            <br />
            {isLoading
                ?
                <p>Loading...</p>
                :
                projectData?.data?.map((item, index) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>{index + 1}. {item?.title}</p>
                            <div>
                                <Link to={`/controll-panel/single-project/${item?._id}`}>
                                    <span style={{ backgroundColor: 'green', padding: '1px 5px', borderRadius: '3px', marginRight: "10px" }}>Details</span>
                                </Link>
                                <Link to={`/controll-panel/edit-project/${item?._id}`}>
                                    <span style={{ backgroundColor: 'green', padding: '1px 5px', borderRadius: '3px', marginRight: "10px" }}>Edit</span>
                                </Link>
                                <span onClick={() => handleDelete(item?._id)} style={{ backgroundColor: 'red', padding: '1px 5px', borderRadius: '3px', cursor: 'pointer' }}>Delete</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllProjects;