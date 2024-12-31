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
            </div>
            <div className='resSkill'>
                <h2 className='skill-h2'>SKILLS</h2>
                <div className='skill-main'>
                    <div className='grid-container'>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">HTML</span>
                                <div className="skill-bar">
                                    <span className="skill-per html">
                                        <span className="tooltip">95%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">CSS</span>
                                <div className="skill-bar">
                                    <span className="skill-per css">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">Javascript</span>
                                <div className="skill-bar">
                                    <span className="skill-per javascript">
                                        <span className="tooltip">67%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">React Js</span>
                                <div className="skill-bar">
                                    <span className="skill-per reactjs">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">Node Js</span>
                                <div className="skill-bar">
                                    <span className="skill-per nodejs">
                                        <span className="tooltip">50%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">Express Js</span>
                                <div className="skill-bar">
                                    <span className="skill-per expressjs">
                                        <span className="tooltip">75%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">MongoDB</span>
                                <div className="skill-bar">
                                    <span className="skill-per mongodb">
                                        <span className="tooltip">85%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">Redux</span>
                                <div className="skill-bar">
                                    <span className="skill-per redux">
                                        <span className="tooltip">55%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="skill-box">
                                <span className="title">Next Js</span>
                                <div className="skill-bar">
                                    <span className="skill-per nextjs">
                                        <span className="tooltip">40%</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;