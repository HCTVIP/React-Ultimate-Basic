import VideoHomePage from '../../assets/Video/video-1920.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';


const HomePage = (props) => {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source 
                src={VideoHomePage} 
                type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className="title-1">
                    {t('homepage.title1')}
                </div>
                <div className="title-2">
                    {t('homepage.title2')}
                    </div>
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