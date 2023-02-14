

const ControlPanel = ({ timer, setControlPanel }) => {


    return (
        <div style={{ position: 'relative' }}>
            <button className={timer < 59 && 'none'} onClick={() => setControlPanel(false)} style={{ background: 'none', width: '180px', position: 'absolute', right: '20px', top: '20px' }} title='Once you have closeed Control panel, you have to go admin panel Login '>Close Control Panel</button>
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: '200px', width: '400px', border: '3px solid orange', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>this is Admin panel</p>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;