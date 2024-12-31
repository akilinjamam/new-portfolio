import React from 'react';
import { useParams } from 'react-router';
import { useGetSkillData } from '../../fetch-middleware-data/useFetchData';

const SingleSkill = () => {

    const { id } = useParams();

    const { skillData } = useGetSkillData()

    const findProject = skillData?.data?.find(f => f?._id === id);

    console.log(findProject);

    return (
        <div >
            <div style={{ width: '200px', height: '200px' }}>
                <img width={200} height={200} src={findProject?.logo} alt="" />
            </div>
            <br />
            <p>Title: {findProject?.skill}</p>

        </div>
    );
};

export default SingleSkill;