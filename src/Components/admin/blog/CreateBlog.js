import React, { useState } from 'react';

import { useGetBlogData, usePostBlogData } from '../../fetch-middleware-data/useFetchData';
import SimpleTextEditor from './SimpleTextEditor';

const CreateBlog = () => {
    const [value, setValue] = useState('');
    const [inputData, setInputData] = useState({
        title: '',
        author: '',
        email: ''
    });

    const { refetch } = useGetBlogData();
    const { addBlog } = usePostBlogData(refetch)

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
        if (!inputData?.author) {
            alert('please add author')
            return
        }
        if (!inputData?.email) {
            alert('please add email')
            return
        }


        const data = { ...inputData, description: value }
        addBlog(data)
    }


    return (
        <div>
            <p style={{ borderBottom: '3px solid gray', paddingBottom: '10px' }}>Create Blog</p>

            <br />
            <form action="" onSubmit={handleSubmit}>
                <input style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add title' onChange={(e) => setInputData({ ...inputData, title: e.target.value })} />
                <br /><br />

                <input style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add email' onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                <br /><br />
                <input style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add author' onChange={(e) => setInputData({ ...inputData, author: e.target.value })} />
                <br /><br />
                <SimpleTextEditor value={value} setValue={setValue} />
                <br />
                <input style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Submit Blog" />
            </form>
        </div>
    );
};

export default CreateBlog;