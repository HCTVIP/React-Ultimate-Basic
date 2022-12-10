import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from 'react-toastify';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");

    const handleLogin = async () => {
        // validate

        // submit apis
        let data = await postLogin(email, passWord);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/")
          }
      
          if (data && +data.EC !== 0) {
            toast.error(data.EM);
          }
    };

    const navigate = useNavigate()

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet</span>
                <button>Sign Up</button>
            </div>
            <div className="title col-4 mx-auto">
                HoiDanIt 
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who’s this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type={"email"} 
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type={"password"} 
                    className="form-control"
                    value={passWord}
                    onChange={(event) => setPassWord(event.target.value)}
                    />
                </div>
                    <span className="forgot-password">Forgot Passworld</span>
                <div>
                    <button 
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >
                        Login to HoiDanIt
                    </button>
                </div>
                <div className="text-center">
                    <span 
                    onClick={() => {navigate("/")}}
                    className="back"
                    > 
                        &#60; &#60; Go to HomePage
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;