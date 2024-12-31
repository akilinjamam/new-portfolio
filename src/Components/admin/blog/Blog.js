import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useDeleteBlogData, useGetBlogData } from '../../fetch-middleware-data/useFetchData';

const Blog = () => {

    const navigate = useNavigate();
    const { blogData, refetch, isLoading } = useGetBlogData();

    const { deleteBlog } = useDeleteBlogData(refetch)

    console.log(blogData);

    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure to delete this item');

        if (confirm) {
            deleteBlog(id)
        }

    }

    return (
        <div>
            <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderBottom: '2px solid gray' }}>
                <p onClick={() => navigate('/controll-panel/create-blog')} style={{ cursor: 'pointer' }}>Create Blog</p>
            </div>
            <br />
            {isLoading
                ?
                <p>Loading....</p>
                :
                blogData?.data?.map((item, index) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>{index + 1}. {item?.title}</p>
                            <div>
                                <Link to={`/controll-panel/single-blog/${item?._id}`}>
                                    <span style={{ backgroundColor: 'green', padding: '1px 5px', borderRadius: '3px', marginRight: "10px" }}>Details</span>
                                </Link>
                                <Link to={`/controll-panel/edit-blog/${item?._id}`}>
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

export default Blog;