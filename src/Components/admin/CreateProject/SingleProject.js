import React from 'react';
import { useParams } from 'react-router';
import { useGetProjectData } from '../../fetch-middleware-data/useFetchData';

const SingleProject = () => {

    const { id } = useParams();

    const { projectData } = useGetProjectData()

    const findProject = projectData?.data?.find(f => f?._id === id);

    console.log(findProject);

    return (
        <div >
            <div style={{ width: '200px', height: '200px' }}>
                <img width={200} height={200} src={findProject?.img} alt="" />
            </div>
            <br />
            <p>Title: {findProject?.title}</p>
            <p>Description: {findProject?.description}</p>
        </div>
    );
};

export default SingleProject;