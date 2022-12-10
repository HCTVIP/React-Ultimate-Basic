import VideoHomePage from '../../assets/Video/video-1920.mp4'
import { useSelector } from 'react-redux';

const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);
    
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
                    <button>Get started. It's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;