import { useState } from "react";
import "./login.scss";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");

    const handleLogin = () => {
        alert("me")
    };

    return (
        <div className="login-container">
            <div className="header">
                Don't have an account yet
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
                    >Login to HoiDanIt</button>
                </div>
            </div>
        </div>
    )
}

export default Login;