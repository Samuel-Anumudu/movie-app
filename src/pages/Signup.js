import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

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
    <section>
      <div className="login-logo">
        <h1>Logo</h1>
      </div>
      <div className="login-box">
        <h1>Signup</h1>
        <form onSubmit={onSubmit}>
          <div className="form-control relative w-72 mt-5 mx-0 mb-10">
            <input
              className="input py-4 px-0 block w-full max-w-xs bg-transparent rounded-none border-t-0 border-x-0 border-b-2 border-green-500 focus:border-b-[#add8e6] focus:outline-none valid:border-b-[#add8e6] valid:outline-none cursor-pointer"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
            <label className="absolute top-[15px] left-0">Email</label>
          </div>
          <div className="form-control relative w-72 mt-5 mx-0 mb-10">
            <input
              className="input py-4 px-0 block w-full max-w-xs bg-transparent rounded-none border-t-0 border-x-0 border-b-2 border-green-500 focus:border-b-[#add8e6] focus:outline-none valid:border-b-[#add8e6] valid:outline-none cursor-pointer"
              type={showPassword ? "text" : "password"}
              value={password}
              name="password"
              id="password"
              onChange={onChange}
              required
            />
            <label className="absolute top-[15px] left-0">Password</label>
          </div>
          <div className="form-control relative w-72 mt-5 mx-0 mb-10">
            <input
              className="input py-4 px-0 block w-full max-w-xs bg-transparent rounded-none border-t-0 border-x-0 border-b-2 border-green-500 focus:border-b-[#add8e6] focus:outline-none valid:border-b-[#add8e6] valid:outline-none cursor-pointer"
              type={showPassword ? "text" : "password"}
              value={repeatPassword}
              name="repeatPassword"
              id="repeatPassword"
              onChange={onChange}
              required
            />
            <label className="absolute top-[15px] left-0 repeat-password">
              Repeat Password
            </label>
          </div>
          <div className="password-checkbox">
            <input
              type="checkbox"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <span>Show Password</span>
          </div>
          <button className="btn normal-case">Create an account</button>
        </form>
        <div className="sign-up-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
