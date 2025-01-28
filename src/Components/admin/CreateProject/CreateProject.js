import React, { useEffect, useState } from 'react';
import { updloadCloudinaryImage } from '../../../cloudinary/uploadImage';
import { useGetProjectData, usePostProjectData } from '../../fetch-middleware-data/useFetchData';
import SimpleTextEditor from '../blog/SimpleTextEditor';

const CreateProject = () => {

    const [value, setValue] = useState('');

    const [imgHolder, setImageHolder] = useState('')
    console.log(imgHolder);
    const [uploading, setUploading] = useState(false);
    const [inputData, setInputData] = useState({
        title: '',
        link: ''
    });

    const { refetch } = useGetProjectData();
    const { addProject } = usePostProjectData(refetch)

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!inputData?.title) {
            alert('please add title')
            return
        }
        if (!value) {
            alert('please add description')
            return
        }
        if (!inputData?.link) {
            alert('please add link')
            return
        }
        if (!imgHolder) {
            alert('please add image')
            return
        }

        const data = {
            ...inputData,
            description: value,
            img: imgHolder
        }
        addProject(data)
    }
    useEffect(() => {

    }, [uploading])

    return (
        <div>
            <p style={{ borderBottom: '3px solid gray', paddingBottom: '10px' }}>create project</p>
            {
                imgHolder &&
                <img width={200} height={200} src={imgHolder} alt="" />
            }
            <br />
            <form action="" onSubmit={handleSubmit}>
                <input style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add title' onChange={(e) => setInputData({ ...inputData, title: e.target.value })} />
                <br /><br />
                <input style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add link' onChange={(e) => setInputData({ ...inputData, link: e.target.value })} />
                <br /><br />
                <SimpleTextEditor value={value} setValue={setValue} />
                <br />
                <label style={{ backgroundColor: 'orange', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} htmlFor="img">{uploading ? 'uploading...' : 'Add Image'}</label>
                <input type="file" name="" id="img" style={{ opacity: '0' }} onChange={(e) => {
                    const img = e.target.files[0];
                    console.log(img);
                    updloadCloudinaryImage(img, setImageHolder, setUploading)
                }} />
                <br /><br />
                <input style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Submit Project" />
            </form>
        </div>
    );
};

export default CreateProject;