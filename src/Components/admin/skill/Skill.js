import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useDeleteSkillData, useGetSkillData } from '../../fetch-middleware-data/useFetchData';

const Skill = () => {

    const navigate = useNavigate();
    const { skillData, refetch, isLoading } = useGetSkillData();

    const { deleteSkill } = useDeleteSkillData(refetch)

    console.log(skillData?.data);

    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure to delete this item');

        if (confirm) {
            deleteSkill(id)
        }

    }

    return (
        <div>
            <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderBottom: '2px solid gray' }}>
                <p onClick={() => navigate('/controll-panel/create-skill')} style={{ cursor: 'pointer' }}>Create skill</p>
            </div>
            <br />
            {isLoading
                ?
                <p>Loading...</p>
                :
                skillData?.data?.map((item, index) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>{index + 1}. {item?.skill}</p>
                            <div>
                                <Link to={`/controll-panel/single-skill/${item?._id}`}>
                                    <span style={{ backgroundColor: 'green', padding: '1px 5px', borderRadius: '3px', marginRight: "10px" }}>Details</span>
                                </Link>
                                <Link to={`/controll-panel/edit-skill/${item?._id}`}>
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

export default Skill;