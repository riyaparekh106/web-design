import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import Modal from "./Modal.jsx"

export const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = (open) => {
    setShowLoginModal(open);
  }

  // const [theme, setTheme] = useState(false);

  // const ThemeSwitcher = () => {
  //   const newTheme = theme === 'light' ? "🌻" : "🌑" ;
  //   setTheme(newTheme)
  // }

  return (
    <>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? Login <a onClick={() => toggleLoginModal(true)}>here</a>
          </span>
        </form>
      </div>
      {showLoginModal && <Modal setOpenModal={toggleLoginModal} />}
      {/* <div className='theme-toggle'>
      <h2>Light Theme</h2>
          <i onClick={ThemeSwitcher} class='gg-toggle-on'></i>
        </div> */}
    </>
  );
};

export default FormSignup;
