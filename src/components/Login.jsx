import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { postApi } from "../assets/Helpers/api";
import { LOGIN } from "../assets/Helpers/apiUrls";
import { useNavigate } from "react-router-dom";
// import GoogleLogin from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { setAccessToken } from "../assets/Utils/helpers";

function Login() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "user1@gmail.com",
    password: "12345678",
    rememberPassword: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [localStorage.getItem("TOKEN")]);

  const [showPassword, setShowPassword] = useState(false);

  // const updateState = (data) => {
  //   setLoginData((prev) => ({ ...prev, ...data }));
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await postApi(LOGIN, {
      email: formData.email,
      password: formData.password,
    });
    if (data.status === true) {
      localStorage.setItem("TOKEN", data.detail);
      navigate("/dashboard", { replace: true });
    } else {
      alert(data.message);
    }
  };

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const successLogin = async (response) => {
    console.log("Succcess Login:", response);
  };
  const errorLogin = async (response) => {
    console.log("Error Login:", response);
  };
  const handleLogin = async (response) => {
    // const res = await fetch("/api/v1/auth/google", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // console.log(data);
    // store returned user somehow
  };
  return (
    <>
      <Helmet>
        <title>Admin Login</title>
      </Helmet>
      <div className="loginWrapper pr-0">
        <div className="container-fluid admin-login pl-0">
          <div className="row">
            <div className="col-5 pr-0">
              <div className="admin-login-inner d-flex align-items-center justify-content-center">
                <img src="images/logo-bg.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
              <div>
                <div className="admin-login-card w-100 p-5">
                  <div className="text-left">
                    <h4 className="medium clr-orange">Login To Your Account</h4>
                    <hr className="blue_line bck-orange" />
                    <form onSubmit={submitHandler}>
                      <div className="md-form md-outline input-with-pre-icon">
                        <i className="fas fa-envelope  input-prefix" />
                        <input
                          type="email"
                          className="form-control py-2"
                          placeholder="Enter Email Address"
                          value={formData.email}
                          name="email"
                          onChange={onChange}
                        />
                      </div>
                      <div className="md-form md-outline input-with-pre-icon">
                        <i className="fas fa-lock  input-prefix" />
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control py-2"
                          placeholder="Enter Password"
                          name="password"
                          value={formData.password}
                          onChange={onChange}
                        />
                        <i
                          className="fas fa-eye-slash hide-pass"
                          onClick={handleShowPassword}
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="custom-check"
                            defaultValue="Remember me"
                            name="rememberme"
                          />
                          <label className="p_md l-grey ml-2">
                            Remember me
                          </label>
                        </div>
                        <a href="password-recovery.html" className="clr-orange">
                          Forgot Password?
                        </a>
                      </div>
                      <a href="dashboard.html">
                        <button type="submit" className="w-100 mt-4">
                          Login
                        </button>
                      </a>
                    </form>
                    <div className="mt-5 text-center">
                      <a href="#_" className="medium clr_grey">
                        <i className="fa fa-arrow-circle-left mr-2" /> Back To
                        Website
                      </a>
                    </div>
                    <div className="mt-5 text-center">
                      <GoogleLogin
                        onSuccess={async (credentialResponse) => {
                          console.log(credentialResponse);
                          const { data } = await axios.post(
                            "http://localhost:8000/api/v1/auth/googleLogin",
                            { token: credentialResponse?.credential }
                          );
                          console.log("response data is:", data);
                          setAccessToken(data?.detail?.token);
                          navigate("/dashboard", { replace: true });
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                      {/* <GoogleLogin
                        clientId="74131798307-mil5equd3kte3s5vu61i8c10grl8eg44.apps.googleusercontent.com"
                        buttonText="Log in with Google"
                        onSuccess={successLogin}
                        onFailure={errorLogin}
                        cookiePolicy={"single_host_origin"}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
