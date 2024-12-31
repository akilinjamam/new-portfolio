import { useGetBlogData } from "../fetch-middleware-data/useFetchData";

const ShowBlog = () => {

    const {blogData, isLoading} = useGetBlogData()

    return (
        <div id="blog">
            <h2 style={{textAlign:'center'}}>BLOG</h2>
            <br />
            <div style={{width:'1200px', height:'auto', margin:'auto',}}>
                {
                    blogData?.data?.map(item => {
                        return (
                            <div style={{border:'2px solid gray', padding:'10px', marginBottom:'20px'}}>
                                <i>{item?.author}</i>
                                <br /><br />
                                <p>Title: {item?.title}</p>
                                <br />
                                <label htmlFor="">Description :</label>
                                <p dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                                <br />

                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
};

export default ShowBlog;