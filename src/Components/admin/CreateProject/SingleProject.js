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
            <div style={{ width: '100%', height: '200px', overflowX: 'hidden', overflowY: 'scroll', border: '1px solid gray', borderRadius: '5px', padding: '5px' }}>
                <p>Description: <span dangerouslySetInnerHTML={{ __html: findProject?.description }}></span> </p>
            </div>
            <br />
            <p>Link: {findProject?.link}</p>
        </div>
    );
};

export default SingleProject;