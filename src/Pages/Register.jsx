import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegisterForm = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(!name) return toast.error("name filed is required");
        if(!email) return toast.error("email filed is required");
        if(!password) return toast.error("password filed is required");
        await axios.post("https://phtask2023server-production.up.railway.app/api/registration", {
            name,
            email,
            password
        }).then((res) => {
            if(res.data.success){
                dispatch({ type: "LOGIN", payload: res.data.user });
                Cookies.set("user", JSON.stringify(res.data.user));
                toast.success("Register Successfully");
                navigate("/");
            }
        }).catch((err) => {
            if(err.response.status===400){
                toast.error("This Email Already Exist");
            }
        })
    }

    return (
        <section
        id="register"
        className="grid place-items-center sm:h-[85vh] h-screen font-poppins"
      >
        <form
          onSubmit={handleRegisterForm}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 rounded"
        >
          <div className="card-body">
            <h3 className="text-lg font-poppins font-semibold">
              Register Into Account
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create An Account</button>
            </div>
            <label className="label-text-alt  ">
              Already have an Account{" "}
              <Link
                to="/login"
                className="label-text-alt link link-hover text-primary"
              >
                Login
              </Link>
            </label>
          </div>
        </form>
      </section>
    );
};

export default Register;