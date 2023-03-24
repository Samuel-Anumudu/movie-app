import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
          <div className="form-control">
            <input type="text" name="email" id="email" value={email} required/>
            <lable>Email</lable>
          </div>
          <div className="form-control">
            <input type={showPassword ? "text" : "password"} required/>
            <lable>Password</lable>
          </div>

          <div className="form-checkbox">
            <input type="checkbox" onClick={toggleShowPassword} />
            <span>Show Password</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
