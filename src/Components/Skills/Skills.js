import React from 'react';
import './Skills.css'
import { useGetSkillData } from '../fetch-middleware-data/useFetchData';

const Skills = () => {

    const { skillData, isLoading } = useGetSkillData()

    return (
        <div className="skill forBlock" id='skills'>
            <br /><br />
            <div className='webSkill'>
                <h2 className='skill-h2'>SKILLS</h2>
                <div className='skill-main'>
                    <div className='grid-container'>
                        {isLoading
                            ?
                            <p style={{ textAlign: 'center' }}>Loading...</p>
                            :
                            skillData?.data?.map(item => {
                                return (
                                    <div data-aos="zoom-in" data-aos-duration="800" className='container'>
                                        <div className="skill-box">
                                            <span style={{ borderBottom: '2px solid gray', paddingBottom: '5px' }} className="title">{item?.skill}</span>
                                            <div style={{ widht: '100%', height: '50px' }}>
                                                <br />
                                                <img width={70} height={70} src={item?.logo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='skill-main-res'>
                    <div className='grid-container'>
                        {isLoading
                            ?
                            <p style={{ textAlign: 'center' }}>Loading...</p>
                            :
                            skillData?.data?.map(item => {
                                return (
                                    <div className='container'>
                                        <div className="skill-box">
                                            <span style={{ borderBottom: '2px solid gray', paddingBottom: '5px' }} className="title">{item?.skill}</span>
                                            <div style={{ widht: '100%', height: '50px' }}>
                                                <br />
                                                <img width={70} height={70} src={item?.logo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;