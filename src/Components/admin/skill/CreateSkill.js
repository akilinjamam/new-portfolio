import React, { useEffect, useState } from 'react';
import { useGetSkillData, usePostSkillData } from '../../fetch-middleware-data/useFetchData';
import { updloadCloudinaryImage } from '../../../cloudinary/uploadImage';

const CreateSkill = () => {

    const [imgHolder, setImageHolder] = useState('')
    console.log(imgHolder);
    const [uploading, setUploading] = useState(false);
    const [inputData, setInputData] = useState({
        skill: '',
    });

    const { refetch } = useGetSkillData();
    const { addSkill } = usePostSkillData(refetch)

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!inputData?.skill) {
            alert('please add skill name')
            return
        }

        if (!imgHolder) {
            alert('please add image')
            return
        }

        const data = {
            ...inputData,
            logo: imgHolder
        }
        addSkill(data)
    }
    useEffect(() => {

    }, [uploading])

    return (
        <div>
            <p style={{ borderBottom: '3px solid gray', paddingBottom: '10px' }}>create skill</p>
            <br />
            {
                imgHolder &&
                <img width={200} height={200} src={imgHolder} alt="" />
            }
            <br />
            <form action="" onSubmit={handleSubmit}>
                <input style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add Your Skill' onChange={(e) => setInputData({ ...inputData, skill: e.target.value })} />
                <br /><br />
                <label style={{ backgroundColor: 'orange', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} htmlFor="img">{uploading ? 'uploading...' : 'Add Image'}</label>
                <input type="file" name="" id="img" style={{ opacity: '0' }} onChange={(e) => {
                    const img = e.target.files[0];
                    console.log(img);
                    updloadCloudinaryImage(img, setImageHolder, setUploading)
                }} />
                <br /><br />
                <input style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Submit Skill" />
            </form>
        </div>
    );
};

export default CreateSkill;