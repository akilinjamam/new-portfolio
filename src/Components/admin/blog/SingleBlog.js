import React from 'react';
import { useParams } from 'react-router';
import { useGetBlogData } from '../../fetch-middleware-data/useFetchData';

const SingleBlog = () => {

    const { id } = useParams();

    const { blogData } = useGetBlogData()

    const findProject = blogData?.data?.find(f => f?._id === id);

    console.log(findProject);

    return (
        <div >

            <p>Title: {findProject?.title}</p>
            <p>Email: {findProject?.email}</p>
            <p>Author: {findProject?.author}</p>
            <label htmlFor="">Description:</label>
            <p dangerouslySetInnerHTML={{ __html: findProject?.description }}></p>
        </div>
    );
};

export default SingleBlog;