import React, { useEffect, useState } from 'react';
import { useGetBlogData, useUpdateBlogData } from '../../fetch-middleware-data/useFetchData';
import { useParams } from 'react-router';

const EditBlog = () => {

    const { id } = useParams();
    const { blogData, refetch } = useGetBlogData();
    const { updateblog } = useUpdateBlogData(refetch)

    const findProject = blogData?.data?.find(f => f?._id === id);

    const [inputData, setInputData] = useState({
        title: '',
        author: '',
        description: '',
        email: '',

    });

    useEffect(() => {
        setInputData({
            title: findProject?.title,
            description: findProject?.description,
            author: findProject?.author,
            email: findProject?.email,
        })
    }, [findProject])



    const handleSubmit = (e, id) => {
        e.preventDefault();
        const data = {
            id: id,
            data: inputData
        }
        updateblog(data)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label style={{ marginRight: '10px' }} htmlFor="">Title: </label>
                <input value={inputData?.title} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add website link' onChange={(e) => setInputData({ ...inputData, title: e.target.value })} />
                <br /><br />
                <label style={{ marginRight: '10px' }} htmlFor="">Description: </label>
                <input value={inputData?.description} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add website link' onChange={(e) => setInputData({ ...inputData, description: e.target.value })} />
                <br /><br />
                <label style={{ marginRight: '10px' }} htmlFor="">Author: </label>
                <input value={inputData?.author} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add website link' onChange={(e) => setInputData({ ...inputData, author: e.target.value })} />
                <br /><br />
                <label style={{ marginRight: '10px' }} htmlFor="">Email: </label>
                <input value={inputData?.email} style={{ width: '200px', background: 'none', outline: 'none' }} type="text" name="" id="" placeholder='Add website link' onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                <br /><br />
                <input onClick={(e) => handleSubmit(e, findProject?._id)} style={{ backgroundColor: 'green', padding: '2px 5px', fontWeight: 'bold', borderRadius: "2px", cursor: 'pointer' }} type="submit" value="Update Blog" />
            </form>
        </div>
    );
};

export default EditBlog;