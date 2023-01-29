import React from 'react';

const Register = () => {
    return (
        <section
        id="register"
        className="grid place-items-center sm:h-[85vh] h-screen font-poppins"
      >
        <form
        //   onSubmit={handleRegisterForm}
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