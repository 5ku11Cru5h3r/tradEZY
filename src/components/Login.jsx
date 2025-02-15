import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithGoogle } from "../../firebase-auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/Login.css";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        {/* <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button> */}
        <div className="recaptcha">
          recaptcha
        </div>
        <button className="login__btn login__google" onClick={async () => {
          await registerWithGoogle()
        }}>
          Login with Google
        </button>
        <div className="recaptcha">
          *privacy policy
        </div>
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div> */}
      </div>
    </div>
  );
}

export default Login;