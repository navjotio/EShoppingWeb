import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../styles/signinportal.css";

function SignInPortal() {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("Sign Up/Member");
  const [t, i18n] = useTranslation("global");

  function SignInForm() {
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
    });
    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: [event.target.value] });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => console.log(alert("Account Created Susccessfully!")))
        .catch((err) => console.log(err));
      setValues();
    };

    return (
      <div>
        <form id="signinform" onSubmit={handleSubmit}>
          {action === "Member Login" ? (
            ""
          ) : (
            <>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                name="name"
                onChange={handleChange}
              ></input>
            </>
          )}
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            onChange={handleChange}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create your password"
            required
            name="password"
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <br />
          <div className="button-box">
            <button
              className={
                action === "Member Login" ? "formbtns gray" : "formbtns"
              }
              onClick={() => setAction("Account Creation")}
            >
              Sign Up
            </button>
            <button
              className={
                action === "Account Creation" ? "formbtns gray" : "formbtns"
              }
              onClick={() => setAction("Member Login")}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="signin">
      <button
        id="signinbtn"
        onClick={() => setOpen(!open)}
        style={{ backgroundColor: open ? "#343a40 " : "", height: "65px" }}
      >
        {action}
      </button>
      {open ? <SignInForm /> : ""}
    </div>
  );
}
export default SignInPortal;
