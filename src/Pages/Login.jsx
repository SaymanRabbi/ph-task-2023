import axios from "axios";
import Cookies from "js-cookie";
import React from 'react';
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginForm =async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(!email ) return toast.error("email filed is required");
        if(!password ) return toast.error("password filed is required");
        await axios.post("http://localhost:5000/api/login", {
            email,
            password
        }).then((res) => {
            if(res.data.success){
                dispatch({ type: "LOGIN", payload: res.data.user });
                Cookies.set("user", JSON.stringify(res.data.user));
                toast.success("Login Successfully");
                navigate("/");
            }
        }).catch((err) => {
            if(err.response.status === 401 || err.response.status === 403){
                toast.error(err.response.data.message);
            }
        }
        )
    }
    return (
        <section
      id="login"
      className="grid place-items-center sm:h-[85vh] h-screen font-poppins"
    >
      <form
        onSubmit={handleLoginForm}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 rounded-lg"
      >
        <div className="card-body">
          <h3 className="text-lg font-poppins font-semibold">
            Login Into Account
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            <label className="label">
              <span
                onClick={() => alert("Upcoming Features")}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login Account</button>
          </div>
          <label className="label-text-alt  ">
            New In Power Pack?{" "}
            <Link
              to="/register"
              className="label-text-alt link link-hover text-primary"
            >
              Create An Account
            </Link>
          </label>
        </div>
      </form>
    </section>
    );
};

export default Login;