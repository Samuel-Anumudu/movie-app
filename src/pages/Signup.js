import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import logo from "../assets/logo.svg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const { email, password, repeatPassword } = formData;

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password too short. Please try again");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // eslint-disable-next-line
      const user = userCredential.user;
      navigate("/");
    } catch (error) {
      toast.error("Invalid Email or Password. Please try again");
    }
  };

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const labels = document.querySelectorAll(".form-control label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <section className="container mx-auto px-6">
      <div className="login-logo pt-14 pb-16 lg:pt-16 lg:pb-20">
        <img src={logo} alt="logo" className="mx-auto" />
      </div>
      <div className="login-box bg-semiDarkBlue rounded-[10px] md:rounded-[20px]  px-6 py-8 md:px-8 md:w-[400px] mx-auto">
        <h1 className="text-white text-3xl font-light mb-8">Signup</h1>
        <form onSubmit={onSubmit}>
          <div className="form-control  w-full  relative  mt-5 mx-0">
            <input
              className="input pl-[13px] py-4 block w-full  bg-transparent rounded-none text-white border-t-0 border-x-0 border-b-1 border-greyishBlue focus:border-b-white focus:outline-none valid:border-b-white valid:outline-none lg:cursor-pointer"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
            <label className="absolute top-[10px] left-[13px] font-light text-xs text-white opacity-50">
              Email
            </label>
          </div>
          <div className="form-control  w-full  relative  mt-5 mx-0">
            <input
              className="input py-4 pl-[13px]  block w-full bg-transparent rounded-none text-white border-t-0 border-x-0 border-b-1 border-greyishBlue focus:border-b-white focus:outline-none valid:border-b-white valid:outline-none cursor-pointer"
              type={showPassword ? "text" : "password"}
              value={password}
              name="password"
              id="password"
              onChange={onChange}
              required
            />
            <label className="absolute top-[10px] left-[13px] font-light text-sm text-white opacity-50">
              Password
            </label>
          </div>
          <div className="form-control  w-full  relative  mt-5 mx-0">
            <input
              className="input py-4 pl-[13px]  block w-full bg-transparent rounded-none text-white border-t-0 border-x-0 border-b-1 border-greyishBlue focus:border-b-white focus:outline-none valid:border-b-white valid:outline-none cursor-pointer"
              type={showPassword ? "text" : "password"}
              value={repeatPassword}
              name="repeatPassword"
              id="repeatPassword"
              onChange={onChange}
              required
            />
            <label className="absolute top-[10px] left-[13px] font-light text-sm text-white opacity-50 repeat-password ">
              Repeat-Password
            </label>
          </div>

          <div className="password-checkbox flex items-center pt-6 pb-8 pl-[13px] gap-2">
            <input
              type="checkbox"
              className=""
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <span className="font-light text-base text-white opacity-50 inline-block self-center ">
              Show Password
            </span>
          </div>
          <button className="btn w-full normal-case font-light text-base bg-red border-0 md:hover:bg-white md:hover:text-semiDarkBlue">
            Create an account
          </button>
        </form>
        <div className="sign-up-link">
          <p className="text-white text-base font-light text-center pt-6">
            Already have an account?
            <Link to="/login" className="text-red pl-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
