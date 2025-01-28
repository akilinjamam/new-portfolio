import React, { useEffect, useState } from 'react';
import { updloadCloudinaryImage } from '../../../cloudinary/uploadImage';
import { useGetProjectData, useUpdateProjectData } from '../../fetch-middleware-data/useFetchData';
import { useParams } from 'react-router';
import SimpleTextEditor from '../blog/SimpleTextEditor';

const EditProject = () => {

    const { id } = useParams();
    const { projectData, refetch } = useGetProjectData();
    const { updateProject } = useUpdateProjectData(refetch)

    const findProject = projectData?.data?.find(f => f?._id === id);

    const [value, setValue] = useState('');
    const [imgHolder, setImageHolder] = useState('')
    console.log(imgHolder);
    const [uploading, setUploading] = useState(false);
    const [inputData, setInputData] = useState({
        title: '',
        link: ''
    });

    useEffect(() => {
        setInputData({
            title: findProject?.title,
            link: findProject?.link
        })
    }, [findProject])

    useEffect(() => {
        setValue(findProject?.description)
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
                img: imgHolder
            }
        }

        updateProject(data)
    }

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const data = {
            id: id,
            data: { ...inputData, description: value }
        }

        updateProject(data)
    }
    return (
        <div>
            <div>
                {
                    imgHolder
                        ?
                        <img width={200} height={200} src={imgHolder} alt="" />
                        :
                        <img width={200} height={200} src={findProject?.img} alt="" />
                }
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input value={inputData?.title} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add website link' onChange={(e) => setInputData({ ...inputData, title: e.target.value })} />
                <br /><br />
                <div style={{ width: '100%', height: '140px', overflowX: 'hidden', overflowY: 'scroll', border: '1px solid gray' }}>
                    <SimpleTextEditor value={value} setValue={setValue} />
                </div>
                <br /><br />
                <input value={inputData?.link} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add Link' onChange={(e) => setInputData({ ...inputData, link: e.target.value })} />
                <br /><br />
                <label style={{ backgroundColor: 'orange', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} htmlFor="img">{uploading ? 'uploading...' : 'Add Image'}</label>
                <input type="file" name="" id="img" style={{ opacity: '0' }} onChange={(e) => {
                    const img = e.target.files[0];
                    console.log(img);
                    updloadCloudinaryImage(img, setImageHolder, setUploading)
                }} />
                <br /><br />
                <input onClick={(e) => handleSubmit(e, findProject?._id)} style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Update Project" />

                <input onClick={(e) => handleUpdateImage(e, findProject?._id)} style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Update Image" />
            </form>
        </div>
    );
};

export default EditProject;