import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from 'react-toastify';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import './Register.scss';
import Language from "../Header/Language";

const Register = () => {

    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState("");

    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const handleRegister = async () => {
        // validate
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error("invalid Email");
            return;
            }
    
            if (!passWord) {
            toast.error("invalid Password");
            return;
            }
        // submit apis
        let data = await postRegister(email, passWord, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/login")
          }
      
          if (data && +data.EC !== 0) {
            toast.error(data.EM);
          }
    };

    return (
        <>
        <div className="register-container">
            <div className="header">
                <span>Already have an account?</span>
                <button onClick={() => {navigate("/login")}}>Log In</button>
                <Language />
            </div>
            <div className="title col-4 mx-auto">
                Hỏi Dân IT &amp; Eric
            </div>
            <div className="welcome col-4 mx-auto">
                Start your journey?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input 
                    type={"email"} 
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group pass-group">
                    <label>Password (*)</label>
                    <input 
                    type={isShowPassword ? "text" : "password"} 
                    className="form-control"
                    value={passWord}
                    onChange={(event) => setPassWord(event.target.value)}
                    />
                    {isShowPassword ? 
                        <span 
                        className="icons-eye"
                        onClick={() => setIsShowPassword(false)}
                        >
                            <VscEye />
                        </span>
                        :
                        <span 
                        className="icons-eye"
                        onClick={() => setIsShowPassword(true)}
                        >
                            <VscEyeClosed />
                        </span>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    type={"text"} 
                    className="form-control"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button 
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >
                        Create my free account
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
        </>
    )
}

export default Register;