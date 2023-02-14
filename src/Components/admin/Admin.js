import { useState } from 'react';
import './Admin.css';
import flower from '../../flower.json'
import angry from '../../angry.json'
import Lottie from 'react-lottie';


const Admin = ({ setMakeInvisible, timer, setControlPanel }) => {

    const [viewSmile, setViewSmile] = useState(false);
    const [viewAngry, setViewAngry] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: flower,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptionsTwo = {
        loop: true,
        autoplay: true,
        animationData: angry,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (process.env.REACT_APP_EMAIL_ID === e.target.email.value && process.env.REACT_APP_PASSWORD_ID === e.target.password.value) {
            console.log('matched');
            setViewSmile(true);

            setTimeout(() => {
                setControlPanel(true);
                setMakeInvisible(false);
                setViewSmile(false)
            }, 6000)
        } else {
            setViewAngry(true)
            setTimeout(() => {
                setViewAngry(false)
            }, 6000)
        }
        e.target.email.value = '';
        e.target.password.value = '';
    }
    return (
        <div className={viewAngry && 'deepRed'}>
            <div className={(viewSmile && 'green')}>
                <div style={{ position: 'relative' }} className='adminMain' id='admin' >
                    <section className='adminSection'>
                        <h1 className='adminTitle'>Admin Panel Login</h1>
                        <form className='adminForm' onSubmit={handleSubmit}>
                            <label htmlFor="">Email</label>
                            <br />
                            <input className='input' type="email" placeholder='Please give your email address' name="email" id="" required />
                            <br /><br />
                            <label htmlFor="">Password</label>
                            <br />
                            <input className='input' type="password" placeholder='Give Your Password' name="password" id="" required />
                            <br />
                            <br />
                            <input className='adminSubmit' type="submit" value="Submit" />
                        </form>
                        <br /><br />
                        <div className='adminButtonAndTimer'>
                            <div style={{ height: '50px', width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={() => setMakeInvisible(false)} style={{ background: 'none', cursor: 'pointer' }}>Back</button>
                            </div>
                            <div>
                                <h4 className={timer < 10 && 'red'}>Remaining: {timer} s </h4>
                            </div>
                        </div>
                    </section>
                    {viewSmile &&
                        <div style={{ position: 'absolute', right: '20px' }}>
                            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
                        </div>
                    }
                    {viewAngry &&
                        <div style={{ position: 'absolute', right: '20px' }}>
                            <Lottie options={defaultOptionsTwo} height={400} width={400}></Lottie>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;
