import React, { useEffect, useState } from 'react';
import { updloadCloudinaryImage } from '../../../cloudinary/uploadImage';
import { useGetSkillData, useUpdateSkillData } from '../../fetch-middleware-data/useFetchData';
import { useParams } from 'react-router';

const EditSkill = () => {

    const { id } = useParams();
    const { skillData, refetch } = useGetSkillData();
    const { updateSkill } = useUpdateSkillData(refetch)

    const findProject = skillData?.data?.find(f => f?._id === id);


    const [imgHolder, setImageHolder] = useState('')
    console.log(imgHolder);
    const [uploading, setUploading] = useState(false);
    const [inputData, setInputData] = useState({
        skill: '',

    });

    useEffect(() => {
        setInputData({
            skill: findProject?.skill,
        })
    }, [findProject])

    const handleUpdateImage = (e, id) => {
        e.preventDefault();
        if (!imgHolder) {
            alert('image not found')
            return
        }

        const data = {
            id: id,
            data: {
                logo: imgHolder
            }
        }

        updateSkill(data)
    }

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const data = {
            id: id,
            data: inputData
        }

        updateSkill(data)
    }
    return (
        <div>
            <div>
                {
                    imgHolder
                        ?
                        <img width={200} height={200} src={imgHolder} alt="" />
                        :
                        <img width={200} height={200} src={findProject?.logo} alt="" />
                }
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input value={inputData?.skill} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add website link' onChange={(e) => setInputData({ ...inputData, skill: e.target.value })} />

                <br /><br />
                <label style={{ backgroundColor: 'orange', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} htmlFor="img">{uploading ? 'uploading...' : 'Add Image'}</label>
                <input type="file" name="" id="img" style={{ opacity: '0' }} onChange={(e) => {
                    const img = e.target.files[0];
                    console.log(img);
                    updloadCloudinaryImage(img, setImageHolder, setUploading)
                }} />
                <br /><br />
                <input onClick={(e) => handleSubmit(e, findProject?._id)} style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Update Skill" />

                <input onClick={(e) => handleUpdateImage(e, findProject?._id)} style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Update Image" />
            </form>
        </div>
    );
};

export default EditSkill;