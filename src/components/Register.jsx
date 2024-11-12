import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hook/useAuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useAuthContext();
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.log("ERROR", error.message));
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="card bg-base-100  max-w-2xl shrink-0 shadow-2xl">
          <h2 className="text-3xl text-white text-center mt-4">Register</h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account? Please{" "}
              <Link className="underline" to="/login">
                Login
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
