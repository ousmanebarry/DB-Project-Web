import "./signin.css";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("patient");
  const [message, setMessage] = useState("");
  const user = useContext(UserContext);

  return (
    <div className="signin">
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div id="signInBorder" className="col-lg-4 pt-5">
            <div className="justify-item-center text-center formTitle">
              Sign In
            </div>
            <form>
              <div className="form-group mt-3 ">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <select
                id="selectionFormSignIN"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="patient">Admin</option>
                <option value="receptionist">Customer</option>
              </select>

              <div className="text-center" >
                <div className="btn btn-dark mb-5" >Submit</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
