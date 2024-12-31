import React, { useEffect, useState } from 'react';
import { useGetExptData, useUpdateExpData } from '../../fetch-middleware-data/useFetchData';

const Experience = () => {
    const { expData, refetch, isLoading } = useGetExptData();
    const { updateExp } = useUpdateExpData(refetch);
    const [veiw, setView] = useState(false);
    const [updateExps, setUpdateExps] = useState('');

    const handleUpdate = (e, id) => {
        e.preventDefault();


        const data = {
            id: id,
            data: {
                exp: updateExps
            }
        }
        updateExp(data);
        console.log(data?.id);
    }

    const openEdit = () => {
        setView(!veiw);
    }

    useEffect(() => {
        const exp = expData?.data[0]?.exp;
        setUpdateExps(exp)
    }, [expData])



    return (
        <div>
            <div style={{}}>
                {isLoading
                    ?
                    <p>Loading...</p>
                    :
                    expData?.data?.map(item => {
                        return (
                            <div>
                                <br />
                                <p style={{ borderBottom: '2px solid gray', paddingBottom: '10px' }}>Experience :</p>
                                {
                                    veiw
                                        ?
                                        <input value={updateExps} style={{ background: 'none', width: '500px' }} type="text" name="" id="" onChange={(e) => setUpdateExps(e.target.value)} />
                                        :
                                        <p >{item?.exp}</p>
                                }
                                <br />
                                <br />
                                <span onClick={openEdit} style={{ backgroundColor: 'green', marginRight: "10px", padding: '1px 5px', borderRadius: '3px', cursor: 'pointer' }}>Edit</span>

                                {
                                    veiw
                                    &&
                                    <span onClick={(e) => handleUpdate(e, item?._id)} style={{ backgroundColor: 'green', padding: '1px 5px', borderRadius: '3px', cursor: 'pointer' }}>Update Post</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Experience;