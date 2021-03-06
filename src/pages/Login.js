/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../common/PageBanner";

const Login = () => {
  return (
    <div>
      <PageBanner title="My account" />
      <div className="login">
        <div className="container">
          <form>
            <div className="w-3/5">
              <h3 className="login__title">Login</h3>
              <label htmlFor="username">
                Username or email address&nbsp;
                <span className="login__title__required">*</span>
              </label>
              <input
                type="text"
                className=""
                name="username"
                id="username"
                autoComplete="off"
                value=""
              />
              <label htmlFor="password">
                Password&nbsp;<span className="login__title__required">*</span>
              </label>
              <span className="password-input">
                <input
                  className=""
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                />
              </span>
              <button
                type="submit"
                className="mt-4 font-bold default-btn bg-java-500"
              >
                Log in
              </button>
              <p className="my-5">
                Don't have an account?
                <Link to="/registry" className="border-b text-java-500 border-b-java-500" href="/registry">
                  Create a new account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
