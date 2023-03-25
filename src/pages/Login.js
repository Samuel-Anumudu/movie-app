import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
        toast.success("Login successful!");
      }
    } catch (error) {
      toast.error("Can't sign in. Check your email or password");
    }
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
        <h1>Login</h1>
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

          <div className="password-checkbox">
            <input
              type="checkbox"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
            <span>Show Password</span>
          </div>
          <button className="btn normal-case">Login to your account</button>
        </form>
        <div className="sign-up-link">
          <p>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
