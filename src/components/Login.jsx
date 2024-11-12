import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hook/useAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useAuthContext();
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="card bg-base-100  max-w-2xl shrink-0 shadow-2xl">
          <h2 className="text-3xl text-white text-center mt-4">Login</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              New to this website? Please{" "}
              <Link className="underline" to="/register">
                Sign Up
              </Link>
              .
            </p>
            <p className="text-center">
              <button onClick={handleGoogleSignIn}>
                <img
                  className="w-10 mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                  alt="Sign with google"
                />
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
