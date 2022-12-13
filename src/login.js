import React from "react";

export const Login = ({ handleLogin }) => {
    return (

        <div className="login d-flex justify-content-center align-items-center gap-5 container">
            <div className="login-left ">
                <h3>Sign In</h3>
                <div className="mb-3">
                    <span>New User?</span>
                    <a href="/" className="text-decoration-none ms-2">Create an account?</a>
                </div>
                <form>
                    <div className="mb-2">
                        <input type='text' className="form-control" placeholder="Username or email" />
                    </div>
                    <div className="mb-2">
                        <input type='text' className="form-control" placeholder="Password" />
                    </div>
                    <div className="d-flex justify-content-start">
                        <input type='checkbox' className="form-check-input me-2" />
                        <label>Keep me signed in</label>
                    </div>
                    <button onClick={handleLogin} className="btn btn-dark mt-3 text-center w-100">Sign In</button>
                </form>
                <div className="login-btm py-3">
                    <div className="text-center lines my-3">
                        <span className="px-2">Or sign in with</span>

                    </div>
                    <div className="d-flex justify-content-center gap-3 social-icons">
                        <a href="/"><i className="bi bi-google"></i></a>
                        <a href="/"><i className="bi bi-facebook"></i></a>
                        <a href="/"><i className="bi bi-linkedin"></i></a>
                        <a href="/"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
            </div>

            <div className="login-right w-100">
                <img src="./images/mtimg.png" alt="img" width="300" />
            </div>


        </div>
    )
}