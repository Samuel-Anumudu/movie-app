import { useState, useEffect } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <div className="login-logo">
        <h1>Logo</h1>
      </div>
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="form-control relative w-72 mt-5 mx-0 mb-10">
            <input
              className="input py-4 px-0 block w-full max-w-xs bg-transparent rounded-none border-t-0 border-x-0 border-b-2 border-green-500 focus:border-b-[#add8e6] focus:outline-none valid:border-b-[#add8e6] valid:outline-none cursor-pointer"
              type="text"
              name="email"
              id="email"
              // value={email}
              required
            />
            <label className="absolute top-[15px] left-0">Email</label>
          </div>
          <div className="form-control relative w-72 mt-5 mx-0 mb-10">
            <input
              className="input py-4 px-0 block w-full max-w-xs bg-transparent rounded-none border-t-0 border-x-0 border-b-2 border-green-500 focus:border-b-[#add8e6] focus:outline-none valid:border-b-[#add8e6] valid:outline-none cursor-pointer"
              type={showPassword ? "text" : "password"}
              // value={password}
              name="password"
              id="password"
              required
            />
            <label className="absolute top-[15px] left-0">Password</label>
          </div>

          <div className="password-checkbox">
            <input type="checkbox" onClick={toggleShowPassword} />
            <span>Show Password</span>
          </div>
          <button className="btn normal-case">Login to your account</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
