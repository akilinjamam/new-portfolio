import { Link, NavLink, Outlet } from 'react-router';
import '../../App.css';

const ControlPanel = () => {


    return (
        <div className='blue' style={{ position: 'relative' }}>
            <Link to="/">
                <button style={{ background: 'none', width: '100px', position: 'absolute', right: '20px', top: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title='Once you have closeed Control panel, you have to go admin panel Login '>Home</button>
            </Link>
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: '500px', width: '1200px', border: '3px solid orange', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '200px', height: '100%', padding: '10px', borderRight: '3px solid gray' }}>
                        <ul style={{ listStyleType: 'none' }}>
                            <NavLink to="/controll-panel" >
                                <li style={{ marginBottom: "10px", cursor: 'pointer' }}>Project</li>
                            </NavLink>
                            <NavLink to="/controll-panel/exp" >
                                <li style={{ marginBottom: "10px", cursor: 'pointer' }}>Experience</li>
                            </NavLink>
                            <NavLink to="/controll-panel/skill" >
                                <li style={{ marginBottom: "10px", cursor: 'pointer' }}>Skill</li>
                            </NavLink>
                            <NavLink to="/controll-panel/blog" >
                                <li style={{ marginBottom: "10px", cursor: 'pointer' }}>Blog</li>
                            </NavLink>

                        </ul>
                    </div>
                    <div style={{ width: '1000px', height: '100%', padding: '10px' }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;