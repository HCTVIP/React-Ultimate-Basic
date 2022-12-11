import VideoHomePage from '../../assets/Video/video-1920.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source 
                src={VideoHomePage} 
                type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className="title-1">Integrations that banish busywork</div>
                <div className="title-2">Sync responses to Google Sheets. Ping people in Slack when someone fills out your survey. Sit back and watch your work flow.</div>
                <div className="title-3">
                    {isAuthenticated === true ? 
                        <button onClick={() => navigate("/login")}>Get started. It's free</button>
                        : 
                        <button onClick={() => navigate("/user")}>Doing Quiz Now</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;