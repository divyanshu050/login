import React, { useState } from 'react';
import './Login.css';
import { UserOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [client_id, setClientId] = useState("");

    const handleLogin = async () => {
        console.log(email, password);
        // let item = { email, password };
        let result = await fetch("https://ssc-orl-api-dev.nimbles2p.com/buyer/login", {
            method: 'post',
            body: JSON.stringify({ email, password, client_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (password === "123456789" && email === "stare@techpanion.com" && client_id === '17') {
            document.write("<h1>Successfully Logged In</h1>")
        } else {
            alert("wrong entry")
        }
    }
    return (
        <>
            <div className='container' style={{ backgroundColor: "white" }}>
                <div className='first_container' style={{ backgroundColor: "#551A8B" }}>
                    <div className='logo'>
                        <img src="https://nimbles2p.com/wp-content/uploads/2021/07/WlogoTM1.png" alt="" />
                    </div>
                    <div className='content' style={{ color: "whitesmoke" }}>
                        <h1 style={{ fontSize: "50px" }}>Welcome to NimbleS2P</h1>
                        <h2>Lets get the supply chain an active mode</h2>
                    </div>

                    <div className='footer'>
                        <h4 style={{ color: "whitesmoke" }} >powered by Techpanion Solutions Pvt. Ltd | V.1.0.0</h4>
                    </div>
                </div>
                <div className='login_container'>
                    <div className='login_first'>

                        <p className='heading_top'>Enter your email or password to access your portal</p>
                        <label htmlFor="userName"><b> Email</b></label>
                        <br />
                        <p className='box'><UserOutlined className='icon' /><input type="email" placeholder='Enter your email' className='input_fld' value={email} id='email' onChange={(e) => setEmail(e.target.value)} /></p>

                        <br />
                        <label htmlFor="password"><b>Enter Your password</b></label>
                        <br />
                        <p className='box'><LockOutlined className='icon' /><input type="password" value={password} id="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} className='input_fld' />
                        </p>
                        <br />
                        <label htmlFor="client_id"><b>Enter Your Client ID</b></label>
                        <br />
                        <p className='box'>< IdcardOutlined className='icon' /><input type="email" placeholder='Enter your client ID' className='input_fld' value={client_id} id='email' onChange={(e) => setClientId(e.target.value)} /></p>


                        <button onClick={handleLogin} className='btn' id='login_btn'>Login</button>
                        <p style={{ fontWeight: "500" }}>Forgot Password</p>
                    </div>
                    <div className='login_second'>
                        <div className='signIn_lines'>

                            <div><hr style={{ borderTop: "1px solid black ", marginRight: "5px", content: "", width: "190px", marginTop: "32px" }} /></div>
                            <div><h5>or sign in with</h5></div>
                            <div><hr style={{ borderTop: "1px solid black", marginTop: "32px", marginLeft: "5px", content: "", width: "180px" }} /></div>
                        </div>

                        <button className='btn' id='google_signin_btn'><img style={{ marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="" width={"20px"} />Login with google </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;


